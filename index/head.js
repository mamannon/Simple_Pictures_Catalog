//Defines
const mainAnchor = document.querySelector("#mainanchor");
const sideAnchor = document.querySelector("#sideanchor");
const sideNav = document.querySelector(".sidenav");



//Classes

//This class is responsible of drawing internals of anchor
class MainContent {

    constructor() {
        this.loadTitles();
        this.showTitles();
    }

    loadTitles() {
        this.titles = [];
        let arr1 = ["Generator", "Overview", "Body", "Plastics", "Pipe", "Cells", "Basement", "Booster", "Elements"];
        let arr2 = ["Sampo", "Overview", "Basement", "Space Circle", "Plane Circle", "Raising Pieces", "Upper Rafters", "Lower Rafters", "Horizontal Beams", "Balks", "Crossbeam"];
        this.titles.push(arr1);
        this.titles.push(arr2);

    }

    showTitles() {

        let dropDownButton = document.createElement("dropdown-btn");
        /*
        const currentStyle = getComputedStyle(sideNav);
        dropDownButton.style = currentStyle;
        */

        
        dropDownButton.setAttribute("rel", "stylesheet");
        dropDownButton.setAttribute("type", "text/css");
        dropDownButton.setAttribute("href", "http://localhost/index/index.css");
        dropDownButton.setAttribute("media", "all");
        /*
        dropDownButton.style.paddingTop = "6px";
        dropDownButton.style.paddingRight = "8px";
        dropDownButton.style.paddingBottom = "6px";
        dropDownButton.style.paddingLeft = "16px";
        dropDownButton.style.textDecoration = "none";
        dropDownButton.style.fontSize = "20px";
        dropDownButton.style.color = "#818181";
        dropDownButton.style.display = "block";
        dropDownButton.style.border = "none";
        dropDownButton.style.background = "none";
        dropDownButton.style.width = "100%";
        dropDownButton.style.textAlign = "left";
        dropDownButton.style.cursor = "pointer";
        dropDownButton.style.outline = "none";
      */

        dropDownButton.textContent = this.titles[0][0];

        sideNav.appendChild(dropDownButton);
    }

    valinta(id) {

    }

}


//Functions
function valinta(id) {
    console.log(id.value);
    MainContent.valinta(id);
}

//Drive code
let mainContent = new MainContent();