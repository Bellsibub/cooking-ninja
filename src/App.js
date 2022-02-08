import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';

// components
import Navbar from './components/Navbar';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
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
