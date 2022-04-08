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
import SignUpScreen from './screens/SignUp';
import ListingsScreen from './screens/ListingsScreen';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './screens/ProtectedRoute';

function App() {



  return (
    <div>
      <UserAuthContextProvider>
        <Router>
        <NavBar />
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
              <Routes>
                <Route path="/" element={<HomeScreen />}/>
                <Route path="/login" element={<LoginScreen />}/>
                <Route path="/signup" element={<SignUpScreen />}/>
                <Route path="/listings" 
                  element={
                  <ProtectedRoute>
                    <ListingsScreen />
                  </ProtectedRoute>} 
                />
                <Route path="/profile" 
                  element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>} 
                />
                <Route path="/expanded" 
                  element={
                  <ProtectedRoute>
                    <ExpandedScreen />
                  </ProtectedRoute>} 
                />
                <Route path="/create" 
                  element={
                  <ProtectedRoute>
                    <CreateScreen />
                  </ProtectedRoute>} 
                />
              </Routes>
        </Router>
        </UserAuthContextProvider>
    </div>
  );
}

export default App;
