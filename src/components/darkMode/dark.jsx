import { useState,useEffect } from "react";


// image

  

const DarkMode=()=>{


    const [dark,setDark] = useState('light' );

const containerCode = document.getElementsByClassName('containerCode');
const code = document.getElementsByClassName('code');
const code2 = document.getElementsByClassName('code2');
const code3 = document.getElementsByClassName('code3');
const headerImg = document.getElementsByClassName('gambarHeader');


useEffect(()=>{
    
    if(dark === "light"){
        for(let i= 0 ; i < containerCode.length; i++){
            containerCode[i].classList.add('cBlue')
            
            
        }
    
    
        for(let i= 0 ; i < code.length; i++){
            code[i].classList.add('cRed')
        }

        for(let i= 0 ; i < code2.length; i++){
            code2[i].classList.add('cRed')
        }
        for(let i= 0 ; i < code3.length; i++){
            code3[i].classList.add('cPurple')
        }
        for(let i= 0 ; i < headerImg.length; i++){
            headerImg[i].classList.add('gambarHeaderLIght')
        }
        
      
    }
   
   })

   const darkMode = () =>{
    for(let i= 0 ; i < containerCode.length; i++){
        containerCode[i].classList.remove('cBlue')
        containerCode[i].classList.add('cWhite')
        document.body.style.backgroundColor = '#111';
        
    }


    for(let i= 0 ; i < code.length; i++){
        code[i].classList.add('cRed')
    }

    for(let i= 0 ; i < code2.length; i++){
        code2[i].classList.remove('cRed')
        code2[i].classList.add('cYellow')
    }
    for(let i= 0 ; i < code3.length; i++){
        code3[i].classList.remove('cPurple')
        code3[i].classList.add('cRed')
    }
    for(let i= 0 ; i < headerImg.length; i++){
        headerImg[i].classList.remove('gambarHeaderLIght')
        headerImg[i].classList.add('gambarHeaderDark')
    }
    setDark('dark')
    localStorage.setItem('dark',dark)
   }

   const lightMode = () =>{
    for(let i= 0 ; i < containerCode.length; i++){
        containerCode[i].classList.remove('cWhite')
        containerCode[i].classList.add('cBlue')
        document.body.style.backgroundColor = 'white';
        
    }


    for(let i= 0 ; i < code.length; i++){
        code[i].classList.add('cRed')
    }
    for(let i= 0 ; i < headerImg.length; i++){
        headerImg[i].classList.remove('gambarHeaderDark')
        headerImg[i].classList.add('gambarHeaderLIght')
    }
    setDark('light')
    localStorage.setItem('dark',dark)
   }

   const mode = ()=>{
    if(dark === 'light'){
      darkMode();
    }
    
    if(dark === 'dark'){
      lightMode();
    }
}

    return(
        <>
        <button onClick={mode}>dark mode</button>
        </>
    )
}

export default DarkMode;