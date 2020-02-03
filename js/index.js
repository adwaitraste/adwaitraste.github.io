let i = 0, j = 0;


let speed = 50;
let visits;
let txt1;
let txt2;
if(window.localStorage.getItem('visit_to_page') == null)
        window.localStorage.setItem('visit_to_page', 1);

window.onload = function()
{
    let a = document.getElementById("about");
    let h = document.getElementById("home");
    let c = document.getElementById("contact");
    a.classList.remove("current");
    h.classList.add("current");
    c.classList.remove("current");

    if(window.localStorage.getItem('visit_to_page') == "null" || window.localStorage.getItem('visit_to_page') == "NaN")
        window.localStorage.setItem('visit_to_page', 1);
    visits = window.localStorage.getItem('visit_to_page');

    let x = parseInt(window.localStorage.getItem('visit_to_page'), 10) + 1;
    window.localStorage.setItem('visit_to_page', x);

    txt1 = "This page has been visited " + visits + " times";
    txt2 = "Let's keep it going!!";
    typeWriter1()
    setTimeout(typeWriter2, (speed*txt1.length) + 500);
}

function typeWriter1() {
    if (i < txt1.length) 
    {
        document.getElementById("noOfVisits").innerHTML += txt1.charAt(i);
        i++;    
        setTimeout(typeWriter1, speed);
    }
}
function typeWriter2() {
    if (j < txt2.length) 
    {
        document.getElementById("keepItGoing").innerHTML += txt2.charAt(j);
        j++;    
        setTimeout(typeWriter2, speed);
    }
}