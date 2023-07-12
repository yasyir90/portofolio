// library
import {Container,Row,Col} from 'react-bootstrap'
import  { useState, useEffect } from 'react'



// image
import me from '../../assets/saya bg-black.png'

// style
import './header.css'

const Header = ()=>{


 
    const [hellow,setHellow]=useState('');
    const [styles,setStyles]=useState('');
    const [dark,setDark] = useState('light' );

    const hello = ['hello world',`i'm`,'Front-end','web','development']


    if(hellow == ''){
        setHellow(hello[0]);
        setTimeout(()=>{
            setHellow(hello[1]);
        },2000)
        setTimeout(()=>{
            setHellow(hello[2]);
        },4000)
        setTimeout(()=>{
            setHellow(hello[3]);
        },6000)
        setTimeout(()=>{
            setHellow(hello[4]);
        },8000)
        setTimeout(()=>{
            setHellow('done');
        },10000)
    }
    if(hellow == 'done'){
        setHellow('')
    }
   
    useEffect(() => {
        const style ='redText'
        setStyles(style)

        const styleu ='blueText'

        setTimeout(() => {
            setStyles(styleu)
          },2000);
     

      }, [hellow]);

      const containerCode = document.getElementsByClassName('containerCode');
      const code = document.getElementsByClassName('code');
      const code2 = document.getElementsByClassName('code2');
      const code3 = document.getElementsByClassName('code3');
  

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
    setDark('dark')
    console.log(dark)
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
    setDark('light')
    console.log(dark)
   }

   const mode = ()=>{
    if(dark === 'light'){
      darkMode();
    }
    
    if(dark === 'dark'){
      lightMode();
    }
}
  
   const buka = `<`
   const tutup = `>`
    

    
    return(
        <Container className='ContainerHeader'>
            <Row>
                
                <Col xs={6} md={6}>
                    <div className='judulHeader'>
                        <Row>
                             <h2 className='nameTitle'>Yasyir Masy'al</h2>
                        </Row>
                        <br /><br />
                        <Row>
                            <p><div className='code2'>console</div><div>.</div><div className='code3'>log</div><div className='containerCode'>(</div><div>"</div>
                            <div style={{width:'130px',textAlign:'center'}}>
                                <div className={styles}>   
                                {hellow}
                                </div>
                            </div>
                            <div>"</div><div className='containerCode'>);</div></p>
                        </Row>
                      
                     
                    </div>
                </Col>

                
                <Col xs={6} md={6}>
                    <div className="listHeader">
                        <ul >
                            <div style={{display:'flex'}}>
                                <div className='containerCode' style={{margin:'0'}}>{buka}</div>
                                <p className='code'>ul</p>
                                <div className='containerCode' style={{margin:'0'}}>{tutup}</div>
                            </div>

                            
                            <div  style={{display:'flex'}}>
                                <div className='containerCode'>{buka}</div>
                                <p className='code'>li</p>
                                <div className='containerCode'>{tutup}</div>
                                <li  >Project</li>
                                <div className='containerCode'>{buka}</div>
                                <p className='code'>li</p><span>/</span>
                                <div className='containerCode'>{tutup}</div>
                            </div>
                          
     
                            <div style={{display:'flex'}}>
                            <div className='containerCode'>{buka}</div>
                            <p className='code'>li</p>
                                <div className='containerCode'>{tutup}</div>
                                <li>About</li>
                                <div className='containerCode'>{buka}</div>
                                <p className='code'>li</p> <span>/</span>
                                <div className='containerCode'>{tutup}</div>
                            </div>
     
                            <div style={{display:'flex'}}>
                                <div className='containerCode'>{buka}</div>
                                <p className='code'>li</p>
                                <div className='containerCode'>{tutup}</div>
                                <li>Contact</li>
                                <div className='containerCode'>{buka}</div>
                               <p className='code'>li</p> <span>/</span>
                                <div className='containerCode'>{tutup}</div>
                            </div>

                            <div style={{display:'flex'}}>
                                <div className='containerCode' style={{margin:'0'}}>{buka}</div>
                                <p className='code'>ul</p> <span>/</span>
                                <div className='containerCode' style={{margin:'0'}}>{tutup}</div>
                            </div>

                            <div onClick={mode} >dark</div>
                        </ul>
                    </div>
                </Col>

               
            </Row>
            <div className='gambarHeader'>
                <img src={me} alt="" />
            </div>
            <Row>
                <Col>
                <p>
                I am a graduate of vocational high school with a major in Visual Communication Design (DKV), currently attending a Front-end Web Development bootcamp. With a strong background in graphic design and visual aesthetics from my DKV studies, I have decided to enhance my skills in the world of technology and web development by taking this specialized bootcamp focused on front-end web development.
                </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Header