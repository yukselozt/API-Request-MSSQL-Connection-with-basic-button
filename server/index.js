const sql = require("mssql/msnodesqlv8");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const conn = new sql.ConnectionPool({
  database: "bionluk",
  server: "YOZTURK",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
  },
});

conn.connect().then((result) => {
  if (result.connecting) {
    console.log("connecting");
  }
  if (result.connected) {
    console.log("connected");
  }
});

app.get("/read", function (req, res) {
  conn.request().query("SELECT * FROM [dbo].[Table]", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result.recordset);
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3000");
});
