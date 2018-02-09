////////////////////////////////////////
// schema.js
////
// Author: Jim McNeely
////
// created 2018-02-02 2:17 PM  
////////////////////////////////////////

import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Query {
  site(site_id: Int, site_name: String, site_postalcode: String): Sites
  allSites: [Sites]
  someSites(site_name: String, site_postalcode: String): [Sites]
  sqlSites(site_name: String): [Sites]
}

type Sites {
  site_id: Int
  site_name: String
  site_address: String
  site_city: String
  site_state: String
  site_postalcode: String
}`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;

// app.listen(4000);
