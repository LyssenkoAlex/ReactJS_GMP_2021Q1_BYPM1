import React from "react";


const Header = () => {
  return (
    <header>
      <div className="bcg_container">
        <section className="upper_pane">
          <div>
            <span className='red_font red_font_bold'>netflix</span>
            <span className='red_font'>roulette</span>
          </div>
          <button className='add_movie_button' role='add_movie'>+ ADD MOVIE</button>
        </section>

      <section className="search_pane">
        <h2>FIND YOUR MOVIE</h2>
        <div>
          <input type="search" role='search_movie' placeholder='What do you want to watch?'/>
          <button role='search'>SEARCH</button>
        </div>
      </section>

      </div>


    </header>
  );
};

export default Header;
