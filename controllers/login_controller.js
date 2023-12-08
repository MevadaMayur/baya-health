const Database = require('../database/database');
const db = new Database();


const userlogin = (req, res) => {
  const userData = {
    "Web_url":"www.bayahealth.in",
  };
  res.json(userData);
};


module.exports = {
  userlogin
};