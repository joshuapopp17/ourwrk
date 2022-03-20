import './App.css';
import ListingContainer from './components/ListingContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div>
      <NavBar />
      <ListingContainer category={"Gardening"}/>
      <ListingContainer category={"Cleanup"}/>
    </div>
  );
}

export default App;
