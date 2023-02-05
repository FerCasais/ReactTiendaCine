
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, doc, getDoc, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0NgjYzGqrl_36x-kusbgjHo6Op5TFrC4",
  authDomain: "tiendaf-1a16b.firebaseapp.com",
  projectId: "tiendaf-1a16b",
  storageBucket: "tiendaf-1a16b.appspot.com",
  messagingSenderId: "338054352381",
  appId: "1:338054352381:web:4b2bfdcbbdae655ba4dd94"
};

 const app = initializeApp(firebaseConfig)
//  const db = getFirestore(app)


//  export async function getItems() {
//  const productCollectionRef = collection (db, 'productos')
   
//  const snapshot = await getDocs(productCollectionRef);

//  const docData = snapshot.docs.map((doc) => {

// return   {...doc.data(), id: doc.id}



// }); 
// return (docData)

//  }

//  export async function getSingleItem(id) {

//   const productCollectionRef = collection (db, 'productos')

//   const productRef = doc (productCollectionRef, id)

//   const snapshot = await getDoc (productRef)

//   return {...snapshot.data(), id: snapshot.id}





//  }


//  export async function getItemsByCategory(categoryId)
//   {
//   const productCollectionRef = collection (db, 'productos')

//   const q = query (productCollectionRef , where('categoryId', '==', categoryId))

//   const snapshot = await getDoc (q)
//    const docData = snapshot.docs.map((doc) => {

//     return   {...doc.data(), id: doc.id}
    
    
    
//     }); 
// }
 export const initFirebase = () => app