import React from "react";
import { Link } from "react-router-dom";

export default function AppHeader() {
  return(
    <header>
      <nav>
        <Link to='/'><span className="text-link">projects</span></Link>
        <a className="text-link" href="#">about</a>
        <a className="text-link" href="#">contacts</a>
        <a className="text-link" href="#">eng / rus</a>
      </nav>
    </header>
  );
}