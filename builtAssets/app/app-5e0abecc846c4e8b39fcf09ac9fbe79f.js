(function(){var a,b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};a=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return c(b,a),b.resourceName="task",b.storageKey="task",b.primaryKey="_id",b.encode("_id","title","name"),b.prototype.title=null,b.prototype.name=null,b.persist(Batman.RestStorage),b}(Batman.Model)}).call(this),function(){var a,b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};a=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return c(b,a),b}(Batman.Controller)}.call(this),function(){var a,b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};a=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return c(b,a),b.prototype.routingKey="home",b.prototype.index=function(){},b}(ApplicationController)}.call(this),function(){var a,b={}.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};a=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return c(b,a),b.resources("tasks"),b.root("home#index"),b.on("run",function(){return console.log("Running ....")}),b}(Batman.App),window.App=a,$(function(){return a.run()})}.call(this)