import { Component } from 'react';
import { Card } from './components/card/card.component';
import { Modal } from './components/modal/modal.component';

import './app.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      showModal: false,
      modalData: [],
    };
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/DasCodes/front-end-internship-api/posts').then((response) =>
      response.json().then((posts) => this.setState({ posts: posts }))
    );
  }

  getModalData = (data) => {
    this.setState({ modalData: data }, this.showModal());
  };

  showModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <>
        <div className='container'>
          <Card posts={this.state.posts} sendModalData={this.getModalData} />
        </div>
        <Modal modal={this.state.showModal} data={this.state.modalData} modalHandler={this.showModal} />
      </>
    );
  }
}

export default App;
