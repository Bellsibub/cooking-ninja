import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

// components
import RecipeList from '../../components/RecipeList';

const Search = () => {
  const { search } = useLocation();
  const searchString = new URLSearchParams(search).get('q');

  const { data, loading, error } = useFetch(
    `http://localhost:3000/recipes?q=${searchString}`
  );

  return (
    <section className="content-wrapper">
      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Loading...</p>}
      {data && (
        <>
          <h2>Search results for "{searchString}"</h2>
          <p>{data.length} recipes found</p>
          <RecipeList recipes={data} />
        </>
      )}
    </section>
  );
};

export default Search;
