const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let contentType = "text/html";

  console.log(req.url, req.method);

  let path = "../client/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;

    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;

    case "/signin":
      path += "signin.html";
      res.statusCode = 200;
      break;

    case "/WIP":
      path += "WIP.html";
      res.statusCode = 200;
      break;

    case "/home":
      path += "home.html";
      res.statusCode = 200;
      break;

    case "/css/style.css":
      path += "css/style.css";
      contentType = "text/css";
      res.statusCode = 200;
      break;

    case "/assets/logo-no-bg.png":
      path += "assets/logo-no-bg.png";
      contentType = "image/png";
      res.statusCode = 200;
      break;

    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      return;

    default:
      path += "WIP.html";
      res.statusCode = 404;
      break;
  }

  //send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      return res.end("Server error");
    }

    res.setHeader("Content-Type", contentType);
    res.end(data);
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
