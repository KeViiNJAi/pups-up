import firebase from 'firebase'

class Fire {
  constructor(){
    this.init()
    this.observeAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyChVlMDT59P6Jixl-nRn4jV9i21jab4aqc',
  authDomain: 'pups-up.firebaseapp.com',
  databaseURL: 'https://pups-up.firebaseio.com',
  projectId: 'pups-up',
  storageBucket: 'pups-up.appspot.com',
  messagingSenderId: '852272247058',
  appId: '1:852272247058:web:0ef0d2a754c82d89'
      })
    }
  }

  observeAuth = (user) => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({message}) {
        alert(message)
      }
    }
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  off() {
    this.ref.off();
  }
}

Fire.shared = new Fire()
export default Fire;
