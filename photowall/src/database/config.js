
import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyA-79fizECU_MijDv4qBNmjRIrpOHQxfEM",
    authDomain: "photowall-e41da.firebaseapp.com",
    databaseURL: "https://photowall-e41da.firebaseio.com",
    projectId: "photowall-e41da",
    storageBucket: "photowall-e41da.appspot.com",
    messagingSenderId: "935523713152"
  };

firebase.initializeApp(config);

const database = firebase.database()

export {database}
