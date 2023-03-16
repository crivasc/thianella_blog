import {
  Badge,
  Box,
  Heading,
  SimpleGrid,
  Text,
  useFormControlStyles,
  useToast,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import { collection,QueryDocumentSnapshot,DocumentData,query,where,limit,getDocs} from "firebase/firestore";

import { db } from "../firebase";

export default function Posts() {
  const [posts, setPosts] = useState('');
  const [listado, setListado] = useState([]);

  const postsCollection = collection(db,'posts');
  
  const refreshData = async() => {

    const postsQuery = query(postsCollection,where('status','==','publicado'));
    // get the posts
    const querySnapshot = await getDocs(postsQuery);

    querySnapshot.forEach((doc) => {
      setListado([])
      listado.push(doc.data());
    });
    // set it to state
    setPosts(listado);
  };
  useEffect(() => {
    refreshData();
  }, []);
  return (
    posts=='' ? (
      console.log('no hay contenido')
    ) : (
      console.log('si hay contenido'),
      posts.map((nota)=>(
        <span key={nota.createdAt}>{nota.titulo}</span>
      ))
    )
  )
}
