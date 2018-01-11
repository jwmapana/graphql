CREATE TABLE sites (
  id int NOT NULL AUTO_INCREMENT,
  site_name varchar(255),
  site_address varchar(255),
  site_city varchar(255),
  site_state varchar(8),
  site_postalcode varchar(16),
  full_org_name varchar(255),
  customer_id INT,
  PRIMARY KEY (id)
);
