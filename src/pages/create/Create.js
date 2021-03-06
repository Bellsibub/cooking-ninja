import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { db } from '../../firebase/config';

// styles
import './Create.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState(null);
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const ingredientInput = useRef(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    db.collection('recipes')
      .add({
        title,
        ingredients,
        method,
        cookingTime: cookingTime + ' minutes',
      })
      .then((doc) => {
        setLoading(false);
        history.push(`/recipes/${doc.id}`);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  const handleAdd = () => {
    const ingredient = newIngredient.trim();
    if (ingredients) {
      setIngredients((prev) => [...new Set([...prev, ingredient])]);
    } else {
      setIngredients([ingredient]);
    }
    setNewIngredient('');
    ingredientInput.current.focus();
  };

  return (
    <section className="content-wrapper create">
      {error && <p className="error">Could not save recipe, please try again</p>}
      {loading ? (
        <p className="loading">Saving new recipe...</p>
      ) : (
        <div className="card">
          <h2 className="card-title">Add a New Recipe</h2>
          <form
            onSubmit={handleSubmit}
            onKeyPress={(e) => {
              e.key === 'Enter' && e.preventDefault();
            }}>
            <label className="form__input">
              <span className="input__header">Title:</span>
              <input
                required
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label className="form__input">
              <span className="input__header">Ingredients:</span>
              <div className="input__multiples">
                <input
                  type="text"
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onKeyPress={(e) => {
                    e.key === 'Enter' && handleAdd();
                  }}
                  ref={ingredientInput}
                />
                <button type="button" className="stl_button" onClick={handleAdd}>
                  Add
                </button>
              </div>
              <p className="input__details">
                Current ingredients:{' '}
                {ingredients ? (
                  ingredients.map((ingredient, i) => (
                    <span key={ingredient}>
                      {ingredient}
                      {i === ingredients.length - 1 ? '.' : ', '}
                    </span>
                  ))
                ) : (
                  <span>No ingredients, please add some</span>
                )}
              </p>
            </label>
            <label className="form__input">
              <span className="input__header">Method:</span>
              <textarea
                required
                rows="6"
                value={method}
                onChange={(e) => setMethod(e.target.value)}
              />
            </label>
            <label className="form__input">
              <span className="input__header">Cooking Time (minutes):</span>

              <input
                required
                type="number"
                value={cookingTime}
                onChange={(e) => setCookingTime(e.target.value)}
              />
            </label>
            <button type="submit" className="stl_button">
              Submit
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Create;
