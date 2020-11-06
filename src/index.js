import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';//같은 폴더 안에 있을 때 경로 표시 --> ./

ReactDOM.render( //render --> 화면에 나오는거(그려라)
  <App />, 
  document.getElementById('root')
);

// <App /> --> app.js --> 모든 컴포넌트를 감싸고 있는거
