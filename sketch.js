let video;
let botonInicio;
let sonidos = [];

function preload() {
  // Cargar los sonidos de notificación y manejar posibles errores
  for (let i = 1; i <= 10; i++) {
    let rutaSonido = `sonidos/audio_${i.toString().padStart(2, '0')}/${i.toString().padStart(2, '0')}.wav`;
    loadSound(rutaSonido, (sonido) => {
      console.log(`Sonido ${rutaSonido} cargado correctamente`);
      sonidos.push(sonido);
    }, (err) => {
      console.error(`Error al cargar el sonido ${rutaSonido}:`, err);
    });
  }
}

function setup() {
  noCanvas();
  video = select('#video-arte');
  video.hide();
  video.elt.onended = reiniciarExperiencia;
  botonInicio = select('#boton-inicio');
  botonInicio.mousePressed(iniciarExperiencia);

  // Comprobaciones de depuración
  console.log('Setup completo');
  console.log('Video seleccionado:', video);
  console.log('Botón seleccionado:', botonInicio);
}

function iniciarExperiencia() {
  console.log('Iniciar experiencia');
  botonInicio.hide();
  document.getElementById('fondo-arte').style.filter = 'none';
  video.show();
  video.elt.play();
  setTimeout(() => {
    video.elt.pause();
    document.getElementById('fondo-arte').style.filter = 'blur(10px)';
    iniciarCreacionVentanas();
  }, 3000);
}

function iniciarCreacionVentanas() {
  console.log('Iniciar creación de ventanas');
}

function reiniciarExperiencia() {
  video.hide();
  video.stop();
  video.elt.currentTime = 0;
  document.getElementById('fondo-arte').style.filter = 'none';
  botonInicio.show();
}
