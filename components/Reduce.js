let fruits = [
  { id: 1, sweet: 1, name: "Granny Smith" },
  { id: 2, sweet: 6, name: "Golden Opal" },
  { id: 3, sweet: 8, name: "Sugar Apple" },
];

let sweetness = fruits.reduce((acc, { sweet }) => acc + sweet, 0);

const Reduce = ({ title, description }) => {
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

let sweetness = fruits.reduce((acc, { sweet }) => acc + sweet, 0);
`}
      </pre>
      <p>Total sweetness 🍯: {sweetness}</p>
      <span className="mb-36" />
    </>
  );
};

export default Reduce;
