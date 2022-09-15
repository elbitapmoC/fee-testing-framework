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
      sum += arguments[i];
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

  greet("Shalom")("Jacob"); // Shalom Jacob
  drink("Cold", "Pressed"); //Cold Pressed
  inStock(11, 2); //22
  inStock(5)(9); //45

  return (
    <>
      <h1 className="title text-4xl">{title}</h1>
      <aside className="mt-6 max-w-lg">
        <p className="mb-4">
          Implement a product method which will return the product of two
          numbers when invoked using any of the following two ways.
        </p>
        <pre className="mb-4">{`a) product(4, 5)
b) product(4)(5)`}</pre>
        <p className="mb-4">
          To solve the above, our function returns another function it's, AKA a
          higher order function.
        </p>
        <pre>{`// High Order Function Example
const greet = (message) => {
  return (name) => {
    console.log(message, name);
  };
};

// Example using arguments Object.
function drink() {
  let sum = "";
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
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

greet("Shalom")("Jacob"); // Shalom Jacob
drink("Cold", "Pressed"); //Cold Pressed
inStock(11, 2); //22
inStock(5)(9); //45`}</pre>
      </aside>
      <span className="mb-36"></span>
    </>
  );
};

export default PopularJSQ;
