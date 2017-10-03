import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import currentUserQuery from '../queries/currentUser';

class Header extends Component {
  renderButtons() {
    const { loading, currentUser } = this.props.data;
    console.log('user', this.props.data);
    if (loading) return <div />;

    if (currentUser) {
      return <div>Logout</div>;
    } else {
      return <div>Please sign in</div>;
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">{this.renderButtons()}</div>
      </nav>
    );
  }
}

export default graphql(currentUserQuery)(Header);
