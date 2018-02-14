////////////////////////////////////////
// resolvers.js
////
// Author: Jim McNeely
////
// created 2018-02-02 2:17 PM  
////////////////////////////////////////

import { Site, db_mysql } from './connectors';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const _ = require('lodash');

const resolvers = {
  Query: {
    site(_, args) {
      return Site.find({ where: args });
    },
    allSites(_,args) {
      return Site.findAll();
    },
    someSites(_,args) {
      return Site.findAll({
        where: {
          site_name: {[Op.like]: args.site_name}
        }
      });
    },
    sqlSites(_,args ) {
      console.log('obj - _', _);
      return db_mysql.query("SELECT * FROM `site` WHERE site_name LIKE :name", 
      {
        type: db_mysql.QueryTypes.SELECT,
        replacements: {name: args.site_name}
      })
      .then(response => {
        return response;
      });
    },
    sqlNodes(_,args ) {
      return db_mysql.query("SELECT * FROM `node` WHERE node_name LIKE :name", 
      {
        type: db_mysql.QueryTypes.SELECT,
        replacements: {name: args.node_name}
      })
      .then(response => {
        return response;
      });
    },
  }
};

export default resolvers;
