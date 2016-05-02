import React from 'react';
import ReactDOM from 'react-dom';

class MainComp extends React.Component {
  render() {
    return (<div>Hello</div>);
  }
}

ReactDOM.render(<MainComp />, document.getElementById('app'));
