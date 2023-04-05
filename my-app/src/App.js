
//import Navbar from "./Components/Navbar";
import "./App.css";
import Navbar2 from "./Components/Nav2";
import MyComponent from "./Components/Background";
import SearchBar from "./Components/SearchBar";
import Candidates from "./Components/Candidates";
import Jobs from "./Components/Jobs";
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
    <>

      <Navbar2/>
      <MyComponent />
      <SearchBar />
      
    {/*   <Router>
      <Navbar />
      <Switch>
        <Route exact path="/Candidates" component={Candidates} />
        <Route path="/Jobs" component={Jobs} />
      </Switch>
    </Router>
    */}
    <Candidates/>
    <Jobs/>
    </>
  );
}

export default App;
