import {
    Box, 
    Button, 
    Link, 
    Text, 
    useColorMode
} from "@chakra-ui/react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FaGoogle, FaMoon, FaSun } from "react-icons/fa"
import { auth } from "../firebase";
import useAuth from "@/hooks/useAuth";

const Auth =()=>{
    const {toggleColorMode, colorMode} = useColorMode();
    const {isLoggedIn, user} = useAuth();
    const handleAuth = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result)=>{
            //El token de google. Se puede usar para acceder a Google API
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            //información de usuario logueado
            const user = result.user;
        })
        .catch((error)=>{
            //manejar errores
            const errorCode = error.code;
            const errorMessage = error.message;

            //Email usado para la cuenta de usuario
            const email = error.customData.email;

            //Credencial de autenticación a usarse
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    };
    return(
        <Box position={"fixed"} top="5%" right="5%">
            <Button onClick={()=> toggleColorMode()}>
            {colorMode =="dark" ?<FaSun/>:<FaMoon/>}
            </Button>{""}
            {isLoggedIn && (
                <>
                <Text color="greem.500">{user.email}</Text>
                <Link color="red.500" onClick={()=>auth.signOut()}>Logout</Link>
                </>
            )}
            {!isLoggedIn && (
                <Button leftIcon={<FaGoogle/>} onClick={()=>handleAuth()}>
                    Login con Google
                </Button>
            )}
        </Box>
    )
}

export default Auth;