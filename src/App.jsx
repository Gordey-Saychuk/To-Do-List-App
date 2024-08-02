import './App.css';
import Button from './components/Button/Button';
import JornalItem from './components/JornalItem/JornalItem';
import CardWrapper from './components/CardWrapper/CardWrapper';

function App() { 

  const data = [
     {
      title: 'asdasdsa asdas',
      text: 'aasdasdnas das d as v gf b hgf hsd',
      date: new Date()
    }
  ];

  return (
    <>

     <Button>btn</Button>
     <CardWrapper>
      Новое 
     </CardWrapper>
     <CardWrapper>
     <JornalItem title={data[0].title} text={data[0].text } date={data[0].date}></JornalItem>
     </CardWrapper>
    </>
  );
}

export default App; 
