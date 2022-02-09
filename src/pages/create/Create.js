import { useState } from 'react';
// styles
import './Create.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState(0);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime);
  }
  
  return (
    <section className="content-wrapper create">
      
        <div className="card">
          <h2 className="card-title">Add a New Recipe</h2>
          <form onSubmit={handleSubmit}>
            <label className="form__input">
              <span>Title:</span>
              <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label className="form__input">
              <span>Method:</span>
              <textarea required rows="6" value={method} onChange={(e) => setMethod(e.target.value)} />
            </label>
            <label className="form__input">
              <span>Cooking Time (minutes):</span>
              <input required type="number" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} />
            </label>
            <button type="submit" className="stl_button">Submit</button>
          </form>
        </div>
      
    </section>
  );
};

export default Create;
