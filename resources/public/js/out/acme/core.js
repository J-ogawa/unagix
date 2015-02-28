// Compiled by ClojureScript 0.0-2371
goog.provide('acme.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
acme.core.fetch_widgets = (function fetch_widgets(url){var c = cljs.core.async.chan.call(null);var c__6439__auto___15482 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___15482,c){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___15482,c){
return (function (state_15468){var state_val_15469 = (state_15468[(1)]);if((state_val_15469 === (6)))
{var inst_15466 = (state_15468[(2)]);var state_15468__$1 = state_15468;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15468__$1,inst_15466);
} else
{if((state_val_15469 === (5)))
{var inst_15462 = (state_15468[(2)]);var inst_15463 = cljs.core.get.call(null,inst_15462,new cljs.core.Keyword(null,"body","body",-2049205669));var inst_15464 = cljs.core.vec.call(null,inst_15463);var state_15468__$1 = state_15468;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15468__$1,(6),c,inst_15464);
} else
{if((state_val_15469 === (4)))
{var inst_15456 = (state_15468[(7)]);var state_15468__$1 = state_15468;var statearr_15470_15483 = state_15468__$1;(statearr_15470_15483[(2)] = inst_15456);
(statearr_15470_15483[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (3)))
{var inst_15456 = (state_15468[(7)]);var inst_15459 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15456);var state_15468__$1 = state_15468;var statearr_15471_15484 = state_15468__$1;(statearr_15471_15484[(2)] = inst_15459);
(statearr_15471_15484[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (2)))
{var inst_15456 = (state_15468[(7)]);var inst_15456__$1 = (state_15468[(2)]);var inst_15457 = cljs.core.seq_QMARK_.call(null,inst_15456__$1);var state_15468__$1 = (function (){var statearr_15472 = state_15468;(statearr_15472[(7)] = inst_15456__$1);
return statearr_15472;
})();if(inst_15457)
{var statearr_15473_15485 = state_15468__$1;(statearr_15473_15485[(1)] = (3));
} else
{var statearr_15474_15486 = state_15468__$1;(statearr_15474_15486[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15469 === (1)))
{var inst_15454 = cljs_http.client.get.call(null,url);var state_15468__$1 = state_15468;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15468__$1,(2),inst_15454);
} else
{return null;
}
}
}
}
}
}
});})(c__6439__auto___15482,c))
;return ((function (switch__6424__auto__,c__6439__auto___15482,c){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_15478 = [null,null,null,null,null,null,null,null];(statearr_15478[(0)] = state_machine__6425__auto__);
(statearr_15478[(1)] = (1));
return statearr_15478;
});
var state_machine__6425__auto____1 = (function (state_15468){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_15468);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e15479){if((e15479 instanceof Object))
{var ex__6428__auto__ = e15479;var statearr_15480_15487 = state_15468;(statearr_15480_15487[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15468);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15479;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15488 = state_15468;
state_15468 = G__15488;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_15468){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_15468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___15482,c))
})();var state__6441__auto__ = (function (){var statearr_15481 = f__6440__auto__.call(null);(statearr_15481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___15482);
return statearr_15481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___15482,c))
);
return c;
});
acme.core.widget = (function widget(p__15489,owner,opts){var map__15494 = p__15489;var map__15494__$1 = ((cljs.core.seq_QMARK_.call(null,map__15494))?cljs.core.apply.call(null,cljs.core.hash_map,map__15494):map__15494);var name = cljs.core.get.call(null,map__15494__$1,new cljs.core.Keyword(null,"name","name",1843675177));if(typeof acme.core.t15495 !== 'undefined')
{} else
{
/**
* @constructor
*/
acme.core.t15495 = (function (name,map__15494,opts,owner,p__15489,widget,meta15496){
this.name = name;
this.map__15494 = map__15494;
this.opts = opts;
this.owner = owner;
this.p__15489 = p__15489;
this.widget = widget;
this.meta15496 = meta15496;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
acme.core.t15495.cljs$lang$type = true;
acme.core.t15495.cljs$lang$ctorStr = "acme.core/t15495";
acme.core.t15495.cljs$lang$ctorPrWriter = ((function (map__15494,map__15494__$1,name){
return (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"acme.core/t15495");
});})(map__15494,map__15494__$1,name))
;
acme.core.t15495.prototype.om$core$IRender$ = true;
acme.core.t15495.prototype.om$core$IRender$render$arity$1 = ((function (map__15494,map__15494__$1,name){
return (function (this__5201__auto__){var self__ = this;
var this__5201__auto____$1 = this;return React.DOM.li(null,self__.name);
});})(map__15494,map__15494__$1,name))
;
acme.core.t15495.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15494,map__15494__$1,name){
return (function (_15497){var self__ = this;
var _15497__$1 = this;return self__.meta15496;
});})(map__15494,map__15494__$1,name))
;
acme.core.t15495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15494,map__15494__$1,name){
return (function (_15497,meta15496__$1){var self__ = this;
var _15497__$1 = this;return (new acme.core.t15495(self__.name,self__.map__15494,self__.opts,self__.owner,self__.p__15489,self__.widget,meta15496__$1));
});})(map__15494,map__15494__$1,name))
;
acme.core.__GT_t15495 = ((function (map__15494,map__15494__$1,name){
return (function __GT_t15495(name__$1,map__15494__$2,opts__$1,owner__$1,p__15489__$1,widget__$1,meta15496){return (new acme.core.t15495(name__$1,map__15494__$2,opts__$1,owner__$1,p__15489__$1,widget__$1,meta15496));
});})(map__15494,map__15494__$1,name))
;
}
return (new acme.core.t15495(name,map__15494__$1,opts,owner,p__15489,widget,null));
});
acme.core.widget_list = (function widget_list(p__15498){var map__15503 = p__15498;var map__15503__$1 = ((cljs.core.seq_QMARK_.call(null,map__15503))?cljs.core.apply.call(null,cljs.core.hash_map,map__15503):map__15503);var widgets = cljs.core.get.call(null,map__15503__$1,new cljs.core.Keyword(null,"widgets","widgets",-159098978));if(typeof acme.core.t15504 !== 'undefined')
{} else
{
/**
* @constructor
*/
acme.core.t15504 = (function (widgets,map__15503,p__15498,widget_list,meta15505){
this.widgets = widgets;
this.map__15503 = map__15503;
this.p__15498 = p__15498;
this.widget_list = widget_list;
this.meta15505 = meta15505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
acme.core.t15504.cljs$lang$type = true;
acme.core.t15504.cljs$lang$ctorStr = "acme.core/t15504";
acme.core.t15504.cljs$lang$ctorPrWriter = ((function (map__15503,map__15503__$1,widgets){
return (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"acme.core/t15504");
});})(map__15503,map__15503__$1,widgets))
;
acme.core.t15504.prototype.om$core$IRender$ = true;
acme.core.t15504.prototype.om$core$IRender$render$arity$1 = ((function (map__15503,map__15503__$1,widgets){
return (function (this__5201__auto__){var self__ = this;
var this__5201__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,acme.core.widget,self__.widgets));
});})(map__15503,map__15503__$1,widgets))
;
acme.core.t15504.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15503,map__15503__$1,widgets){
return (function (_15506){var self__ = this;
var _15506__$1 = this;return self__.meta15505;
});})(map__15503,map__15503__$1,widgets))
;
acme.core.t15504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15503,map__15503__$1,widgets){
return (function (_15506,meta15505__$1){var self__ = this;
var _15506__$1 = this;return (new acme.core.t15504(self__.widgets,self__.map__15503,self__.p__15498,self__.widget_list,meta15505__$1));
});})(map__15503,map__15503__$1,widgets))
;
acme.core.__GT_t15504 = ((function (map__15503,map__15503__$1,widgets){
return (function __GT_t15504(widgets__$1,map__15503__$2,p__15498__$1,widget_list__$1,meta15505){return (new acme.core.t15504(widgets__$1,map__15503__$2,p__15498__$1,widget_list__$1,meta15505));
});})(map__15503,map__15503__$1,widgets))
;
}
return (new acme.core.t15504(widgets,map__15503__$1,p__15498,widget_list,null));
});
acme.core.widget_box = (function widget_box(app,owner,opts){if(typeof acme.core.t15549 !== 'undefined')
{} else
{
/**
* @constructor
*/
acme.core.t15549 = (function (opts,owner,app,widget_box,meta15550){
this.opts = opts;
this.owner = owner;
this.app = app;
this.widget_box = widget_box;
this.meta15550 = meta15550;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
acme.core.t15549.cljs$lang$type = true;
acme.core.t15549.cljs$lang$ctorStr = "acme.core/t15549";
acme.core.t15549.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"acme.core/t15549");
});
acme.core.t15549.prototype.om$core$IRender$ = true;
acme.core.t15549.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;React.DOM.h1(null,"Widgets");
return om.core.build.call(null,acme.core.widget_list,self__.app);
});
acme.core.t15549.prototype.om$core$IWillMount$ = true;
acme.core.t15549.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;om.core.transact_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widgets","widgets",-159098978)], null),((function (___$1){
return (function (){return cljs.core.PersistentVector.EMPTY;
});})(___$1))
);
var c__6439__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto__,___$1){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto__,___$1){
return (function (state_15573){var state_val_15574 = (state_15573[(1)]);if((state_val_15574 === (8)))
{var inst_15565 = (state_15573[(2)]);var state_15573__$1 = (function (){var statearr_15575 = state_15573;(statearr_15575[(7)] = inst_15565);
return statearr_15575;
})();var statearr_15576_15590 = state_15573__$1;(statearr_15576_15590[(2)] = null);
(statearr_15576_15590[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15574 === (7)))
{var inst_15557 = (state_15573[(2)]);var inst_15558 = cljs.core.pr_str.call(null,inst_15557);var inst_15559 = console.log(inst_15558);var inst_15560 = (function (){var widgets = inst_15557;return ((function (widgets,inst_15557,inst_15558,inst_15559,state_val_15574,c__6439__auto__,___$1){
return (function (p1__15507_SHARP_){return cljs.core.assoc.call(null,p1__15507_SHARP_,new cljs.core.Keyword(null,"widgets","widgets",-159098978),widgets);
});
;})(widgets,inst_15557,inst_15558,inst_15559,state_val_15574,c__6439__auto__,___$1))
})();var inst_15561 = om.core.update_BANG_.call(null,self__.app,inst_15560);var inst_15562 = new cljs.core.Keyword(null,"poll-interval","poll-interval",345867570).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_15563 = cljs.core.async.timeout.call(null,inst_15562);var state_15573__$1 = (function (){var statearr_15577 = state_15573;(statearr_15577[(8)] = inst_15561);
(statearr_15577[(9)] = inst_15559);
return statearr_15577;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15573__$1,(8),inst_15563);
} else
{if((state_val_15574 === (6)))
{var inst_15569 = (state_15573[(2)]);var state_15573__$1 = state_15573;var statearr_15578_15591 = state_15573__$1;(statearr_15578_15591[(2)] = inst_15569);
(statearr_15578_15591[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15574 === (5)))
{var state_15573__$1 = state_15573;var statearr_15579_15592 = state_15573__$1;(statearr_15579_15592[(2)] = null);
(statearr_15579_15592[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15574 === (4)))
{var inst_15554 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_15555 = acme.core.fetch_widgets.call(null,inst_15554);var state_15573__$1 = state_15573;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15573__$1,(7),inst_15555);
} else
{if((state_val_15574 === (3)))
{var inst_15571 = (state_15573[(2)]);var state_15573__$1 = state_15573;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15573__$1,inst_15571);
} else
{if((state_val_15574 === (2)))
{var state_15573__$1 = state_15573;var statearr_15580_15593 = state_15573__$1;(statearr_15580_15593[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15574 === (1)))
{var state_15573__$1 = state_15573;var statearr_15582_15594 = state_15573__$1;(statearr_15582_15594[(2)] = null);
(statearr_15582_15594[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
});})(c__6439__auto__,___$1))
;return ((function (switch__6424__auto__,c__6439__auto__,___$1){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_15586 = [null,null,null,null,null,null,null,null,null,null];(statearr_15586[(0)] = state_machine__6425__auto__);
(statearr_15586[(1)] = (1));
return statearr_15586;
});
var state_machine__6425__auto____1 = (function (state_15573){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_15573);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e15587){if((e15587 instanceof Object))
{var ex__6428__auto__ = e15587;var statearr_15588_15595 = state_15573;(statearr_15588_15595[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15573);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15587;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15596 = state_15573;
state_15573 = G__15596;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_15573){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_15573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto__,___$1))
})();var state__6441__auto__ = (function (){var statearr_15589 = f__6440__auto__.call(null);(statearr_15589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto__);
return statearr_15589;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto__,___$1))
);
return c__6439__auto__;
});
acme.core.t15549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15551){var self__ = this;
var _15551__$1 = this;return self__.meta15550;
});
acme.core.t15549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15551,meta15550__$1){var self__ = this;
var _15551__$1 = this;return (new acme.core.t15549(self__.opts,self__.owner,self__.app,self__.widget_box,meta15550__$1));
});
acme.core.__GT_t15549 = (function __GT_t15549(opts__$1,owner__$1,app__$1,widget_box__$1,meta15550){return (new acme.core.t15549(opts__$1,owner__$1,app__$1,widget_box__$1,meta15550));
});
}
return (new acme.core.t15549(opts,owner,app,widget_box,null));
});
acme.core.om_app = (function om_app(app,owner){if(typeof acme.core.t15600 !== 'undefined')
{} else
{
/**
* @constructor
*/
acme.core.t15600 = (function (owner,app,om_app,meta15601){
this.owner = owner;
this.app = app;
this.om_app = om_app;
this.meta15601 = meta15601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
acme.core.t15600.cljs$lang$type = true;
acme.core.t15600.cljs$lang$ctorStr = "acme.core/t15600";
acme.core.t15600.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"acme.core/t15600");
});
acme.core.t15600.prototype.om$core$IRender$ = true;
acme.core.t15600.prototype.om$core$IRender$render$arity$1 = (function (this__5201__auto__){var self__ = this;
var this__5201__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,acme.core.widget_box,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"/widgets",new cljs.core.Keyword(null,"poll-interval","poll-interval",345867570),(2000)], null)], null)));
});
acme.core.t15600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15602){var self__ = this;
var _15602__$1 = this;return self__.meta15601;
});
acme.core.t15600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15602,meta15601__$1){var self__ = this;
var _15602__$1 = this;return (new acme.core.t15600(self__.owner,self__.app,self__.om_app,meta15601__$1));
});
acme.core.__GT_t15600 = (function __GT_t15600(owner__$1,app__$1,om_app__$1,meta15601){return (new acme.core.t15600(owner__$1,app__$1,om_app__$1,meta15601));
});
}
return (new acme.core.t15600(owner,app,om_app,null));
});
acme.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.root.call(null,acme.core.app_state,acme.core.om_app,document.getElementById("content"));

//# sourceMappingURL=core.js.map