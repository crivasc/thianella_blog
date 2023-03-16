import { db } from "../firebase";

import {
    collection,
    addDoc,
    updateDoc,
    doc,
    deleteDoc
} from "firebase/firestore";

let year = new Date().getFullYear()
let month = new Date().getMonth() + 1
let day = new Date().getDate()
let hour = new Date().getHours()
let minute = new Date().getMinutes()
let sec = new Date().getSeconds()

if (day<10){
    day = '0' + day;
}
if (month<10){
    month = '0' + month;
}


const newPost = async ({userId, titulo, descripcion, autor, categoria, status, letras, arte})=> {
    try {
        await addDoc(collection(db, "posts"),{
            user:userId,
            titulo:titulo,
            descripcion:descripcion,
            autor:autor,
            arte:arte,
            categoria:categoria,
            status:status,
            letras:letras,
            createdAt: year+'-'+month+'-'+day+'_'+hour+':'+minute+':'+sec,
            updatedAt:null
        });
    }catch(err){}
};
const updatePost = async (lista, docId)=> {
    console.log('Lista => ',lista)
    try {
        const postsRef = doc(db, "posts", docId);
        await updateDoc(postsRef,{
            user:lista.userId,
            titulo:lista.titulo,
            descripcion:lista.descripcion,
            autor:lista.autor,
            arte:lista.arte,
            categoria:lista.categoria,
            status:lista.status,
            letras:lista.letras,
            updatedAt: year+'-'+month+'-'+day+'_'+hour+':'+minute+':'+sec,
        });
    }catch(err){
        console.log(err)
    }
};
const togglePostStatus = async ({docId, status})=>{
    console.log(docId, status)
    try{
        const postsRef = doc(db, "posts", docId);
        await updateDoc(postsRef,{
            status,
        });
    }catch(err){
        //console.log(err);
    }
};
const deletePost = async(docId)=>{
    try{
        const postsRef = doc(db, "posts", docId);
        await deleteDoc(postsRef);
    }catch(err){
        //console.log(err)
    }
};
export {newPost, togglePostStatus, deletePost, updatePost};