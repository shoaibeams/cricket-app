import * as firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyAUcWE1bl1wf2kzMvIhVsQ5Caj9kgKv0G4",
    authDomain: "nba-full-fcfca.firebaseapp.com",
    databaseURL: "https://nba-full-fcfca.firebaseio.com",
    projectId: "nba-full-fcfca",
    storageBucket: "nba-full-fcfca.appspot.com",
    messagingSenderId: "621089695124"
  };

  firebase.initializeApp(config);
  const firebaseDB = firebase.database();
  
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');

  export {
      firebase,
      firebaseDB,
      firebaseArticles,
      firebaseTeams,
      firebaseVideos
  }
