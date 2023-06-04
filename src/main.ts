import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEe4t9vV2uOVo_kSL-gxaFu07SKUOBIXA",
  authDomain: "statio-16b44.firebaseapp.com",
  projectId: "statio-16b44",
  storageBucket: "statio-16b44.appspot.com",
  messagingSenderId: "478811669245",
  appId: "1:478811669245:web:eb2894c5a87f44940b7494"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')
