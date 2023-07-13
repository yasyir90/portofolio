// library
import {Container,Row,Col} from 'react-bootstrap'
import  { useState, useEffect } from 'react'


// import component
import DarkMode from '../darkMode/dark'

// image
import me1 from '../../assets/saya bg-black.png'
import me2 from '../../assets/saya bg-white.png'



// style
import './header.css'

const Header = ()=>{


 
    const [hellow,setHellow]=useState('');
    const [styles,setStyles]=useState('');
    const [meImg,setMeImg]=useState(me1);

    const hello = ['hello world',`i'm`,'Front-end','web','development']

    const darkMode = localStorage.getItem('dark')
    console.log(darkMode)
 
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

  
 useEffect(()=>{
    if(darkMode === 'light'){
        setMeImg(me2)
       }
       if(darkMode === 'dark'){
        setMeImg(me1)
       }
      
 })
  
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

                            <DarkMode/>

                        </ul>
                    </div>
                </Col>

               
            </Row>
            <div className='gambarHeader '>
                <img src={meImg} alt="" />
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