// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import {
  getFirestore, // conexion
  collection, // crear una tabla con los datos
  addDoc, // añadir documentos
  // getDocs, // obtener documentos
  onSnapshot, // escucha y trae los cambios de los datos
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  query,
  orderBy,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyACdLyMpGhBbp5ogyQ2z2-GeDWz4orx4Z4',
  authDomain: 'foodmatch-5bf52.firebaseapp.com',
  projectId: 'foodmatch-5bf52',
  storageBucket: 'foodmatch-5bf52.appspot.com',
  messagingSenderId: '655316254171',
  appId: '1:655316254171:web:2bb64d10e33715580a7bfe',
  databaseURL: 'https://foodmatch-5bf52-default-rtdb.firebaseio.com/',
};

// Initialize Firebase console.log(app)
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Inicializar la base de datos en tiempo real y obtener una referencia al servicio
export const database = getDatabase(app);
// Conexión a la base de datos
const db = getFirestore(app);
// Guardar Publicacion en firestore
export const saveTask = (description) => {
  addDoc(collection(db, 'post'), { description, date: Date.now() });
  // nombre de la colección "post",
  // donde se van a guardar los datos
};
// traer los post guardados en firestore
// export const getTask = () => getDocs(collection(db, 'post'));
// onSnapshot -> para que escuche los cambios y se vea en tiempo real
export const onGetTasks = (callback) => onSnapshot(query(collection(db, 'post'), orderBy('date', 'desc')), callback);
export const deleteTask = (id) => deleteDoc(doc(db, 'post', id));
export const editTasks = (id) => getDoc(doc(db, 'post', id));
export const updateTask = (id, newDates) => updateDoc(doc(db, 'post', id), newDates);

// Initialize Realtime Database and get a reference to the service
// export const likesRef = (id) => database.ref(`posts/${id}/likes`);
export const ref = database.ref('ruta/a/tu/dato');
ref.set({
  dato1: 'valor1',
  dato2: 'valor2',
});
