import './App.css';
import Button from './components/Button/Button';
import JornalItem from './components/JornalItem/JornalItem';

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
     <JornalItem title={data[0].title} text={data[0].text } date={data[0].date}></JornalItem>
    </>
  );
}

export default App; 
