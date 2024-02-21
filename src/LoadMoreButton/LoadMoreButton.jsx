 import css from "./LoadmoreButton.module.css";

 const LoadMoreButton = ({onClick}) => (

   <button className={css.load_more_button} type="button" onClick={onClick}>Load more</button>);

   export default LoadMoreButton;
