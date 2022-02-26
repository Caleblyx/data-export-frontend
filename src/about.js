import "./style.css";
import trends from "./images/trends.png" 
function createAboutSection() {
    const about = document.createElement("div");
    about.classList.add("about");
    const aboutText = document.createElement("div")
    aboutText.classList.add("about-text");
    const aboutTitle = document.createElement("div");
    aboutTitle.classList.add("about-title");
    const aboutSubtext = document.createElement("div");
    aboutText.appendChild(aboutTitle);
    aboutText.appendChild(aboutSubtext);
    about.appendChild(aboutText);
    aboutTitle.textContent = "Visualise data"
    aboutSubtext.textContent = "This app imports data on the number of graduates and intakes across insitutes in Singapore over the past five years from online data sets to generate charts to visualise findings. All data and charts are exported into an all-in-one downloadable excel. Click the download button in the top right to get started."
    const trendsImg = new Image();
    trendsImg.src = trends;
    trendsImg.classList.add("trends-image");
    about.appendChild(trendsImg);
    return about;
}

export{createAboutSection};