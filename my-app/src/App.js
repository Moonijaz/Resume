
import Navbar from "./Components/Navbar";
import "./App.css";
import MyComponent from "./Components/Background";
//import AnimatedSearchBox from "./Components/Search";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <>
      <Navbar />
      <MyComponent />
      {/*<AnimatedSearchBox/> */}
      <SearchBar />

    </>
  );
}

export default App;
