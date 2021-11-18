import React from "react";

// Components
import AdminSectionComponent from "../admin-section-component/admin-section-component";

// Utils
import { SERVER_URL } from '../../utils/config';

export function AdminDashboard() {
  
  const [fetchArtData, setFechArtData] = React.useState([]);

  

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${SERVER_URL}/static/art/data.json`);
        if(res.ok) {
          const data = await res.json();
          setFechArtData(data.data);
        } else {
          throw new Error('Fetch error - Status is not ok');
        }
      } catch {
        console.log(Error.message);
      }
    }

    getData();
  }, []);

  return (
    <>
      <header>
        <h1 style={{alignSelf: 'start'}}>Панель администрирования</h1>
      </header>
      <ul className="admin-dashboard-wrapper">
        <AdminSectionComponent sectionTitle='Art' data={fetchArtData}/>
        <AdminSectionComponent sectionTitle='Photo' />
        <AdminSectionComponent sectionTitle='Illustration' />
        <AdminSectionComponent sectionTitle='Design' />
      </ul>
    </>
  );
  
};

