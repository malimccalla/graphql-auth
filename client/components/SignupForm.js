import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import AuthForm from './AuthForm';
import signupMutation from '../mutations/signup';

class SignupForm extends Component {
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password }
    });
  }

  render() {
    return (
      <div>
        <AuthForm onSubmit={this.onSubmit.bind(this)} errors={[]} />
      </div>
    );
  }
}

export default graphql(signupMutation)(SignupForm);
