import style from './App.module.css';
import Button from './components/Button/Button';
import JornalItem from './components/JornalItem/JornalItem';
import CardWrapper from './components/CardWrapper/CardWrapper';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Body from './layout/Body/Body';
import Form from './components/Form/Form';

function App() { 

	const data = [
		{
			title: 'asdasdsa asdas',
			text: 'aasdasdnas das d as v gf b hgf hsd',
			date: new Date()
		}
	];

	return ( 
		<div className={style.App}>
			<LeftPanel>
		
				<CardWrapper>
      Новое  
				</CardWrapper>
				<CardWrapper>
					<JornalItem title={data[0].title} text={data[0].text } date={data[0].date}></JornalItem>
				</CardWrapper>
				<Button>btn</Button> 
			</LeftPanel>
			<Body>
				<Form />

			</Body>
		</div>
	);
}

export default App; 
