// JavaScript Document
console.log("Howdy!");

// AANMAKEN VAN VARIABELEN

var eeveeLution = ["images/glaceon.png", "images/leafeon.png", "images/flareon.png", "images/jolteon.png", "images/vaporeon.png", "images/sylveon.png", "images/espeon.png", "images/umbreon.png", "images/eevee.png"];
var buttonStone = document.querySelectorAll(".stones");
var stones = document.querySelectorAll('.stones')

//ALS JE KLIKT OP DE POKÉMON IN HET MIDDEN WORD HET VOLGENDE UITGEVOERD
document.getElementById('circle').onclick = function() {   
    this.classList.toggle('eevee-clicked'); 
    document.querySelector('article').classList.toggle('visible');  
    
    
};

// VERRANDEREN VAN POKÉMON.
function wijzig(target) {

    //ALS DE PARAMETER GELIJK IS AAN HET ID VAN DE STEEN WORD DE AFBEELDING VERVANGEN.
  
    
    if (event.target.id === "icestone") {
      // SOURCE VAN DE AFBEELDING IN HET MIDDEN VERRANDEREN.  
      document.querySelector("img#eevee").src = eeveeLution[0];
      
      // VERRANDER DE TEKST VAN DE H2 EN P ELEMENTEN.
      document.getElementById("pokemon-name").innerHTML = "#471 Glaceon";

      //EERST VERWIJDER JE ALLE ACHTERGROND CLASSES DAARNA VOEG JE DE CLASS VAN DE JUISTE POKEMON TOE.
      document.querySelector("main section section:nth-of-type(1)").classList.remove('background-leafeon','background-glaceon', 'background-flareon', 'background-jolteon', 'background-vaporeon', 'background-sylveon', 'background-umbreon', 'background-espeon', 'background-eevee');
      document.querySelector("main section section:nth-of-type(1)").classList.add('background-glaceon');

    // CODE WAARMEE JE CSS TOEVOEGD IN HTML *NIET AAN TE RADEN*
    //   document.querySelector(".eevee").style.background = '#DEF0F3';
      
      
    } else if (event.target.id === "leafstone") {
        // SOURCE VAN DE AFBEELDING IN HET MIDDEN VERRANDEREN.
        document.querySelector("img#eevee").src = eeveeLution[1];

        // VERRANDER DE TEKST VAN DE H2 EN P ELEMENTEN.
        document.getElementById("pokemon-name").innerHTML = "#470 Leafeon";

        //EERST VERWIJDER JE ALLE ACHTERGROND CLASSES DAARNA VOEG JE DE CLASS VAN DE JUISTE POKEMON TOE.
        document.querySelector("main section section:nth-of-type(1)").classList.remove('background-leafeon','background-glaceon', 'background-flareon', 'background-jolteon', 'background-vaporeon', 'background-sylveon', 'background-umbreon', 'background-espeon', 'background-eevee');
        document.querySelector("main section section:nth-of-type(1)").classList.add('background-leafeon');
        
        // CODE WAARMEE JE CSS TOEVOEGD IN HTML *NIET AAN TE RADEN*
        // document.querySelector(".eevee").style.background = '#C0CF9C';
        
    } else if (event.target.id === "firestone") {
        // SOURCE VAN DE AFBEELDING IN HET MIDDEN VERRANDEREN.
        document.querySelector("img#eevee").src = eeveeLution[2];

        // VERRANDER DE TEKST VAN DE H2 EN P ELEMENTEN.
        document.getElementById("pokemon-name").innerHTML = "#136 Flareon";

        //EERST VERWIJDER JE ALLE ACHTERGROND CLASSES DAARNA VOEG JE DE CLASS VAN DE JUISTE POKEMON TOE.
        document.querySelector("main section section:nth-of-type(1)").classList.remove('background-leafeon','background-glaceon', 'background-flareon', 'background-jolteon', 'background-vaporeon', 'background-sylveon', 'background-umbreon', 'background-espeon', 'background-eevee');
        document.querySelector("main section section:nth-of-type(1)").classList.add('background-flareon');

        // CODE WAARMEE JE CSS TOEVOEGD IN HTML *NIET AAN TE RADEN*
        // document.querySelector(".eevee").style.background = '#E98E33';
        
    } else if (event.target.id === "thunderstone") {
        // SOURCE VAN DE AFBEELDING IN HET MIDDEN VERRANDEREN.
        document.querySelector("img#eevee").src = eeveeLution[3];

        // VERRANDER DE TEKST VAN DE H2 EN P ELEMENTEN.
        document.getElementById("pokemon-name").innerHTML = "#135 Jolteon";

        //EERST VERWIJDER JE ALLE ACHTERGROND CLASSES DAARNA VOEG JE DE CLASS VAN DE JUISTE POKEMON TOE.
        document.querySelector("main section section:nth-of-type(1)").classList.remove('background-leafeon','background-glaceon', 'background-flareon', 'background-jolteon', 'background-vaporeon', 'background-sylveon', 'background-umbreon', 'background-espeon', 'background-eevee');
        document.querySelector("main section section:nth-of-type(1)").classList.add('background-jolteon');

        // CODE WAARMEE JE CSS TOEVOEGD IN HTML *NIET AAN TE RADEN*
        // document.querySelector("main section section:nth-of-type(1)").style.background = '#CDDF81';
        
    } else if (event.target.id === "waterstone") {
        // SOURCE VAN DE AFBEELDING IN HET MIDDEN VERRANDEREN.
        document.querySelector("img#eevee").src = eeveeLution[4];

        // VERRANDER DE TEKST VAN DE H2 EN P ELEMENTEN.
        document.getElementById("pokemon-name").innerHTML = "#134 Vaporeon";

        //EERST VERWIJDER JE ALLE ACHTERGROND CLASSES DAARNA VOEG JE DE CLASS VAN DE JUISTE POKEMON TOE.
        document.querySelector("main section section:nth-of-type(1)").classList.remove('background-leafeon','background-glaceon', 'background-flareon', 'background-jolteon', 'background-vaporeon', 'background-sylveon', 'background-umbreon', 'background-espeon', 'background-eevee');
        document.querySelector("main section section:nth-of-type(1)").classList.add('background-vaporeon');


        // CODE WAARMEE JE CSS TOEVOEGD IN HTML *NIET AAN TE RADEN*
        // document.querySelector("main section section:nth-of-type(1)").style.background = '#A7C7EA';
        
    } else if (event.target.id === "friendship") {
        // SOURCE VAN DE AFBEELDING IN HET MIDDEN VERRANDEREN.
        document.querySelector("img#eevee").src = eeveeLution[5];

        // VERRANDER DE TEKST VAN DE H2 EN P ELEMENTEN.
        document.getElementById("pokemon-name").innerHTML = "#700 Sylveon";

        //EERST VERWIJDER JE ALLE ACHTERGROND CLASSES DAARNA VOEG JE DE CLASS VAN DE JUISTE POKEMON TOE.
        document.querySelector("main section section:nth-of-type(1)").classList.remove('background-leafeon','background-glaceon', 'background-flareon', 'background-jolteon', 'background-vaporeon', 'background-sylveon', 'background-umbreon', 'background-espeon', 'background-eevee');
        document.querySelector("main section section:nth-of-type(1)").classList.add('background-sylveon');


        // CODE WAARMEE JE CSS TOEVOEGD IN HTML *NIET AAN TE RADEN* ( HEB HET OPGELOST DOOR CLASSES TOE TE LATEN VOEGEN)
        // document.querySelector(".eevee").style.background = '#FFCBF7';
        
    } else if (event.target.id === "sun") {

        // SOURCE VAN DE AFBEELDING IN HET MIDDEN VERRANDEREN.
        document.querySelector("img#eevee").src = eeveeLution[6];
        
        // VERRANDER DE TEKST VAN DE H2 EN P ELEMENTEN.
        document.getElementById("pokemon-name").innerHTML = "#196 Espeon";

        // VOEGT EEN CLASS TOE DIE DE STENEN LAAT VERDWIJNEN & MAAKT DE ACHTERGROND EEN ANDERE KLEUR
        document.querySelector('html').classList.remove('html-espeon', 'html-umbreon', 'html-eevee')
        document.querySelector('html').classList.add('html-espeon');
        document.querySelector(".visible").classList.add('hidden');

        //EERST VERWIJDER JE ALLE ACHTERGROND CLASSES DAARNA VOEG JE DE CLASS VAN DE JUISTE POKEMON TOE.
        document.querySelector("main section section:nth-of-type(1)").classList.remove('background-leafeon','background-glaceon', 'background-flareon', 'background-jolteon', 'background-vaporeon', 'background-sylveon', 'background-umbreon', 'background-espeon', 'background-eevee');
        document.querySelector("main section section:nth-of-type(1)").classList.add('background-espeon');

        // CODE WAARMEE JE CSS TOEVOEGD IN HTML *NIET AAN TE RADEN*
        // document.querySelector("html").style.background = '#87CEEB';
        // document.querySelector("main section section:nth-of-type(1)").style.background = '#FCE570';

    }  else if (event.target.id === "moon") {
        document.querySelector("img#eevee").src = eeveeLution[7];   
        
        // VERRANDER DE TEKST VAN DE H2 EN P ELEMENTEN.
        document.getElementById("pokemon-name").innerHTML = "#197 Umbreon";

        // VOEGT EEN CLASS TOE DIE DE STENEN LAAT VERDWIJNEN & MAAKT DE ACHTERGROND EEN ANDERE KLEUR
        document.querySelector('html').classList.remove('html-espeon', 'html-umbreon', 'html-eevee')
        document.querySelector('html').classList.add('html-umbreon');
        document.querySelector(".visible").classList.add('hidden');

        //EERST VERWIJDER JE ALLE ACHTERGROND CLASSES DAARNA VOEG JE DE CLASS VAN DE JUISTE POKEMON TOE.
        document.querySelector("main section section:nth-of-type(1)").classList.remove('background-leafeon','background-glaceon', 'background-flareon', 'background-jolteon', 'background-vaporeon', 'background-sylveon', 'background-umbreon', 'background-espeon', 'background-eevee');
        document.querySelector("main section section:nth-of-type(1)").classList.add('background-umbreon');

        // CODE WAARMEE JE CSS TOEVOEGD IN HTML *NIET AAN TE RADEN*
        // document.querySelector("main section section:nth-of-type(1)").style.background = '#FEFCD7';
        
    } else if (event.target.id === "eevee") {
        document.querySelector("img#eevee").src = eeveeLution[8];  

        // VERRANDER DE TEKST VAN DE H2 EN P ELEMENTEN.
        document.getElementById("pokemon-name").innerHTML = "#133 Eevee";

         // VOEGT EEN CLASS TOE DIE DE STENEN LAAT VERDWIJNEN & MAAKT DE ACHTERGROND EEN ANDERE KLEUR
         document.querySelector('html').classList.remove('html-espeon', 'html-umbreon', 'html-eevee')
         document.querySelector('html').classList.add('html-eevee');
        
        
        // VERWIJDER DE CLASS DIE DE STENEN OM DE CIRKEL HEEN LATEN VERDWIJNEN EN MAAKT ZE WEER ZICHTBAAR.
        document.querySelector(".visible").classList.remove('hidden'); 
        
        //EERST VERWIJDER JE ALLE ACHTERGROND CLASSES DAARNA VOEG JE DE CLASS VAN DE JUISTE POKEMON TOE.
        document.querySelector("main section section:nth-of-type(1)").classList.remove('background-leafeon','background-glaceon', 'background-flareon', 'background-jolteon', 'background-vaporeon', 'background-sylveon', 'background-umbreon', 'background-espeon', 'background-eevee');
        document.querySelector("main section section:nth-of-type(1)").classList.add('background-eevee');

        // CODE WAARMEE JE CSS TOEVOEGD IN HTML *NIET AAN TE RADEN*
        // document.querySelector("main section section:nth-of-type(1)").style.background = '#CFBB98';
        // document.querySelector("html").style.backgroundImage = 'url(../images/background.png)'; 
        // document.querySelector("html").style.backgroundSize = 'cover'; 

    } 
    
};

// CREEËREN VAN EEN LOOP.

for (var i = 0; i < buttonStone.length; i++) {
    buttonStone[i].addEventListener('click', wijzig);
  };


stones.forEach(function (i){

    i.addEventListener('mouseover' , () =>{
        
        document.querySelector("#eevee").classList.add('eevee');
    }) 
})

stones.forEach(function (i){

    i.addEventListener('mouseleave' , () =>{
        
        document.querySelector("#eevee").classList.remove('eevee');
    }) 
})

// stones.addEventListener('mouseover', () =>{
//     console.log('heeeyyyy')
// })
  
