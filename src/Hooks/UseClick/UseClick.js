import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
//모든 컴포넌트는 ref를 가지고 있다. 참조와 같은 기능.
const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
        console.log("bye");
      }
    };
  }, []);

  return element;
};
export default function UseClick() {
  const sayHello = () => {
    console.log("hello");
  };
  const title = useClick(sayHello);
  return (
    <div>
      <div>Hi</div>
      <h1 ref={title}>hi</h1>
    </div>
  );
}
