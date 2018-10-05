const blocLargeur = document.getElementById('hero').offsetWidth;
const blocHauteur = document.getElementById('hero').offsetHeight;
const cadre = document.getElementById('fenetre');


var carte = [
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,1,0,0,0,1],
    [1,0,0,0,0,0,0,1,0,0,0,1],
    [1,0,0,1,0,0,0,1,1,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,1,1,1,0,1],
    [1,0,0,0,0,1,1,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,1,0,0,1,0,1,0,0,1],
    [1,0,0,0,0,0,1,1,1,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
];



function makeBloc(blocClass, x, y) {
    var currentBloc = document.createElement("div");
    currentBloc.setAttribute("class", blocClass);
    cadre.appendChild(currentBloc);
    currentBloc.style.top = y*blocHauteur + 'px';
    currentBloc.style.left = x*blocLargeur + 'px';
}


function afficherCarte()
{
    var x = 0;
    var y = 0;

    for (x=0; x<12; x++){
        for (y=0; y<12; y++){
            switch (carte[y][x]){
                case 0:
                    makeBloc("sol", x, y);
                break;
                
                case 1:
                    makeBloc("mur", x, y);
                break;
            }        
        }   
    }
}


afficherCarte();
