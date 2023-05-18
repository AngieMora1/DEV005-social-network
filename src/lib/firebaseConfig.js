import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore, // conexion
  collection, // crear una tabla con los datos
  addDoc, // añadir documentos
  onSnapshot, // escucha y trae los cambios de los datos
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  query,
  orderBy,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';

// Configuración del proyecto
const firebaseConfig = {
  apiKey: 'AIzaSyACdLyMpGhBbp5ogyQ2z2-GeDWz4orx4Z4',
  authDomain: 'foodmatch-5bf52.firebaseapp.com',
  projectId: 'foodmatch-5bf52',
  storageBucket: 'foodmatch-5bf52.appspot.com',
  messagingSenderId: '655316254171',
  appId: '1:655316254171:web:2bb64d10e33715580a7bfe',
};

// Inicializacion Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Inicializar y onexión a la base de datos
const db = getFirestore(app);

export const saveTask = (description) => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  today = `${mm}-${dd}-${yyyy}`;
  addDoc(collection(db, 'post'), {
    description,
    date: today,
    likes: [],
    username: auth.currentUser.email,
  });
  // nombre de la colección "post"
};

// traer los post guardados en firestore
// export const getTask = () => getDocs(collection(db, 'post'));

// onSnapshot -> para que escuche los cambios y se vea en tiempo real
export const onGetTasks = (callback) => onSnapshot(query(collection(db, 'post'), orderBy('date', 'desc')), callback);
export const deleteTask = (id) => deleteDoc(doc(db, 'post', id));
export const editTasks = (id) => getDoc(doc(db, 'post', id));
export const updateTask = (id, newDates) => updateDoc(doc(db, 'post', id), newDates);

export const addLike = (id) => {
  const docRef = doc(db, 'post', id);
  const currentUser = auth.currentUser;
  updateDoc(docRef, {
    likes: arrayUnion(currentUser.uid),
  });
};

export const removeLike = (id) => {
  const currentUser = auth.currentUser;
  const docRef = doc(db, 'post', id);
  updateDoc(docRef, {
    likes: arrayRemove(currentUser.uid),
  });
};
