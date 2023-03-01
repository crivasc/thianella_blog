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
  import {
    collection,
    onSnapshot,
    query,
    where,
  } from "firebase/firestore";
  
  import { db } from "../firebase";
  import { FaToggleOff, FaToggleOn, FaTrash, FaEdit, FaUserFriends } from "react-icons/fa";
  import { deletePost, togglePostStatus } from "@/api/post";
  
  const PostList = ({postData}) => {
    const [posts, setPosts] = useState([]);
    const { user, Name } = useAuth();
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
      //console.log('Refreshed =>', posts)
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
    const handlePostEdit = (id) => {
        const q = query(collection(db, "posts"), where("user", "==", user.uid));
        onSnapshot(q, (querySnapshot) => {
          let ar = [];
          querySnapshot.docs.forEach((doc) => {
            ar.push({ id: doc.id, ...doc.data() });
          });
          let testar = ar.filter(x=>x.id == id)
          postData(testar)
        });
    };
  
    const handleToggle = async (id, status) => {
      console.log(id, status,'=>id Status')
      const newStatus = status == "publicado" ? "pendiente" : "publicado";
      await togglePostStatus({ docId: id, status: newStatus });
      postData('')
      toast({
        title: `Post ${newStatus}`,
        status: newStatus == "publicado" ? "success" : "warning",
      });
  
    };
  
    return (
      <Box mt={5}>
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={8}>
          {posts &&
            posts.map((post) => (
              <Box
                p={3}
                boxShadow="md"
                transition="0.2s"
                _hover={{ boxShadow: "sm" }}
                key={post.id}
                className="grid grid-cols-2 gap-2"
              >
                <div>
                  <Heading as="h3" fontSize={"md"} >
                    {post.titulo}
                  </Heading>
                  <Text fontSize={'sm'}>{post.descripcion}</Text>
                </div>
                <div className="flex items-center justify-end gap-2">
                <Badge
                      float="right"
                      opacity="0.8"
                      className="text-2xl rounded rounded-lg px-2 w-3/12 text-center"
                      bg={post.status == "pendiente" ? "yellow.200" : "green.200"}
                    >
                      {post.categoria}
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
                      size="2xl"
                      onClick={(e) => handleToggle(post.id, post.status)}
                    >
                      {post.status == "pendiente" ? <FaToggleOff size={25}/> : <FaToggleOn size={25}/>}
                    </Badge>

                    <Badge
                      bg="inherit"
                      transition={"0.2s"}
                      _hover={{ bg: "inherit", transform: "scale(1.2)" }}
                      float="right"
                      size="2xl"
                      onClick={(e) => handlePostEdit(post.id)}
                    >
                      <FaEdit size={18}/>
                    </Badge>

                    <Badge
                        color="red.500"
                        bg="inherit"
                        transition={"0.2s"}
                        _hover={{ bg: "inherit", transform: "scale(1.2)" }}
                        float="right"
                        size="sm"
                        onClick={(e) => handlePostDelete(post.id)}
                      >
                      <FaTrash size={18}/>
                    </Badge>

                </div>
                
              </Box>
            ))}
        </SimpleGrid>
      </Box>
    );
  };
  
  export default PostList;