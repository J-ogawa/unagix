// Compiled by ClojureScript 0.0-2913 {}
goog.provide('servant.core');
goog.require('cljs.core');
goog.require('servant.worker');
goog.require('cljs.core.async');
servant.core.webworker_QMARK_ = (function webworker_QMARK_(){
return (void 0 === self.document);
});
servant.core.not_webworker_QMARK_ = cljs.core.complement.call(null,servant.core.webworker_QMARK_);
/**
* Returns a channel that lists available workers
*/
servant.core.spawn_servants = (function spawn_servants(worker_count,worker_script){
var servant_channel = cljs.core.async.chan.call(null,worker_count);
var c__11350__auto___41652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto___41652,servant_channel){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto___41652,servant_channel){
return (function (state_41619){
var state_val_41620 = (state_41619[(1)]);
if((state_val_41620 === (7))){
var inst_41579 = (state_41619[(7)]);
var inst_41581 = (state_41619[(8)]);
var inst_41580 = (state_41619[(9)]);
var inst_41582 = (state_41619[(10)]);
var inst_41590 = (state_41619[(2)]);
var inst_41591 = (inst_41582 + (1));
var tmp41621 = inst_41579;
var tmp41622 = inst_41581;
var tmp41623 = inst_41580;
var inst_41579__$1 = tmp41621;
var inst_41580__$1 = tmp41623;
var inst_41581__$1 = tmp41622;
var inst_41582__$1 = inst_41591;
var state_41619__$1 = (function (){var statearr_41624 = state_41619;
(statearr_41624[(7)] = inst_41579__$1);

(statearr_41624[(8)] = inst_41581__$1);

(statearr_41624[(11)] = inst_41590);

(statearr_41624[(9)] = inst_41580__$1);

(statearr_41624[(10)] = inst_41582__$1);

return statearr_41624;
})();
var statearr_41625_41653 = state_41619__$1;
(statearr_41625_41653[(2)] = null);

(statearr_41625_41653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41620 === (1))){
var inst_41577 = cljs.core.range.call(null,worker_count);
var inst_41578 = cljs.core.seq.call(null,inst_41577);
var inst_41579 = inst_41578;
var inst_41580 = null;
var inst_41581 = (0);
var inst_41582 = (0);
var state_41619__$1 = (function (){var statearr_41626 = state_41619;
(statearr_41626[(7)] = inst_41579);

(statearr_41626[(8)] = inst_41581);

(statearr_41626[(9)] = inst_41580);

(statearr_41626[(10)] = inst_41582);

return statearr_41626;
})();
var statearr_41627_41654 = state_41619__$1;
(statearr_41627_41654[(2)] = null);

(statearr_41627_41654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41620 === (4))){
var inst_41580 = (state_41619[(9)]);
var inst_41582 = (state_41619[(10)]);
var inst_41587 = cljs.core._nth.call(null,inst_41580,inst_41582);
var inst_41588 = (new Worker(worker_script));
var state_41619__$1 = (function (){var statearr_41628 = state_41619;
(statearr_41628[(12)] = inst_41587);

return statearr_41628;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41619__$1,(7),servant_channel,inst_41588);
} else {
if((state_val_41620 === (13))){
var inst_41610 = (state_41619[(2)]);
var state_41619__$1 = state_41619;
var statearr_41629_41655 = state_41619__$1;
(statearr_41629_41655[(2)] = inst_41610);

(statearr_41629_41655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41620 === (6))){
var inst_41615 = (state_41619[(2)]);
var state_41619__$1 = state_41619;
var statearr_41630_41656 = state_41619__$1;
(statearr_41630_41656[(2)] = inst_41615);

(statearr_41630_41656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41620 === (3))){
var inst_41617 = (state_41619[(2)]);
var state_41619__$1 = state_41619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41619__$1,inst_41617);
} else {
if((state_val_41620 === (12))){
var inst_41594 = (state_41619[(13)]);
var inst_41603 = cljs.core.first.call(null,inst_41594);
var inst_41604 = (new Worker(worker_script));
var state_41619__$1 = (function (){var statearr_41631 = state_41619;
(statearr_41631[(14)] = inst_41603);

return statearr_41631;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41619__$1,(14),servant_channel,inst_41604);
} else {
if((state_val_41620 === (2))){
var inst_41581 = (state_41619[(8)]);
var inst_41582 = (state_41619[(10)]);
var inst_41584 = (inst_41582 < inst_41581);
var inst_41585 = inst_41584;
var state_41619__$1 = state_41619;
if(cljs.core.truth_(inst_41585)){
var statearr_41632_41657 = state_41619__$1;
(statearr_41632_41657[(1)] = (4));

} else {
var statearr_41633_41658 = state_41619__$1;
(statearr_41633_41658[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41620 === (11))){
var inst_41594 = (state_41619[(13)]);
var inst_41598 = cljs.core.chunk_first.call(null,inst_41594);
var inst_41599 = cljs.core.chunk_rest.call(null,inst_41594);
var inst_41600 = cljs.core.count.call(null,inst_41598);
var inst_41579 = inst_41599;
var inst_41580 = inst_41598;
var inst_41581 = inst_41600;
var inst_41582 = (0);
var state_41619__$1 = (function (){var statearr_41634 = state_41619;
(statearr_41634[(7)] = inst_41579);

(statearr_41634[(8)] = inst_41581);

(statearr_41634[(9)] = inst_41580);

(statearr_41634[(10)] = inst_41582);

return statearr_41634;
})();
var statearr_41635_41659 = state_41619__$1;
(statearr_41635_41659[(2)] = null);

(statearr_41635_41659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41620 === (9))){
var state_41619__$1 = state_41619;
var statearr_41636_41660 = state_41619__$1;
(statearr_41636_41660[(2)] = null);

(statearr_41636_41660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41620 === (5))){
var inst_41579 = (state_41619[(7)]);
var inst_41594 = (state_41619[(13)]);
var inst_41594__$1 = cljs.core.seq.call(null,inst_41579);
var state_41619__$1 = (function (){var statearr_41637 = state_41619;
(statearr_41637[(13)] = inst_41594__$1);

return statearr_41637;
})();
if(inst_41594__$1){
var statearr_41638_41661 = state_41619__$1;
(statearr_41638_41661[(1)] = (8));

} else {
var statearr_41639_41662 = state_41619__$1;
(statearr_41639_41662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41620 === (14))){
var inst_41594 = (state_41619[(13)]);
var inst_41606 = (state_41619[(2)]);
var inst_41607 = cljs.core.next.call(null,inst_41594);
var inst_41579 = inst_41607;
var inst_41580 = null;
var inst_41581 = (0);
var inst_41582 = (0);
var state_41619__$1 = (function (){var statearr_41640 = state_41619;
(statearr_41640[(7)] = inst_41579);

(statearr_41640[(8)] = inst_41581);

(statearr_41640[(9)] = inst_41580);

(statearr_41640[(15)] = inst_41606);

(statearr_41640[(10)] = inst_41582);

return statearr_41640;
})();
var statearr_41641_41663 = state_41619__$1;
(statearr_41641_41663[(2)] = null);

(statearr_41641_41663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41620 === (10))){
var inst_41613 = (state_41619[(2)]);
var state_41619__$1 = state_41619;
var statearr_41642_41664 = state_41619__$1;
(statearr_41642_41664[(2)] = inst_41613);

(statearr_41642_41664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41620 === (8))){
var inst_41594 = (state_41619[(13)]);
var inst_41596 = cljs.core.chunked_seq_QMARK_.call(null,inst_41594);
var state_41619__$1 = state_41619;
if(inst_41596){
var statearr_41643_41665 = state_41619__$1;
(statearr_41643_41665[(1)] = (11));

} else {
var statearr_41644_41666 = state_41619__$1;
(statearr_41644_41666[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11350__auto___41652,servant_channel))
;
return ((function (switch__11253__auto__,c__11350__auto___41652,servant_channel){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_41648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41648[(0)] = state_machine__11254__auto__);

(statearr_41648[(1)] = (1));

return statearr_41648;
});
var state_machine__11254__auto____1 = (function (state_41619){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_41619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e41649){if((e41649 instanceof Object)){
var ex__11257__auto__ = e41649;
var statearr_41650_41667 = state_41619;
(statearr_41650_41667[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41668 = state_41619;
state_41619 = G__41668;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_41619){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_41619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto___41652,servant_channel))
})();
var state__11352__auto__ = (function (){var statearr_41651 = f__11351__auto__.call(null);
(statearr_41651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto___41652);

return statearr_41651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto___41652,servant_channel))
);


return servant_channel;
});
/**
* Kills worker-count # of workers
*/
servant.core.kill_servants = (function kill_servants(servant_channel,worker_count){
var c__11350__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto__){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto__){
return (function (state_41794){
var state_val_41795 = (state_41794[(1)]);
if((state_val_41795 === (7))){
var inst_41755 = (state_41794[(7)]);
var inst_41756 = (state_41794[(8)]);
var inst_41754 = (state_41794[(9)]);
var inst_41757 = (state_41794[(10)]);
var inst_41764 = (state_41794[(2)]);
var inst_41765 = inst_41764.terminate();
var inst_41766 = (inst_41757 + (1));
var tmp41796 = inst_41755;
var tmp41797 = inst_41756;
var tmp41798 = inst_41754;
var inst_41754__$1 = tmp41798;
var inst_41755__$1 = tmp41796;
var inst_41756__$1 = tmp41797;
var inst_41757__$1 = inst_41766;
var state_41794__$1 = (function (){var statearr_41799 = state_41794;
(statearr_41799[(7)] = inst_41755__$1);

(statearr_41799[(11)] = inst_41765);

(statearr_41799[(8)] = inst_41756__$1);

(statearr_41799[(9)] = inst_41754__$1);

(statearr_41799[(10)] = inst_41757__$1);

return statearr_41799;
})();
var statearr_41800_41827 = state_41794__$1;
(statearr_41800_41827[(2)] = null);

(statearr_41800_41827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41795 === (1))){
var inst_41752 = cljs.core.range.call(null,worker_count);
var inst_41753 = cljs.core.seq.call(null,inst_41752);
var inst_41754 = inst_41753;
var inst_41755 = null;
var inst_41756 = (0);
var inst_41757 = (0);
var state_41794__$1 = (function (){var statearr_41801 = state_41794;
(statearr_41801[(7)] = inst_41755);

(statearr_41801[(8)] = inst_41756);

(statearr_41801[(9)] = inst_41754);

(statearr_41801[(10)] = inst_41757);

return statearr_41801;
})();
var statearr_41802_41828 = state_41794__$1;
(statearr_41802_41828[(2)] = null);

(statearr_41802_41828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41795 === (4))){
var inst_41755 = (state_41794[(7)]);
var inst_41757 = (state_41794[(10)]);
var inst_41762 = cljs.core._nth.call(null,inst_41755,inst_41757);
var state_41794__$1 = (function (){var statearr_41803 = state_41794;
(statearr_41803[(12)] = inst_41762);

return statearr_41803;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41794__$1,(7),servant_channel);
} else {
if((state_val_41795 === (13))){
var inst_41785 = (state_41794[(2)]);
var state_41794__$1 = state_41794;
var statearr_41804_41829 = state_41794__$1;
(statearr_41804_41829[(2)] = inst_41785);

(statearr_41804_41829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41795 === (6))){
var inst_41790 = (state_41794[(2)]);
var state_41794__$1 = state_41794;
var statearr_41805_41830 = state_41794__$1;
(statearr_41805_41830[(2)] = inst_41790);

(statearr_41805_41830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41795 === (3))){
var inst_41792 = (state_41794[(2)]);
var state_41794__$1 = state_41794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41794__$1,inst_41792);
} else {
if((state_val_41795 === (12))){
var inst_41769 = (state_41794[(13)]);
var inst_41778 = cljs.core.first.call(null,inst_41769);
var state_41794__$1 = (function (){var statearr_41806 = state_41794;
(statearr_41806[(14)] = inst_41778);

return statearr_41806;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41794__$1,(14),servant_channel);
} else {
if((state_val_41795 === (2))){
var inst_41756 = (state_41794[(8)]);
var inst_41757 = (state_41794[(10)]);
var inst_41759 = (inst_41757 < inst_41756);
var inst_41760 = inst_41759;
var state_41794__$1 = state_41794;
if(cljs.core.truth_(inst_41760)){
var statearr_41807_41831 = state_41794__$1;
(statearr_41807_41831[(1)] = (4));

} else {
var statearr_41808_41832 = state_41794__$1;
(statearr_41808_41832[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41795 === (11))){
var inst_41769 = (state_41794[(13)]);
var inst_41773 = cljs.core.chunk_first.call(null,inst_41769);
var inst_41774 = cljs.core.chunk_rest.call(null,inst_41769);
var inst_41775 = cljs.core.count.call(null,inst_41773);
var inst_41754 = inst_41774;
var inst_41755 = inst_41773;
var inst_41756 = inst_41775;
var inst_41757 = (0);
var state_41794__$1 = (function (){var statearr_41809 = state_41794;
(statearr_41809[(7)] = inst_41755);

(statearr_41809[(8)] = inst_41756);

(statearr_41809[(9)] = inst_41754);

(statearr_41809[(10)] = inst_41757);

return statearr_41809;
})();
var statearr_41810_41833 = state_41794__$1;
(statearr_41810_41833[(2)] = null);

(statearr_41810_41833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41795 === (9))){
var state_41794__$1 = state_41794;
var statearr_41811_41834 = state_41794__$1;
(statearr_41811_41834[(2)] = null);

(statearr_41811_41834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41795 === (5))){
var inst_41754 = (state_41794[(9)]);
var inst_41769 = (state_41794[(13)]);
var inst_41769__$1 = cljs.core.seq.call(null,inst_41754);
var state_41794__$1 = (function (){var statearr_41812 = state_41794;
(statearr_41812[(13)] = inst_41769__$1);

return statearr_41812;
})();
if(inst_41769__$1){
var statearr_41813_41835 = state_41794__$1;
(statearr_41813_41835[(1)] = (8));

} else {
var statearr_41814_41836 = state_41794__$1;
(statearr_41814_41836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41795 === (14))){
var inst_41769 = (state_41794[(13)]);
var inst_41780 = (state_41794[(2)]);
var inst_41781 = inst_41780.terminate();
var inst_41782 = cljs.core.next.call(null,inst_41769);
var inst_41754 = inst_41782;
var inst_41755 = null;
var inst_41756 = (0);
var inst_41757 = (0);
var state_41794__$1 = (function (){var statearr_41815 = state_41794;
(statearr_41815[(7)] = inst_41755);

(statearr_41815[(8)] = inst_41756);

(statearr_41815[(9)] = inst_41754);

(statearr_41815[(15)] = inst_41781);

(statearr_41815[(10)] = inst_41757);

return statearr_41815;
})();
var statearr_41816_41837 = state_41794__$1;
(statearr_41816_41837[(2)] = null);

(statearr_41816_41837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41795 === (10))){
var inst_41788 = (state_41794[(2)]);
var state_41794__$1 = state_41794;
var statearr_41817_41838 = state_41794__$1;
(statearr_41817_41838[(2)] = inst_41788);

(statearr_41817_41838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41795 === (8))){
var inst_41769 = (state_41794[(13)]);
var inst_41771 = cljs.core.chunked_seq_QMARK_.call(null,inst_41769);
var state_41794__$1 = state_41794;
if(inst_41771){
var statearr_41818_41839 = state_41794__$1;
(statearr_41818_41839[(1)] = (11));

} else {
var statearr_41819_41840 = state_41794__$1;
(statearr_41819_41840[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11350__auto__))
;
return ((function (switch__11253__auto__,c__11350__auto__){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_41823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41823[(0)] = state_machine__11254__auto__);

(statearr_41823[(1)] = (1));

return statearr_41823;
});
var state_machine__11254__auto____1 = (function (state_41794){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_41794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e41824){if((e41824 instanceof Object)){
var ex__11257__auto__ = e41824;
var statearr_41825_41841 = state_41794;
(statearr_41825_41841[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41842 = state_41794;
state_41794 = G__41842;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_41794){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_41794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto__))
})();
var state__11352__auto__ = (function (){var statearr_41826 = f__11351__auto__.call(null);
(statearr_41826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto__);

return statearr_41826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto__))
);

return c__11350__auto__;
});
servant.core.f__GT_key = (function f__GT_key(f){
return cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p1__41843_SHARP_){
return cljs.core._EQ_.call(null,f,cljs.core.second.call(null,p1__41843_SHARP_));
}),cljs.core.deref.call(null,servant.worker.worker_fn_map)));
});
servant.core.standard_message = (function standard_message(worker,fn_key,args){
return worker.postMessage((function (){var obj41847 = {"command":"channel","fn":fn_key,"args":cljs.core.clj__GT_js.call(null,args)};
return obj41847;
})());
});
/**
* Post message by transferring context of the arraybuffers.
* The channel should be fed data like [[normal args] [arraybuffer1 arraybuffer2]].
* Tells the worker to expect to return an arraybuffer
*/
servant.core.array_buffer_message = (function array_buffer_message(worker,fn_key,args){
var vec__41851 = args;
var args__$1 = cljs.core.nth.call(null,vec__41851,(0),null);
var arraybuffers = cljs.core.nth.call(null,vec__41851,(1),null);
return worker.postMessage((function (){var obj41853 = {"command":"channel-arraybuffer","fn":fn_key,"args":cljs.core.clj__GT_js.call(null,args__$1)};
return obj41853;
})(),cljs.core.clj__GT_js.call(null,arraybuffers));
});
/**
* Post message by transferring context of the arraybuffers.
* The channel should be fed data like [[arg1 arg2] [arraybuffer1 arraybuffer2]].
* Tells the worker to return normal data
*/
servant.core.array_buffer_message_standard_reply = (function array_buffer_message_standard_reply(worker,fn_key,args){
var vec__41857 = args;
var args__$1 = cljs.core.nth.call(null,vec__41857,(0),null);
var arraybuffers = cljs.core.nth.call(null,vec__41857,(1),null);
return worker.postMessage((function (){var obj41859 = {"command":"channel","fn":fn_key,"args":cljs.core.clj__GT_js.call(null,args__$1)};
return obj41859;
})(),cljs.core.clj__GT_js.call(null,arraybuffers));
});
/**
* @param {...*} var_args
*/
servant.core.servant_thread_with_key = (function() { 
var servant_thread_with_key__delegate = function (servant_channel,post_message_fn,fn_key,args){
var out_channel = cljs.core.async.chan.call(null,(1));
var c__11350__auto___41927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto___41927,out_channel){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto___41927,out_channel){
return (function (state_41901){
var state_val_41902 = (state_41901[(1)]);
if((state_val_41902 === (2))){
var inst_41895 = (state_41901[(2)]);
var inst_41896 = cljs.core.pr_str.call(null,fn_key);
var inst_41897 = post_message_fn.call(null,inst_41895,inst_41896,args);
var inst_41898 = (function (){var worker = inst_41895;
return ((function (worker,inst_41895,inst_41896,inst_41897,state_val_41902,c__11350__auto___41927,out_channel){
return (function (p1__41860_SHARP_){
var c__11350__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto____$1,worker,inst_41895,inst_41896,inst_41897,state_val_41902,c__11350__auto___41927,out_channel){
return (function (){
var f__11351__auto__ = (function (){var switch__11253__auto__ = ((function (c__11350__auto____$1,worker,inst_41895,inst_41896,inst_41897,state_val_41902,c__11350__auto___41927,out_channel){
return (function (state_41909){
var state_val_41910 = (state_41909[(1)]);
if((state_val_41910 === (3))){
var inst_41907 = (state_41909[(2)]);
var state_41909__$1 = state_41909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41909__$1,inst_41907);
} else {
if((state_val_41910 === (2))){
var inst_41905 = (state_41909[(2)]);
var state_41909__$1 = (function (){var statearr_41911 = state_41909;
(statearr_41911[(7)] = inst_41905);

return statearr_41911;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41909__$1,(3),servant_channel,worker);
} else {
if((state_val_41910 === (1))){
var inst_41903 = p1__41860_SHARP_.data;
var state_41909__$1 = state_41909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41909__$1,(2),out_channel,inst_41903);
} else {
return null;
}
}
}
});})(c__11350__auto____$1,worker,inst_41895,inst_41896,inst_41897,state_val_41902,c__11350__auto___41927,out_channel))
;
return ((function (switch__11253__auto__,c__11350__auto____$1,worker,inst_41895,inst_41896,inst_41897,state_val_41902,c__11350__auto___41927,out_channel){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_41915 = [null,null,null,null,null,null,null,null];
(statearr_41915[(0)] = state_machine__11254__auto__);

(statearr_41915[(1)] = (1));

return statearr_41915;
});
var state_machine__11254__auto____1 = (function (state_41909){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_41909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e41916){if((e41916 instanceof Object)){
var ex__11257__auto__ = e41916;
var statearr_41917_41928 = state_41909;
(statearr_41917_41928[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41929 = state_41909;
state_41909 = G__41929;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_41909){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_41909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto____$1,worker,inst_41895,inst_41896,inst_41897,state_val_41902,c__11350__auto___41927,out_channel))
})();
var state__11352__auto__ = (function (){var statearr_41918 = f__11351__auto__.call(null);
(statearr_41918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto____$1);

return statearr_41918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto____$1,worker,inst_41895,inst_41896,inst_41897,state_val_41902,c__11350__auto___41927,out_channel))
);

return c__11350__auto____$1;
});
;})(worker,inst_41895,inst_41896,inst_41897,state_val_41902,c__11350__auto___41927,out_channel))
})();
var inst_41899 = inst_41895.addEventListener("message",inst_41898);
var state_41901__$1 = (function (){var statearr_41919 = state_41901;
(statearr_41919[(7)] = inst_41897);

return statearr_41919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41901__$1,inst_41899);
} else {
if((state_val_41902 === (1))){
var state_41901__$1 = state_41901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41901__$1,(2),servant_channel);
} else {
return null;
}
}
});})(c__11350__auto___41927,out_channel))
;
return ((function (switch__11253__auto__,c__11350__auto___41927,out_channel){
return (function() {
var state_machine__11254__auto__ = null;
var state_machine__11254__auto____0 = (function (){
var statearr_41923 = [null,null,null,null,null,null,null,null];
(statearr_41923[(0)] = state_machine__11254__auto__);

(statearr_41923[(1)] = (1));

return statearr_41923;
});
var state_machine__11254__auto____1 = (function (state_41901){
while(true){
var ret_value__11255__auto__ = (function (){try{while(true){
var result__11256__auto__ = switch__11253__auto__.call(null,state_41901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11256__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11256__auto__;
}
break;
}
}catch (e41924){if((e41924 instanceof Object)){
var ex__11257__auto__ = e41924;
var statearr_41925_41930 = state_41901;
(statearr_41925_41930[(5)] = ex__11257__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41931 = state_41901;
state_41901 = G__41931;
continue;
} else {
return ret_value__11255__auto__;
}
break;
}
});
state_machine__11254__auto__ = function(state_41901){
switch(arguments.length){
case 0:
return state_machine__11254__auto____0.call(this);
case 1:
return state_machine__11254__auto____1.call(this,state_41901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11254__auto____0;
state_machine__11254__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11254__auto____1;
return state_machine__11254__auto__;
})()
;})(switch__11253__auto__,c__11350__auto___41927,out_channel))
})();
var state__11352__auto__ = (function (){var statearr_41926 = f__11351__auto__.call(null);
(statearr_41926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto___41927);

return statearr_41926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto___41927,out_channel))
);


return out_channel;
};
var servant_thread_with_key = function (servant_channel,post_message_fn,fn_key,var_args){
var args = null;
if (arguments.length > 3) {
var G__41932__i = 0, G__41932__a = new Array(arguments.length -  3);
while (G__41932__i < G__41932__a.length) {G__41932__a[G__41932__i] = arguments[G__41932__i + 3]; ++G__41932__i;}
  args = new cljs.core.IndexedSeq(G__41932__a,0);
} 
return servant_thread_with_key__delegate.call(this,servant_channel,post_message_fn,fn_key,args);};
servant_thread_with_key.cljs$lang$maxFixedArity = 3;
servant_thread_with_key.cljs$lang$applyTo = (function (arglist__41933){
var servant_channel = cljs.core.first(arglist__41933);
arglist__41933 = cljs.core.next(arglist__41933);
var post_message_fn = cljs.core.first(arglist__41933);
arglist__41933 = cljs.core.next(arglist__41933);
var fn_key = cljs.core.first(arglist__41933);
var args = cljs.core.rest(arglist__41933);
return servant_thread_with_key__delegate(servant_channel,post_message_fn,fn_key,args);
});
servant_thread_with_key.cljs$core$IFn$_invoke$arity$variadic = servant_thread_with_key__delegate;
return servant_thread_with_key;
})()
;
/**
* @param {...*} var_args
*/
servant.core.servant_thread = (function() { 
var servant_thread__delegate = function (servant_channel,post_message_fn,f,args){
return cljs.core.apply.call(null,servant.core.servant_thread_with_key,servant_channel,post_message_fn,servant.core.f__GT_key.call(null,f),args);
};
var servant_thread = function (servant_channel,post_message_fn,f,var_args){
var args = null;
if (arguments.length > 3) {
var G__41934__i = 0, G__41934__a = new Array(arguments.length -  3);
while (G__41934__i < G__41934__a.length) {G__41934__a[G__41934__i] = arguments[G__41934__i + 3]; ++G__41934__i;}
  args = new cljs.core.IndexedSeq(G__41934__a,0);
} 
return servant_thread__delegate.call(this,servant_channel,post_message_fn,f,args);};
servant_thread.cljs$lang$maxFixedArity = 3;
servant_thread.cljs$lang$applyTo = (function (arglist__41935){
var servant_channel = cljs.core.first(arglist__41935);
arglist__41935 = cljs.core.next(arglist__41935);
var post_message_fn = cljs.core.first(arglist__41935);
arglist__41935 = cljs.core.next(arglist__41935);
var f = cljs.core.first(arglist__41935);
var args = cljs.core.rest(arglist__41935);
return servant_thread__delegate(servant_channel,post_message_fn,f,args);
});
servant_thread.cljs$core$IFn$_invoke$arity$variadic = servant_thread__delegate;
return servant_thread;
})()
;

//# sourceMappingURL=core.js.map