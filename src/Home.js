import React from 'react';
const k = Array(20).fill(10).map(function(e){ return <li>{e}</li> });
export default class Home extends React.Component {
  render() {
    return (<div><h1>Home page</h1>
    <ul>
    {k}
    </ul>
    </div>);
  }
}
