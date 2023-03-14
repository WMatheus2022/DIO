const http = require("http");
const port = 3000;
const status = require("./pcRAMuse.js");

http
  .createServer((req, res) => {
    let url = req.url;

    if (url === "/status") {
      res.end(JSON.stringify(status, null, 2));
    } else {
      res.write("<h1>Seja bem vindo</h1>");
      res.end();
    }
  })
  .listen(port, () =>
    console.log(`Server is running in http://localhost:${port}`)
  );
