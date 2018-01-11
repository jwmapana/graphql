import {
  makeExecutableSchema,
  // addMockFunctionsToSchema
} from 'graphql-tools';
// import mocks from './mock';
import _ from 'lodash';
import resolvers from './resolvers';

const typeDefs = `
type Query {
  site(id: Int, site_name: String, site_postalcode: String): Sites
  allSites: [Sites]
  someSites(id: Int): [Sites]
}

type Sites {
  id: Int
  site_name: String
  site_address: String
  site_city: String
  site_state: String
  site_postalcode: String
  full_org_name: String
  customer_id: Int
}`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
