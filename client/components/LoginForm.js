import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import AuthForm from './AuthForm';
import loginMutation from '../mutations/login';
import query from '../queries/currentUser';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
  }

  componentWillUpdate(props, nextProps) {
    console.log('props', props);
    console.log('nextProps', nextProps);
  }

  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query }]
      })
      .catch(res => {
        const errors = res.graphQLErrors.map(err => err.message);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <div>
        <h3>Log In</h3>
        <AuthForm
          onSubmit={this.onSubmit.bind(this)}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default graphql(loginMutation)(LoginForm);
