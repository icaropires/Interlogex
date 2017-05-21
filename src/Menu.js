import React from 'react';
import {Link} from 'react-router-dom';
import {Navigation} from 'react-mdl';

export default class MenuInterlogex extends React.Component {
  constructor(props){
    super(props);
    this.state = {'linkState': Array(4).fill(""), 'prev': 0};
    this.handleClick = this.handleClick;
    this.state.linkState[0]="selected";
  }
  handleClick(e, j){
    this.state.linkState[this.state.prev]="";
    this.setState({prev: e});
    this.state.linkState[e]="selected";
  }
  render(){
    return (
        <Navigation>
            <Link className={this.state.linkState[0]} onClick={this.handleClick.bind(this,0)} to="/">Home</Link>
            <Link to="/quemsomos" className={this.state.linkState[1]} onClick={this.handleClick.bind(this,1)}>Sobre nós</Link>
            <Link to="/servicos" className={this.state.linkState[2]} onClick={this.handleClick.bind(this,2)}>Serviços</Link>
            <Link to="/contato" className={this.state.linkState[3]}onClick={this.handleClick.bind(this,3)}>Contatos</Link>
        </Navigation>
    );
  }
}
