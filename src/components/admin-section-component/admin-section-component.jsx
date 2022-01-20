import React from "react";
import { 
  Link,
  Outlet,
   useParams 
} from "react-router-dom";

// Components

// Styles
import admSecCompStyles from './admin-section-component.module.scss';

// Utils
import { SERVER_URL } from "../../utils/config";
import { useDispatch } from "react-redux";
import { SET_CURRENT_PROJECT } from "../../services/actions/admin-actions";


export default function AdminSectionComponent(props) {
  const [fetchData, setFechData] = React.useState([]);
  //const match = useMatch();
  const dispatch = useDispatch()
  const params = useParams();

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${SERVER_URL}/static/${params.section}/data.json`);
        if(res.ok) {
          const data = await res.json();
          setFechData(data.data);
        } else {
          throw new Error('Fetch error - Status is not ok');
        }
      } catch {
        console.log(Error.message);
      }
    }

    getData();
  }, [params.section]);

  function projectClickHandler(e) {
    dispatch({type: SET_CURRENT_PROJECT, currentProject: fetchData.find((el) => el.name === e.target.textContent) });
  }

  return (
    <div style={{'display': 'flex', 'flex-dirction': 'row'}}>
      <div>
        <h2>{params.section}</h2>
        <ul className={admSecCompStyles.list}>
          {!!fetchData &&
            fetchData.map((el, index) => {
              return (
                <li key={index} onClick={projectClickHandler}>
                  <Link className={`${admSecCompStyles.link}`} to={`${el.url}`}>{el.name}</Link>
                </li>
              );
            })
          }
          
        </ul>
        <Link to={`upload`}>
          <input className={admSecCompStyles.uploadPrjBtn} type="button" value="Загрузить новый проект" onClick={props.setIsUpload} />
        </Link>
      </div>
      <div className={`${admSecCompStyles.right}`}>
        <Outlet />  
      </div>
      
    </div>
  );
}