import "./style.css";
import download from "./images/download.svg";




const createDownloadButton = function(api) {
    const button = document.createElement("button");
    button.classList.add("download-button");
    button.textContent = "Download";
    const dl = new Image()
    dl.src = download;
    dl.classList.add("download-img");
    button.appendChild(dl);
    const loadingAnimation = document.createElement("div");
    loadingAnimation.classList.add("lds-dual-ring");
    button.appendChild(loadingAnimation);

    const startDownload = function(e, api) {
        loadingAnimation.style.display = "inline";
        dl.style.display = "none";
        const downloadAPI = api;
        const http = new XMLHttpRequest();
        
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200) {
                let json = JSON.parse(this.responseText)
                const url = json["download-link"];
                const link = document.createElement("a")
                link.href = url
                link.click()
                loadingAnimation.style.display = "none";
                dl.style.display = "block";
            }
        }
        http.open("GET", downloadAPI);
        http.send();
    }

    button.addEventListener("click", e => startDownload(e, api));
    return button
}

export {createDownloadButton};