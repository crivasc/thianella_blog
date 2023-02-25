import { db } from "../firebase";

import {
    collection,
    addDoc,
    updateDoc,
    doc,
    deleteDoc
} from "firebase/firestore";

const newPost = async ({userId, titulo, descripcion, autor, categoria, letras})=> {
    try {
        await addDoc(collection(db, "posts"),{
            user:userId,
            titulo:titulo,
            descripcion:descripcion,
            autor:autor,
            categoria:categoria,
            letras:letras,
            createdAt: new Date().getTime()
        });
    }catch(err){}
};
const togglePostStatus = async ({docId, status})=>{
    try{
        const postsRef = doc(db, "posts", docId);
        await updateDoc(postsRef,{
            status,
        });
    }catch(err){
        console.log(err);
    }
};
const deletePost = async(docId)=>{
    try{
        const postsRef = doc(db, "posts", docId);
        await deleteDoc(postsRef);
    }catch(err){
        console.log(err)
    }
};
export {newPost, togglePostStatus, deletePost};