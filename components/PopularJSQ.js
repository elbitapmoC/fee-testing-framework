const PopularJSQ = ({ title }) => {
  // High Order Function Example
  const greet = (message) => {
    return (name) => {
      console.log(message, name);
    };
  };

  // Example using arguments Object.
  function drink() {
    let sum = "";
    for (let i = 0; i < arguments.length; i++) {
      sum += `${arguments[i]} `;
    }
    console.log(sum);
  }

  const inStock = (a, b) => {
    if (b || b === 0) {
      console.log(a * b);
    } else
      return (name) => {
        console.log(a * name);
      };
  };

  greet("Hello")("Mark");
  // Note: arrow functions do not have access to the arguments object
  drink("Cold", "Pressed");
  inStock(11, 2);
  inStock(5)(9);
  inStock(5);

  return (
    <>
      <h1 className="title text-4xl">{title}</h1>
      <aside className="mt-6 max-w-md">
        <p className="mb-4">
          Implement a product method which will return the product of two
          numbers when invoked using any of the following two ways.
        </p>
        <ul className="mb-4">
          <li>a) product(4, 5)</li>
          <li>b) product(4)(5)</li>
        </ul>
        <p className="mb-4">
          This is a very famous Javascript interview question because it tests
          your knowledge of functional Javascript, closures, and function
          arguments. To solve this, let’s understand some basic concepts.
        </p>
        <pre>
          Array <span>map</span>, <span>filter</span>, <span>reduce</span>{" "}
          methods all accept a function as an argument and are higher order
          functions. When a function returns another function it’s also called
          as higher order function.
        </pre>
      </aside>
    </>
  );
};

export default PopularJSQ;
