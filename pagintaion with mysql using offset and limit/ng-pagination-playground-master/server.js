const app = require('express')();

const db = require('mysql2').createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'world',
});

const bodyParser = require('body-parser');
const cors = require('cors')();

app.use(cors);
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

/** GET DATA */

app.get('/data', (req, res) => {
  const num = +req.query.num; // Record Per Page
  const page = +req.query.page; // Page
  const search = req.query.search; // Search Text
  let totalRecord; // Total records
  let totalPage; // Total page
  let searchCondition = ''; // search condition for SQL
  if (search !== undefined && search !== null && search !== '') {
    /** Check if search query parameter is not null and empty and undefined */
    searchCondition = `WHERE id LIKE '%${search}%' OR name LIKE '%${search}%'`;
  }
  const sql = "SELECT * FROM tb_data " + searchCondition + " LIMIT ? OFFSET ?"; // Retrieve records
  const countSQL = "SELECT COUNT(*) as totalRecord FROM world.tb_data " + searchCondition; // Count records
  db.query(countSQL, [], (err, total) => {
    if (err) {
      /** When error */
      console.error(err)
    }
    totalRecord = total[0].totalRecord;
    totalPage = Math.ceil(totalRecord / num);
    db.query(sql, [num, page * num], (err, data) => {
      if (err) {
        console.error(err);
      }
      res.json({
        record: data,
        totalPage,
        totalRecord
      });
    });
  });

});

/** Insert dummy data into table */

app.get('/init', (req, res) => {
  const sql = `
  insert into tb_data values
  ('MacBook Pro 13-inch'),
  ('Dell 1440p QHD Monitor'),
  ('Keychron K1 Mechanical Wireless Keyboard'),
  ('Logitech MX Master 3 Wireless Mouse'),
  ('Sony WH-1000XM3 Wireless Headphone')`
  for (let i = 1; i <= 100; i++) {
    db.query(sql);
  }
  res.json({
    msg: "SUCCEEDED"
  });
});

app.listen(4250, () => {
  console.log(`Server Started at ${Date()}`);
});
