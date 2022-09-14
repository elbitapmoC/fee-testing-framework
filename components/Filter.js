let fruits = [
  { id: 1, sweet: 1, name: "Granny Smith" },
  { id: 2, sweet: 6, name: "Golden Opal" },
  { id: 3, sweet: 8, name: "Sugar Apple" },
];

let treats = fruits.filter((fruit) => fruit.sweet > 6);

const Filter = ({ title, description }) => {
  return (
    <>
      <h1 className="title text-4xl">{title}</h1>
      <p className="mt-2">{description}</p>
      <pre className="mt-6 mb-6 max-w-lg">
        {`let fruits = [
  { id: 1, sweet: 1, name: "Granny Smith" },
  { id: 2, sweet: 6, name: "Golden Opal" },
  { id: 3, sweet: 8, name: "Sugar Apple" },
];

let treats = (fruits.filter((fruit) => fruit.sweet > 6));
`}
      </pre>
      <p>
        Output:
        {treats.map(({ name }, idx) => {
          return (
            <span key={idx} className="ml-8">
              {name}
            </span>
          );
        })}
      </p>
      <span className="mb-36" />
    </>
  );
};

export default Filter;
