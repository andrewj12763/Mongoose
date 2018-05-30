module.exports = function(app) {


  app.get("/", function(req, res) {
		res.render('home');
  });

  // // POST route for saving a new todo. You can create a todo using the data on req.body
  // app.post("/api/todos", function(req, res) {

  // });

  // // DELETE route for deleting todos. You can access the todo's id in req.params.id
  // app.delete("/api/todos/:id", function(req, res) {

  // });

  // // PUT route for updating todos. The updated todo will be available in req.body
  // app.put("/api/todos", function(req, res) {

  // });
};
