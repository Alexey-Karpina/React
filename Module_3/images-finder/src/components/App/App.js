import React, { Component } from "react";
import SearchBar from "../SearchBar";
import LoaderImg from "../Loader";
import ApiServices from "../api-services";
import ImageGallery from "../ImageGallery";
import Button from "../Button";
import Modal from "../Modal";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      submit: "",
      isLoaded: false,
      items: [],
      isModal: false,
      largeImg: null,
      apiService: new ApiServices(),
    };
  }

  onFormSubmit = (submit) => {
    if (submit !== this.state.submit) {
      this.setState({ submit });
      return;
    }
  };

  updateGallery = () => {
    const { submit, apiService } = this.state;
    if (this.onFormSubmit === submit || submit === "") {
      return;
    }
    apiService.page = 1;
    apiService.getResource(submit).then((response) => {
      this.setState({
        isLoaded: false,
        items: response.hits,
      });
    });
  };

  scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    console.log("Scroll!!");
  };

  onLoadMoreClick = () => {
    const { apiService, submit } = this.state;
    apiService.page += 1;
    apiService.getResource(submit).then((response) => {
      this.setState((state) => {
        return { items: [...state.items, ...response.hits] };
      });
    });
    console.log("Click load more");
    this.scrollTo();
  };

  onImageClick = (id) => {
    const { items } = this.state;
    this.setState({ isModal: true });
    return items.map((item) => {
      if (item.id === id) {
        this.setState({ largeImg: item.largeImageURL });
      }
    });
  };

  onModalClick = () => {
    this.setState({ isModal: false });
  };
  onEscPress = (e) => {
    if (e.keyCode === 27 && this.state.isModal) {
      console.log("Esc Press");
      this.setState({ isModal: false });
    }
  };

  componentDidMount(){
    document.addEventListener("keydown", this.onEscPress);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.submit);
    console.log(prevState.submit);
    if (this.state.submit !== prevState.submit) {
      this.setState({ isLoaded: true });
      this.updateGallery();
    }
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.onEscPress);
  }

  render() {
    const { isLoaded, items, isModal, largeImg } = this.state;
    return (
      <>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        {items.length && (
          <>
            <ImageGallery images={items} onImageClick={this.onImageClick} />
            <Button onLoadMoreClick={this.onLoadMoreClick} />
          </>
        )}
        {isLoaded && <LoaderImg />}
        {isModal && (
          <Modal
            largeImageURL={largeImg}
            onModalClick={this.onModalClick}
            onEscPress={this.onEscPress}
          />
        )}
      </>
    );
  }
}
