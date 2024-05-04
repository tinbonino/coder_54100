import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Collection from './Collection.jsx'
import Query from './Query.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCngldIMruIAjQlWxmzfyVYKZse-gAkRYQ",
  authDomain: "coderhouse-ecommerce-caf20.firebaseapp.com",
  projectId: "coderhouse-ecommerce-caf20",
  storageBucket: "coderhouse-ecommerce-caf20.appspot.com",
  messagingSenderId: "890070876079",
  appId: "1:890070876079:web:2b8faa783994729c3fb95a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Collection/>
    <Query/>
  </>,
)
