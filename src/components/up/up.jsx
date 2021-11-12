import React from "react";

export default function Up(props) {
  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -30);
      setTimeout(backToTop, 0);
    }
  }

  return (
    <div className="up" onClick={backToTop}>
      <div className="up__arrow">
          <div className="up__arrow-left-wing"></div>
          <div className="up__arrow-right-wing"></div>
      </div>
        
      <div>up</div>
        
    </div>
  );
}