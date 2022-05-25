import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref } from 'firebase/database';
import React, { Component } from 'react';
import './App.css';
import config from './config/config';

class App extends Component {
  constructor(props) {
    super(props);

    this.BalanceUpdate = this.BalanceUpdate.bind(this);
    this.state = { user_data:{} }
  }

  componentDidMount() {

  }

  BalanceUpdate = function (snapshot) {
  
    this.setState({ user_data:   snapshot.val()  });
  }



  render() {
    const app = initializeApp(config);
    const auth = getAuth(app);
  
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const db = getDatabase(); //get db the order and functions are to be in this order.
        const foo = ref(db, `users/${user.uid}`);
        onValue(foo, (snapshot) => {            
          this.BalanceUpdate(snapshot);
        }, (error) => console.log(error));
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1>Flower Power</h1>          
          <p>{this.state.user_data.remaining} ounces remain</p>
          <a href="/settings">settings</a>
        </header>
      </div>
    );
  }
}


export default App;
