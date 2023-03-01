import { useEffect, useState } from "react";
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
import { newPost, updatePost } from "@/api/post";
import dynamic from "next/dynamic";
//import {RichTextEditor} from "@mantine/rte";
const RichTextEditor = dynamic(() => import("@mantine/rte"), { ssr: false });

const AddPost =({edit, reset, reselect, canceler})=>{
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [autor, setAutor] = useState();
    const [categoria, setCategoria] = useState("");
    const [letras, setLetras] = useState("Inishial esteit");
    const [status, setStatus] = useState("");
    const [id, setId] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();
    const { isLoggedIn, user, Name } = useAuth();
    
    useEffect(() => {
        if(edit == null || edit == ''){
            console.log('nulo', edit)
        }else{
            edit.map((post)=>{
                setTitulo(post.titulo),
                setDescripcion(post.descripcion),
                setLetras(post.letras),
                setAutor(post.autor),
                setCategoria(post.categoria),
                setStatus(post.status)
            })
        }
    }, [edit]);    
    useEffect(() => {
        canceler && cancelar()
    }, [canceler]);
    
    const handlePostCreate = async ()=> {
        let post = []
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
        
        if(edit==null || edit == ""){
            post = {
                titulo,
                descripcion,
                autor:Name.displayName,
                categoria,
                letras,
                status,
                userId:user.uid,
            };
            await newPost(post).then(cancelar);
        }else{
            post = {
                titulo,
                descripcion,
                autor:Name.displayName,
                categoria,
                letras,
                status,
                userId:user.uid
            };
            let did = edit[0].id
            
            await updatePost(post, did).then(cancelar);
        }
        //console.log(post)
        
        setIsLoading(false);
        setTitulo("");
        setDescripcion("");
        setLetras("");
        setAutor("");
        setCategoria("");
        setStatus("");
        toast(
            edit == null || edit == '' ? ({title:"Nota creada", status:"success"}) : ({title:"Nota actualizada", status:"success"})
        );
        reselect('misposts')
    };
    const cancelar =()=>{
        setIsLoading(false);
        setTitulo("");
        setDescripcion("");
        setLetras("");
        setAutor("");
        setCategoria("");
        setStatus("");

        reset('all')
    }

    return(
         <Box w="100%" margin={"0 auto"} display="block" mt={5}>
              <Stack spacing={4} direction='row'>
                <Box p={5} w="full" shadow='md' borderWidth='1px'>
                    <Input placeholder="Titulo" value={titulo} className="mb-4" 
                        onChange={(e) => setTitulo(e.target.value)}/>
                    
                    <Textarea placeholder="Descripcion" value={descripcion} className="mb-4"
                        onChange={(e) => setDescripcion(e.target.value)}></Textarea>

                    <Box className="p-2 mb-4 text-gray-500">
                        <span>{autor}</span>
                    </Box>

                    <Select value={categoria} className="mb-4" onChange={(e)=>setCategoria(e.target.value)}>
                        <option>Sección</option>
                        <option value={"poemas"}>Poemas</option>
                        <option value={"historia-corta"}>Historia corta</option>
                        <option value={"devaneos"}>Devaneos</option>
                    </Select>
                </Box>
                <Box p={5} w="full" shadow='md' borderWidth='1px'>
                    <RichTextEditor value={letras} onChange={setLetras} 
                        id="rte"
                        h="85%"
                        controls={[
                            ['bold', 'italic', 'underline'],
                            ['unorderedList', 'orderedList', 'h1', 'h2', 'h3'],
                            ['alignLeft', 'alignCenter', 'alignRight'],
                          ]}> 
                        <Textarea
                            className="mb-2" ></Textarea>
                    </RichTextEditor>
                    {/* <RichTextEditor value={letras} onChange={setLetras} id="rte" />
                     */}
                    <Select value={status} onChange={(e)=>setStatus(e.target.value)}>
                        <option>Status</option>
                        <option value={"pendiente"}>Pendiente</option>
                        <option value={"publicado"}>Publicado</option>
                    </Select>
                </Box>
            </Stack>
            <Stack className="mt-4">
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <Button className="w-full" onClick={()=>handlePostCreate()}
                            disabled={titulo.length < 1 || descripcion.length < 1 || isLoading}
                            variantcolor="teal" variant="solid">{
                            edit!=null ? "Guardar cambios" : "Postear"
                            }</Button>
                    </div>
                    <div>
                        <Button className="w-full" onClick={()=>cancelar()}
                            variantcolor="teal" variant="solid">Cancelar</Button>
                    </div>
                </div>
            </Stack>
        </Box>
    );
};

export default AddPost;