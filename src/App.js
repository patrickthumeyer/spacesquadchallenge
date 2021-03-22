import { useState } from "react";

import "./App.scss";
import "./normalize.scss";
import Header from "./components/header/header";
import NewsCard from "./components/newsCard/newsCard";
import ProgressCard from "./components/progressCard/progressCard";
import Dashboard from "./components/dashboard/dashboard";
import NumberCard from "./components/numberCard/numberCard";
import Timeline from "./components/timeline/timeline";
import NewsHeader from "./components/newsHeader/newsHeader";

const App = () => {
  const [country, setCountry] = useState("german");

  return (
    <div className="App">
      <div className="dashboardWrapper">
        <div className="stats">
          <Header headline="Covid-19 Dashboard" setCountry={setCountry} />
          <ProgressCard country={country} />
          <Dashboard />
          <NumberCard headline="First vaccination received" amount={18687931} />
          <NumberCard headline="Second vaccination received" amount={9341739} />
          <NumberCard headline="Vaccinations yesterday" amount={469293} />
          <NumberCard headline="Vaccinations today (so far)" amount={385920} />
        </div>
        <Timeline className="__timeline" />
      </div>
      <div className="news">
        <NewsHeader headline="News" />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default App;
