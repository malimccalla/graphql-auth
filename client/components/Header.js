import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import currentUserQuery from '../queries/currentUser';
import logoutMutation from '../mutations/logout';
import { Link } from 'react-router';

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({});
  }

  renderButtons() {
    const { loading, currentUser } = this.props.data;
    if (loading) return <div />;

    if (currentUser) {
      return (
        <li>
          <a onClick={this.onLogoutClick.bind(this)}>Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </div>
      );
    }
  }

  render() {
    return (
      <nav>
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <div className="nav-wrapper">
          <ul className="right">{this.renderButtons()}</ul>
        </div>
      </nav>
    );
  }
}

export default graphql(logoutMutation)(graphql(currentUserQuery)(Header));
