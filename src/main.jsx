// import React from "react";
// import ReactDOM from "react-dom";
// import App from './App.jsx'
// import './index.css'

// ReactDOM.render(<App/>,document.querySelector("#root"))
// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from "./store/store";
import { Provider } from 'react-redux'
import Design from './components/Design.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
<App />
</Provider>

  
);
