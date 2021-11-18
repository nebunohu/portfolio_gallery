import React from 'react';
import { SERVER_URL } from '../../utils/config';

export default function UploadProjectComponent() {
  const [isUploadAllowed, setIsUploadAllowed] = React.useState(false);

  function uploadPrjBtnHandler(e) {
    setIsUploadAllowed(!isUploadAllowed);
  }

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
      {!isUploadAllowed && <input type="button" value="Загрузить новый проект" onClick={uploadPrjBtnHandler}/>}
      {isUploadAllowed && 
        <div className="uploadWrapper">
          <form className="upload-file" onSubmit={submitHandler}>
            <label htmlFor="name" >Введите название проекта
            <input className="file-selector" type="text" name="name"/></label>
            <label htmlFor="url" >Введите название проекта
            <input className="file-selector" type="text" name="url"/></label>
            <label htmlFor="cover" >Загрузите обложку
            <input className="file-selector" type="file" name="cover"/></label>
            <label htmlFor="year" >Введите год создания проекта
            <input className="file-selector" type="text" name="year"/></label>
            <label htmlFor="description" >Введите описание проекта
            <input className="file-selector" type="text-area" name="description"/></label>
            <input className="upload-button" type="submit" value="Загрузить"/>
          </form>
          <input type="button" value="Отменить загрузку" onClick={uploadPrjBtnHandler}/>
        </div>
      }
    </>
  );
}