
import Navbar from "./Components/Navbar";
import "./App.css";
import MyComponent from "./Components/Background";
//import AnimatedSearchBox from "./Components/Search";
import SearchBar from "./Components/SearchBar";
import Candidates from "./Components/Candidates";
import Jobs from "./Components/Jobs";

function App() {
  return (
    <>
      <Navbar />
      <MyComponent />
      {/*<AnimatedSearchBox/> */}
      <SearchBar />
      <Candidates/>
      <Jobs/>

    </>
  );
}

export default App;
