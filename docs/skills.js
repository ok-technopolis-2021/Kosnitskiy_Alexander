var amount = 0;
function handleForm() {
    if (amount <= 4) {
        var name_1 = document.getElementById("skillName").value;
        var percentage = +document.getElementById("percentage").value;
        createNewSkillConstruction(name_1, percentage);
    }
}
function createNewSkillConstruction(name, percentage) {
    amount += 1;
    var place = document.getElementById("skillForm");
    var parent = document.getElementsByClassName("card-plate__skills")[0];
    var newDiv = document.createElement("div");
    newDiv.className = "card-plate__skills__instance";
    parent.insertBefore(newDiv, place);
    var stat = document.createElement("div");
    stat.className = "card-plate__skills__instance-stat";
    newDiv.appendChild(stat);
    var skillName = document.createElement("div");
    skillName.className = "card-plate__skills__instance-name";
    var content = document.createTextNode(name);
    newDiv.insertBefore(skillName, stat);
    skillName.appendChild(content);
    var deleteButton = document.createElement("input");
    deleteButton.type = "image";
    deleteButton.src = "resources/trashBin.png";
    deleteButton.className = "card-plate__skills__instance-stat-delete";
    stat.appendChild(deleteButton);
    deleteButton.addEventListener('click', function () {
        deleteSkillConstruction(this);
    });
    var percent = document.createElement("div");
    percent.className = "card-plate__skills__instance-stat-percentage";
    content = document.createTextNode(percentage.toString());
    stat.insertBefore(percent, deleteButton);
    percent.appendChild(content);
    var bar = document.createElement("div");
    bar.className = "card-plate__skills__instance-stat-bar";
    stat.insertBefore(bar, percent);
    var barFilled = document.createElement("div");
    barFilled.className = "card-plate__skills__instance-stat-bar-filled";
    barFilled.style.width = percentage + "%";
    bar.appendChild(barFilled);
}
function deleteSkillConstruction(element) {
    amount -= 1;
    var skill = element.parentElement.parentElement;
    skill.innerHTML = "";
    skill.remove();
    return this.id;
}
