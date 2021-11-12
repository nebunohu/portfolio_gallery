import React from "react";

// Images

import tarotImg from '../../images/tarot.png';
import psychosomasysImg from '../../images/psychosomasys.png';
import devkaImg from '../../images/devka-bez-ruki.png';
import mudrostImg from '../../images/mudrost.png';

export default function ArtSection() {
  return (
    <>
      <img className="bg-eye" src="../images/eye2.png" alt="" />
      <section className="projects">
          <div className="projects__item" >
              <a href="./projects/tarot-project.html">
                  <div className="projects__name">neural tarot</div>
                  <div className="projects__year">2021</div>
                  <img className="projects__image" src={tarotImg} alt="" />
              </a>
          </div>
          <div className="projects__item" href="">
              <a href="">
                  <div className="projects__name">psychosomasys</div>
                  <div className="projects__year">2021</div>
                  <img className="projects__image" src={psychosomasysImg} alt="" />
              </a>
          </div>
          <div className="projects__item" href="">
              <a href="">
                  <div className="projects__name">devka bez ruki</div>
                  <div className="projects__year">2018</div>
                  <img className="projects__image" src={devkaImg} alt="" />
              
              </a>
          </div>
          <div className="projects__item" href="">
              <a href="">
                  <div className="projects__name">mudrost'</div>
                  <div className="projects__year">2016</div>
                  <img className="projects__image" src={mudrostImg} alt="" />
              
              </a>
          </div>
    </section>
    </>
  );
}