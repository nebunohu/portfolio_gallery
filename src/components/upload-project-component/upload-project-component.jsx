import React from 'react';

// Components

// Utils
import { SERVER_URL } from '../../utils/config';

// Styles
import upldPrjComponentStyles from './upload-project-component.module.scss';

export default function UploadProjectComponent(props) {

  function submitHandler(e) {
    e.preventDefault();

    const sendFile = async (e) => {
      const formData = new FormData();
    
      //formData.append("username", "abc123");
      formData.append("image", e.target[0].files[0]);
      //const headers = new Headers({'content-type': 'multipart/form-data'});

      try {
        //Отправка изображения на сервер по адресу http://localhost:3000/public/projects/art
        const response = await fetch(
          `${SERVER_URL}/public/projects/art`,
          { method: "POST", mode: "cors", body: formData }
        );
        const result = await response.json();
        console.log("Успех: ", JSON.stringify(result));
      } catch (error) {
        console.log("Ошибка:", error);
      }
    }
    
    sendFile(e);
  }

  return (
    <>
      <h2 className={`${upldPrjComponentStyles.title}`}>Загрузить новый проект в раздел {props.sectionTitle}</h2>
      <form className={`${upldPrjComponentStyles.uploadForm}`} onSubmit={submitHandler}>
        <label className={`${upldPrjComponentStyles.label}`} htmlFor="name" >Введите название проекта:
        <input className={`${upldPrjComponentStyles.input}`} type="text" name="name"/></label>
        <label className={`${upldPrjComponentStyles.label}`} htmlFor="url" >Введите название проекта:
        <input className={`${upldPrjComponentStyles.input}`} type="text" name="url"/></label>
        <label className={`${upldPrjComponentStyles.label}`} htmlFor="cover" >Загрузите обложку:
        <input className={`${upldPrjComponentStyles.input}`} type="file" name="cover"/></label>
        <label className={`${upldPrjComponentStyles.label}`} htmlFor="year" >Введите год создания проекта:
        <input className={`${upldPrjComponentStyles.input}`} type="text" name="year"/></label>
        <label className={`${upldPrjComponentStyles.label}`} htmlFor="description" >Введите описание проекта:
        <input className={`${upldPrjComponentStyles.input}`} type="text-area" name="description"/></label>
        <input className={`${upldPrjComponentStyles.uploadButton}`} type="submit" value="Загрузить"/>
      </form>
    </>
  );
}