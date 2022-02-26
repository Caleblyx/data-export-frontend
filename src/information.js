import './style.css'

import graduates from './images/graduates.png'
import scatter from './images/scatter.png'
import intake from './images/intake.png'
import percentage from './images/percentage.png'
import bars from './images/bars.png'

function createInformationSection(){

    const information = document.createElement("div");
    information.classList.add("information");
    const informationTitle = document.createElement('div');
    informationTitle.textContent = "What's included";
    informationTitle.classList.add("information-title");
    information.appendChild(informationTitle);
    const informationCells = document.createElement('div');
    informationCells.classList.add('information-cells');
    information.appendChild(informationCells);
    informationCells.appendChild(createCell("Sheet 1", "Raw data on the number of graduates across institutions over the past five years", graduates));
    informationCells.appendChild(createCell("Sheet 2", "Scatter plots with trendlines depicting the trends and projections in the number of graduates in the past five years and the next five years, respectively", scatter))
    informationCells.appendChild(createCell("Sheet 3", "Raw data on the number of intakes across insitutions over the past five years", intake));
    informationCells.appendChild(createCell("Sheet 4", "Data on the percentage of difference between the number of graduates and number of intakes across institutions over the past five years", percentage));
    informationCells.appendChild(createCell("Sheet 5", "Column charts depicting the percentage of difference between the number of graduates and number of intakes across institutions over the past five years", bars));

    return information;
}


function createCell(title, text, image) {
    const cell = document.createElement("div");
    cell.classList.add("information-cell");

    const cellImage = new Image();
    cellImage.src = image;
    cellImage.classList.add("cell-image");

    const cellTitle = document.createElement("div");
    cellTitle.classList.add("cell-title");
    cellTitle.textContent = title;

    const cellText = document.createElement("div");
    cellText.textContent = text;

    cell.appendChild(cellImage);
    cell.appendChild(cellTitle);
    cell.appendChild(cellText);

    return cell;
}

export {createInformationSection};