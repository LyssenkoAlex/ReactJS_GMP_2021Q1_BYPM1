import React from 'react';
import AddMovie from './modals/AddMovie';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState((state) => ({ isShow: !state.isShow }));
  }

  render() {
    return (
      <header>
        <div className="bcg_container">
          <section className="upper_pane">
            <div>
              <span className="red_font red_font_bold">netflix</span>
              <span className="red_font">roulette</span>
            </div>
            <button
              className="add_movie_button"
              role="add_movie"
              onClick={this.toggleShow}
            >
              Add Movie
            </button>
          </section>

          <section className="search_pane">
            <h2>FIND YOUR MOVIE</h2>
            <div>
              <input
                type="search"
                role="search_movie"
                placeholder="What do you want to watch?"
              />
              <button role="search">Search</button>
            </div>
          </section>
        </div>

        {this.state.isShow ? (
          <AddMovie onClose={this.toggleShow} />
        ) : null}
      </header>
    );
  }
}

export default Header;
