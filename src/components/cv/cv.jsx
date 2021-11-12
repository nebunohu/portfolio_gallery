import React from "react";

export default function Cv() {
  return (
    <section className="cv">
      <div className="cv__introduce-wrapper">
        <div className="cv__introduce-left">
          see me here
        </div>
        <div className="cv__introduce-right">
          <div className="cv__artist-name">
            Julia Gryoza
          </div>
          <div className="cv__artist-location">
            (based in Saint-Petersburg, Russia 
            originally from Kurgan)
          </div>
        </div>
      </div>
      <div className="cv__central-text">
          
        <svg    
        className = "cv__ellipse"                     
        xmlns="http://www.w3.org/2000/svg"
        width="802.25px" height="367.25px">
          <path fillRule="evenodd"  stroke="rgb(255, 198, 0)" strokeWidth="1.5px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
        d="M693.995,2.396 C843.975,14.797 834.256,105.798 672.288,205.652 C510.319,305.506 257.435,376.400 107.455,363.999 C-42.525,351.598 -32.807,260.597 129.162,160.743 C291.130,60.889 544.015,-10.005 693.995,2.396 Z"/>
        </svg>
          
        <span>Interdisciplinary artist</span>
      </div>
      <div className="cv__art-description">
          human emotions, music, visual aesthetics the search for 
          new artistic approaches are the main basis of all works
      </div>
    </section>
  );
}