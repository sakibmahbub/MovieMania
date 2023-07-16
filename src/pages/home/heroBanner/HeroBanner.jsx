import React, { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      <div className="container">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Unleash your curiosity amidst countless films, shows, and souls.
            Explore now!
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for your desired show..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
