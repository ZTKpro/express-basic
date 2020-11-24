import Express from "express";
import Products from "./products.js";

const app = Express();
const port = 3000;
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// GET, PUT, POST, DELETE

// GET website

app.get("/", (req, res) => {
  // Send HomePage to html > body

  res.send("HomePage");
});

app.get("/products/:id", (req, res) => {
  // Send json to html
  // res.json(Products);

  // find items from id
  res.json(
    Products.find((product) => {
      return +req.params.id === product.id;
    })
  );
  //   res.send(req.params.id);
});

app.post("/add", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

// app.delete();
// app.put();

app.listen(port, () => console.log("Listening on port " + port));
