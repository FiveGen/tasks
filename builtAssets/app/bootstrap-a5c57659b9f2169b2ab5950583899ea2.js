(function(){var a,b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};Batman.JSONRestStorage=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return c(b,a),b.prototype.serializeAsForm=!1,b}(Batman.RailsStorage),a=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return c(b,a),Batman.ViewStore.prefix="app/views",b.resources("tasks"),b.root("home#index"),b.on("run",function(){return console.log("Running ....")}),b}(Batman.App),window.App=a}).call(this),function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};App.Task=function(a){function c(){return c.__super__.constructor.apply(this,arguments)}return b(c,a),c.resourceName="task",c.storageKey="tasks",c.primaryKey="_id",c.encode("_id","title","name"),c.prototype.title=null,c.prototype.name=null,c.persist(Batman.JSONRestStorage),c}(Batman.Model)}.call(this),function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};App.ApplicationController=function(a){function c(){return c.__super__.constructor.apply(this,arguments)}return b(c,a),c}(Batman.Controller)}.call(this),function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};App.HomeController=function(a){function c(){return c.__super__.constructor.apply(this,arguments)}return b(c,a),c.prototype.routingKey="home",c.prototype.index=function(){},c}(App.ApplicationController)}.call(this),function(){$(function(){return App.run()})}.call(this)