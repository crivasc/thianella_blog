import {
    Badge,
    Box,
    Heading,
    SimpleGrid,
    Text,
    useToast,
  } from "@chakra-ui/react";
  
  import { useEffect, useState } from "react";
  import useAuth from "@/hooks/useAuth";
  import {
    collection,
    onSnapshot,
    query,
    where,
  } from "firebase/firestore";
  
  import { db } from "../firebase";
  import { FaToggleOff, FaToggleOn, FaTrash } from "react-icons/fa";
  import { deletePost, togglepoststatus } from "@/api/post";
  
  const PostList = () => {
    const [posts, setPosts] = useState([]);
    const { user } = useAuth();
    const toast = useToast();
    const refreshData = () => {
      if (!user) {
        setPosts([]);
        return;
      }
  
      const q = query(collection(db, "posts"), where("user", "==", user.uid));
      onSnapshot(q, (querySnapshot) => {
        let ar = [];
        querySnapshot.docs.forEach((doc) => {
          ar.push({ id: doc.id, ...doc.data() });
        });
        setPosts(ar);
      });
    };
    useEffect(() => {
      refreshData();
    }, [user]);
  
    const handlePostDelete = async (id) => {
      if (confirm("¿Seguro que desea eliminar nota?")) {
        deletePost(id);
        toast({ title: "Nota borrada", status: "success" });
      }
    };
  
    // const handleToggle = async (id, status) => {
    //   const newStatus = status == "completado" ? "pendiente" : "completado";
    //   await togglepoststatus({ docId: id, status: newStatus });
    //   toast({
    //     title: `post marked ${newStatus}`,
    //     status: newStatus == "completado" ? "success" : "warning",
    //   });
  
    // };
  
    return (
      <Box mt={5}>
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={8}>
          {posts &&
            posts.map((post) => (
              <Box
                p={3}
                boxShadow="2xl"
                shadow={"dark-lg"}
                transition="0.2s"
                _hover={{ boxShadow: "sm" }}
                key={post.id}
              >
                <Heading as="h3" fontSize={"xl"}>
                  {post.titulo}
                  {""}
                  <Badge
                    color="red.500"
                    bg="inherit"
                    transition={"0.2s"}
                    _hover={{ bg: "inherit", transform: "scale(1.2)" }}
                    float="right"
                    size="xs"
                    onClick={() => handlePostDelete(post.id)}
                  >
                    <FaTrash />
                  </Badge>
                  <Badge
                    color={post.categoria=="green.500"}
                    bg="inherit"
                    transition={"0.2s"}
                    _hover={{
                      bg: "inherit",
                      transform: "scale(1.2)",
                    }}
                    float="right"
                    size="xs"
                    onClick={() => handleToggle(post.id, post.categoria)}
                  >
                    {/* {post.status == "pendiente" ? <FaToggleOff /> : <FaToggleOn />} */}
                  </Badge>
                  <Badge
                    float="right"
                    opacity="0.8"
                    // bg={post.status == "pendiente" ? "yellow.500" : "green.500"}
                  >
                    {post.categoria}
                  </Badge>
                </Heading>
                <Text>{post.descripcion}</Text>
              </Box>
            ))}
        </SimpleGrid>
      </Box>
    );
  };
  
  export default PostList;