🤖 WhatsApp AI Agent Engine
WhatsApp AI Agent Engine es un sistema de automatización basado en Node.js que transforma una cuenta de WhatsApp estándar en un agente inteligente de atención al cliente o ventas. Utiliza un navegador automatizado para gestionar la comunicación sin depender de la API oficial de pago.

🌟 Características
Conexión via QR: Sincronización instantánea mediante escaneo de código QR (basado en WhatsApp Web).

Persistencia de Sesión: Almacenamiento local de credenciales para evitar re-escaneos constantes.

Monitor de Eventos: Registro en tiempo real de mensajes entrantes, estados (broadcasts) y respuestas enviadas.

Lógica de Respuesta Automática: Sistema extensible para integrar Inteligencia Artificial (GPT/Gemini).

Gestión de Estados: Filtrado automático de mensajes de sistema y actualizaciones de contactos.

🛠️ Requisitos Previos
Antes de arrancar el agente, asegúrate de tener instalado:

Node.js (Versión 18 o superior recomendada).

Un smartphone con WhatsApp activo para la vinculación.

🚀 Instalación y Configuración
Clonar / Descargar el proyecto:

Bash
mkdir agente-whatsapp
cd agente-whatsapp
Inicializar el entorno:

Bash
npm init -y
Instalar dependencias:

Bash
npm install whatsapp-web.js qrcode-terminal
Configurar el motor:
Crea un archivo app.js y pega la lógica del cliente.

📋 Uso del Agente
Para poner en marcha el motor, ejecuta el siguiente comando en la terminal:

Bash
node app.js
Proceso de Vinculación:
Espera a que se genere el Código QR en la terminal.

Abre WhatsApp en tu móvil > Dispositivos vinculados.

Escanea el código.

Una vez veas el mensaje ¡Agente de WhatsApp conectado y listo!, el bot empezará a procesar mensajes.

📂 Estructura de Archivos
app.js: El núcleo del servidor y lógica del agente.

index.html: Panel de control visual para monitoreo.

.wwebjs_auth/: Carpeta (generada automáticamente) que guarda la sesión del bot.

package.json: Configuración de dependencias del proyecto.

⚙️ Personalización del "Cerebro"
Para cambiar el comportamiento del agente, localiza el evento client.on('message', ...) en el archivo app.js. Puedes modificar las respuestas automáticas o integrar llamadas a APIs de IA externas para procesar el lenguaje natural.