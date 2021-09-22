export async function pasteHtmlTemplate() {
    /*const headers = new Headers();
    const init = {
        method: 'GET',
        headers: headers,
        mode: 'cors',
        cache: 'default'
    };
    const request = new Request('http://localhost:3000/data', init);
    const response = await fetch(request)*/
    let mainBlock = document.querySelector("main");
        mainBlock.innerHTML = '';
        mainBlock.insertAdjacentHTML('afterbegin', 
            `<div class="admin-dashboard-wrapper">
            <h1>hello friend</h1>
            <ul>
                <li>
                    Art
                    <form class="upload-file">
                        <input class="file-selector" type="file" name="image"/>
                        <input class="upload-button" type="button"/ value="Загрузить">
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
            </div>`
            );
    const uploadButton = document.querySelector('.upload-button');
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');
    
    uploadButton.addEventListener('click', async function() {
        formData.append('username', 'abc123');
        formData.append('avatar', fileField.files[0]);
        //const headers = new Headers({'content-type': 'multipart/form-data'});

        try {
            const response = await fetch('http://localhost:3000/public/projects/art', {method: 'POST', mode: 'cors', body: formData})
            const result = await response.json();
            console.log('Успех: ', JSON.stringify(result));
        }
        catch ( error ) {
            console.log('Ошибка:', error);
        }

    });
    
}