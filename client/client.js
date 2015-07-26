var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

// declare our routes and their hierarchy
var routes = (
  <Route handler={App}>
    <Route path="home" handler={HomePage}></Route>
    <Route path="employer" handler={Set}>
      <Route path=":id" handler={View}>
        <Route path="configure" handler={Configure}></Route>
      </Route>
    </Route>
  </Route>
);

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>App</h1>
        <RouteHandler/>
      </div>
    );
  }
});

Router.run(routes, Router.HashLocation, function (Root) {
  React.render(<Root/>, document.getElementById("__APP_BODY"));
});
