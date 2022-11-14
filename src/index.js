import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './state/redux';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const _callSubscriber = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} 
           dispatch={store.dispatch.bind(store)}
           store={store} />
    </React.StrictMode>
  );
}


// console.log(state)

_callSubscriber(store.getState())

store.subscribe(() =>{
  
  let state = store.getState()
  _callSubscriber(state)
  // console.log(state.profilePage.newPostText)
  if(state.profilePage.newPostText === 'сука' || state.profilePage.newPostText === 'пидор') {
    console.clear()
    console.log('остановись')
    state.profilePage.newPostText = ''
  }
} )


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
