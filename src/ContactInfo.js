import React from 'react';
import { Grid, Cell, Icon } from 'react-mdl';

import Phones from './Phones';
import Adress from './Adress';
import SocialMedias from './SocialMedias';

export default class ContactInfo extends React.Component {
  render(){
    return (
    <div>
      <Phones />
      <SocialMedias />
      <Adress />
    </div>
    );
  }
}
