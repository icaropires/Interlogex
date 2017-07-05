import React from 'react';
import {Link} from 'react-router-dom';
import {Navigation} from 'react-mdl';

// <Link to="/quemsomos" className={this.state.linkState[1]} onClick={this.handleClick.bind(this,1)}>Sobre nós</Link>
export default class MenuInterlogex extends React.Component {
  constructor(props){
    super(props);
    this.state = {'activeItem': "/"};
  }

  componentWillReceiveProps(){
    this.state = { activeItem: window.location.pathname};
    window.scroll(0,0);
  }

  componentWillMount(){
    this.state = { activeItem: window.location.pathname};
    window.scroll(0,0);
  }

  render(){
    return (
        <Navigation>
          <Link className={this.state.activeItem === "/"?"selected":""} to="/">Home</Link>
	      <Link to="/services" className={this.state.activeItem === "/services"?"selected":""}>Serviços</Link>
          <Link to="/contato" className={this.state.activeItem === "/contato"?"selected":""}>Contatos</Link>
	      <Link to="/areacliente" className={this.state.activeItem === "/areacliente"?"selected":""}>Área do Cliente</Link>
        </Navigation>
    );
  }
}
