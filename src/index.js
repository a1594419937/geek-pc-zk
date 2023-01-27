import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/reset.css';
import './index.css';
import App from './App';
ReactDOM.render(
  // StrictMode 用来开启 React 严格模式，如果组件中使用了一些比较老的React现在已经不推荐的用法，
  // 在控制台中 React 就会给出一些警告提示
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
)