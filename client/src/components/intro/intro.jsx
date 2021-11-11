import React from "react";

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro__artist">
        <div className="intro__row intro__row_first">Here</div>
        <div className="intro__row intro__row_second">is the</div>
        <div className="intro__row intro__row_third intro__row_transparent">creative</div>
        <div id="responsive_headline" className="intro__row intro__row_fourth intro__row_transparent responsive_headline">Pr[in]cess</div>
      </div>
      <div className="intro__eye"><img src="./images/eye.png" alt="" /></div>
    </section>
  );
}