import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

 const Searchbar = ({ onSubmit }) => {
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

    onSubmit(value);
    setValue('');
  };

  return (
    <header>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={createCurrentValue}
          value={value}
        />
        <button type="submit">Search</button>
       <Toaster/>

      </form>
    </header>
  );
};
export default Searchbar;