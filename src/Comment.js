import React, { Component } from 'react';
import FacebookProvider, { Comments } from 'react-facebook';
 
export default class Comment extends Component {
  constructor(props){
 	super(props);
  }
  render() {
    return (
      <div>
        <h1>Avaliações</h1>
        <FacebookProvider appId="327229751024564">
          <Comments href= {this.props.url} colorScheme="dark"/>
        </FacebookProvider>
      </div>
    );
  }
}
