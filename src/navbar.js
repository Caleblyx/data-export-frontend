import "./style.css";

const navBarCreator = function() {
    const navBar = document.createElement("div");
    navBar.classList.add("nav-bar")

    function addButtons(name, id) {
        navBar.appendChild(createNavButton(name,id));
    }

    function getNavBar() {
        return navBar;
    }
    function createNavButton(name, anchorId){
        const button = document.createElement("a");
        button.classList.add("nav-button");
        button.textContent = name;
        button.href = anchorId;
        return button;
    }

    return {"addButtons": addButtons,
            "getNavBar": getNavBar}
}

export {navBarCreator};