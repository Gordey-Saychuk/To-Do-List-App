import React, { useState } from 'react';
import style from './Form.module.css';
import Button from '../Button/Button';

export default function Form({ onSubmit }) {

	const [formValidState, setFormValidState] = useState({
		title: true,
		text: true,
		date: true
	});

	function SubmitForm(e) {
		e.preventDefault();

		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
		let isFormValid = true;

		// Validate 'text' (title)
		if (!formProps.text.trim().length) {
			setFormValidState(state => ({ ...state, title: false }));
			isFormValid = false;

		} else {
			setFormValidState(state => ({ ...state, title: true }));
			
		}

		// Validate 'date'
		if (!formProps.date.trim().length) {
			setFormValidState(state => ({ ...state, date: false }));
			isFormValid = false;

		} else {
			setFormValidState(state => ({ ...state, date: true }));

		}

		// Validate 'description'
		if (!formProps.description.trim().length) {
			setFormValidState(state => ({ ...state, text: false }));
			isFormValid = false;

		} else {
			setFormValidState(state => ({ ...state, text: true }));
	
		}

		if (isFormValid == true){
			onSubmit(formProps);
		}
		else{
			return;
		}
	
	}

	return (
		<form onSubmit={SubmitForm} className={style.form}>
			<input
				className={`${formValidState.date ? '' : style.invalid}`}

				name='date'
				type='date'
			/>
			<input
				className={`${formValidState.title ? '' : style.invalid}`}
				name='text'
				type='text'
			/>
			<textarea
				className={`${formValidState.text ? '' : style.invalid}`}
				name='description'
			/>
			<Button type='submit'>btn</Button>
		</form>
	);
}
