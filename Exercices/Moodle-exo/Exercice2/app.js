const Notifier = require('./notifier');

// Instanciation du notifier
const notifier = new Notifier();

// Écoute de l'événement NOTIFY
notifier.on('NOTIFY', (message) => {
  console.log(`Notification reçue : ${message}`);
});

// Écoute de l'événement ERROR (Bonus)
notifier.on('ERROR', (err) => {
  console.error(`Erreur : ${err}`);
});

// Simulation de notifications
notifier.sendNotification('Bienvenue sur l\'application !');
notifier.sendNotification('Vous avez un nouveau message.');
notifier.sendNotification(''); // Déclenche l'événement ERROR (Bonus)
notifier.sendNotification('Votre commande a été expédiée.');