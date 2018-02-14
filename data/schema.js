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
  sqlNodes(node_site_id: Int, node_name: String): [Nodes]
}

type Sites {
  site_id: Int!
  site_name: String
  site_address: String
  site_city: String
  site_state: String
  site_postalcode: String
}
type Nodes {
  node_id: Int
  node_name: String
  node_site_id: Int
  node_purpose_id: Int
  node_purpose: String
  node_visible: Int
  node_notes: String
  macID: String
}`;

//Nodes(node_site_id: Int, node_name: String) [Nodes]

// type Nodes {
//   node_id: Int!
//   node_name: String
//   node_site_id: Int
//   node_purpose_id: Int
//   node_purpose: String
//   node_visible: Int
//   node_notes: String
//   macID: String
// }

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;

// app.listen(4000);
