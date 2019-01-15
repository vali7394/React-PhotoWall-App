import React from 'react';
import ReactDom from 'react-dom';
import Main from'./component/Main';
import './styles/styleSheet.css';
import {BrowserRouter} from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import {App} from './component/App'
import thunk from 'redux-thunk'
import {database} from './database/config'

 //const tasks = ['Reading','Eating','Sleeping'];

/* const element = React.createElement("ol",null,
                tasks.map((task,index)=>React.createElement("li",{key:index},task)));

ReactDom.render(element,document.getElementById('root')); */

/* const element =   <div>
                    <h1> "welcome Bhavni" </h1>
                    <ol>
                      { tasks.map((task,index) => <li key={index}> {task} </li>)}
                    </ol>
                  </div> */

  const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk))

  ReactDom.render(<Provider store={store}>
    <BrowserRouter><Main/></BrowserRouter>
  </Provider>,
  document.getElementById('root'))
