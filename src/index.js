import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // ./는 같은 디렉토리라는 뜻 

ReactDOM.render(<App />,document.getElementById("potato")); //jsx요소는 한번에 한개만 사용 가능(리액트 애플리케이션이 하나의 컴포넌트만 rendering하기 때문)
// JSX란? HTML 문법을 JavaScript 코드 내부에 쓴 것. 그것이 바로 JSX(JavaScript eXtension)

