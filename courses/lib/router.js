// All routes need to be /courses/.

Router.configure({
  loadingTemplate: 'loading',
  layoutTemplate: 'courseLayout'
});

Router.route('/courses/');
Router.route('/courses/eecs111', { name: 'eecs111'} );
