import style from './App.module.css';
import Button from './components/Button/Button';
import JornalItem from './components/JornalItem/JornalItem';
import CardWrapper from './components/CardWrapper/CardWrapper';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Body from './layout/Body/Body';
import Form from './components/Form/Form';
import { useState } from 'react';

function App() { 



	const INDATA = [
		{
			id: 1,
			title: 'asdasdsa asdas',
			text: 'aasdasdnas das d as v gf b hgf hsd',
			date: new Date()
		},
		{
			id: 2,
			title: 'zxcczvc',
			text: 'xzvbv ddd fdvcxvcv 32323',
			date: new Date()
		}
    
	];

	const [data, setData] = useState(INDATA);

	function pushData(item) {
		setData(oldItem => [...oldItem, {
			text: item.description,
			title: item.text,
			date: new Date(item.date),
			id: Math.max(...oldItem.map(i => i.id)) + 1
		}]);
		console.log(data);
	}

	const sortData = data.sort((a, b) =>{
		return a.date - b.date;
	}); 

	return ( 
		<div className={style.App}>
			<LeftPanel>
		
				<CardWrapper>
      Новое  
				</CardWrapper>

				{sortData.map((el) =>( 
					<CardWrapper key={el.id}>
						<JornalItem  title={el.title} text={el.text } date={el.date}></JornalItem>
            
					</CardWrapper> 
				))}


				
    	</LeftPanel>
			<Body>
				<Form onSubmit={pushData} />

			</Body>
		</div>
	);
}

export default App; 
