import { useState, useMemo, useEffect } from "react";
import { leagueChampions } from "../data/champions";
import debounce from "lodash.debounce";
const Debouncing = ({ title, description }) => {
  const [query, setQuery] = useState("");
  // const names = leagueChampions.map(({ name }) => name);

  // for..of
  // &
  // for
  // are more performant than using array methods like filter, sort, map, etc.
  // Source: https://leanylabs.com/blog/js-forEach-map-reduce-vs-for-for_of/
  const names = [];
  for (const { name } of leagueChampions) {
    names.push(name);
  }

  let filteredNames = names;
  if (query !== "") {
    filteredNames = names.filter((name) => {
      return name.toLowerCase().includes(query.toLowerCase());
    });
  }

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 1000),
    []
  );

  // Stops invocation of debounced function after unmounting.
  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, []);

  return (
    <>
      <h1 className="title text-4xl">{title}</h1>
      <p className="mt-2">{description}</p>
      <div className="mb-6 mt-4 max-w-lg">
        <input
          type="text"
          id="large-input"
          className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type a query..."
          // onChange={changeHandler}
          onChange={debouncedChangeHandler}
        />
      </div>
      <p className="block mt-6 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Default:
      </p>

      <div className="mt-2 mb-36 grid grid-flow-row-dense grid-cols-3 gap-1">
        {filteredNames?.map((name, id) => (
          <aside
            key={id}
            className="bg-gray-900 hover:bg-gray-700 rounded-md p-2 text-sm font-light"
          >
            {name}
          </aside>
        ))}
      </div>
    </>
  );
};

export default Debouncing;
