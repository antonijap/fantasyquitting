// Initialize Firebase
var config = {
  apiKey: "AIzaSyBH7onny1nDMDmFTbFcSZ9t_WtsmVhqYPI",
  authDomain: "fantasyquitting.firebaseapp.com",
  databaseURL: "https://fantasyquitting.firebaseio.com",
  storageBucket: "fantasyquitting.appspot.com",
  messagingSenderId: "415941137515"
};

firebase.initializeApp(config);
var db = firebase.database().ref('stories')

// create Vue app
Vue.component('story', {
  template: "#story-template",
  props: ['item']
})

var app = new Vue({
  el: '#app',
  firebase: {
    stories: db
  }
})
