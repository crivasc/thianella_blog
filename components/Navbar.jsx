import { auth } from "@/firebase";
import useAuth from "@/hooks/useAuth";
import {
    Box, 
    Button, 
    Link, 
    Text, 
    useColorMode
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaGoogle, FaMoon, FaPowerOff, FaSun, FaHome, FaNewspaper } from "react-icons/fa"
//import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import NavItem from "./NavItem";
import { RiDashboardLine } from "react-icons/ri";

const MENU_USR = [
    { text: "Home", href: "/", icon: <FaHome size={25}/> },
    { text: "Dashboard", href: "/control/Dashboard", icon:<RiDashboardLine size={25}/> },
    // { text: "Contact", href: "/contact" },
  ];
const MENU_LIST = [
{ text: "Home", href: "/", icon:<FaHome size={25}/>},
{ text: "Posts", href: "/Posts", icon: <FaNewspaper size={25}/> },
// { text: "Contact", href: "/contact" },
];
const Navbar =()=>{
    const {toggleColorMode, colorMode} = useColorMode();
    const {isLoggedIn, user} = useAuth();
    const { push } = useRouter()
    const toggleSession=()=>{
        auth.signOut()
        push("/")
    }

    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);
    
    return (
        <header className="z-30">
        <nav className={`nav flex justify-between items-center p-1 border-b border-gray-300`}>
            <Link href={"/"}>
                <h1 className="logo"><Logo/></h1>
            </Link>
            <div
            onClick={() => setNavActive(!navActive)}
            className={`nav__menu-bar flex flex-col gap-2 cursor-pointer`}
            >
            <div></div>
            <div></div>
            <div></div>
            </div>
            <div className={`${navActive ? "active bg-white text-xl" : ""} nav__menu-list`}>
            {isLoggedIn ? (
                MENU_USR.map((menu, idx) => (
                    <div className={navActive && "border-b border-gray-300 pl-4"}
                    onClick={() => {
                        setActiveIdx(idx);
                        setNavActive(false);
                    }}
                    key={menu.text}
                    >
                    <NavItem active={activeIdx === idx} {...menu} />
                    </div>
                ))
            ) : (
                MENU_LIST.map((menu, idx) => (
                    <div className={navActive && "border-b border-gray-300 pl-4"}
                    onClick={() => {
                        setActiveIdx(idx);
                        setNavActive(false);
                    }}
                    key={menu.text}
                    >
                    <NavItem active={activeIdx === idx} {...menu} />
                    </div>
                ))
            )}
            </div>
            {isLoggedIn && (
                <div className={`userData flex items-center justify-center gap-3`}>
                    <Button size="sm" className="w-auto" onClick={()=> toggleColorMode()}>
                        {colorMode =="light" ?<FaSun/>:<FaMoon/>}
                    </Button>{""}
                    <div className="flex items-bottom justify-center">
                        <Image
                            src={user.photoURL}
                            alt={user.displayName || user.providerData[0].displayName}
                            width={45}
                            height={20}
                            className="rounded-full mx-2"
                        />
                        <div>
                        <Text color="greem.500" fontSize="md">{user.displayName || user.providerData[0].displayName}</Text>
                        <Text color="greem.500" fontSize="xs">{user.email}</Text>
                        </div>
                    </div>
                    <Link color="green.500" decoration='none' className="text-center  hover:text-red-400" onClick={()=>toggleSession()}>
                        <FaPowerOff className="mx-auto text-2xl"/>
                    </Link>
                </div>
            )}
        </nav>
        </header>
    );
      
}
export default Navbar;