import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  Outlet,
  useParams,
} from 'react-router-dom';

// Components

// Styles
import { useDispatch } from 'react-redux';
import admSecCompStyles from './admin-section-component.module.scss';

// Utils
import { FIREBASE_URL } from '../../utils/config';
import { SET_CURRENT_PROJECT } from '../../services/actions/admin-actions';
import addJsonEnding from '../../utils/addJsonEnding';

export default function AdminSectionComponent({ setIsUpload }) {
  const [fetchData, setFechData] = useState([]);
  // const match = useMatch();
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${FIREBASE_URL}/${addJsonEnding(params.section)}`);
        if (res.ok) {
          const data = await res.json();
          setFechData(data.data);
        } else {
          throw new Error('Fetch error - Status is not ok');
        }
      } catch {
        console.log(Error.message);
      }
    };

    getData();
  }, [params.section]);

  const projectClickHandler = (e) => {
    dispatch({
      type: SET_CURRENT_PROJECT,
      currentProject: fetchData.find((el) => el.name === e.target.textContent),
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div>
        <h2>{params.section}</h2>
        <ul className={admSecCompStyles.list}>
          {!!fetchData
            && fetchData.map((el, index) => (
              <li key={Math.random(index)} onClick={projectClickHandler}>
                <Link className={`${admSecCompStyles.link}`} to={`${el.url}`}>{el.name}</Link>
              </li>
            ))}

        </ul>
        <Link to="upload">
          <input className={admSecCompStyles.uploadPrjBtn} type="button" value="Загрузить новый проект" onClick={setIsUpload} />
        </Link>
      </div>
      <div className={`${admSecCompStyles.right}`}>
        <Outlet />
      </div>

    </div>
  );
}

AdminSectionComponent.propTypes = {
  setIsUpload: PropTypes.func.isRequired,
};
