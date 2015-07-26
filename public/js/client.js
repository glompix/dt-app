var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

// declare our routes and their hierarchy
var routes = (
  React.createElement(Route, {handler: App}, 
    React.createElement(Route, {path: "home", handler: HomePage}), 
    React.createElement(Route, {path: "employer", handler: Set}, 
      React.createElement(Route, {path: ":id", handler: View}, 
        React.createElement(Route, {path: "configure", handler: Configure})
      )
    )
  )
);

var App = React.createClass({displayName: "App",
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "App"), 
        React.createElement(RouteHandler, null)
      )
    );
  }
});

Router.run(routes, Router.HashLocation, function (Root) {
  React.render(React.createElement(Root, null), document.getElementById("__APP_BODY"));
});
