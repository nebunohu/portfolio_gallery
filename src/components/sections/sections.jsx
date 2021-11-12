import React from "react";

export default function Sections() {
  return (
    <section className="sections">
      <div className="sections__element sections__element_art"><a href="./art/art-section.html">Art</a></div>
      <div className="sections__element sections__element_photo"><a href="./photo/photo-section.html">Photo</a></div>
      <div className="sections__element sections__element_illustration"><a href="./illustration/illustration-section.html">Illustration</a></div>
      <div className="sections__element sections__element_design"><a href="./design/design-section.html">Design</a></div>
    </section>
  );
}