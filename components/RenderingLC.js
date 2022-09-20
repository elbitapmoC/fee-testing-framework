import { useEffect, useLayoutEffect } from "react";
useEffect;
const RenderingLC = ({ title }) => {
  useEffect(() => {
    console.log("useEffect 1");
  });

  // useLayoutEffect(() => {
  //   console.log("useLayoutEffect 1");
  // });

  // useLayoutEffect(() => {
  //   console.log("useLayoutEffect 2");
  // });

  useEffect(() => {
    console.log("useEffect 2");
  });

  console.log("rendering");

  // OUTPUT:
  // --
  // rendering
  // useLayoutEffect 1 RenderingLC.js:9:12
  // useLayoutEffect 2 RenderingLC.js:13:12
  // useEffect 1 RenderingLC.js:5:12
  // useEffect 2

  return (
    <>
      <h1 className="title text-4xl">{title}</h1>
      <span className="mb-36"></span>
    </>
  );
};

export default RenderingLC;
