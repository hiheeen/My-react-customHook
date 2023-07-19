import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
export default function UseTitle() {
  const titleUpdater = useTitle("loading...");
  setTimeout(() => titleUpdater("hello"), 5000);
  return <div>Hi</div>;
}
