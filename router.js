const stack = require("./stack");
const store = require("./store");

module.exports = function(app) {
  // Route for adding item to the stack

  app.get("/stack/:stackItem", (req, res) => {
    const { stackItem } = req.params;
    console.log(req.params);
    res.status(200);
    console.log(stackItem);
    res.send(stack.add(stackItem));
    stack.cur();
    res.end("yes");
  });
  // Route for getting top item to the stack

  app.get("/stack", (req, res) => {
    res.status(200);

    res.send(stack.get());
    res.end();
  });

  //Route for adding value/pair to the store
  app.post("/add", (req, res) => {
    const { key } = req.body;
    const { name } = req.body;
    const { ttl } = req.body;

    res.send(store.set(key, name, +ttl));

    res.end();
  });
  //Route for getting key name from the store
  app.get("/get/:key", (req, res) => {
    const { key } = req.params;
    res.status(200);
    res.send(store.get(key));
    res.end("yes");
  });
  //Route for deleting key
  app.get("/del/:key", (req, res) => {
    const { key } = req.params;
    res.status(200);
    res.send(store.del(key));
    res.end("yes");
  });
};
