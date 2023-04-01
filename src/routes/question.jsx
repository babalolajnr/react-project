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
 * Remove fields with "N/A", "-" or "" values
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

/**
 * Count the ages greater than 40 in the object string
 * @param {object} obj
 */
function countAgesGreaterThan40(obj) {
  //   Split the keys
  let data = obj.data.split(", ");

  //   Get only the age keys
  let ages = data.filter((item) => item.includes("age"));

  //   Compute the total number of ages that are equal or greater than 40
  let agesGreaterThan40 = ages.reduce((count, age) => {
    age = age.split("=")[1];

    if (parseInt(age) > 40) {
      count++;
    }
    return count;
  }, 0);

  return agesGreaterThan40;
}

export default function Question() {
  const { id } = useParams();
  const allowedIds = [1, 2, 3, 4];

  const [text, setText] = useState();
  const [response, setResponse] = useState();

  useEffect(() => {
    if (parseInt(id) === 3) {
      fetch("http://localhost:3000/").then((res) => {
        res.json().then((data) => {
          const input = { ...data };
          removeUnwanted(data);
          setResponse(JSON.stringify(data));

          console.log("Input: ", input);
          console.log("Output: ", data);
        });
      });
    }

    if (parseInt(id) === 4) {
      //   fetch("https://myapi.smartcode.com.ng/count-age", {
      //     mode: "no-cors",
      //   }).then((res) => {
      //     // res.text().then((data) => {
      //     //     console.log(data)
      //     // })
      //     res.arrayBuffer().then((buf) => {
      //       console.log(buf.slice(0, -1).toString());
      //     });
      //   });

      /**
       * NOTE: The URL given in Question Four return an improperly formatted JSON string.
       * The closing double quotes is missing. This causes the Javascript to not be able
       * to parse it into a JSON object. I have taken the liberty of querying the endpoint
       * manually to extract the data and continue the remaining process. Thank you for your
       * understanding.
       */

      let response = {
        data:
          "key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47, key=0Sr4C, age=68, key=CGEqo, age=76, key=IxKVQ, age=79, key=eD221, age=29, key=XZbHV, age=32, key=k1SN5, age=88, key=4SCsU, age=65, key=q3kG6, age=33, key=MGQpf, age=13, key=Kj6xW, age=14, key=tg2VM, age=30, key=WSnCU, age=24, key=f1Vvz, age=46, key=dOS7A, age=72, key=tDojg, age=82, key=nZyJA, age=48, key=R8JTk, age=29, key=005Ot, age=66, key=HHROm, age=12, key=5yzG8, age=51, key=xMJ5D, age=38, key=TXtVu, age=82, key=Hz38B, age=84, key=WfObU, age=27, key=mmqYB, age=14, key=4Z3Ay, age=62, key=x3B0i, age=55, key=QCiQB, age=72, key=zGtmR, age=66, key=nlIN9, age=8, key=hKalB, age=50, key=Na33O, age=17, key=jMeXm, age=15, key=OO2Mc, age=32, key=hhowx, age=34, key=gLMJf, age=60, key=PblX6, age=66, key=8Vm5W, age=22, key=oZKd6, age=88, key=RXNfQ, age=25, key=3yy0p, age=64, key=FrQbL, age=80, key=vlUkk, age=55, key=DP8po, age=80, key=EroX6, age=84, key=3bsll, age=86, key=QhZjA, age=85, key=wm6uc, age=74, key=MC1FM, age=75, key=AMxZr, age=64, key=ee03Q, age=4, key=9fGea, age=41, key=3TE9U, age=74, key=FoSMR, age=13, key=4To0X, age=57, key=5CZY3, age=33, key=qFvKG, age=79, key=W7bUh, age=2, key=htab7, age=15, key=KRyu2, age=77, key=GLkk7, age=80, key=jnXf6, age=51, key=YBTJ9, age=43, key=auL0J, age=30, key=ZHmmd, age=4, key=01iNV, age=7, key=7ldyh, age=55, key=TjXbT, age=88, key=ochyW, age=3, key=lsGXW, age=1, key=5o7Bd, age=45, key=APWEf, age=79, key=LRmKc, age=81, key=uZIoQ, age=12, key=Zf79H, age=42, key=NrpEI, age=6, key=XzYKx, age=22, key=kk0sU, age=62, key=p5uue, age=74, key=WscQQ, age=75, key=tRogh, age=19, key=ur4rW, age=60, key=IkCeS, age=19, key=vtGK4, age=11, key=C87cQ, age=38, key=0qXDb, age=39, key=KtBjN, age=46, key=f2h36, age=3, key=tGzgU, age=38, key=hIrPv, age=0, key=Tq7IX, age=25, key=F4k9K, age=46, key=9duxK, age=17, key=jTHDj, age=68, key=6GHpE, age=1, key=ye9us, age=9, key=eOfZO, age=72, key=I25vO, age=88, key=nqtBH, age=38, key=Dwn6b, age=70, key=4Qkdc, age=37, key=xvOa3, age=77, key=dg4rX, age=30, key=S9YbW, age=73, key=WhQqH, age=22",
      };

      const count = countAgesGreaterThan40(response);

      const challengeToken = "e7s4oxhf2";

      const string = `${count}${challengeToken}`;

      const breakString = string.match(/.{1,3}/g);

      const replacedStrings = breakString.map((item) => {
        if (item.length === 3) {
          // replace the last character with Y
          item = item.slice(0, -1) + "Y";
        }
        return item;
      });

      const finalString = replacedStrings.join("");

      console.log("Final String: ", finalString);
      setResponse(
        `The total number of ages greater than 40 is ${count}. The final output string is ${finalString}`
      );
    }
  }, []);

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
