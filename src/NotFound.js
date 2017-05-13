import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends React.Component {
  render(){
    return (<div className="not-found">
        <h1> 404 </h1>
        <h2> Página não encontrada!</h2>
        <Link to="/">Voltar para início</Link>
      </div>
    );
  }
}
