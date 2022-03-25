
import Header from './components/Header';
import Toggle from './components/Toggle';

import axios from 'axios';
import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      comments: []
    }

  }

  componentDidMount() {

    axios.get('http://localhost:4000/comments').then((response) => this.setState({ comments: response.data }))

  }

  render() {

    const classToggle = index => {

      this.state.comments.map((item, i) => {

        if (i === index) {
          item.open = !item.open
          alert(i)
        } else {
          item.open = true;

        }

        return item;

      })

    }

    return (

      <div className="App">

        <Header />
        <div className="box" >
          {this.state.comments.map((item, i) => (

            <Toggle item={item} index={i} classToggle={classToggle} />

          ))

          }

        </div>
      </div>

    );

  }

}

export default App;


