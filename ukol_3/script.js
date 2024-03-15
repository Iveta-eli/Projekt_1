console.log('funguju!');

const html_uroven = prompt("Jakou máš úroveň v HTML? Ohodnoť se číslem v rozmezí 0 až 100.")
const css_uroven = prompt("Jakou máš úroveň v CSS? Ohodnoť se číslem v rozmezí 0 až 100.")
const js_uroven = prompt("Jakou máš úroveň v JavaScriptu? Ohodnoť se číslem v rozmezí 0 až 100.")

function updateSkill(id_progress,id_skill_value,uroven)
{
  if (uroven > 100 ){
  const update = document.getElementById(id_progress);
  update.style.width = "0%";
  const updateValue = document.getElementById(id_skill_value);
  updateValue.textContent = "error";
} else {
  const update = document.getElementById(id_progress);
  update.style.width = uroven + "%";
  const updateValue = document.getElementById(id_skill_value)
  updateValue.textContent = uroven + "/100"
}
}

updateSkill("skill_progress1","skill_value1",html_uroven)
updateSkill("skill_progress2","skill_value2",css_uroven)
updateSkill("skill_progress3","skill_value3",js_uroven)