// Import necessary CSS files and Font Awesome library
import './Search.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function AnimatedSearchBox() {
  const handleSearchClick = () => {
    const searchBox = document.querySelector(".search-box");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const searchInput = document.querySelector("input");
    const searchData = document.querySelector(".search-data");
    searchBox.classList.add("active");
    searchBtn.classList.add("active");
    searchInput.classList.add("active");
    cancelBtn.classList.add("active");
    searchInput.focus();
    if (searchInput.value !== "") {
      var values = searchInput.value;
      searchData.classList.remove("active");
      searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";
    } else {
      searchData.textContent = "";
    }
  };

  const handleCancelClick = () => {
    const searchBox = document.querySelector(".search-box");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const searchInput = document.querySelector("input");
    const searchData = document.querySelector(".search-data");
    searchBox.classList.remove("active");
    searchBtn.classList.remove("active");
    searchInput.classList.remove("active");
    cancelBtn.classList.remove("active");
    searchData.classList.toggle("active");
    searchInput.value = "";
  };

  return (
    <div className="search-box">
      <input type="text" placeholder="Type to search.." />
      <div className="search-icon" onClick={handleSearchClick}>
        <i className="fas fa-search"></i>
      </div>
      <div className="cancel-icon" onClick={handleCancelClick}>
        <i className="fas fa-times"></i>
      </div>
      <div className="search-data"></div>
    </div>
  );
}

export default AnimatedSearchBox;
