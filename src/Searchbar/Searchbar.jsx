import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from './Searchbar.module.css'

 const Searchbar = ({ onSubmit,currentQuery }) => {
  const [value, setValue] = useState('');

  const createCurrentValue = (e) => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (value.trim() === '') {
      toast('Please, enter a search term');
      return;
    }
    if (value.trim() === currentQuery) {
      toast('This term is already');
      return;
    }

    onSubmit(value);
    setValue('');
  };

  return (
    <header className={css.header}>
      <form onSubmit={onSubmitHandler} className={css.form}>
        <input className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={createCurrentValue}
          value={value}
        />
        <button className={css.form_button} type="submit">Search</button>
       <Toaster/>

      </form>
    </header>
  );
};
export default Searchbar;