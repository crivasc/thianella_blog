import { useEffect, useState } from "react";
import { auth } from "@/firebase";

const useAuth = () =>{
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [Name, setName] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((user)=>{
            setIsLoggedIn(user && user.uid ? true : false);
            setUser(user)
            setName(user)
            //user[0].displayName &&  setName(user[0].displayName)
            
        });
    });

    return { user, isLoggedIn, Name };

};

export default useAuth;