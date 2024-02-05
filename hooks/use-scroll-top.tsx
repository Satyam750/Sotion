import { useState, useEffect } from "react";

export const useScollTop = (threshold = 10) =>{
const [scrolled , setScolled] = useState(false)
  
useEffect(()=>{
    const handleScroll = () =>{
        if(window.scrollY>threshold){
            setScolled(true)
        }else{
            setScolled(false)
        }
    }

   window.addEventListener('scroll',handleScroll)
   return () => window.removeEventListener('scroll', handleScroll)
},[threshold])

return scrolled;
}