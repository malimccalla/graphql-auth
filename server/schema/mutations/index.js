const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;
const UserType = require('../types/user.type');
const Auth = require('../../services/auth');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      async resolve(parentValue, { email, password }, req) {
        return Auth.signup({ email, password, req });
      }
    },
    logout: {
      type: UserType,
      async resolve(parentValue, args, req) {
        return Auth.logout(req);
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      async resolve(parentValue, { email, password }, req) {
        return Auth.login({ email, password, req });
      }
    }
  }
});

module.exports = Mutation;
