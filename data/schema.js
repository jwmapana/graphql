////////////////////////////////////////
// schema.js
////
// Author: Jim McNeely
////
// created 2018-02-02 2:17 PM  
////////////////////////////////////////

import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
// const express = require('express');
// const graphqlHTTP = require('express-graphql');
// const {GraphAQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

// const app = express();

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
  full_org_name: String
  customer_id: Int
}`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// app.use(function(req,res,next){
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//
//   // console.log('req', req);
//
//   if ('OPTIONS' === req.method) {
//     console.log('entered OPTIONS branch');
//     res.sendStatus(200);
//   }
//   else {
//     next();
//   }
// });
//
// app.post('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true,
//   flippy: console.log('app.post was here')
// }));

export default schema;

// app.listen(4000);
