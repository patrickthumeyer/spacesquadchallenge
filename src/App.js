import { useState } from "react";

import "./App.scss";
import "./normalize.scss";
import Header from "./components/Header/Header";
import NewsCard from "./components/NewsCard/NewsCard";
import ProgressCard from "./components/ProgressCard/ProgressCard";
import Dashboard from "./components/Dashboard/Dashboard";
import NumberCard from "./components/NumberCard/NumberCard";
import Timeline from "./components/Timeline/Timeline";
import NewsHeader from "./components/NewsHeader/NewsHeader";

const App = () => {
  const [country, setCountry] = useState("german");

  return (
    <div className="App">
      <div className="dashboardWrapper">
        <div className="stats">
          <Header headline="Covid-19 Dashboard" setCountry={setCountry} />
          <ProgressCard country={country} percentage={34.2} />
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
