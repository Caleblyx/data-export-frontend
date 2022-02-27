
import "./style.css";



function createDataSection(){
    const GRADUATES = "https://data.gov.sg/dataset/intake-enrolment-and-graduates-by-institutions/resource/2264a6ed-51f5-45d6-accb-1a980e32e632/view/af173233-827f-4b3f-a190-4de3cb58f714";
    const INTAKES = "https://data.gov.sg/dataset/intake-enrolment-and-graduates-by-institutions/resource/be05b06d-1042-45de-a35b-5a5e04e7c704/view/9128a6bc-94e5-4806-8772-c3a94c1d0d90";
    
    
    const dataSection = document.createElement("div");
    dataSection.classList.add("data");
    
    const dataTitle = document.createElement("div");
    dataTitle.classList.add("data-title")
    dataTitle.textContent = "Data";
    dataSection.append(dataTitle);
    
    const dataDescription = document.createElement("div");
    dataDescription.classList.add("data-description");
    dataDescription.textContent = "The tables below contain data imported by the application to create the downloadable excel file. Use the navigation bar to alternate between different sets of data.";
    dataSection.append(dataDescription);

    const dataFrame = createDataFrame(GRADUATES);
    dataSection.appendChild(dataFrame);


    function createDataNavBar(){

        function createNavButton(name){
            const button = document.createElement("div");
            button.classList.add("nav-button");
            button.textContent = name;
            return button;
        }
    
        function showDataFrame(e, link){
            const selected = document.querySelector(".nav-button-selected");
            selected.classList.remove("nav-button-selected");
            e.target.classList.add("nav-button-selected");
            dataFrame.style.opacity = "0%";
            setTimeout(function() {
                dataFrame.src = link;
            }, 500);

            setTimeout(function() {
                dataFrame.style.opacity = "100%";
            }, 2000);
        }
        const navBar = document.createElement("div");
        navBar.classList.add("nav-bar");
    
        const graduates = createNavButton("Graduates Data");
        const intakes = createNavButton("Intakes Data");
        
        graduates.classList.add("nav-button-selected");
        graduates.addEventListener("click", e=>showDataFrame(e, GRADUATES));
        intakes.addEventListener("click", e=>showDataFrame(e, INTAKES));

        navBar.appendChild(graduates);
        navBar.appendChild(intakes);
        return navBar;
    
    }
    const navBar = createDataNavBar();
    dataSection.insertBefore(navBar, dataFrame);


    return dataSection;
}


function createDataFrame(link){
    const dataFrame = document.createElement("iframe");
    dataFrame.classList.add("data-frame");
    dataFrame.src = link;
    return dataFrame;
}



export {createDataSection};