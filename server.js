const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');

const PORT = 3000;

server.use(router);
server.listen(PORT, () =>
  console.log(`Server is Running on localhost:${PORT}`)
);
