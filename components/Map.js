import React from "react";

let arr = [
  { id: 1, age: 12, name: "Manu" },
  { id: 2, age: 24, name: "Quincy" },
  { id: 3, age: 22, name: "Abbey" },
];

const Map = ({ title, description }) => {
  return (
    <>
      <h1 className="title text-4xl">{title}</h1>
      <p className="mt-2">{description}</p>
      <pre className="mt-6 mb-6 max-w-lg">
        {`let arr = [
{ id: 1, age: 12, name: 'Manu' },
{ id: 2, age: 24, name: 'Quincy' },
{ id: 3, age: 22, name: 'Abbey' },
]

let names = arr.map((el) => el.name)
`}
      </pre>
      <p>
        Output:
        {arr.map(({ id, name }) => {
          return (
            <span className="ml-8" key={id}>
              {name}
            </span>
          );
        })}
      </p>
      <span className="mb-36" />
    </>
  );
};

export default Map;
