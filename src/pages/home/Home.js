import { useEffect, useState } from 'react';
import { db } from '../../firebase/config';

// components
import RecipeList from '../../components/RecipeList';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const unsub = db.collection('recipes').onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError('No recipes found to load');
          setLoading(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setLoading(false);
        }
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  return (
    <section className="content-wrapper">
      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </section>
  );
};

export default Home;
