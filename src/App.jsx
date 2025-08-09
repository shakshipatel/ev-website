import {useEffect, useState} from "react"
import Background from "./components/background/background"
import Navbar from "./components/nav-bar/nav-bar";
import Hero from "./components/hero/hero"

const App = () => {
 let herodata = [
       {text1:"Dive into",text2:"What you love"},
       {text1:"Indulge",text2:"your passions"},
       {text1:"Give in to",text2:"your passions"},
 ]

 const [herocount,setherocount]= useState(0);
 const[playstatus,setplaystatus]=useState(false);


useEffect(() => {
  setInterval(() => {
     setherocount((count)=>{
  return count===2?0:count+1
})
  },3000);
},[])


  return(
    <div>

        <Background playstatus={playstatus} herocount={herocount}/>
         <Navbar/>
         <Hero setplaystatus={setplaystatus}
         herodata={herodata[herocount]}
         herocount={herocount}
         setherocount={setherocount}
         playstatus={playstatus}
         />

    </div>
  )
}

export  default App