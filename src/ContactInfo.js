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
    this.showScroll();
    window.onscroll = this.showScroll;
  }

  showScroll(event){
    if(this.state.scroll === true){
      try{
        const itemList = document.querySelectorAll(".contact-container-item");
        console.log(itemList);
        let count = 0;
        for(var i=0; i<itemList.length; i++){
          setTimeout(function(e){
            e.style.marginTop="100px";
          }, count,itemList[i]);
          count += 1000;
        }
        this.setState({'scroll': false});
      } catch(e){
        console.log(e);
      }
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
