// library
import {Container,Row,Col} from 'react-bootstrap'

// style
import './education.css'

const Education =()=>{
    return(
        <Container>
            <Row>
                <Col md={4}>
                    <div className='timeEducation'>
                    07/2020 - 06/2023
                    </div>
                </Col>
                <Col md={8}>
                    <div className='contentEducation'>
                        <h3>Senior High School</h3>
                        <h4>SMKN 7 PALEMBANG</h4>
                        <p>
                        At SMKN7, I am enthusiastic about developing my skills and knowledge in visual communication. I believe that design is a powerful tool to convey messages in an effective and captivating manner.
                        </p>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={4}>
                    <div className='timeEducation'>
                    01/2023 - 06/2023
                    </div>
                </Col>
                <Col md={8}>
                    <div className='contentEducation'>
                        <h3>Courses</h3>
                        <h4>Dibimbing.id</h4>
                        <p>
                        I am extremely enthusiastic about honing my skills in HTML, CSS, and JavaScript while mastering frameworks such as React.js and Bootsrap during this bootcamp. Here, I am also learning the principles of responsive design, engaging user interactions, and best practices in web development.
                        </p>
                    </div>
                </Col>
            </Row>

            
            
        </Container>
    )
}

export default Education;