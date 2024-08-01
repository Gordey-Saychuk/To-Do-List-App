import style from './JornalItem.module.css';

export default function JornalItem({title, text, date}) {

  const formattedDate = date.toLocaleDateString('ru-RU');   

  return (
    <div className={style.body}  > 
      <h2 className={style.h2}>{title}</h2>
      <div className={style.div}>
        <div className={style.date}>{formattedDate}</div>
        <div>{text}</div>
      </div>
    </div>
  );
}
