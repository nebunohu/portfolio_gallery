import React, {Component} from "react";
import ReactDOM from "react-dom";
//import AdmminDashboard from "../admin/admin";

export function AdminDashboard() {
  const loginHandler = async function (event) {
    event.preventDefault();
    const login = this[0].value;
    const password = this[1].value;
  
    try {
      
      let body = { login: login, password: password };
      body = JSON.stringify(body);
      let headers = new Headers({ "content-type": "application/json" });
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        body,
        mode: "cors",
        headers,
      });
      if (!response.ok) {
        throw new Error("Ответ сети был не ок.");
      } else {
        pasteHtmlTemplate();
        // Получение изображения с сервера по адресу http://localhost:3000/static/img.jpg
        /*body = { info: "image" };
        const getMethodResponse = await fetch(
          "http://localhost:3000/static/img.jpg",
          { method: "GET", mode: "cors", headers }
        )
          .then((getMethodResponse) => getMethodResponse.blob())
          .then(function (myBlob) {
            let objectURL = URL.createObjectURL(myBlob);
            let myImage = document.querySelector("img");
            myImage.src = objectURL;
          });
        if (!getMethodResponse.ok) {
          throw new Error("Ответ сети был не ок.");
        }*/
      }
      
    } catch (error) {
      console.log("Возникла проблема с вашим fetch запросом: ", error.message);
    }
  }

      return (
      <div className="admin-dashboard-wrapper">
        <h1>Панель администрирования</h1>
        <ul>
            <li>
                Art
                <form className="upload-file">
                    <input className="file-selector" type="file" name="avatar"/>
                    <input className="upload-button" type="button" value="Загрузить"/>
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
