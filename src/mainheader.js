import "./style.css";
function createMainHeader(){
    const header = document.createElement("header");
    header.setAttribute("id", "main-header");
    const titleDiv = document.createElement("div");
    titleDiv.textContent = "Data Exporter";
    header.appendChild(titleDiv);
    return header;
}

export {createMainHeader};