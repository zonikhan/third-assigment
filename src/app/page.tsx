import Image from "next/image";
import Navbar from "./Components/Navbar";
import Link from "next/link";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Imagedev from "./Components/Imagedev";
import profile from "../../image/zobi22.jpeg"


export default function Home() {
  return (
     <div className="flex justify-around px-20">
     <h1>Rabia</h1>
      
       {/* <Navbar /> */}
        <Hero/>
        < Imagedev />
        
        <Image src={profile} width={"150"} height={"150"} alt="zobi22.jpeg"/>
        {/* <Footer/> */}
      
     </div>
    
  );
}
