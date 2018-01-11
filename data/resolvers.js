import { Sites } from './connectors';
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
          id: {[Op.lt]: args.id}
        }
      });
    }
  }
};

export default resolvers;
