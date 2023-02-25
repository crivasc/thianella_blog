import { useState } from "react";
import {
    Box,
    Input,
    Button,
    Textarea,
    Stack,
    Select,
    useToast,
    Heading,
    Text
} from "@chakra-ui/react";

import useAuth from "@/hooks/useAuth";
import { newPost } from "@/api/post";
import { render } from "react-dom";

const AddPost =()=>{
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [autor, setAutor] = useState();
    const [categoria, setCategoria] = useState("");
    const [letras, setLetras] = useState("");
    const [status, setStatus] = useState("pendiente");
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();
    const { isLoggedIn, user } = useAuth();
    const handlePostCreate = async ()=> {
        if(!isLoggedIn){
            toast({
                titulo:"Debe loguearse para crear una nota",
                status:"error",
                duration:9000,
                isClosable:true
            });
            return;
        }
        setIsLoading(true);
        const post = {
            titulo,
            descripcion,
            autor:user.displayName,
            categoria,
            letras,
            //status,
            userId:user.uid,
        };
        console.log(post)
        await newPost(post);
        setIsLoading(false);
        setTitulo("");
        setDescripcion("");
        setLetras("");
        setAutor("");
        setCategoria("");
        //setStatus("pendiente");
        toast({title:"nota creada", status:"success"});
    };

    // const Feature=({titulo, descripcion, ...rest} )=> {
    //     return (
    //       <Box p={5} shadow='md' borderWidth='1px' {...rest}>
    //         <Heading fontSize='xl'>{titulo}</Heading>
    //         <Text mt={4}>{descripcion}</Text>
    //       </Box>
    //     )
    //   }
    //   const StackEx=()=> {
    //     return (
    //       <Stack spacing={8} direction='row'>
    //         <Feature
    //           titulo='Plan Money'
    //           descripcion='The future can be even brighter but a goal without a plan is just a wish'
    //         />
    //         <Feature
    //           titulo='Save Money'
    //           descripcion='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
    //         />
    //       </Stack>
    //     )
    //   }

    return(
         <Box w="100%" margin={"0 auto"} display="block" mt={5}>
              <Stack spacing={4} direction='row'>
                <Box p={5} w="full" shadow='md' borderWidth='1px'>
                    <Input placeholder="Titulo" value={titulo} className="mb-4" 
                        onChange={(e) => setTitulo(e.target.value)}/>
                    
                    <Textarea placeholder="Descripcion" value={descripcion} className="mb-4"
                        onChange={(e) => setDescripcion(e.target.value)}></Textarea>

                    <Input placeholder={user} className="mb-4" disabled/>

                    <Select value={categoria} className="mb-4" onChange={(e)=>setCategoria(e.target.value)}>
                        <option>Sección</option>
                        <option value={"poemas"}>Poemas</option>
                        <option value={"historia-corta"}>Historia corta</option>
                        <option value={"devaneos"}>Devaneos</option>
                    </Select>
                </Box>
                <Box p={5} w="full" shadow='md' borderWidth='1px'>
                    <Textarea placeholder="Historia" value={letras} h="96%"
                        onChange={(e) => setLetras(e.target.value)}></Textarea>
                </Box>
                 
                {/* <Select value={status} onChange={(e)=>setStatus(e.target.value)}>
                    <option value={"pendiente"} style={{color:"yellow", fontWeight:"bold"}}>Pendiente</option>
                    <option value={"publicado"} style={{color:"green", fontWeight:"bold"}}>Publicado</option>
                </Select> */}
            </Stack>
            <Stack className="mt-4">
                <Button onClick={()=>handlePostCreate()}
                    disabled={titulo.length < 1 || descripcion.length < 1 || isLoading}
                    variantcolor="teal" variant="solid">Postear</Button>
            </Stack>
        </Box>
    );
};

export default AddPost;