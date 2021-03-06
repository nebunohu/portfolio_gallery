import React, { useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

// Components

// Utils
// import { SERVER_URL } from '../../utils/config';

// Styles
import upldPrjComponentStyles from './upload-project-component.module.scss';

export default function UploadProjectComponent({ sectionTitle }) {
  const filesRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const sendFile = async (event) => {
      const formData = new FormData();

      // formData.append("username", "abc123");

      [...event.target.elements].forEach((el, index) => {
        if (index !== event.target.elements.length - 1) {
          if (el.type === 'file') {
            formData.append(el.name, el.files[0]);
          } else {
            formData.append(el.name, el.value);
          }
        }
        for (const p of formData) {
          console.log(p);
        }
      });
      // formData.append("image", e.target[0].files[0]);
      // const headers = new Headers({'content-type': 'multipart/form-data'});

      try {
        // Отправка изображения на сервер по адресу http://localhost:3000/public/projects/art
        /* const response = await fetch(
          `${SERVER_URL}/public/projects/art`,
          { method: "POST", mode: "cors", body: formData }
        );
        const result = await response.json();
        console.log("Успех: ", JSON.stringify(result)); */
        const firebaseConfig = {
          apiKey: 'AIzaSyCE57uRhFTLICxSFJbxaE3XTdZadaXvcm8',
          authDomain: 'portfolio-gallery-f62a0.firebaseapp.com',
          databaseURL: 'https://portfolio-gallery-f62a0-default-rtdb.europe-west1.firebasedatabase.app',
          projectId: 'portfolio-gallery-f62a0',
          storageBucket: 'portfolio-gallery-f62a0.appspot.com',
          messagingSenderId: '142005184590',
          appId: '1:142005184590:web:081055667acccb6d837b1f',
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const storage = getStorage(app);
        console.log(event.target[4].files[0]);
        console.log(storage);
        const storageRef = ref(storage, 'path/some-child');
        uploadBytes(storageRef, event.target[4].files[0]).then((snapshot) => {
          console.log('Uploaded a blob or file!');
        });
      } catch (error) {
        console.log('Ошибка:', error);
      }
    };

    sendFile(e);
  }

  function onChangeHandler(e) {
    e.preventDefault();
    console.log(filesRef.current.files);
  }

  return (
    <>
      <h2 className={`${upldPrjComponentStyles.title}`}>
        Загрузить новый проект в раздел
        {sectionTitle}
      </h2>
      <form className={`${upldPrjComponentStyles.uploadForm}`} onSubmit={submitHandler} encType="multipart/form-data">
        <label className={`${upldPrjComponentStyles.label}`} htmlFor="name">
          Введите название проекта:
          <input className={`${upldPrjComponentStyles.input}`} type="text" name="name" />
        </label>
        <label className={`${upldPrjComponentStyles.label}`} htmlFor="url">
          Введите url для страницы проекта:
          <input className={`${upldPrjComponentStyles.input}`} type="text" name="url" />
        </label>
        <label className={`${upldPrjComponentStyles.label}`} htmlFor="year">
          Введите год создания проекта:
          <input className={`${upldPrjComponentStyles.input}`} type="text" name="year" />
        </label>
        <label className={`${upldPrjComponentStyles.label}`} htmlFor="description">
          Введите описание проекта:
          <input className={`${upldPrjComponentStyles.input}`} type="text-area" name="description" />
        </label>
        <label className={`${upldPrjComponentStyles.label}`} htmlFor="cover">
          Загрузите обложку:
          <input className={`${upldPrjComponentStyles.input}`} type="file" name="cover" multiple onChange={onChangeHandler} ref={filesRef} />
        </label>
        <input className={`${upldPrjComponentStyles.uploadButton}`} type="submit" value="Загрузить" />
      </form>
    </>
  );
}
