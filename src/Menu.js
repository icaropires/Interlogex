import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Menu, MenuItem, IconMenu, IconButton} from 'material-ui';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import logo from '../public/imagem/logo_cabecalho.png';

// <Link to="/quemsomos" className={this.state.linkState[1]} onClick={this.handleClick.bind(this,1)}>Sobre nós</Link>
export default class MenuInterlogex extends React.Component {

  constructor(props){
    super(props);
    this.state = {'activeItem': "/"};
  }

  getPageNameFromUrl(){
    const urls_name = {'/': 'Interlogex',
      '/servicos': 'Nossos Serviços',
      '/contato': 'Contatos',
      '/areacliente': 'Área do cliente'
    };

    return urls_name[this.state.activeItem];
  }

  componentWillReceiveProps(){
    this.setState({ activeItem: window.location.pathname});
  }
  componentWillMount(){
    this.setState({ activeItem: window.location.pathname});
  }

  componentDidUpdate(){this.handleHash();}
  handleHash(){
    const id = window.location.hash;
    if(id !== ''){
      const element = document.querySelector(id);
      element.scrollIntoView();
    } else {
      window.scroll(0,0);
    }
  }



  render(){
      console.log(this.state.activeItem);
    const m = "menu", ms = "menu selected";
    return (
      <div className="menuapp">
        <div className="desktop">
          <Link to="/"><img src={logo}/></Link>
          <div className="wrapper-menu">
            <Link className={this.state.activeItem === "/"?ms:m} to="/"><span>Home</span></Link>
          </div>
          <div className="wrapper-menu">
            <Link to="/servicos" className={this.state.activeItem === "/servicos"?ms:m}><span>Serviços</span></Link>
          </div>
          <div className="wrapper-menu">
            <Link to="/contato" className={this.state.activeItem === "/contato"?ms:m}><span>Contatos</span></Link>
          </div>
          <div className="wrapper-menu">
            <Link to="/areacliente" className={this.state.activeItem === "/areacliente"?ms:m}><span>Área do Cliente</span></Link>
          </div>
        </div>
        <div className="mobile">
          <IconMenu
            iconButtonElement={<IconButton><MenuIcon /></IconButton>}
          >
            <MenuItem primaryText="Home" containerElement={<Link to="/" />}/>
            <MenuItem primaryText="Serviços" containerElement={<Link to="/servicos" />}  />
            <MenuItem primaryText="Contatos" containerElement={<Link to="/contato" />}  />
            <MenuItem primaryText="Área do cliente" containerElement={<Link to="/areacliente" />}  />
          </IconMenu>
          <h3>{this.getPageNameFromUrl()}</h3>
          <div className="app-number">
            Ligue já! <span className="ddd">(61)</span> 3554-5467
          </div>
        </div>
      </div>
    );
  }
}
