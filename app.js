/**
 * Created by david on 22-11-19.
 */
var lieux = ['Tombouctou', 'Lille', 'Sataya', 'Montcuq', 'Paris' , 'Batcave', 'Maubeuge', 'Réacteur nucléaire',
    'Martinique', 'Balamb garden', "enfer", 'Montbeilard', 'Namek', 'Londres', 'Une île', 'Une cave', 'le Caire', 'New York', 'Le tampon', 'Berlaimont',];

var temperatures = [30, 24, -273.15, 21, 42, -38, 35, 584, -8000, 28, 20, 37.2, -30, 35, "hot", 27, -100, 55 ];

var objets = ['valise', 'poivrier connecté', 'épée', 'cahier', 'pneu', 'table', 'godsabre',
    'truelle', 'madelaine', 'trident', 'pull rose', 'pc', 'tisonnier', 'guimbarde', 'chandelier',
    'verre', 'table bancale', 'arbre', 'souris, dague'];

var noms = ["Babe", "Paul", "Clodomir", "George", "Brigitte", "Homer-Simpson", "Kylian", "Georges-Clooney",
    "Quintus", "Anais", "Styvens", "Keen-V", "Ludovic", "Yoshi", "Lucifer", "Pumba", "Eglantine", "Cayde-6", "Poutine", "Squall"];

var verbes = ['Danser' ,'Frapper' ,'Lubrifier', 'Trikiter', 'Procrastiner', 'Foutre', 'Prendre', 'Nager',
    'Recoudre', 'Punir', 'Attaquer', 'Coder', 'Jouer', 'Manger', 'Avoir'];


var btn=document.querySelector("#btn");
var storyContent=document.querySelector("#story");

function getRandomEntry(array) {
    var i = Math.floor(Math.random() * array.length);
    return array[i];
}

btn.onclick=function(){
    var name=document.querySelector("#name").value;
    var story="";
    var p= document.createElement("p");
    var lieu=getRandomEntry(lieux);
    var objet=getRandomEntry(objets);
    storyContent.appendChild(p);
    story = name+" ";
    story += " va";
    story += liaison(lieu);
        story += lieu+" avec ";
    story += getRandomEntry(noms)+" pour ";
    story += getRandomEntry(verbes);
    story += article(objet);
    story += objet +" sous ";
    story += getRandomEntry(temperatures) +" degrés !";
    p.innerHTML=story;
}

function liaison(mot){
    var liaison;
    switch(mot){
        case "Une cave":
        case "Batcave":
            liaison=" dans la ";
            break;
        case "Réacteur nucléaire":
            liaison=" dans un ";
            break;
        case "enfer":
        case "Martinique":
            liaison=" en ";
            break;
        case "Une île":
        case "Namek":
            liaison=" sur ";
            break;
        default:
            liaison=" à ";
            break;
    }
    return liaison;
}


function article(mot){
    var article;
    switch(mot){
        case "poivrier connecté":
        case "cahier":
        case "pneu":
        case "godsabre":
        case "trident":
        case "pull rose":
        case "pc":
        case "tisonnier":
        case "chandelier":
        case "verre":
        case "arbre":
            article=" un ";
            break;

        default:
            article=" une ";
            break;
    }
    return article;
}