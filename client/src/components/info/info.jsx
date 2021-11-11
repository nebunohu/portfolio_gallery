import React from "react";
import phoneImage from '../../images/phone.png';

export default function Info() {
  return (
    <section className="info">
        <div className="info__header">
            
            let’s  collaborate
        </div>
        <div className="info__contacts-wrapper">
            <div className="info__contact info__contact1">
                gryozart@gmail.com
                <svg 
                    className = "info__contact-highlight"
                    xmlns="http://www.w3.org/2000/svg"
                    width="234.25px" height="65.25px">
                    <path fillRule="evenodd"  stroke="rgb(255, 255, 255)" strokeWidth="1.5px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                    d="M116.797,0.875 C180.491,0.875 232.125,14.943 232.125,32.297 C232.125,49.651 180.491,63.719 116.797,63.719 C53.103,63.719 1.469,49.651 1.469,32.297 C1.469,14.943 53.103,0.875 116.797,0.875 Z"/>
                </svg>
            </div>
            <div className="info__contact info__contact2">
                behance
                <svg 
                    className = "info__contact-highlight"
                    xmlns="http://www.w3.org/2000/svg"
                    width="234.25px" height="65.25px">
                    <path fillRule="evenodd"  stroke="rgb(255, 255, 255)" strokeWidth="1.5px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                    d="M116.797,0.875 C180.491,0.875 232.125,14.943 232.125,32.297 C232.125,49.651 180.491,63.719 116.797,63.719 C53.103,63.719 1.469,49.651 1.469,32.297 C1.469,14.943 53.103,0.875 116.797,0.875 Z"/>
                </svg>
            </div>
            <div className="info__contact info__contact3">
                
            </div>
            <div className="info__contact info__contact4">
                instagram
                <svg 
                    className = "info__contact-highlight"
                    xmlns="http://www.w3.org/2000/svg"
                    width="234.25px" height="65.25px">
                    <path fillRule="evenodd"  stroke="rgb(255, 255, 255)" strokeWidth="1.5px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                    d="M116.797,0.875 C180.491,0.875 232.125,14.943 232.125,32.297 C232.125,49.651 180.491,63.719 116.797,63.719 C53.103,63.719 1.469,49.651 1.469,32.297 C1.469,14.943 53.103,0.875 116.797,0.875 Z"/>
                </svg>
            </div>
            <div className="info__contact info__contact5">
                telegram
                <svg 
                    className = "info__contact-highlight"
                    xmlns="http://www.w3.org/2000/svg"
                    width="250px" height="65.25px">
                    <path fillRule="evenodd"  stroke="rgb(255, 255, 255)" strokeWidth="1.5px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                    d="M116.797,0.875 C180.491,0.875 232.125,14.943 232.125,32.297 C232.125,49.651 180.491,63.719 116.797,63.719 C53.103,63.719 1.469,49.651 1.469,32.297 C1.469,14.943 53.103,0.875 116.797,0.875 Z"/>
                </svg>
            </div>
        </div>
        <div className="info__phone"><img src={phoneImage} alt="" /></div>
    </section>
  );
}