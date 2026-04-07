import {coteR, showRScore} from "./score.js"
import {getInput} from "./input.js"

getInput("m1");
getInput("m2");
getInput("m3");
getInput("m4");

var body = document.body

body.addEventListener("input",(event) => {

    var average = document.getElementById("m1").value;
    var group_average = document.getElementById("m2").value;
    var standard_deviation = document.getElementById("m3").value;
    var group_strength = document.getElementById("m4").value;
    console.log(average,group_average,standard_deviation,group_strength)
    var rScore = coteR(average,group_average,standard_deviation,group_strength)
    showRScore(rScore)
})
//console.log(coteR(average,group_average,standard_deviation,group_strength));

/* COMMIT
 * I styled a bit the input 
 * I center a div and make some hover
 * I filter some numbers but I'll continue after
 * I change a bit the html
 */

/* TODO LIST
 * Solve some bugs 
 * Create a class for handling all the inputs correctly (maybe)
 * like the data for each input can be accessed by the rscore in a way
 * think about the design
 */