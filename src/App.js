import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import CreateScreen from './screens/CreateScreen';
import ExpandedScreen from './screens/ExpandedScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import SignUp from './screens/SignUp';
import ListingsScreen from './screens/ListingsScreen';


function App() {

  return (
    <div>
        <NavBar />
        <Router>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Routes>
              <Route path="/create" element={<CreateScreen />}/>
              <Route path="/listing" element={<ExpandedScreen />}/>
              <Route path="/profile" element={<ProfileScreen />}/>
              <Route path="/listings" element={<ListingsScreen />}/>
              <Route path="/login" element={<LoginScreen />}/>
              <Route path="/signup" element={<SignUp />}/>
              <Route path="/" element={<HomeScreen />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
