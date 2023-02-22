import { useState } from "react";
import {
    Box,
    Input,
    Button,
    Textarea,
    Stack,
    Select,
    useToast
} from "@chakra-ui/react";

import useAuth from "@/hooks/useAuth";
import { addTodo } from "@/api/todo";

const AddTodo =()=>{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("pendiente");
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();
    const { isLoggedIn, user } = useAuth();
    const handleTodoCreate = async ()=> {
        if(!isLoggedIn){
            toast({
                title:"Debe loguearse para crear una nota",
                status:"error",
                duration:9000,
                isClosable:true
            });
            return;
        }
        setIsLoading(true);
        const todo = {
            title,
            description,
            status,
            userId:user.uid,
        };
        await addTodo(todo);
        setIsLoading(false);
        setTitle("");
        setDescription("");
        setStatus("pendiente");
        toast({title:"nota creada", status:"success"});
    };
    return(
        <Box w="40%" margin={"0 auto"} display="block" mt={5}>
            <Stack direction="column">
                <Input placeholder="Title" value={title} 
                    onChange={(e) => setTitle(e.target.value)}/>
                
                <Textarea placeholder="Description" value={description}
                    onChange={(e) => setDescription(e.target.value)}></Textarea>
                
                <Select value={status} onChange={(e)=>setStatus(e.target.value)}>
                    <option value={"pendiente"} style={{color:"yellow", fontWeight:"bold"}}>Pendiente</option>
                    <option value={"completado"} style={{color:"green", fontWeight:"bold"}}>Completado</option>
                </Select>

                <Button onClick={()=>handleTodoCreate()}
                    disabled={title.length < 1 || description.length < 1 || isLoading}
                    variantcolor="teal" variant="solid">Add</Button>
            </Stack>
        </Box>
    );
};

export default AddTodo;