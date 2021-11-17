import React from "react";
import { Link } from "react-router-dom";

export default function AppHeader() {
  return(
    <header>
      <nav>
        {/*<Link to='/#projects'><span className="text-link">projects</span></Link>*/}
        <a className="text-link" href="#projects">projects</a>
        <a className="text-link" href="#about">about</a>
        <a className="text-link" href="#contacts">contacts</a>
        <a className="text-link" href="#">eng / rus</a>
      </nav>
    </header>
  );
}