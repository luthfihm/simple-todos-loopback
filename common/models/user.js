module.exports = function(User) {
  User.remoteMethod(
    'todos',
    {
      http: {path: '/:id/todo', verb: 'get'},
      accepts: {arg: 'id', type: 'string', required: true, http: { source: 'path' }},
      returns: {root: true, type: 'array'}
    }
  );
  User.todos = function(cb) {

  };
};
