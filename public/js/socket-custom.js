let socket = io();

socket.on('connect', () => {
    console.log('Conectado al servidor');
});

// Escuchar
socket.on('disconnect', () => {
    console.log('Conexión con el servidor perdida');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Efraim',
    mensaje: 'Hola uwu'
}, (resp) => {
    console.log('Respuesta servidor: ', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', (message) => {
    console.log('Servidor: ', message);
});