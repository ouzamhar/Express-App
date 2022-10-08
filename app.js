const express = require("express");

//express app
const app = express();

//register view engine
app.set("view engine", "ejs");

app.use(express.static("public"));

//listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  const blogs = [{ title: "Blog1", snippet: "Snippet1 for blog 1" }];
  res.render("index", { title: "Home", blogs });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create New Blog" });
});
app.use((req, res) => {
  res.render("404", { title: "Page not found" });
});
