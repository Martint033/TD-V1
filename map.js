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



function afficherCarte()
{
    var x = 0;
    var y = 0;
    var carreSol;
    var carreMur;

    for (x=0; x<12; x++){
        for (y=0; y<12; y++){
            if (carte[y][x] == 0){
                carreSol = document.createElement("div");
                carreSol.setAttribute("class","sol");
                cadre.appendChild(carreSol);
                carreSol.style.top = y*blocHauteur + 'px';
                carreSol.style.left = x*blocLargeur + 'px';
            }
            else if (carte[y][x] == 1){
                carreMur = document.createElement("div");
                carreMur.setAttribute("class","mur");
                cadre.appendChild(carreMur);
                carreMur.style.top = y*blocHauteur + 'px';
                carreMur.style.left = x*blocLargeur + 'px';
            }          
        }   
    }
}

afficherCarte();
