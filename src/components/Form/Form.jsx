import React from 'react';
import style from './Form.module.css';
import Button from '../Button/Button';

export default function Form() {

	function SubmitForm(e){
		e.preventDefault();
		console.log(e.target[0].value);
		const FormDate = new FormData(e.target);
		const formProps = Object.fromEntries(FormDate);
		console.log(formProps);
	}

	return (
		<form onSubmit={SubmitForm} className={style.form}>
			<input name='date' type='date' />
			<input name='text' type='text' />
			<textarea name='description' type='text'/>
			<Button type='submit'>btn</Button> 
		</form>
	);
}
