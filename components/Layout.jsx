import Navbar from './Navbar'
import Footer from './Footer'
import { Container } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar/>
        <Container maxW="7xl" className='pt-4 flex-grow'>
            {children}
        </Container>
      <Footer/>
    </div >
  )
}