
import './style.css'
import { createAboutSection } from './about';
import { createInformationSection } from './information';
import { createMainHeader } from './mainheader';
import { navBarCreator } from './navbar';
import { createDataSection} from './data';
import { createDownloadButton } from './download';

const API = "https://8m2nl02f08.execute-api.ap-southeast-1.amazonaws.com/api/download"


const contentDiv = document.querySelector("div");

const mainHeader = createMainHeader();
const navCreator = navBarCreator();
contentDiv.appendChild(mainHeader);

const rightHeader = document.createElement("div");
rightHeader.classList.add("right-header");
const button = createDownloadButton(API);
rightHeader.appendChild(navCreator.getNavBar());

rightHeader.appendChild(button);
mainHeader.appendChild(rightHeader);


const contentBody = document.createElement("div")
contentBody.classList.add("content-body");
contentDiv.appendChild(contentBody);




const aboutSect = createAboutSection();
aboutSect.setAttribute("id", "about-point");
contentBody.appendChild(aboutSect);
navCreator.addButtons("About", "#about-point");

const infoSect = createInformationSection();
infoSect.setAttribute("id", "information-point");
contentBody.appendChild(infoSect);
navCreator.addButtons("What's included", "#information-point")


const dataFrameSect = createDataSection();
dataFrameSect.setAttribute("id", "dataframe-point");
contentBody.appendChild(dataFrameSect);
navCreator.addButtons("Data", "#dataframe-point");
















