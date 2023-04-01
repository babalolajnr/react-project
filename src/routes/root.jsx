import { Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="lg:flex lg:min-w-screen bg-stone-200 lg:min-h-screen">
      <div className="lg:flex lg:items-center lg:justify-center basis-1/2 shadow-xl">
        <h1 className="text-6xl font-bold">Welcome</h1>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center  lg:basis-1/2">
        <nav>
          <ul className="lg:flex gap-5">
            <li>
              <Link to={`question/1`}>
                <button
                  className="py-3 bg-sky-300 px-4 rounded-lg shadow-md hover:border hover:border-sky-300 
            hover:bg-transparent border border-transparent transition-all duration-200 ease-in-out font-bold"
                >
                  Question 1
                </button>
              </Link>
            </li>
            <li>
              <Link to={`question/2`}>
                <button
                  className="py-3 bg-sky-300 px-4 rounded-lg shadow-md hover:border hover:border-sky-300 
            hover:bg-transparent border border-transparent transition-all duration-200 ease-in-out font-bold"
                >
                  Question 2
                </button>
              </Link>
            </li>
            <li>
              <Link to={`question/3`}>
                <button
                  className="py-3 bg-sky-300 px-4 rounded-lg shadow-md hover:border hover:border-sky-300 
            hover:bg-transparent border border-transparent transition-all duration-200 ease-in-out font-bold"
                >
                  Question 3
                </button>
              </Link>
            </li>
            <li>
              <Link to={`question/4`}>
                <button
                  className="py-3 bg-sky-300 px-4 rounded-lg shadow-md hover:border hover:border-sky-300 
            hover:bg-transparent border border-transparent transition-all duration-200 ease-in-out font-bold"
                >
                  Question 4
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
