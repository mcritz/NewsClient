require([
	'jquery',
	'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js',
	'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min.js',
	'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js'
], function(
	$,
	_,
	Backbone,
	Handlebars
) {

var NewsItem = Backbone.Model.extend({
	title : 'News Flash',
	content : 'Stay tuned for important news…'
});

var trumpSucks = new NewsItem({
	title : 'Oh Boy!',
	content : 'Trump Chosen as GOP Candidate'
});

var MainViewClass = Backbone.View.extend({
	events : {
		'click' : 'sayHello'
	},
	initialize : function() {
		console.log('hello');
		this.render();
 	},
 	render : function() {
 		this.$el.html(this.template(this.model.attributes));
 	},
	template : Handlebars.compile($('#newsitem-template').html()),
 	sayHello : function() {
 		alert('hi!');
 	}
}); // MainView

var helloView = new MainViewClass({
	el : '#main',
	model : trumpSucks
}); // mainView

}); // require
