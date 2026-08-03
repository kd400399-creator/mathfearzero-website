import {
  db
} from "./firebase-config.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";


console.log(
  "MFZ Firebase connected successfully!"
);


async function testFirebase() {

  try {

    const snapshot =
    await getDocs(
      collection(
        db,
        "payment_requests"
      )
    );


    console.log(
      "Firebase is working."
    );


    console.log(
      "Payment requests:",
      snapshot.size
    );

  }

  catch(error) {

    console.error(
      "Firebase error:",
      error
    );

  }

}


testFirebase();
