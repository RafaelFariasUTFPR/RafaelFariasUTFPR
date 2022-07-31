let projectList = [
    "radio-de-galena",
    "hefestus-academy",
    "biblioteca-de-projetos",
    "em-breve"];
let currentProject = projectList[0];

const projectDescription = document.getElementById("project-description");
const projectImage = document.getElementById("project-image");
const projectName = document.getElementById("project-name");

function updateContents()
{
    switch(currentProject)
    {
        case "radio-de-galena":
            projectDescription.innerHTML="aaa"; 
            projectImage.src = "images/Projeto1img.png";
            projectName.innerHTML="Rádio de Galena";
        break;
        case "hefestus-academy":
            projectDescription.innerHTML="App desenvolvido"; 
            projectImage.src = "images/Projeto2img.png";
            projectName.innerHTML="Hefestus Academy";
        break;
        case "biblioteca-de-projetos":
            projectDescription.innerHTML="Aslnjdjanld"; 
            projectImage.src = "images/Projeto3img.png";
            projectName.innerHTML="Biblioteca de Projetos";
        break;  
        case "em-breve":
        break; 
    }
}

document.getElementById("radio-de-galena").onclick = function () {
    currentProject = "radio-de-galena";
    updateContents();
};

document.getElementById("hefestus-academy").onclick = function () {
    currentProject = "hefestus-academy";
    updateContents();
};

document.getElementById("biblioteca-de-projetos").onclick = function () {
    currentProject = "biblioteca-de-projetos";
    updateContents();
};

document.getElementById("em-breve").onclick = function () {
    currentProject = "em-breve";
    updateContents();
};

document.getElementById("acess-button").onclick = function () {
    switch(currentProject)
    {
        case "radio-de-galena":
            window.location.href ="projects/SimulacaoGalena/SimulacaoGalena.html"
        break;
        case "hefestus-academy": 
            window.location.href = "https://hefestusacademy.github.io/";
        break;
        case "biblioteca-de-projetos":

        break;  
    }
};
