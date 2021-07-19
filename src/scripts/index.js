/* eslint-disable no-shadow */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
/* import data from '../DATA.json'; */
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  /* WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER); */
});

const requestPermission = async () => {
  // meminta ijin memunculkan notification
  const result = await Notification.requestPermission();
  if (result === 'denied') {
    console.log('Fitur Notification tidak diijinkan');
    return;
  }

  if (result === 'default') {
    console.log('Pengguna Menutup kotak dialog permintaan ijin');
    return;
  }

  console.log('Fitur notification diijinkan');
};

if ('Notification' in window) {
  requestPermission();
} else {
  console.error('Browser tidak mendukung notifikasi');
}

navigator.serviceWorker.ready.then((registration) => {
  const title = 'Resto Rasa Nusa';
  const options = {
    body: 'Notification is actived',
    icon: 'favicon.png',
    requireInteraction: true,
  };
  registration.showNotification(title, options);
});
