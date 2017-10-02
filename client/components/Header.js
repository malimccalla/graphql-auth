import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import currentUserQuery from '../queries/currentUser';

class Header extends Component {
  render() {
    console.log(this.props.data);
    return <div>Header</div>;
  }
}

export default graphql(currentUserQuery)(Header);
