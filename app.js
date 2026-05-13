const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// 1. Inicializamos el cliente con persistencia de sesión
const client = new Client({
    authStrategy: new LocalAuth(), // Para no tener que escanear el QR cada vez
    puppeteer: {
        handleSIGINT: false,
        args: ['--no-sandbox']
    }
});

// 2. Generar el código QR en la terminal
client.on('qr', (qr) => {
    console.log('Escanea este código QR con tu WhatsApp:');
    qrcode.generate(qr, { small: true });
});

// 3. Confirmar conexión
client.on('ready', () => {
    console.log('¡Agente de WhatsApp conectado y listo!');
});

// 4. Lógica de respuesta (Aquí es donde ocurre la magia)
client.on('message', async (msg) => {
    console.log(`Mensaje recibido de ${msg.from}: ${msg.body}`);

    // Ejemplo de respuesta automática simple
    if (msg.body.toLowerCase().includes('hola')) {
        msg.reply('¡Hola! Soy tu Agente Nexus. ¿En qué puedo ayudarte hoy? 🤖');
    }
    
    // Aquí es donde más adelante conectaremos la IA (OpenAI/Gemini)
});

client.initialize();