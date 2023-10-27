import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Chatbot= () => {  
    return(
        <div className="ChatbotCon">
            <h2>문의 사항</h2>
            
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col md={60}>
                    <div id="chatbot" 
                    style={{ 
                        height: '400px', 
                        border: '1px solid #ccc', 
                        borderRadius: '15px', 
                        padding: '15px' }}>
                        {/* TODO 챗봇 Api 추가. */}
                        <p>챗봇을 로드 중입니다...</p>
                    </div>
                    </Col>
              </Row>
            </Container>
        </div>
    );
};

export default Chatbot;