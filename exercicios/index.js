


let markdownString;

fetch('./markdown/1. Seleção Condicional/Exercício 1.1.md')
   .then(response => response.text())
   .then((response) => {
       getText(response)
   })
   .catch(err => console.log(err))

function getText(response){
    markdownString = response;
    let mySubString = markdownString.slice(
        markdownString.indexOf("~~~js") + 7, 
        markdownString.lastIndexOf("~~~")
    
    );
    markdownString.replace('a', '');
        
    document.getElementById('markdown-text').innerHTML = marked.parse(markdownString);
    console.log(mySubString)

}

