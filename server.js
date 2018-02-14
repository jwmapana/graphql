import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './data/schema';

const GRAPHQL_PORT = 3001;

const graphQLServer = express();

graphQLServer.use(function(req,res,next){
  // don't use these CORS functions if this is being served proxy via nginx
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // console.log('req.method: ', req.method);


  if ('OPTIONS' === req.method) {
    // console.log('entered OPTIONS branch');
    res.sendStatus(200);
  }
  else {
    next();
  }
});

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
));

//http://192.168.33.10:3000/graphql?
//http://admin3.apana.us:3000/graphql?
