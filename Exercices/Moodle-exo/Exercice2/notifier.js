const EventEmitter = require('events');

class Notifier extends EventEmitter {
  /**
   * Émet un événement NOTIFY ou ERROR selon le contenu du message.
   * @param {string} message 
   */
  sendNotification(message) {
    // Bonus : gestion du message vide
    if (!message || message.trim() === '') {
      this.emit('ERROR', 'Le message de notification ne peut pas être vide.');
      return;
    }

    // Émission de l'événement NOTIFY
    this.emit('NOTIFY', message);
  }
}

module.exports = Notifier;