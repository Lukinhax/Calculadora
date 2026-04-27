import { Container, Content, Row } from './styles';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';



function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${num}${prev}`);
  };

  return(
    <Container>
      <Content>
        <Input value={currentNumber}/>
          <Row>
            <Button label="x" onclick={() => handleAddNumber('x')}/>
            <Button label="/" onclick={() => handleAddNumber('/')}/>
            <Button label="C" onclick={() => handleAddNumber('C')}/>
            <Button label="X" onclick={() => handleAddNumber('X')}/>
          </Row>
          <Row>
            <Button label="7" onclick={() => handleAddNumber('7')}/>
            <Button label="8" onclick={() => handleAddNumber('8')}/>
            <Button label="9" onclick={() => handleAddNumber('9')}/>
            <Button label="-" onclick={() => handleAddNumber('-')}/>
          </Row>
          <Row>
            <Button label="4" onclick={() => handleAddNumber('4')}/>
            <Button label="5" onclick={() => handleAddNumber('5')}/>
            <Button label="6" onclick={() => handleAddNumber('6')}/>
            <Button label="+" onclick={() => handleAddNumber('+')}/>
          </Row>
          <Row>
            <Button label="1" onclick={() => handleAddNumber('1')}/>
            <Button label="2" onclick={() => handleAddNumber('2')}/>
            <Button label="3" onclick={() => handleAddNumber('3')}/>
            <Button label="=" onclick={() => handleAddNumber('=')}/>
          </Row>
      </Content>
    </Container>
  );
}

export default App;
