//de array met alle eenheden waaruit we willekeurig twee laten kiezen op basis
//van de index-waarde; de indexwaarden zijn 0, 1, 2, 3, 4, 5 en 6 -->
//eenheden[5] = "hm"
const eenheden = ["mm", "cm", "dm", "m", "dam", "hm", "km"];
let random_index_left = 0;
let random_index_right = 0;

let selected_dim = document.getElementById("inp_dim");
let problem = document.getElementById("inp_left");
let unit_left = document.getElementById("eenh_left");
let solution = document.getElementById("inp_right");
let unit_right = document.getElementById("eenh_right");



function generateProblem()
{
    //alert("hij doet het");
    let dimension = selected_dim.value;
    random_index_left = Math.floor(Math.random() * 7);
    random_index_right = Math.floor(Math.random() * 7);
    unit_left.innerHTML = eenheden[random_index_left] + "<sup>" + dimension + "</sup>";
    unit_right.innerHTML = eenheden[random_index_right]+ "<sup>"+ dimension + "</sup>";
}

function checkSolution()
{
    alert("check doet het ook");
}