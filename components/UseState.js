import { useState } from "react";

useState;
const Debouncing = ({ title, description }) => {
  const [count, setCount] = useState(0);
  return (
    <section className="max-w-lg">
      <h1 className="title text-4xl">{title}</h1>
      <p className="mt-2 mb-6">{description}</p>
      <span>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            if (count > 0) {
              setCount(--count);
            }
          }}
        >
          -
        </button>
        <span className="mr-12 ml-12">{count}</span>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setCount(++count)}
        >
          +
        </button>
      </span>

      <pre className="mt-6 mb-6 max-w-lg">
        {`const [count, setCount] = useState(0);

const handleChange = () => {
  setCount(count++);
}

<button
type="button"
onClick={handleChange}
/>
`}
      </pre>
      <p>We're given two values, state &amp; a function to change the state.</p>
      <p className="mb-36">
        Out state is immutable and should ONLY ever be updated voa the function.
      </p>
    </section>
  );
};

export default Debouncing;
