var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Location = Router.HashLocation;

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

var HomePage = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
});

var NotFound = React.createClass({
  render: function () {
    return (
      <div>
        <h2>NotFound</h2>
      </div>
    );
  }
});

// declare our routes and their hierarchy
var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={HomePage} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

Router.run(routes, Location, function (Root) {
  React.render(<Root/>, document.getElementById("__APP_BODY"));
});
