//when you click on (submit) return the bage to default then call makeGrid() function
document.getElementById("sizePicker").addEventListener('submit',function(event){
    event.preventDefault();
    makeGrid()});
//call the table    
var table=document.getElementById("pixelCanvas");


function makeGrid() {
 //input the height
 var height= document.getElementById("inputHeight").value;
 //input the width
 var width= document.getElementById("inputWidth").value;
 //creat the table body by (tbody) element
 var tableBody = document.createElement("tbody");
 //make the table emty
 table.innerHTML="";
 //creat the rows of the table by (tr) element
 for(var x=0;x<height;x++){
    const row = document.createElement("tr");
    //creat the cells of the table by (td) element
    for(var y=0;y<width;y++){
        const cell = document.createElement("td");
        //enter the cells inside the rows
        row.appendChild(cell);
        //when you click on a cell call a function that change its background color
        cell.addEventListener('click',function(event) {
            var color= document.getElementById("colorPicker").value;
            var clicked = event.target;
            clicked.style.backgroundColor = color;
        });
    }    
    //enter the rows inside the table body
    tableBody.appendChild(row);
 }
 //enter the table body inside the table
 table.appendChild(tableBody)
};
