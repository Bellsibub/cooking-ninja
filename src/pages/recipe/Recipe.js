import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

// styles
import './Recipe.css';

const Recipe = () => {
  const { id } = useParams();
  const {
    data: recipe,
    loading,
    error,
  } = useFetch(`http://localhost:3000/recipes/${id}`);

  return (
    <section className="content-wrapper recipe">
      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Loading...</p>}
      {recipe && (
        <div className="card">
          <h2 className="card-title">{recipe.title}</h2>
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
