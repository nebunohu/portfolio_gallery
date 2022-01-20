import React from "react";
import {
  Link,
  Outlet
} from 'react-router-dom';

// Components

// Styles
import dashboardStyles from "./admin-dashboard-wrapper.module.scss"

// Utils

export default function AdminDashboardWrapper(props) {

  return (
    <>
      {/*<header>
        <h1 style={{alignSelf: 'start'}}>Панель администрирования</h1>
      </header>*/}
      <div className={`${dashboardStyles.dashboardWrapper}`} >
        <aside>
          <ul>
          <li>
              <Link className={`${dashboardStyles.link}`} to={`media_projects`}>Media projects</Link>
            </li>
            <li>
              <Link className={`${dashboardStyles.link}`} to={`photo`}>Photo</Link>
            </li>
            <li>
              <Link className={`${dashboardStyles.link}`} to={`illustration`}>Illustration</Link>
            </li>
            <li>
              <Link className={`${dashboardStyles.link}`} to={`design`}>Design</Link>
            </li>
          </ul>  
        </aside>

        <div className={`${dashboardStyles.center}`}>
          <Outlet />
        </div>
        
      </div>
      
    </>
  );
  
};

