const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
const PORT = 3001;

server.use(router);
server.listen(PORT, () =>
  console.log(`Server is Running on localhost:${PORT}`)
);
