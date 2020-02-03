window.onload = function()
{
    let a = document.getElementById("about");
    let h = document.getElementById("home");
    let c = document.getElementById("contact");
    a.classList.add("current");
    h.classList.remove("current");
    c.classList.remove("current");
}


let imgs = [];
for(let i = 1; i <= 5; i++)
{
    imgs[i] =  new Image();
    let s = i.toString();
    imgs[i].src = "./img/MyImages/" + s + ".jpeg"
}

function nextImg()
{
    let x = document.getElementById("image");
    let src = x.src;
    let name = src.split('/').pop();
    let num = parseInt(name.charAt(0));
    let nextNum = ((num%5)+1);
    x.src = imgs[nextNum].src;
}