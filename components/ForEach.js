let arr = [
  { id: 1, sweet: 1, name: "Granny Smith" },
  { id: 2, sweet: 6, name: "Golden Opal" },
  { id: 3, sweet: 8, name: "Sugar Apple" },
];

const fruits = [];

arr.forEach(({ name }) => {
  fruits.push(name);
});
console.log(fruits);

const ForEach = ({ title, description }) => {
  return (
    <>
      <h1 className="title text-4xl">{title}</h1>
      <p className="mt-2">{description}</p>
      <pre className="mt-6 mb-6 max-w-lg">
        {`let arr = [
  { id: 1, sweet: 1, name: "Granny Smith" },
  { id: 2, sweet: 6, name: "Golden Opal" },
  { id: 3, sweet: 8, name: "Sugar Apple" },
];

const fruits = [];

arr.forEach(({ name }) => {
  fruits.push(name);
});
`}
      </pre>
      <p>
        Output:
        {fruits.map((fruit, idx) => {
          return (
            <span key={idx} className="ml-8">
              {fruit}
            </span>
          );
        })}
      </p>
      <span className="mb-36" />
    </>
  );
};

export default ForEach;
