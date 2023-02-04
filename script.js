let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[0].classList.add("htmlcss");
        habilidades[0].classList.add("angular");
        habilidades[0].classList.add("c");
        habilidades[0].classList.add("sqlserver");
        habilidades[0].classList.add("liderazgo");
        habilidades[0].classList.add("trabajo");
        habilidades[0].classList.add("resolucion");
        habilidades[0].classList.add("etica");
        habilidades[0].classList.add("creatividad");
    }    
}