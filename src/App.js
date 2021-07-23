import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Loader from "react-loader-spinner";

const fetchPictures = async (query, page) => {
  return await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=22033849-04a58a8d7b6d53f5d68e2165a&image_type=photo&orientation=horizontal&per_page=12`
  );
};

class App extends Component {
  state = {
    pictures: [],
    error: null,
    loading: false,
    currentPage: 1,
    query: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      (async () => {
        try {
          this.setState({ loading: true });
          const pictures = await fetchPictures(
            this.state.query,
            this.state.currentPage
          );
          this.setState({
            pictures: [...prevState.pictures, ...pictures.data.hits],
            loading: false,
          });
        } catch (error) {
          this.setState({ error: "error", loading: false });
        }
      })();
    }
  }

  getPictures = async () => {
    try {
      this.setState({ loading: true });
      const pictures = await fetchPictures(
        this.state.query,
        this.state.currentPage
      );
      this.setState({ pictures: pictures.data.hits, loading: false });
    } catch (error) {
      this.setState({ error: "error", loading: false });
    }
  };

  nextPage = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  getQuery = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.getPictures();
  };

  render() {
    const { loading, error, pictures } = this.state;

    return (
      <div>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.getQuery}
            />
          </form>
        </header>
        {loading && (
          <Loader
            type="Rings"
            color="#00FA9A"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        {error ? (
          <h2>{error}</h2>
        ) : (
          <ul className="ImageGallery">
            {pictures.map((picture) => (
              <li className="ImageGalleryItem" key={picture.id}>
                <img
                  src={picture.webformatURL}
                  alt=""
                  className="ImageGalleryItem-image"
                />
              </li>
            ))}
            <button onClick={this.nextPage}>Load more</button>
          </ul>
        )}
      </div>
    );
  }
}

export default App;
