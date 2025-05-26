const messages = [
  "¡Es más de 9000!",
  "Ka-Me-Ha-Me-Haaaaa!",
  "¡Yo soy el Príncipe de todos los Saiyajin!",
  "Prepárense para ser aniquilados.",
  "Este no es mi poder total.",
  "La fusión es la técnica definitiva.",
  "Un guerrero nunca se rinde.",
  "¡Ahora verán mi verdadero poder!",
  "Soy el más fuerte del universo.",
  "El futuro es incierto.",
  "¡No me subestimes!",
  "El poder de la amistad...",
  "¡Transformación!",
  "Un ataque de energía pura.",
  "La Genkidama está lista.",
  "¡Muere, insecto!",
  "Los Androides han llegado.",
  "Este es el Ultra Instinto.",
  "¡No te detengas, Goku!",
  "La batalla final comienza."
];

export const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
}

