import React from "react";

// Components
import Intro from "../intro/intro.jsx";
import Sections from "../sections/sections.jsx";
import Cv from "../cv/cv.jsx";
import Info from "../info/info.jsx";
import Up from "../up/up.jsx";

export default function MainPage() {
  return (
    <>
      <Intro />
      <Sections />
      <Cv />
      <Info />
      <Up />
    </>
  );
}