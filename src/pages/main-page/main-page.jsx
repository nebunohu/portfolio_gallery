import React from "react";

// Components
import Decoration from "../../components/decoration/decoration.jsx";
import Navigation from "../../components/navigation/navigation.jsx";
import RouterSlider from "../../components/router-slider/router-slider.jsx";

// Styles
import mainPageStyles from './main-page.modeule.scss';

export default function MainPage() {
  return (
    <RouterSlider>
      <Decoration />
      <Navigation />
    </RouterSlider>
  );
}