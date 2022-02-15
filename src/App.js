import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';

// pages
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';

// components
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';

// styles
import './App.css';

function App() {
  const { mode, color } = useTheme();
  return (
    <div className={`App ${mode} color-${color}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/search" component={Search} />
          <Route path="/recipes/:id" component={Recipe} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
