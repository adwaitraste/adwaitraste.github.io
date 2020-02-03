window.onload = function() 
{
    let a = document.getElementById("about");
    let h = document.getElementById("home");
    let c = document.getElementById("contact");
    a.classList.remove("current");
    h.classList.remove("current");
    c.classList.add("current");

    let lSkillDict = JSON.parse(window.localStorage.getItem("skill"));
    for(let x in lSkillDict)
    {
        for(let e in lSkillDict[x])
        {
            let tbody = document.getElementById("tbodySkills");
            let row = tbody.insertRow(0);
            let cell = row.insertCell(0);
            cell.innerHTML = lSkillDict[x][e]["comment"];
            cell = row.insertCell(0);
            cell.innerHTML = lSkillDict[x][e]["level"];
            cell = row.insertCell(0);
            cell.innerHTML = lSkillDict[x][e]["skill"];
            cell = row.insertCell(0);
            cell.innerHTML = x;
        }
    }
}


let skillDict = JSON.parse(window.localStorage.getItem("skill"));

if(!skillDict)
    skillDict = {};

function submitForm()
{
    let skillSelect = document.getElementById("skillSelect");
    let levelSelect = document.getElementById("levelSelect");
    let skill = skillSelect.options[skillSelect.selectedIndex].text;
    let level = levelSelect.options[levelSelect.selectedIndex].text;
    let name = document.getElementById("name").value;
    let comment = document.getElementById("comment").value;
    if(name == "" || skill == "Choose My Skill" || level == "Choose Skill Level")
        alert("Please enter all the fields");
    else
    {
        let tbody = document.getElementById("tbodySkills");
        let row = tbody.insertRow(0);
        let cell = row.insertCell(0);
        cell.innerHTML = comment;
        cell = row.insertCell(0);
        cell.innerHTML = level;
        cell = row.insertCell(0);
        cell.innerHTML = skill;
        cell = row.insertCell(0);
        cell.innerHTML = name;
        if(skillDict[name] == null)
        skillDict[name] = [];
        skillDict[name].push({skill, level, comment});
        window.localStorage.setItem("skill", JSON.stringify(skillDict));
    }
}