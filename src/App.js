import logo from './logo.svg';
import './App.css';
import AddRecipe from './components/AddRecipe';
import SearchRecipe from './components/SearchRecipe';
import ViewAllRecipe from './components/ViewAllRecipe';

function App() {
  return (
    <div>
     
    <AddRecipe/>
    <SearchRecipe/>
    <ViewAllRecipe/>
    </div>
  );
}

export default App;
