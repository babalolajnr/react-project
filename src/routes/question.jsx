import { useParams } from "react-router-dom";
import ErrorPage from "../error-page";
import { useEffect, useState } from "react";

/**
 * Count the number of vowels in a given string.
 * @param {string} str
 */
function VowelCount(str) {
  const regex = /[aeiou]/gi;
  const matches = str.match(regex) || [];
  return `The string contains ${matches.length} vowels`;
}

/**
 * Get the longest word in a sentence
 * @param {string} sen
 */
function LongestWord(sen) {
  const words = sen.split(/\W+/); // Split by non-word characters

  const longestWord = words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");

  return `The longest word is "${longestWord}"`;
}

function Input({ text, handleChange, labels, id }) {
  return (
    <div class="flex flex-col-reverse">
      <input
        type="text"
        class="py-3 border-2 border-black border-opacity-20 outline-none px-3 rounded-lg  
      focus:border-black transition-all ease-in duration-150 w-full"
        name="vowel-count"
        value={text}
        onChange={handleChange}
        required
      />
      <label
        for="vowel-count"
        class="text-black text-opacity-50 peer-focus:text-black transition-all ease-in duration-150"
      >
        {labels[parseInt(id) - 1]}
      </label>
    </div>
  );
}

/**
 * Recursively remove the unwanted terms from the object
 * @param {*} obj
 */
function removeUnwanted(obj) {
  for (let key in obj) {
    if (obj[key] === "N/A" || obj[key] === "-" || obj[key] === "") {
      delete obj[key];
    }
    if (Array.isArray(obj[key])) {
      obj[key] = obj[key].filter((val) => val !== "N/A" && val !== "-");
    }
    if (typeof obj[key] === "object" && obj[key] !== null) {
      removeUnwanted(obj[key]);
    }
  }
}

async function cleanJSONResponse() {
  const response = await fetch("http://localhost:3000");

  if (!response.ok) {
    alert("HTTP-Error: " + response.status);
  }

  const data = await response.json();

  removeUnwanted(data);

  console.log(data);
}

export default function Question() {
  const { id } = useParams();
  const allowedIds = [1, 2, 3, 4];

  const [text, setText] = useState();
  const [response, setResponse] = useState();


  if (!allowedIds.includes(parseInt(id))) {
    return <ErrorPage />;
  }

  const labels = [
    "Enter any text to count the number of vowels in it",
    "Enter any text to get the longest word",
  ];

  const questionsThatRequireInput = [1, 2];

  /**
   * Handle input change
   * @param {Event} e
   */
  const handleChange = (e) => {
    const question = parseInt(id);

    question === 1
      ? setResponse(VowelCount(e.target.value))
      : setResponse(LongestWord(e.target.value));
  };

  //   if (parseInt(id) === 3) {
  //     setResponse(cleanJSONResponse());
  //   }

  return (
    <div className="lg:flex lg:min-w-screen bg-stone-200 lg:min-h-screen">
      <div className="lg:flex lg:items-center lg:justify-center basis-1/2 shadow-xl">
        <h1 className="text-6xl font-bold">Question {id}</h1>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center lg:basis-1/2">
        <form class="w-1/2 flex flex-col">
          <div class="flex flex-col gap-10">
            {questionsThatRequireInput.includes(parseInt(id)) ? (
              <Input
                handleChange={handleChange}
                id={id}
                labels={labels}
                text={text}
              />
            ) : null}
            <div className="flex justify-center flex-col">
              <h3 class="text-xl font-semibold text-center">Response</h3>
              <span className="text-center">{response}</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
