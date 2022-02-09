import { Link } from 'react-router-dom';
// styles
import './RecipeList.css';

const RecipeList = ({ recipes }) => {
  if (recipes.length === 0) {
    return <div className="error">Nothing to see here 😞</div>;
  }
  return (
    <section className="content-wrapper recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h2>{recipe.title}</h2>
          <h3 className="details-text">{recipe.cookingTime} to make</h3>
          <p className="description">{recipe.method}</p>
          <Link className="stl_button" to={`/recipes/${recipe.id}`}>
            Cook This
          </Link>
        </div>
      ))}
    </section>
  );
};

export default RecipeList;
