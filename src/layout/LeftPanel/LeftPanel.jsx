import React from 'react';
import style from './LeftPanel.module.css';

export default function LeftPanel({children}) {
	return (
		<div className={style.leftpanel}>
			{children}
		</div>
	);
}
