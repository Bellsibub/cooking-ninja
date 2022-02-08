import { useFetch } from '../../hooks/useFetch';
// components
import RecipeList from '../../components/RecipeList';
// styles
import './Home.css';

const Home = () => {
  const { data, loading, error } = useFetch('http://localhost:3000/recipes');

  return (
    <section className="content-wrapper">
      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </section>
  );
};

export default Home;
