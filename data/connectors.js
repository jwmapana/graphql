import { mysql } from './environment';

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

const Sites = db_mysql.define('sites',
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
