cmds = new Meteor.Stream('cmds');

Router.map(function() {
  this.route('game', {path: '/'});
  this.route('in', {
      where: 'server',
      path: '/in',
      action: function(){
          var req = this.request.body;
          //console.log(req)
          this.response.writeHead(200, {'Content-Type': 'text/html'});
          this.response.end('5^2 * (3!+2)');
          var from = req.From;
          var text = req.Body;
          console.log("From " + from + ": " + text);
          cmds.emit('cmd', text);
      }
  });
});