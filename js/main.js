require([
	'jquery',
	'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js',
	'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min.js',
	'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js',
	'js/news-item.hb.tpl'
], function(
	$,
	_,
	Backbone,
	Handlebars,
	template
) {

var NewsItem = Backbone.Model.extend({
	title : 'News Flash',
	content : 'Stay tuned for important news…'
});

var NewsFeed = Backbone.Collection.extend({
	model : NewsItem
});

var trumpSucks = new NewsItem({
	title : 'Oh Boy!',
	content : 'Trump Chosen as GOP Candidate'
});

var hillarySucks = new NewsItem({
	title : 'Oh Girl!',
	content : 'Hillary frontrunner for Democratic Candidate'
});

var MainViewClass = Backbone.View.extend({
	el : '#main',
	events : {
		'click' : 'sayHello'
	},
	initialize : function() {
		this.render();
 	},
 	render : function() {
 		this.$el.append(template(this.model.attributes));
 	},
 	sayHello : function() {
 		alert('hi!');
 	}
}); // MainView

// var helloView = new MainViewClass({
// 	el : '#main',
// 	model : trumpSucks
// }); // mainView



var allNews = new NewsFeed([
	trumpSucks,
	hillarySucks
]);

allNews.each(function(newsitem) {
	var newsItemView = new MainViewClass({
		model : newsitem
	});
});

}); // require
