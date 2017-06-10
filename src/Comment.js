import React, { Component } from 'react';
import FacebookProvider, { Comments } from 'react-facebook';
 
export default class Comment extends Component {
  constructor(props){
 	super(props);
  }
  render() {
    return (
      <div>
        <FacebookProvider appId="327229751024564" language='pt_BR'>
          <Comments 
	        href={this.props.url}
	        colorScheme="dark"
	        numPosts={5}
	        width="100%"
	      />
        </FacebookProvider>
      </div>
    );
  }
}
