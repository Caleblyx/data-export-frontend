

const contentDiv = document.querySelector("div");





const getDownload = function() {
    const downloadAPI = "https://8m2nl02f08.execute-api.ap-southeast-1.amazonaws.com/api/download"
    const http = new XMLHttpRequest();
    
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            console.log(http.responseText);
        }
    }
    http.open("GET", downloadAPI);
    http.send();
}

const button = document.createElement("button");
button.addEventListener("click", getDownload);

contentDiv.appendChild(button);