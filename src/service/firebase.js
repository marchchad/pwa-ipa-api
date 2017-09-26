import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyBg5-lplVtj-4347gYM5Pm1eQz0uYQ0qxc',
  authDomain: 'ipaapi-177921.firebaseapp.com',
  databaseURL: 'https://ipaapi-177921.firebaseio.com',
  projectId: 'ipaapi-177921',
  storageBucket: 'ipaapi-177921.appspot.com',
  messagingSenderId: '1013292504886'
};
firebase.initializeApp(config);

export default {
  database: firebase.database()
};
