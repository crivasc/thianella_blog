import AddPost from "@/components/AddPost";
import Layout from "@/components/Layout";
import PostList from "@/components/postList";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";
//import { Input } from "postcss";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaBars } from "react-icons/fa";
import { RiChatNewFill, RiListCheck, RiMessage2Line, RiSearch2Line} from "react-icons/ri"
import { Input } from "@chakra-ui/react";

const Dashboard =()=>{
    //const { push } = useRouter()
    const {isLoggedIn, user} = useAuth();
    const [open, setOpen] = useState(false);
    const [Selected, setSelected] = useState("misposts");
    const [editar, setEditar] = useState(null);
    const [cler, setCler] = useState(false);
    
    const toggleOpen=()=>{
        !open ? setOpen(true) : setOpen(false)
    }
    const editHandler=(data)=>{
        console.log('Desde editar',data)
        data ? (
            setEditar(data),
            setSelected("nuevo")
        ) : setEditar(null)
        //toggleOpen()
    }
    const handleEditar=(val)=>{
        console.log('de handleditar', val)
        val=='all'  && (
            setEditar(null),
            setSelected("misposts")
        )
    
        //console.log(val+' Mas '+editar)
    }
    useEffect(() => {
        setEditar(null),
        setSelected("misposts")
        setCler(false)
    }, [cler]);
    //console.log(editar)
    return(
        isLoggedIn ? (
        <Layout>
            <div className="ilButton flex items-center justify-start gap-0 cursor-pointer absolute left-0 z-20" onClick={(e)=>toggleOpen()}>
                {/* <FaBars size={25}/> */}
                {
                    open ? <FaAngleRight size={30}/> : <FaAngleLeft size={30}/>
                }
            </div>
            <div className={`head grid grid-cols-3 gap-2 transition-all delay-500 ease-in-out absolute left-0 ${!open ? "w-full opacity-1" : "w-0 opacity-0"}`}>
                <div className="hover:text-gray-500
                    transition-all delay-50 flex items-center md:justify-center gap-2 sm:justify-start cursor-pointer" 
                    onClick={(e)=>{setSelected("misposts"), setCler(true)}}>
                    <RiListCheck className="md:text-4xl text-2xl"/><span className="md:text-md sm:text-sm">Listado</span>
                </div>
                <div className="hover:text-gray-500
                    transition-all delay-50 flex items-center md:justify-center gap-2 sm:justify-start cursor-pointer" 
                    onClick={(e)=>setSelected("nuevo")}>
                    <RiChatNewFill className="md:text-4xl text-2xl"/><span className="md:text-md sm:text-sm">Nuevo</span>
                </div>
                <div className="hover:text-gray-500
                    transition-all delay-50 flex items-center md:justify-center gap-2 sm:justify-start cursor-pointer">
                    <RiSearch2Line className="md:text-4xl text-2xl"/>
                    <Input variant='outline' placeholder='Buscar' w={"70%"}/>
                </div>
            </div>
            {/* CONTENIDOS */}
            <div className="content">
                <div className={`w-auto pt-10 ${Selected == "nuevo" ? "visible" : "hidden"}`}>
                    <h1 className="pl-4 text-lg font-bold border-b border-gray-300">Nuevo post</h1>
                    <AddPost edit={editar} reset={handleEditar} reselect={setSelected} canceler={cler}/>
                </div>
                <div className={`w-auto pt-10 ${Selected == "misposts" ? "visible" : "hidden"}`}>
                    <h1 className="pl-4 text-lg font-bold border-b border-gray-300">Mis Posts</h1>
                    <PostList postData={editHandler}/>
                </div>
            </div>
        </Layout>
        ) : (
            <div className="flex items-center justify-center h-full">
                Acceso no autorizado
            </div>
        )
    
    )
}
export default Dashboard;