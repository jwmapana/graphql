////////////////////////////////////////
// connectors.js
////
// Author: Jim McNeely
////
// created 2018-02-02 2:17 PM  
////////////////////////////////////////

const Sequelize = require('sequelize');

const db_mysql = new Sequelize('test', 'root', 'root', {
  host: 'localhost',
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

const Sites = db_mysql.define('sites',
  {
    id: {
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
    full_org_name: {
      type: Sequelize.STRING
    },
    customer_id: {
      type: Sequelize.INTEGER
    },
  },
  {
    timestamps: false
  }
);

export { Sites, db_mysql };
