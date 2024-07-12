var arrWords = ["JavaScript", "cascading", "html"];
// set up a nickname to the table in the HTML.
var table = document.getElementById("tblPuzzle");

function buildTable(table){
   // lets build the table rows and columns with a for loop.
   for (var i=0; i < 10; i++) {
       
       var row = document.createElement("tr");

   
       for (var j = 0; j < 10; j++){
           // create a column and add it to the row.
           var col = document.createElement("td");
           row.appendChild(col);
       }
//add the row with all of the columns to the table.
       table.appendChild(row);

   }
   
}

function buildClues(wordIndex, direction, startingRow, startingCol, table, showAnswer){
   // for loop to go thru the letters and add them to the table.
   for (var i=0; i < arrWords[wordIndex].length; i++){
       var tr;
       var td;
       var rowIndex = 0;
       var colIndex = 0;

       if (direction == "across"){
           rowIndex = startingRow;
           colIndex = startingCol + i;
       }
       else if (direction == "down"){
           rowIndex = startingRow + i;
           colIndex = startingCol;
       }
       else{
           console.log("huh?");
       }

       tr = table.rows[rowIndex];

       td = tr.cells[colIndex];

       if (td.childElementCount == 0){
           var input = document.createElement("input");
           input.setAttribute("maxLength", "1");
           if (showAnswer){
               input.value = arrWords[wordIndex][i].toUpperCase();
           }
           td.appendChild(input);
       }

       else if (showAnswer){
           // if the text box already exists find it and add the letter to it.
           var existingInput = td.getElementsByTagName("input")[0];
           existingInput.value =arrWords[wordIndex][i].toUpperCase();
       }

   
   }
}

function revealAnswers (){
buildClues(0, "across", 1, 0, table, true);
buildClues(1, "down", 0, 1, table, true);
buildClues(2, "down", 0, 9, table, true);
}

buildTable(table);
//call the build clues funtion to add the first word tot he swcond row of the table.
buildClues(0, "across", 1, 0, table, false);
buildClues(1, "down", 0, 1, table, false);
buildClues(2, "down", 0, 9, table, false);