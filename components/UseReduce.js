import { useReducer } from "react";

const UseReduce = ({ title, description }) => {
  return (
    <section className="max-w-lg">
      <h1 className="title text-4xl">{title}</h1>
      <p className="mt-2 mb-6">{description}</p>

      <pre className="mt-6 mb-6 max-w-lg">
        {`
`}
      </pre>
      <p className="mb-36"></p>
    </section>
  );
};

export default UseReduce;
