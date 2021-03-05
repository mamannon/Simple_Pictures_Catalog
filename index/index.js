
//Defines
const mainAnchor = document.querySelector("#mainanchor");
const sideAnchor = document.querySelector("#sideanchor");
const sideNav = document.querySelector(".sidenav");
const dropDownBtn = document.querySelector(".dropdown-btn");


//Classes

//This class is responsible of providing picture data
class MainContent {

    constructor() {
        this.loadItems();
 //       this.showTitles();
    }

    //This is something we should ask for a database...
    loadItems() {

        //Let's make a three dimensional array
        this.titles = [];

        //Frame of Sampo
        let items = ["Frame of Sampo"];
        let seed = ["Overview", "Frame of Sampo 3D", "Frame of Sampo X", "Frame of Sampo Y", "Frame of Sampo Z"];
        let array = [];
        array.push(seed);
        seed = ["Horizontal Balk", "Horizontal Balk"];
        array.push(seed);
        seed = ["Space Circle", "Space Circle"];
        array.push(seed);
        items.push(array);
        this.titles.push(items);

        //Generator
        items = ["Generator"];
        array = [];
        seed = ["Overview", "Generator 3D", "Generator X", "Generator Y", "Generator Z"];
        array.push(seed);
        seed = ["Body", "Body"];
        array.push(seed);
        seed = ["Plastics", "Plastics"];
        array.push(seed);
        seed = ["Pipe", "Pipe"];
        array.push(seed);
        seed = ["Cells", "Cells"];
        array.push(seed);
        seed = ["Basement", "Basement"];
        array.push(seed);
        seed = ["Booster", "Booster"];
        array.push(seed);
        seed = ["Elements", "Elements"];
        array.push(seed);
        items.push(array);
        this.titles.push(items);

 //       const currentStyle = getComputedStyle(dropDownBtn);
 //       this.color = currentStyle.color;
 //       this.hoverColor = "#f1f1f1";
    }

/*
    showTitles() {

        for (let i=0; i<this.titles.length; i++) {
            let dropDownButton = document.createElement("dropdown-btn");
            const currentStyle = getComputedStyle(dropDownBtn);
            dropDownButton.style.paddingTop = currentStyle.paddingTop;
            dropDownButton.style.paddingRight = currentStyle.paddingRight;
            dropDownButton.style.paddingBottom = currentStyle.paddingBottom;
            dropDownButton.style.paddingLeft = currentStyle.paddingLeft;
            dropDownButton.style.textDecoration = currentStyle.textDecoration;
            dropDownButton.style.fontSize = currentStyle.fontSize;
            dropDownButton.style.color = currentStyle.color;
            dropDownButton.style.display = currentStyle.display;
            dropDownButton.style.border = currentStyle.border;
            dropDownButton.style.background = currentStyle.background;
            dropDownButton.style.width = currentStyle.width;
            dropDownButton.style.textAlign = currentStyle.textAlign;
            dropDownButton.style.cursor = currentStyle.cursor;
            dropDownButton.style.outline = currentStyle.outline;
            dropDownButton.onmouseout = function(event) {
                let target = event.target;
                target.style.color = this.color;
            }
            dropDownButton.onmouseover = function(event) {
                let target = event.target;
                target.style.color = this.hoverColor;
            }            

            
 //           dropDownButton.setAttribute("rel", "stylesheet");
 //           dropDownButton.setAttribute("type", "text/css");
 //           dropDownButton.setAttribute("href", "http://localhost/index/index.css");
 //           dropDownButton.setAttribute("media", "all");
            

            dropDownButton.textContent = this.titles[i][0];
            sideNav.appendChild(dropDownButton);
        }

    }
*/

    clickItem(array, item) {

        for (let i=0; i<this.titles.length; i++) {

            var arr = this.titles[i][1];
            var title = this.titles[i][0];

            if (array === title) {

                for (let j=0; j<arr.length; j++) {
                    var items = this.titles[i][1][j];
                    if (item === items[0]) {

                        //testing
                        console.log("löytyi");

                        while (mainAnchor.childNodes.length > 0) {
                            mainAnchor.removeChild(mainAnchor.children[0]);
                        }

                        for (let k=1; k<items.length; k++) {
                            let picture = document.createElement("IMG");
                            picture.setAttribute("src", "index/"+items[k]+".jpg");
                            picture.setAttribute("width", "30%");
              //            picture.setAttribute("margin-left", "200px");
                            picture.setAttribute("alt", "Didn't find the picture!");
                            mainAnchor.appendChild(picture);
                        }
                        break;
                    }
                }
            }
        }
    }
}


//Drive code
let mainContent = new MainContent();

// Loop through all dropdown buttons to toggle between hiding 
//and showing its dropdown content - This allows the user to have 
//multiple dropdowns without any conflict
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
            
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

//Functions
function clickItem(id) {

    //Testing
    console.log(id.id);

    let shift = id.id.split("#");
    mainContent.clickItem(shift[0], shift[1]);
}
