import { Sites, db_mysql } from './connectors';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const _ = require('lodash');

const resolvers = {
  Query: {
    site(_, args) {
      return Sites.find({ where: args });
    },
    allSites(_,args) {
      return Sites.findAll();
    },
    someSites(_,args) {
      return Sites.findAll({
        where: {
          site_name: {[Op.like]: args.site_name}
        }
      });
    },
    sqlSites(_,args ) {
      return db_mysql.query("SELECT * FROM `sites` WHERE site_name LIKE :name",
      {
        type: db_mysql.QueryTypes.SELECT,
        replacements: {name: args.site_name}
      })
      .then(response => {
        console.log('sqlSites response: ', response);
        return response;
      });
    }
  }
};

export default resolvers;
