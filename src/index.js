import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './Components/store/Context';
import Context from './Components/store/Context';
import firebase from './Components/firebase/config';

ReactDOM.render(
    <FirebaseContext.Provider value={{firebase}}>
      <Context>
    <App />
    </Context>
    </FirebaseContext.Provider>


, document.getElementById('root'));
