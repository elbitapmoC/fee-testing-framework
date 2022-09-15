import { useReducer } from "react";

const UseReduce = ({ title, description }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "type":
        return { query: action.query, count: state.count + 1 };
      default:
        return state;
    }
  };

  const [{ count, query }, dispatch] = useReducer(reducer, {
    count: 0,
    query: "",
  });

  return (
    <section className="max-w-lg mb-36">
      <h1 className="title text-4xl">{title}</h1>
      <p className="mt-2 mb-6">{description}</p>

      <pre className="mt-6 mb-6 max-w-lg">
        {`const reducer = (state, action) => {
switch (action.type) {
  case "increment":
    return { ...state, count: state.count + 1 };
  case "decrement":
    return { ...state, count: state.count - 1 };
  default:
    return state;
  }
};

const [{ count, query }, dispatch] = useReducer(reducer, {
  count: 0,
  query: "",
});
`}
      </pre>
      <p className="mb-6">
        Our counter depends on both the input element &amp; the counter buttons
      </p>
      <input
        type="text"
        id="large-input"
        className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  mb-6"
        placeholder="Type a query..."
        onChange={(e) => {
          const querySearch = e.target.value;
          dispatch({ type: "type", query });
        }}
      />

      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
      <span className="mr-12 ml-12 ">{count}</span>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
    </section>
  );
};

export default UseReduce;
