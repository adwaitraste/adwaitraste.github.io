let nav = document.getElementById("navigation");
let threshold = nav.offsetTop;

let topBtn = document.getElementById("topBtn");

window.onscroll = function()
{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        topBtn.style.display = "block";
    else
        topBtn.style.display = "none";


    if(window.scrollY >= threshold)
    {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        nav.classList.add("fixed");
    }
    else
    {
        document.body.style.paddingTop = 0;
        nav.classList.remove("fixed");
    }
}

function toTop()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}