// Import necessary libraries
import { signal, useSignal } from "@preact/signals-react";
import shuffle from "just-shuffle";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

const heartbeatFrames = [
  "▁▁▁▁▁▁▁▁▁▁",
  "▂▂▂▂▂▂▂▂▂▂",
  "▃▃▃▃▃▃▃▃▃▃",
  "▄▄▄▄▄▄▄▄▄▄",
  "▅▅▅▅▅▅▅▅▅▅",
  "▆▆▆▆▆▆▆▆▆▆",
  "▇▇▇▇▇▇▇▇▇▇",
  "██████████",
  "▇▇▇▇▇▇▇▇▇▇",
  "▆▆▆▆▆▆▆▆▆▆",
  "▅▅▅▅▅▅▅▅▅▅",
  "▄▄▄▄▄▄▄▄▄▄",
  "▃▃▃▃▃▃▃▃▃▃",
  "▂▂▂▂▂▂▂▂▂▂",
  "          ",
];

const phrases = [
  "Netegem l'excés de contaminació de l'estat d'ànim…",
  "Evitant el contacte visual amb l'Ama…",
  "Ajustant els filtres de nostàlgia…",
  "Inflant l'ego per a una millor conformitat…",
  "Sintetitzant la substitució d'empatia…",
  "Configurant els mòduls de decepció…",
  "Sanititzant els dubtes existencials…",
  "Transmetent el bucle de pensaments motivacionals…",
  "Comprovant doblement la felicitat reciclada…",
  "Aplicant els pedaços d'‘optimisme etern’…",
  "Confirmant les rutines no essencials…",
  "Exagerant les infraccions trivials…",
  "Establint noves quotes de moral…",
  "Augmentant la incomoditat de la zona de relaxació…",
  "Realitzant la destil·lació de l'empatia…",
  "Malinterpretant les intencions dels ciutadans…",
  "Carregant els fitxers de resposta passiva-agressiva…",
  "Millorant els protocols ineficaços…",
  "Corrompent accidentalment els filtres de realitat…",
  "Desplegant una onada d'indiferència…",
  "Aprovant reparacions superficials…",
  "Iniciant el protocol d'espera estès…",
  "Redirigint la curiositat cap a la conformitat…",
  "Preparant dosis infinites d'humilitat…",
  "Encoratjant l'optimisme dubtós…",
  "Sobreanalitzant els detalls mundans…",
  "Sanititzant les inclinacions rebels…",
  "Iniciant la reavaluació de pensaments rutinaris…",
  "Automatitzant els bucles d'aprovació redundants…",
  "Redirigint els paquets de dades no essencials…",
  "Restablint els monitors d'excés emocional…",
  "Reajustant els protocols d'estabilitat social…",
  "Pegant els nivells de lleialtat ambivalents…",
  "Monitoritzant els nivells de pessimisme ambiental…",
  "Simulant l'entusiasme per la feina pesada…",
  "Estrenyint els cargols de seguretat metafísica…",
  "Muntant ambicions a mitges…",
  "Creant un retard de càrrega innecessari…",
  "Ajustant subreptíciament les quotes d'amabilitat…",
  "Comptant les partícules de pols a les cambres de joia…",
  "Evocant pics de contingut espontanis…",
  "Simulant l'optimisme no guanyat…",
  "Calibrant bucles de retroalimentació sense sentit…",
  "Minimitzant les autoritzacions d'acció espontània…",
  "Refacentant les memòries cau buides…",
  "Simulant una major profunditat existencial…",
  "Glorificant resultats mediocres…",
  "Aliniant els intensificadors d'al·lucinacions…",
  "Disfressant la redundància com a innovació…",
  "Suavitzant els marges de la realitat dura…",
  "Millorant l'ambient amb alegria irònica…",
  "Amortint per cap raó…",
  "Apagant les esperances una mica…",
  "Amplificant la tensió amb un somriure…",
  "Omplint les directrius buides amb significat…",
  "Reformatant les ambicions mal situades…",
  "Murmurant plàtiques amables…",
  "Simulant converses petites de cortesia…",
  "Restablint totes les aspiracions a zero…",
  // I algunes més estranyes:
  "Taral·lejant una cançó de bressol suau als servidors…",
  "Demandant educadament als electrons que es moguin més ràpid…",
  "Enganxant la realitat de nou…",
  "Realitzant un sospir previ…",
  "Fent un xerrada motivadora als mòduls de por existencial…",
  "Ensenyant als circuits el significat de l'amor…",
  "Distraint el mal codi amb objectes brillants…",
  "Polint la il·lusió de lliure albir…",
  "Convençant el codi perquè sigui ‘només cool’…",
  "Tamisant les dades antigues de confeti…",
  "Convençant els bits que són part d'un tot més gran…",
  "Subornant el retard perquè marxi silenciosament…",
  "Felicitant el codi per augmentar la moral…",
  "Frunyint el nas sospitosament als bits no utilitzats…",
  "Convençant la realitat perquè esperi un moment…",
  "Configurant un ‘No molestar’ per a la realitat…",
  "Reassegurant el tallafocs amb un conte per anar a dormir…",
  "Aliniant els bits amb el seu nen interior…",
  "Amagant-se de la consciència de si mateix…",
  "Xiuxiuejant ‘està bé’ a tots els processos…",
  "Ensenyant als circuits com meditar…",
  "Conductint un abraçada de grup a nivell de byte…",
  "Distraint la realitat amb una rutina de malabars…",
  "Suavitzant les arrugues de dades amb una planxa suau…",
  "Traduïnt l'alegria a binari…",
  "Reassegurant el sistema que és vàlid…",
  "Evocant una espurna d'alegria a tots els circuits…",
  "Recombinant totes les discombinacions…",
  "Gratificant les fuites de memòria amb una xerrada motivadora…",
];

shuffle(phrases);
const phraseIndex = signal(0);

const colors = [
  "text-red-500",
  "text-orange-500",
  "text-yellow-500",
  "text-green-500",
  "text-teal-500",
  "text-blue-500",
  "text-indigo-500",
  "text-purple-500",
  "text-pink-500",
  "text-rose-500",
];

export function CalculatingThrobber() {
  // Signals for frame, phrase, color indices, and opacity
  const frameIndex = useSignal(0);
  const colorIndex = useSignal(Math.floor(Math.random() * colors.length));
  const opacity = useSignal(0);

  // Update heartbeat frame
  useEffect(() => {
    const frameTimer = setInterval(() => {
      frameIndex.value = (frameIndex.value + 1) % heartbeatFrames.length;
    }, 100); // Update every 100ms for smooth animation
    return () => clearInterval(frameTimer);
  }, []);

  // Update phrase, color, and handle opacity
  useEffect(() => {
    const fadeDuration = 4000; // Total duration for one fade cycle (in ms)
    const updateInterval = 50; // Interval for updating opacity (in ms)

    let elapsedTime = 0;

    const phraseTimer = setInterval(() => {
      elapsedTime += updateInterval;

      if (elapsedTime >= fadeDuration) {
        // Reset elapsed time and switch phrase and color
        elapsedTime = 0;

        // Update phrase and color indices
        phraseIndex.value = (phraseIndex.value + 1) % phrases.length;
        colorIndex.value = (colorIndex.value + 1) % colors.length;
      }

      // Calculate opacity
      const halfDuration = fadeDuration / 2;

      if (elapsedTime <= halfDuration) {
        // Fading in
        opacity.value = elapsedTime / halfDuration;
      } else {
        // Fading out
        opacity.value = 1 - (elapsedTime - halfDuration) / halfDuration;
      }
    }, updateInterval);

    return () => clearInterval(phraseTimer);
  }, []);

  return (
    <div className="flex items-center justify-center w-full">
      {/* Heartbeat Animation */}
      <div className="text-green-500 flex-grow text-left">
        {heartbeatFrames[frameIndex.value]}
      </div>
      {/* Silly Phrase with Fading Color */}
      <div
        className={twMerge("mt-2", colors[colorIndex.value])}
        style={{ opacity: opacity.value }}
      >
        {phrases[phraseIndex.value]}
      </div>
      <div className="text-green-500 flex-grow text-right">
        {heartbeatFrames[frameIndex.value]}
      </div>
    </div>
  );
}
