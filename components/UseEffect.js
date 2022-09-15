import { useState, useEffect } from "react";

const UseEffect = ({ title, description }) => {
  const [value, setValue] = useState("");

  useEffect(() => {}, [value]);

  return (
    <section className="max-w-lg mb-36">
      <h1 className="title text-4xl">{title}</h1>
      <p className="mt-2 mb-6">{description}</p>
      <pre className="mt-6 mb-6 max-w-lg">
        {`import React, {useState, useEffect} from 'react';

export const App = () => {
  const [value, setValue] = useState('');
  useEffect(() => {
    console.log('value changed: ', value);
  }, [value])
	return 
  <div>
    <input type="text" name="username" value={value} onChange={(e) => setValue(e.target.value)} />
  </div>
}
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
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      Search Query: <span className="mr-12">{value}</span>
    </section>
  );
};

export default UseEffect;
