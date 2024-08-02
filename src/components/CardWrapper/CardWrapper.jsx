import style from './CardWrapper.module.css';

export default function CardWrapper({children}) {
  return (
    <button className={style.btn}  > 
      {children}
    </button> 
  );
}
