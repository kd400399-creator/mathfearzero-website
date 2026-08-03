import {
  db
} from "./firebase-config.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";


document.addEventListener(

  "DOMContentLoaded",

  async function(){

    const testBox =

    document.createElement(

      "div"

    );


    testBox.innerHTML =

    "⏳ Firebase connecting...";


    testBox.style.cssText =

    `
    position:fixed;
    bottom:20px;
    right:20px;
    background:#16213e;
    color:white;
    padding:14px 18px;
    border:2px solid #00d4ff;
    border-radius:10px;
    z-index:99999;
    font-family:Arial;
    font-weight:bold;
    `;


    document.body.appendChild(

      testBox

    );


    try{

      await getDocs(

        collection(

          db,

          "payment_requests"

        )

      );


      testBox.innerHTML =

      "✅ Firebase Connected";


      testBox.style.borderColor =

      "#19a463";

    }

    catch(error){

      testBox.innerHTML =

      "❌ Firebase Error";

      console.error(

        error

      );

    }

  }

);
