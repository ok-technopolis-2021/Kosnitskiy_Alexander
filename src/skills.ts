let amount : number = 0;

function handleForm() {
    if(amount <= 4) {
        let name = (document.getElementById("skillName") as HTMLInputElement).value;
        let percentage: number = +(document.getElementById("percentage") as HTMLInputElement).value;
        createNewSkillConstruction(name, percentage);
    }
}

function createNewSkillConstruction(name: string, percentage: number) {
    amount += 1;
    const place = document.getElementById("skillForm");
    const parent = document.getElementsByClassName("card-plate__skills")[0];
    let newDiv = document.createElement("div");
    newDiv.className = "card-plate__skills__instance";
    parent.insertBefore(newDiv, place);
    let stat = document.createElement("div");
    stat.className = "card-plate__skills__instance-stat";
    let skillName = document.createElement("div");
    skillName.className = "card-plate__skills__instance-name";
    newDiv.appendChild(stat);
    newDiv.insertBefore(skillName, stat);
    let content = document.createTextNode(name);
    skillName.appendChild(content);
    let deleteButton = document.createElement("input");
    deleteButton.type = "image";
    deleteButton.src = "resources/trashBin.png";
    deleteButton.className = "card-plate__skills__instance-stat-delete";
    stat.appendChild(deleteButton);
    deleteButton.addEventListener('click', function(){
        deleteSkillConstruction(this)
    });
    let percent = document.createElement("div");
    percent.className = "card-plate__skills__instance-stat-percentage";
    stat.insertBefore(percent, deleteButton);
    content = document.createTextNode(percentage.toString());
    percent.appendChild(content);
    let bar = document.createElement("div");
    bar.className = "card-plate__skills__instance-stat-bar";
    stat.insertBefore(bar, percent);
    let barFilled = document.createElement("div");
    barFilled.className = "card-plate__skills__instance-stat-bar-filled";
    barFilled.style.width = percentage + "%";
    bar.appendChild(barFilled);
}

function deleteSkillConstruction(element: HTMLInputElement) {
    amount -= 1;
    let skill = element.parentElement.parentElement;
    skill.innerHTML = "";
    skill.remove();
    return this.id;
}
