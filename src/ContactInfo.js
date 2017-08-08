import React from 'react';
import { Grid, Cell, Icon } from 'react-mdl';

import Phones from './Phones';
import Adress from './Adress';
import SocialMedias from './SocialMedias';

export default class ContactInfo extends React.Component {
  constructor(props){
    super(props);
    this.showScroll = this.showScroll.bind(this);
    this.state={'scroll': true};
  }
  componentDidMount(){
    window.onscroll = this.showScroll;
  }

  showScroll(event){
    if(this.state.scroll === true){
      const itemList = document.querySelectorAll(".contact-container-item");
      let count = 1000;
      itemList.forEach(function(e){
        setTimeout(function(){
          e.style.marginTop="100px";
        }, count);
        count += 1000;});
      this.setState({'scroll': false});
    }
  }
  render(){
    return (
    <div className="contact-container">
      <Phones />
      <SocialMedias />
      <Adress />
    </div>
    );
  }
}
