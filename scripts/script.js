// JavaScript Document
console.log("Howdy!");

// AANMAKEN VAN VARIABELEN

var eeveeLution = ["images/glaceon.png", "images/leafeon.png", "images/flareon.png", "images/jolteon.png", "images/vaporeon.png", "images/sylveon.png", "images/espeon.png", "images/umbreon.png", "images/eevee.png"];
var soundLution = ["sound/glaceon.mp3", "sound/leafeon.mp3", "sound/flareon.mp3", "sound/jolteon.mp3", "sound/vaporeon.mp3", "sound/sylveon.mp3", "sound/espeon.mp3", "sound/umbreon.mp3", "sound/eevee.mp3"];
var buttonStone = document.querySelectorAll(".stones");
var stones = document.querySelectorAll('.stones')
var audio = document.querySelector("footer audio");

// FUNCTIE VOOR HET AFSPELEN
function playSound() {
    audio.play()
  };

//ALS JE KLIKT OP DE POKÉMON IN HET MIDDEN WORD HET VOLGENDE UITGEVOERD
document.getElementById('circle').onclick = function() {   
    this.classList.toggle('eevee-clicked'); 
    document.querySelector('article').classList.toggle('visible');  
    playSound();
    
    
};



// VERRANDEREN VAN POKÉMON.
function wijzig(target) {

    //ALS DE PARAMETER GELIJK IS AAN HET ID VAN DE STEEN WORD DE AFBEELDING VERVANGEN.
  
    
    if (event.target.id === "icestone") {
      // SOURCE VAN DE AFBEELDING IN HET MIDDEN EN AUDIO VERRANDEREN.  
      document.querySelector("img#eevee").src = eeveeLution[0];
      document.querySelector("#audio").src = soundLution[0];
      
      // VERRANDER DE TEKST VAN DE H2 EN P ELEMENTEN.
      document.getElementById("pokemon-name").innerHTML = "#471 Glaceon";
      document.getElementById("pokemon-type").innerHTML = "Ice";
      document.getElementById("pokemon-info").innerHTML = "Glaceon is a quadrupedal, mammalian Pokémon covered in light-blue fur that can be frozen into sharp quills. It has long, pointed ears, dark eyes, and a small nose. A teal crest with two dangling flaps adorns its head, resembling hair or headgear. Glaceon has two dark blue, rhombus-shaped markings on its back; the tip of its tail, feet, and flaps are the same shade of blue. </br> </br> By controlling its body temperature, the moisture in the air freezes, producing ice crystals or diamond dust surrounding it. It is capable of freezing its fur into sharp needle-like icicles, which it can fire at opponents or use as protection as it tackles at its prey. It can quickly drop its body temperature below −60 °C. Glaceon is rather popular in ski resorts due to its ability to create powdery snow. Those captivated by Glaceon's beautiful snowfall will be instantly frozen without realizing it.";

      //EERST VERWIJDER JE ALLE ACHTERGROND CLASSES DAARNA VOEG JE DE CLASS VAN DE JUISTE POKEMON TOE.
      document.querySelector("main section section:nth-of-type(1)").classList.remove('background-leafeon','background-glaceon', 'background-flareon', 'background-jolteon', 'background-vaporeon', 'background-sylveon', 'background-umbreon', 'background-espeon', 'background-eevee');
      document.querySelector("main section section:nth-of-type(1)").classList.add('background-glaceon');

    // CODE WAARMEE JE CSS TOEVOEGD IN HTML *NIET AAN TE RADEN*
    //   document.querySelector(".eevee").style.background = '#DEF0F3';
      
      
    } else if (event.target.id === "leafstone") {
        // SOURCE VAN DE AFBEELDING IN HET MIDDEN VERRANDEREN.
        document.querySelector("img#eevee").src = eeveeLution[1];
        document.querySelector("#audio").src = soundLution[1];

        // VERRANDER DE TEKST VAN DE H2 EN P ELEMENTEN.
        document.getElementById("pokemon-name").innerHTML = "#470 Leafeon";
        document.getElementById("pokemon-type").innerHTML = "Grass";
        document.getElementById("pokemon-info").innerHTML = "Leafeon is a mammalian, quadrupedal Pokémon. Leafeon's ears and tail resemble tattered leaves. It has brown eyes and a small, brown nose. </br> </br> This Pokémon's cellular structure is similar to plants, which allows it to perform photosynthesis and purify the air around it by sleeping under the sunlight; it gets its energy in this way instead of eating. It is a pacifistic, quiet Pokémon, preferring not to fight, though it will sharpen its leafy tail for the occasions it needs to. The tail's sharpness is said to exceed that of a master's sword, sharp enough to cut down a large tree with one hit. Its aroma is similar to fresh grass in its youth; as it ages, this fragrance bears more of a resemblance to fallen leaves. The aroma is favored in Galar, where it is used to create a popular perfume. It lives in lush forests that have clean rivers."

        //EERST VERWIJDER JE ALLE ACHTERGROND CLASSES DAARNA VOEG JE DE CLASS VAN DE JUISTE POKEMON TOE.
        document.querySelector("main section section:nth-of-type(1)").classList.remove('background-leafeon','background-glaceon', 'background-flareon', 'background-jolteon', 'background-vaporeon', 'background-sylveon', 'background-umbreon', 'background-espeon', 'background-eevee');
        document.querySelector("main section section:nth-of-type(1)").classList.add('background-leafeon');
        
        // CODE WAARMEE JE CSS TOEVOEGD IN HTML *NIET AAN TE RADEN*
        // document.querySelector(".eevee").style.background = '#C0CF9C';
        
    } else if (event.target.id === "firestone") {
        // SOURCE VAN DE AFBEELDING IN HET MIDDEN VERRANDEREN.
        document.querySelector("img#eevee").src = eeveeLution[2];
        document.querySelector("#audio").src = soundLution[2];

        // VERRANDER DE TEKST VAN DE H2 EN P ELEMENTEN.
        document.getElementById("pokemon-name").innerHTML = "#136 Flareon";
        document.getElementById("pokemon-type").innerHTML = "Fire";
        document.getElementById("pokemon-info").innerHTML = "Flareon is a mammalian, quadrupedal Pokémon covered in short, reddish-orange fur. It has long ears with black interiors, dark eyes, and a small black nose. There are three small toes and a yellow paw pad on each foot. Fluffy yellow fur forms a small tuft on its head, as well as its bushy tail and a mane around its chest and neck. </br> </br> Flareon's body temperature is caused by its internal flame sac, and rises when it is excited. If its body gets too hot, it will fluff out the fur on its collar to cool down. Flareon stores and heats inhaled air in its flame sac and then exhales it as fire. Flareon's average body temperature is around 700-800 °C, but it can reach temperatures of about 900-1,700 °C. It is an omnivore that roasts either Berries or prey before consumption. Flareon has a curious personality, and is mostly found in populated areas, rarely seen in the wilderness. "

        //EERST VERWIJDER JE ALLE ACHTERGROND CLASSES DAARNA VOEG JE DE CLASS VAN DE JUISTE POKEMON TOE.
        document.querySelector("main section section:nth-of-type(1)").classList.remove('background-leafeon','background-glaceon', 'background-flareon', 'background-jolteon', 'background-vaporeon', 'background-sylveon', 'background-umbreon', 'background-espeon', 'background-eevee');
        document.querySelector("main section section:nth-of-type(1)").classList.add('background-flareon');

        // CODE WAARMEE JE CSS TOEVOEGD IN HTML *NIET AAN TE RADEN*
        // document.querySelector(".eevee").style.background = '#E98E33';
        
    } else if (event.target.id === "thunderstone") {
        // SOURCE VAN DE AFBEELDING IN HET MIDDEN VERRANDEREN.
        document.querySelector("img#eevee").src = eeveeLution[3];
        document.querySelector("#audio").src = soundLution[3];

        // VERRANDER DE TEKST VAN DE H2 EN P ELEMENTEN.
        document.getElementById("pokemon-name").innerHTML = "#135 Jolteon";
        document.getElementById("pokemon-type").innerHTML = "Electric";
        document.getElementById("pokemon-info").innerHTML = "Jolteon is a quadrupedal, mammalian Pokémon. It is covered in yellow fur with a spiky fringe around its tail and a white ruff around its neck. Its ears are large and pointed with black interiors, and its eyes and small nose are black. It has slender legs and small paws, each with three toes and a pink paw-pad. </br> </br> Jolteon's prickly fur is made of electrically charged needles and generates negatively charged ions, which create a sparking noise as it moves. It also has an electricity-generating organ in its lungs, and crackles of electricity can often be heard when Jolteon exhales. The static electricity in its fur amplifies the low-level electricity generated by its cells and allow it to discharge 10,000-volt lightning bolts. This Pokémon is most often found in cities and towns under the ownership of Trainers. However, its high-strung nature and tendency toward mood swings can make it difficult to train."

        //EERST VERWIJDER JE ALLE ACHTERGROND CLASSES DAARNA VOEG JE DE CLASS VAN DE JUISTE POKEMON TOE.
        document.querySelector("main section section:nth-of-type(1)").classList.remove('background-leafeon','background-glaceon', 'background-flareon', 'background-jolteon', 'background-vaporeon', 'background-sylveon', 'background-umbreon', 'background-espeon', 'background-eevee');
        document.querySelector("main section section:nth-of-type(1)").classList.add('background-jolteon');

        // CODE WAARMEE JE CSS TOEVOEGD IN HTML *NIET AAN TE RADEN*
        // document.querySelector("main section section:nth-of-type(1)").style.background = '#CDDF81';
        
    } else if (event.target.id === "waterstone") {
        // SOURCE VAN DE AFBEELDING IN HET MIDDEN VERRANDEREN.
        document.querySelector("img#eevee").src = eeveeLution[4];
        document.querySelector("#audio").src = soundLution[4];

        // VERRANDER DE TEKST VAN DE H2 EN P ELEMENTEN.
        document.getElementById("pokemon-name").innerHTML = "#134 Vaporeon";
        document.getElementById("pokemon-type").innerHTML = "Water";
        document.getElementById("pokemon-info").innerHTML = "Vaporeon is a Pokémon that shares physical traits with both aquatic and land animals. Vaporeon is a quadruped with three small toes on each foot and dark blue paw pads on the hind feet. Its split tail fin has been mistaken for a mermaid's in the past, which is believed to be the cause for mermaid folklore. It can detect moisture with its fins, which vibrate when rain will fall soon. </br> </br> Vaporeon is mostly found in urban settings under the ownership of a Trainer. It is rarely seen in the wild, but it prefers clean freshwater lakes and shores. It has developed gills to become better suited to an aquatic lifestyle, and its cell composition's similarity to water allows it to melt into the water. This ability enables Vaporeon to remain camouflaged while swimming and ambush its prey: fish Pokémon. " 

        //EERST VERWIJDER JE ALLE ACHTERGROND CLASSES DAARNA VOEG JE DE CLASS VAN DE JUISTE POKEMON TOE.
        document.querySelector("main section section:nth-of-type(1)").classList.remove('background-leafeon','background-glaceon', 'background-flareon', 'background-jolteon', 'background-vaporeon', 'background-sylveon', 'background-umbreon', 'background-espeon', 'background-eevee');
        document.querySelector("main section section:nth-of-type(1)").classList.add('background-vaporeon');


        // CODE WAARMEE JE CSS TOEVOEGD IN HTML *NIET AAN TE RADEN*
        // document.querySelector("main section section:nth-of-type(1)").style.background = '#A7C7EA';
        
    } else if (event.target.id === "friendship") {
        // SOURCE VAN DE AFBEELDING IN HET MIDDEN VERRANDEREN.
        document.querySelector("img#eevee").src = eeveeLution[5];
        document.querySelector("#audio").src = soundLution[5];

        // VERRANDER DE TEKST VAN DE H2 EN P ELEMENTEN.
        document.getElementById("pokemon-name").innerHTML = "#700 Sylveon";
        document.getElementById("pokemon-type").innerHTML = "Fairy";
        document.getElementById("pokemon-info").innerHTML = "Sylveon is a quadrupedal, mammalian Pokémon. </br> </br> Sylveon's ribbon-like feelers emit a soothing aura that erases any sense of hostility, enabling it to stop fights instantly. When hunting, it swirls its feelers as a distraction while the aura weakens feelings of hostility in its prey, then it pounces on the victim. It will also wrap its feelers around its Trainer's arm as they walk together, which allows it to read their feelings. When a fight breaks out between Sylveon and Dragon-type Pokémon, Sylveon will bravely charge at them even if they are much bigger than itself; in Galar, this feat is told as a fairy tale."

        //EERST VERWIJDER JE ALLE ACHTERGROND CLASSES DAARNA VOEG JE DE CLASS VAN DE JUISTE POKEMON TOE.
        document.querySelector("main section section:nth-of-type(1)").classList.remove('background-leafeon','background-glaceon', 'background-flareon', 'background-jolteon', 'background-vaporeon', 'background-sylveon', 'background-umbreon', 'background-espeon', 'background-eevee');
        document.querySelector("main section section:nth-of-type(1)").classList.add('background-sylveon');


        // CODE WAARMEE JE CSS TOEVOEGD IN HTML *NIET AAN TE RADEN* ( HEB HET OPGELOST DOOR CLASSES TOE TE LATEN VOEGEN)
        // document.querySelector(".eevee").style.background = '#FFCBF7';
        
    } else if (event.target.id === "sun") {

        // SOURCE VAN DE AFBEELDING IN HET MIDDEN VERRANDEREN.
        document.querySelector("img#eevee").src = eeveeLution[6];
        document.querySelector("#audio").src = soundLution[6];
        
        // VERRANDER DE TEKST VAN DE H2 EN P ELEMENTEN.
        document.getElementById("pokemon-name").innerHTML = "#196 Espeon";
        document.getElementById("pokemon-type").innerHTML = "Psychic";
        document.getElementById("pokemon-info").innerHTML = "Espeon is a quadrupedal, mammalian Pokémon with slender legs and dainty paws. </br> </br> Espeon's velvety fur is so sensitive that it can sense minuscule shifts in the air, allowing it to predict the weather and its enemies' movements. By doing so, the tip of its tail quivers. The gem on Espeon's forehead glows when it unleashes psychic energy from the gem and darkens when all of the built-up energy has been exhausted. Espeon builds up its psychic power by bathing in the sunlight. As such, it does not handle battles at night well. Espeon shows extreme loyalty to any Trainer that it considers worthy, even being said to have awakened its psychic powers from its desire to protect its Trainer; some sources, however, theorize that its powers were born from its need to keep itself safe. </br></br> This Pokémon is rare in the wild, instead being more commonly found in urban areas, under the ownership of other Trainers."

        // VOEGT EEN CLASS TOE DIE DE STENEN LAAT VERDWIJNEN & MAAKT DE ACHTERGROND EEN ANDERE KLEUR
        document.querySelector('html').classList.remove('html-espeon', 'html-umbreon', 'html-eevee')
        document.querySelector('html').classList.add('html-espeon');
        document.querySelector(".visible").classList.add('hidden');
        document.querySelector("article").classList.add('p-color');
        document.querySelector('#pokemon-type').classList.add('type-border-color');

        //EERST VERWIJDER JE ALLE ACHTERGROND CLASSES DAARNA VOEG JE DE CLASS VAN DE JUISTE POKEMON TOE.
        document.querySelector("main section section:nth-of-type(1)").classList.remove('background-leafeon','background-glaceon', 'background-flareon', 'background-jolteon', 'background-vaporeon', 'background-sylveon', 'background-umbreon', 'background-espeon', 'background-eevee');
        document.querySelector("main section section:nth-of-type(1)").classList.add('background-espeon');

        // CODE WAARMEE JE CSS TOEVOEGD IN HTML *NIET AAN TE RADEN*
        // document.querySelector("html").style.background = '#87CEEB';
        // document.querySelector("main section section:nth-of-type(1)").style.background = '#FCE570';

    }  else if (event.target.id === "moon") {
        document.querySelector("img#eevee").src = eeveeLution[7];   
        document.querySelector("#audio").src = soundLution[7];

        // VERRANDER DE TEKST VAN DE H2 EN P ELEMENTEN.
        document.getElementById("pokemon-name").innerHTML = "#197 Umbreon";
        document.getElementById("pokemon-type").innerHTML = "Dark";
        document.getElementById("pokemon-info").innerHTML = "Umbreon is a mammalian Pokémon which has a sleek, black body with four slender legs and crimson eyes. </br></br> Umbreon's evolution is the result of Eevee being exposed to the moonlight, which altered its genetic structure. Its yellow rings glow when Umbreon is excited, such as when it leaps to attack, or when exposed to the moon's aura, filling Umbreon with a mysterious energy. Umbreon hunts at night and, as such, has well-developed eyes that can spot a prey even in darkness. Its black fur helps it blend into the night while waiting for the right moment to pounce. When it does, its rings emit a dim yet ominous glow, and it lunges for the prey's throat before eating it. Whenever angered or agitated, Umbreon sprays poisonous sweat secreted from its pores into the offender's eyes to protect itself. </br></br> This Pokémon is rare in the wild, instead being more commonly found in urban areas, under the ownership of other Trainers."

        // VOEGT EEN CLASS TOE DIE DE STENEN LAAT VERDWIJNEN & MAAKT DE ACHTERGROND EEN ANDERE KLEUR
        document.querySelector('html').classList.remove('html-espeon', 'html-umbreon', 'html-eevee')
        document.querySelector('html').classList.add('html-umbreon');
        document.querySelector(".visible").classList.add('hidden');
        document.querySelector("article").classList.add('p-color');
        document.querySelector('#pokemon-type').classList.add('type-border-color');


        //EERST VERWIJDER JE ALLE ACHTERGROND CLASSES DAARNA VOEG JE DE CLASS VAN DE JUISTE POKEMON TOE.
        document.querySelector("main section section:nth-of-type(1)").classList.remove('background-leafeon','background-glaceon', 'background-flareon', 'background-jolteon', 'background-vaporeon', 'background-sylveon', 'background-umbreon', 'background-espeon', 'background-eevee');
        document.querySelector("main section section:nth-of-type(1)").classList.add('background-umbreon');

        // CODE WAARMEE JE CSS TOEVOEGD IN HTML *NIET AAN TE RADEN*
        // document.querySelector("main section section:nth-of-type(1)").style.background = '#FEFCD7';
        
    } else if (event.target.id === "eevee") {
        
        document.querySelector("img#eevee").src = eeveeLution[8]; 
        document.querySelector("#audio").src = soundLution[8]; 

        // VERRANDER DE TEKST VAN DE H2 EN P ELEMENTEN.
        document.getElementById("pokemon-name").innerHTML = "#133 Eevee";
        document.getElementById("pokemon-type").innerHTML = "Normal";
        document.getElementById("pokemon-info").innerHTML = " Eevee is a small, mammalian, quadrupedal Pokémon with primarily brown fur. The tip of its bushy tail and its large furry collar are cream-colored. It has short, slender legs with three small toes and a pink paw pad on each foot. Eevee has brown eyes, long pointed ears with dark brown interiors, and a small black nose.</br> </br> Eevee is rarely found in the wild and is mostly only found in cities and towns. However, it is said to have an irregularly shaped genetic structure that is easily influenced by its environment. This allows it to adapt to a variety of habitats by evolving. Eevee can potentially evolve into eight different evolutions. Eevee can also adapt the face of the Trainer that owns it. Eevee's genes are believed to have the key to solving the mysteries of Pokémon evolution. "

         // VOEGT EEN CLASS TOE DIE DE STENEN LAAT VERDWIJNEN & MAAKT DE ACHTERGROND EEN ANDERE KLEUR
         document.querySelector('html').classList.remove('html-espeon', 'html-umbreon', 'html-eevee')
         document.querySelector('html').classList.add('html-eevee');
         document.querySelector("article").classList.remove('p-color');
         document.querySelector('#pokemon-type').classList.remove('type-border-color');
        
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



// Ik begrijp niet alles wat hier gebeurd maar wel een beetje, met hulp van Jeffrey geschreven.
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
  
