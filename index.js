import jsonFile from './pages.json' assert {type: 'json'};



const projectDescription = document.getElementById("project-description");
const projectImage = document.getElementById("project-image");
const projectName = document.getElementById("project-name");
const projectListUl = document.getElementById("project-list-ul");



let currentProject = jsonFile[0].project;
let lists = [];
let btns = [];






createProjectList();
updateContents();








function createProjectList()
{
    for(let i = 0; i < jsonFile.length; i++)
    {
        //Criando os elementos lista
        let list = document.createElement('li');
        lists.push(list);

        //Criando os elementos botoes
        let btn = document.createElement('input');
        btn.type = 'button';
        btn.value = jsonFile[i].projectName;
        btn.className = 'project-btn';
        btn.id = jsonFile[i].project;
        btns.push(btn);

        //Adicionando os elementos botões às listas
        lists[i].appendChild(btns[i]);

        //Adicionando as listas ao elemento ul
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

//Recebendo input dos botoes
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


