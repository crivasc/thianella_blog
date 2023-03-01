import {
    Box, 
    Button, 
    Link, 
    Text
} from "@chakra-ui/react";
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { FaGithub, FaGoogle, FaMoon, FaPowerOff, FaSun } from "react-icons/fa"
import { auth } from "../firebase";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";

const Auth =()=>{

    const {isLoggedIn, user, Name} = useAuth();
    const { push } = useRouter()
    const goAhead=(val)=>{
        push(val)
    }
    const handleAuth = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result)=>{
            
            //El token de google. Se puede usar para acceder a Google API
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            goAhead('/control/Dashboard')
            console.log('resulta que => ',result)
            //información de usuario logueado
            const user = result.user;
            const Name = Name.displayName;
        })
        .catch((error)=>{
            //manejar errores
            const errorCode = error.code;
            const errorMessage = error.message;

            //Email usado para la cuenta de usuario
            // const email = error.customData.email;

            //Credencial de autenticación a usarse
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    };
    const handleAuthG = async () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
        .then((usuario)=>{ 
            //El token de google. Se puede usar para acceder a Google API
            const credential = GithubAuthProvider.credentialFromResult(usuario);
            const token = credential.accessToken;

            //información de usuario logueado
            const user = usuario;
            const Name = usuario[0].displayName;
            goAhead('/control/Dashboard')
        }).catch((error)=>{
            //manejar errores
            const errorCode = error.code;
            const errorMessage = error.message;

            //Email usado para la cuenta de usuario
            const email = error.customData.email;

            //Credencial de autenticación a usarse
            const credential = GithubAuthProvider.credentialFromError(error);
        })
    };
    return(
        <Box position={"relative"} className="flex items-center justify-end gap-2">
            
            {isLoggedIn && (
                <>
                <div className="">
                    <Text color="greem.500">{Name.displayName}</Text>
                    <Text color="greem.500" fontSize="xs">{user.email}</Text>
                </div>
                <Link color="green.500" decoration='none' className="text-center  hover:text-red-400" onClick={()=>auth.signOut()}>
                    <FaPowerOff className="mx-auto text-2xl"/><small>Salir</small>
                </Link>
                </>
            )}
            {!isLoggedIn && (
                <div className="flex flex-col gap-2">
                    <Button leftIcon={<FaGoogle/>} size="sm" onClick={()=>handleAuth()}>
                        Google
                    </Button>
                    <Button leftIcon={<FaGithub/>} size="sm" onClick={()=>handleAuthG()}>
                        GitHub
                    </Button>
                </div>
            )}
        </Box>
    )
}

export default Auth;