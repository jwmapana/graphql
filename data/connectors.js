////////////////////////////////////////
// connectors.js
////
// Author: Jim McNeely
////
// created 2018-02-02 2:17 PM  
////////////////////////////////////////

import { mysql } from './environment';

// const mysql = {
//   host: 'mydevclus1.apana.us',
//   user: 'hc1',
//   password: 'bei^nai,h{a9aix3taip@ua9'
// }; 

const Sequelize = require('sequelize');

const db_mysql = new Sequelize('db_conf', mysql.user, mysql.password, {
  host: mysql.host,
  dialect: 'mysql'
});

//database connector
db_mysql
  .authenticate()
  .then(() => {
    console.log('mysql connection successfully established.');
  })
  .catch(err => {
    console.error('unable to connect to mysql: ', err);
  });

const Site = db_mysql.define('site',
  {
    site_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    site_name: {
      type: Sequelize.STRING
    },
    site_address: {
      type: Sequelize.STRING
    },
    site_city: {
      type: Sequelize.STRING
    },
    site_state: {
      type: Sequelize.STRING
    },
    site_postalcode: {
      type: Sequelize.STRING
    },
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

export { Site, db_mysql };
