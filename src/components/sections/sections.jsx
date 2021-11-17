import React from "react";
import { 
  Link,
} from 'react-router-dom';

export default function Sections() {
  return (
    <section className="sections" id="projects">
      <div className="sections__element sections__element_art"><Link to={`/art`}>Art</Link></div>
      <div className="sections__element sections__element_photo"><Link to={`/photo`}>Photo</Link></div>
      <div className="sections__element sections__element_illustration"><Link to={`/illustration`}>Illustration</Link></div>
      <div className="sections__element sections__element_design"><Link to={`/design`}>Design</Link></div>
    </section>
  );
}