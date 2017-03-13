
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
// Ouverture du menu
var  principale = document.getElementsByClassName('app');
var menu = document.getElementsByClassName('menu');

menu.classList.add('hidden');

document.getElementById('menu').onclick = function() {
  for (var i=0; i<principale.length; i++) {
    principale[i].classList.add('hidden');
  }for (var i=0; i<menu.length; i++) {
    menu[i].classList.remove('hidden');
    }
};

document.getElementById('close').onclick = function() {
  for (var i=0; i<principale.length; i++) {
    principale[i].classList.remove('hidden');
  }for (var i=0; i<menu.length; i++) {
    menu[i].classList.add('hidden');
    }
};