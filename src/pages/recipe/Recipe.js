import { useEffect, useState } from 'react';
import { db } from '../../firebase/config';

import { useParams, useHistory } from 'react-router-dom';

// styles
import './Recipe.css';

const Recipe = () => {
  const { id } = useParams();
  const history = useHistory();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const unsub = db.collection('recipes').doc(id).onSnapshot((doc) => {
      if (doc.exists) {
        setLoading(false);
        setRecipe(doc.data());
      } else {
        setLoading(false);
        setError('No such document found');
      }
    });
    return () => unsub();
  }, [id]);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await db.collection('recipes').doc(id).delete();
      setLoading(false);
      history.push('/');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleEdit = () => {
    db.collection('recipes').doc(id).update({
      title: 'New title',
    });
  };

  return (
    <section className="content-wrapper recipe">
      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Loading...</p>}
      {recipe && (
        <div className="card">
          <h2 className="card-title">{recipe.title}</h2>
          <div className="card-options">
            <button className="stl_button stl_button--outline" onClick={handleDelete}>
              <i className="fa fa-trash icon"></i>
            </button>
            <button className="stl_button stl_button--outline" onClick={handleEdit}>
              <i className="fa fa-edit icon"></i>
            </button>
          </div>
          <h3 className="details-text">{recipe.cookingTime} to make</h3>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className="description">{recipe.method}</p>
        </div>
      )}
    </section>
  );
};

export default Recipe;
