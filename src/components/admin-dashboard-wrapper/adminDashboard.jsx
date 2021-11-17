import React, {Component} from "react";
import ReactDOM from "react-dom";
//import AdmminDashboard from "../admin/admin";

export function AdminDashboard() {
  
  function artSubmitHandler(e) {
    e.preventDefault();

    const sendFile = async (e) => {
      const formData = new FormData();
    
      formData.append("username", "abc123");
      formData.append("avatar", e.target[0].files[0]);
      //const headers = new Headers({'content-type': 'multipart/form-data'});

      try {
        //Отправка изображения на сервер по адресу http://localhost:3000/public/projects/art
        const response = await fetch(
          "http://localhost:3001/public/projects/art",
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
      <header>
        <h1 style={{alignSelf: 'start'}}>Панель администрирования</h1>
      </header>
      <div className="admin-dashboard-wrapper">
        
        <ul>
            <li>
                Art
                <form className="upload-file" onSubmit={artSubmitHandler}>
                    <input className="file-selector" type="file" name="avatar"/>
                    <input className="upload-button" type="submit" value="Загрузить"/>
                </form>
                
            <ul>
                <li>prj1</li>
                <li>prj2</li>
                <li>prj3</li>
            </ul>
            </li>
            <li>Photo
                <ul>
                <li>prj1</li>
                <li>prj2</li>
                <li>prj3</li>
        </ul>
            </li>
            <li>Illustration</li>
            <li>Design</li>
        </ul>
        <img src="" alt="" />
      </div>
    </>
  );
  
};

/*export async function pasteHtmlTemplate() {
  /*const headers = new Headers();
    const init = {
        method: 'GET',
        headers: headers,
        mode: 'cors',
        cache: 'default'
    };
    const request = new Request('http://localhost:3000/data', init);
    const response = await fetch(request)*/
  /*let rootElement = document.getElementById("root");
  ReactDOM.unmountComponentAtNode(rootElement);
  ReactDOM.render(<AdminDashboard />, document.querySelector("#root"));
    
  const uploadButton = document.querySelector(".upload-button");
  const formData = new FormData();
  const fileField = document.querySelector('input[type="file"]');

  uploadButton.addEventListener("click", async function () {
    formData.append("username", "abc123");
    formData.append("avatar", fileField.files[0]);
    //const headers = new Headers({'content-type': 'multipart/form-data'});

    try {
			//Отправка изображения на сервер по адресу http://localhost:3000/public/projects/art
      const response = await fetch(
        "http://localhost:3000/public/projects/art",
        { method: "POST", mode: "cors", body: formData }
      );
      const result = await response.json();
      console.log("Успех: ", JSON.stringify(result));
    } catch (error) {
      console.log("Ошибка:", error);
    }
  });
}*/
