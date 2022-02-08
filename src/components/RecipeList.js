import { Link } from 'react-router-dom';
// styles
import './RecipeList.css';

const RecipeList = ({ recipes }) => {
  return (
    <section className="content-wrapper recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h2>{recipe.title}</h2>
          <h3 className="details-text">{recipe.cookingTime} to make</h3>
          <p className="description">{recipe.method}</p>
          <Link className="link-button" to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </section>
  );
};

export default RecipeList;
