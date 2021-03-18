import "./App.scss";
import "./normalize.scss";
import Header from "./components/header/header";
import NewsCard from "./components/newsCard/newsCard";

function App() {
  return (
    <div className="App">
      <div className="stats">
        <Header headline="Covid-19 Dashboard" />
      </div>
      <div className="news">
        <Header headline="News" />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
}

export default App;
