import { db } from '../firebase/config';

import { Link } from 'react-router-dom';
// styles
import './RecipeList.css';

const RecipeList = ({ recipes }) => {
  if (recipes.length === 0) {
    return <div className="error">Nothing to see here 😞</div>;
  }

  const handleDelete = async (id) => {
    db.collection('recipes').doc(id).delete();
  };

  return (
    <section className="content-wrapper recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h2>{recipe.title}</h2>
          <div className="card-options">
            <button
              className="stl_button stl_button--outline stl_button--compact stl_button--circle"
              onClick={() => handleDelete(recipe.id)}>
              <i className="fa fa-trash icon"></i>
            </button>
          </div>
          <h3 className="details-text">{recipe.cookingTime} to make</h3>
          <p className="description">{recipe.method}</p>
          <Link className="stl_button action-button" to={`/recipes/${recipe.id}`}>
            Cook This
          </Link>
        </div>
      ))}
    </section>
  );
};

export default RecipeList;
