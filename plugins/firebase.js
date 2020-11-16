import firebase from 'firebase/app'
import 'firebase/database'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyALXl-ibR8byUa6Nmp0xVWiIEmUWVEXbwk',
    authDomain: 'primexp-dd612.firebaseapp.com',
    databaseURL: 'https://primexp-dd612.firebaseio.com',
    projectId: 'primexp-dd612',
    storageBucket: 'primexp-dd612.appspot.com',
    messagingSenderId: '460255752782',
    appId: '1:460255752782:web:d2a443ac2afb6c1783491f',
    measurementId: 'G-802HQ06504'
  }
  firebase.initializeApp(config)
}
const fireDb = firebase.database()
export { fireDb }
