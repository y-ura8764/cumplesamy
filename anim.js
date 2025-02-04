// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "You are my church, you are my place of worship", time: 17 },
  { text: "I heard you're the plug, ban I be the circuit?", time: 21 },
  { text: "When I got court, I hope that you're the verdict", time: 23 },
  { text: "When you're around, my insides turn inverted", time: 28 },
  { text: "My blood starts to rush when I see you, darling", time: 34 },
  { text: "I know you're nearby and I know your purpose", time: 36 },
  { text: "Take one look at you, you're Heaven's incarnate", time: 42 },
  { text: "What is this spell, baby? Please show some mercy", time: 45 },
  { text: "Melting like an ice cream when", time: 48 },
  { text: "Melting like an ice cream when", time: 54 },
  { text:  "you smile", time: 57 },
  { text: "Melting, you're a daydream", time: 67 },
  { text: "stay a while", time: 73 },
  { text: "I pray that I can learn to be funny", time: 83 },
  { text: "I'm watching every stand-up comedy", time: 87 },
  { text: "Just hoping that it will rub off on me", time: 91 },
  { text: "So you'll smile at everything I say", time: 95 },
  { text: "You got some soft lips and some pearly whites (pearly whites)", time: 99 },
  { text: "I wanna touch them at the dead of night (dead of night)", time: 104},
  { text: "Your smile ignites just like a candlelight (candlelight)", time: 107 },
  { text: "Then somehow I know everything's alright", time: 111},
  { text: "Melting like an ice cream when you smile", time: 114 },
  { text: "Melting like an ice cream when you smile", time: 120 },
  { text: "Melting, you're a daydream", time: 129 },
  { text: "stay a while", time: 135 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);