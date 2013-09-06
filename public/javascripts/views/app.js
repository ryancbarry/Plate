define([
	'jquery',
	"underscore",
	'backbone',
	"text!javascripts/views/templates/app.ejs",
	"ejs",
	"javascripts/models/plate"
], function($, _, Backbone, template, EJS, Plate) {

	var plate = new Plate();

	var App = Backbone.View.extend({
		el: 'body',
		initialize: function() {
			var that = this;
			that.$el = $(that.el);
			that.render();
		},
		events: {
			"click div": "handleClick"
		},
		handleClick: function() {
			console.log('saving...');
			plate.fetch();
		},
		render: function() {
			var html = EJS.render(template, { title:'Foo' });
			this.$el.html(html);

			return this;
		}
	});

	return App;
});
