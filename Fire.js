import firebase from 'firebase'

class Fire {
  constructor(){
    this.init()
    this.observeAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: '',
  authDomain: '.firebaseapp.com',
  databaseURL: 'https://.firebaseio.com',
  projectId: '',
  storageBucket: '.appspot.com',
  messagingSenderId: '',
  appId: ''
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
