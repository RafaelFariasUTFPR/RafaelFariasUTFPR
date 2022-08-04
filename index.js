const jsonFile = [
    {
        "project": "radio-de-galena",
        "projectName": "Simulação Rádio de Galena",
        "description": "Este projeto foi desenvolvido para a materia de Fisica 3, o objetivo é realizar a simulação da operação de um rádio de galena. Este programa realiza a simulação dês da criação do sinal por uma transmissora AM, até a captação, retificação de demodulação do sinal.<br><br>Para a realização deste trabalho foi utilizado a engine de jogos Godot, mais informações podem ser encontradas no repositório do projeto.",
        "imagePath": "images/Projeto1img.png",
        "acessLink": "projects/SimulacaoGalena/SimulacaoGalena.html",
        "repoLink": "https://github.com/RafaelFariasUTFPR/RafaelFariasUTFPR.github.io/tree/master/projects/SimulacaoGalena/SimulacaoGalena"
    },
    {
        "project": "hefestus-academy",
        "projectName": "Hefestus Academy",
        "description": "Em breve",
        "imagePath": "images/Projeto2img.png",
        "acessLink": "https://hefestusacademy.github.io/",
        "repoLink": "https://github.com/HefestusAcademy/HefestusAcademy.github.io"
    },
    {
        "project": "biblioteca-de-projetos",
        "projectName": "Biblioteca de Projetos",
        "description": "Em breve",
        "imagePath": "images/Projeto3img.png",
        "acessLink": "index.html",
        "repoLink": "https://github.com/RafaelFariasUTFPR/RafaelFariasUTFPR.github.io"
    
    }
];




let currentProject = jsonFile[0].project;

const projectDescription = document.getElementById("project-description");
const projectImage = document.getElementById("project-image");
const projectName = document.getElementById("project-name");
const projectListUl = document.getElementById("project-list-ul");

let lists = [];
let btns = [];






createProjectList();
updateContents();








function createProjectList()
{
    for(let i = 0; i < jsonFile.length; i++)
    {
        let list = document.createElement('li');
        lists.push(list);
    }

    jsonFile.forEach(element => {
        let btn = document.createElement('input');
        btn.type = 'button';
        btn.value = element.projectName;
        btn.className = 'project-btn';
        btn.id = element.project;
        btns.push(btn);
    });

    for(let i = 0; i < jsonFile.length; i++)
    {
        lists[i].appendChild(btns[i]);
        projectListUl.appendChild(lists[i]);
    }

    //Criando o ultimo botão do em breve
    let htmlElement = "<li>\n<input type=\"button\" value=\"Em breve!\" class=\"project-btn\" id=\"em-breve\" />\n</li>"
    projectListUl.innerHTML+=htmlElement;
    
}



function updateContents()
{
    jsonFile.forEach(page => {
        if(currentProject == page.project)
        {
            projectDescription.innerHTML = page.description;
            projectImage.src = page.imagePath;
            projectName.innerHTML= page.projectName;
        }
    });
}




jsonFile.forEach(element => {
    document.getElementById(element.project).onclick = function(){
        currentProject = element.project;
        updateContents();
    }
});

document.getElementById("acess-button").onclick = function () {
    jsonFile.forEach(page => {
        if(currentProject == page.project)
            window.open(page.acessLink, '_blank').focus();
    });
};

document.getElementById("repository-btn").onclick = function () {
    jsonFile.forEach(page => {
        if(currentProject == page.project)
            window.open(page.repoLink, '_blank').focus();
    });
};


