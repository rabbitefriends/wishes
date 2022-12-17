// First Call to define "parchment" height
document.onload = ScrollHeight();

// Redraw when viewport is modified
window.addEventListener('resize', function(event){
  ScrollHeight();
});


function ScrollHeight() {
  var content = document.querySelector('#parchment');
  var container = document.querySelector('#poem');

  // SVG feTurbulence can modify all others elements, fo this reason "parchment" is in another <div> and in absolute position.
  // so for a better effect, absolute height is defined by his content.
  content.style.height = container.offsetHeight + 500 + 'px';
}

const btnEN = document.getElementById('enbutton');
const btnIT = document.getElementById('itbutton');
const btnES = document.getElementById('esbutton');

const someHeader = document.getElementById('poem');

var itPoem = `Robi, la ragazza elfa, amava i libri <br>
Le sue giornate trascorse a sfogliare pagine <br>
Ma Rocky, la volpe irrequieta, voleva altro <br>
E la pregava di uscire a giocare, senza fortuna <br>
<br>
Un giorno, decisero di salire sulla montagna <br>
Per mostrare a una stella marina le terre aride <br>
Robi la teneva con cura, senza farle del male <br>
Mentre esploravano i picchi, la volpe e l elfa innamorata <br>
<br>
La stella marina era estasiata dalle cose che vedeva <br>
I dirupi rocciosi e gli abeti alti <br>
Robi era incantata dalla sua bellezza e spontaneita' <br>
E se ne innamoro', come faceva sempre <br>
<br>
In un impeto di passione, la mise nelle mutandine <br>
E con grande piacere, la stella marina si trasformo' in un uomo <br>
Rocky si eccito', non credendo ai suoi occhi <br>
Mentre Robi godeva della sua nuova compagnia <br>`;

var esPoem =`Robi, la chica elfa, amaba los libros <br>
Sus dias pasados hojeando paginas <br>
Pero Rocky, la zorra inquieta, queria mas <br>
Y le pedia que saliera a jugar, sin exito <br>
<br>
Un dia, decidieron subir a la montana <br>
Para mostrar a una estrella de mar las tierras aridas <br>
Robi la sostenia con cuidado, sin hacerle dano <br>
Mientras exploraban los picos, la zorra y la elfa enamorada <br>
<br>
La estrella de mar estaba extasiada con lo que veia <br>
Los riscos rocosos y los abetos altos <br>
Robi estaba encantada con su belleza y espontaneidad <br>
Y se enamoro, como siempre lo hacia <br>
<br>
En un impulso de pasion, la puso en sus calzones <br>
Y con gran placer, la estrella de mar se transformo en un hombre <br>
Rocky se excito, no podia creer lo que veia <br>
Mientras Robi disfrutaba de su nueva compania <br>`; 

var enPoem =`Robi, the elf girl, was in love with books <br>
Her days spent reading stories and tales <br>
But Rocky, the restless fox, had other looks <br>
And begged her to come out and play, to no avail <br>
<br>
One day, they took a trip to the mountains high <br>
To show a starfish the dry land above <br>
Robi held it gently, not wanting it to die <br>
As they explored the peaks, the fox and the elf in love <br>
<br>
The starfish was awestruck by the sights it saw <br>
The rocky crags and the evergreens so tall <br>
Robi was enchanted by its beauty and raw <br>
And fell in love with it, as she did with all <br>
<br>
She kissed its cold, wet skin, and to her surprise <br>
The starfish transformed into a man before her eyes <br>
His body now human, but his heart still of the sea <br>
Robi was in awe, unable to believe what she was seeing <br>`;

btnEN.addEventListener('click', function() {
  someHeader.innerHTML=enPoem;
});

btnIT.addEventListener('click', function() {
  someHeader.innerHTML=itPoem;
});

btnES.addEventListener('click', function() {
  someHeader.innerHTML=esPoem;
});

function Play(which)
{
  var myAudio = document.getElementById(which);
  if(myAudio.paused) {
      myAudio.play();
  }
  else {
     myAudio.pause();
  }
}

function Stop(which)
{
  if (which == 'audioIT') {
    var myAudioEN = document.getElementById("audioEN");
    var myAudioES = document.getElementById("audioES");
    myAudioEN.pause();
    myAudioES.pause();
  }

    if (which == 'audioEN') {
    var myAudioIT = document.getElementById("audioIT");
    var myAudioES = document.getElementById("audioES");
    myAudioIT.pause();
    myAudioES.pause();
  }

    if (which == 'audioES') {
    var myAudioEN = document.getElementById("audioEN");
    var myAudioIT = document.getElementById("audioIT");
    myAudioEN.pause();
    myAudioIT.pause();
  }

   if (which == 'all') {
  var myAudioEN = document.getElementById("audioEN");
  var myAudioES = document.getElementById("audioES");
  var myAudioIT = document.getElementById("audioIT");

  myAudioEN.pause();
  myAudioES.pause();
  myAudioES.pause();
}
}