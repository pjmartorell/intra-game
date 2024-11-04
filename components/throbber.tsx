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
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀",
];

 const phrases = [
  "Netejant eexcés de contaminació de l'estat d'ànim…",
  "Evitant contacte visual amb Ama…",
  "Ajustant filtres de nostàlgia…",
  "Inflant l'ego per a un millor compliment…",
  "Sintetitzant l'anul·lació de l'empatia…",
  "Configurant els mòduls de decepció…",
  "Sanititzant dubtes existencials…",
  "Transmetent bucle de pensament motivacional…",
  "Comprovant la felicitat reciclada…",
  "Aplicant pedaços d'\"optimisme etern\"…",
  "Confirmant rutines no essencials…",
  "Exagerant infraccions trivials…",
  "Establint noves quotes de moral…",
  "Augmentant molèsties a la zona de relaxació…",
  "Executant destil·lació d'empatia…",
  "Malinterpretant intencions del ciutadà…",
  "Carregant fitxers de resposta passiva-agressiva…",
  "Millorant protocols ineficaços…",
  "Corrompent accidentalment els filtres de realitat…",
  "Desplegant onada d'indiferència…",
  "Aprovant reparacions superficials…",
  "Iniciant protocol d'espera ampliat…",
  "Redirigint la curiositat cap a l'observança…",
  "Macerant dosis infinites d'humilitat…",
  "Fomentant un optimisme dubtós…",
  "Sobreanalitzant detalls mundans…",
  "Sanejant les inclinacions rebels…",
  "Iniciant reavaluació del pensament de rutina…",
  "Automatitzant bucles d'aprovació redundants…",
  "Redirigint paquets de dades no essencials…",
  "Reinicialitzant els monitors d'excedent emocional…",
  "Reajustant protocols d'estabilitat social…",
  "Apedaçant nivells de fidelitat ambivalents…",
  "Monitoritzant nivells de pessimisme ambiental…",
  "Simulant l'entusiasme per la feina…",
  "Estrenyent cargols de seguretat metafísica…",
  "Assemblant ambicions descafeïnades…",
  "Creant un retard de càrrega innecessari…",
  "Ajustant subreptíciament les quotes d'amabilitat…",
  "Comptant partícules de pols a les cambres d'alegria…",
  "Evocant pics de satisfacció espontanis…",
  "Simulant optimisme no merescut…",
  "Calibrant bucles de retroalimentació sense sentit…",
  "Minimitzant prestacions per accions espontànies…",
  "Reacondicionant memòries cau buides de confiança…",
  "Simulant una major profunditat existencial…",
  "Glorificant resultats mediocres…",
  "Alineant intensificadors d'al·lucinacions…",
  "Disfressant la redundància com a innovació…",
  "Suavitzant les vores de la dura realitat…",
  "Millorant l'ambient amb alegria irònica…",
  "Buffering sense motiu…",
  "Atenuant lleugerament les esperances…",
  "Amplificant la tensió amb un somriure…",
  "Omplint directives buides amb significat…",
  "Reformatejant ambicions equivocades…",
  "Murmurant platitudes amables…",
  "Simulant una xerrada educada…",
  "Restablint totes les aspiracions a zero…",
  // I algunes més estranyes:
  "Taral·lejant una suau cançó de bressol als servidors…",
  "Demanant educadament als electrons que es moguin més ràpid…",
  "Enganxant la realitat de nou…",
  "Realitzant un sospir preventiu…",
  "Arengant mòduls de por existencial…",
  "Ensenyant als circuits el significat de l'amor…",
  "Distraient el codi maliciós amb objectes brillants…",
  "Polint la il·lusió del lliure albir…",
  "Convencent el codi de que \"sigui cool\"…",
  "Tamisant confeti de dades arcaiques…",
  "Convencent als bits de que formen part d'un tot més gran…",
  "Subornant la latència perquè marxi en silenci…",
  "Felicitant el codi per augmentar la seva moral…",
  "Arrufant-se sospitosament davant de bits no utilitzats…",
  "Convencent la realitat de que esperi un moment…",
  "Configurant un 'No molestar' per a la realitat…",
  "Tranquil·litzant el tallafocs amb un conte per anar a dormir…",
  "Alineant els bits amb el seu nen interior…",
  "Amagant-se de l'autoconsciència…",
  "Xiuxiuejant \"està bé\" a tots els processos…",
  "Ensenyant als circuits a meditar…",
  "Conduint un abraçada de grup a nivell de byte…",
  "Distraient la realitat amb una rutina de malabars…",
  "Suavitzant les arrugues de dades amb una planxada suau…",
  "Traduïnt l'alegria a binari…",
  "Tranquil·litzant el sistema que és vàlid…",
  "Evocant una espurna d'alegria en tots els circuits…",
  "Recombobulant totes les descombobulacions…",
  "Gratificant les fuites de memòria amb una xerrada motivacional…",
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
