"use strict";(self.webpackChunkseller=self.webpackChunkseller||[]).push([[850],{2937:(y,p,o)=>{o.d(p,{p:()=>l});var a=o(2340),e=o(5917),c=o(4650),d=o(529);let l=(()=>{class E{get OrderStatus(){return e.i}constructor(n){this._HttpClient=n,this.baseUrl=a.N.baseUrl+"seller/",this.orderStatus=[{id:1,value:e.i.PENDING_PAYMENT},{id:2,value:e.i.PAYMENT_FAILED},{id:3,value:e.i.PENDING},{id:4,value:e.i.VALIDATED},{id:5,value:e.i.PENDING_SELLERS_CONFIRMATION},{id:6,value:e.i.READY_TO_SHIP},{id:7,value:e.i.OUT_FOR_DELIVERY},{id:8,value:e.i.PARTIALLY_DELIVERED},{id:9,value:e.i.LOGISTICS_ISSUE},{id:10,value:e.i.SELLER_ISSUE},{id:11,value:e.i.CUSTOMER_ISSUE},{id:12,value:e.i.DELIVERED},{id:13,value:e.i.RETURN_REQUEST},{id:14,value:e.i.OUT_FOR_RETURN},{id:15,value:e.i.PARTIALLY_RETURNED},{id:16,value:e.i.RETURNED},{id:17,value:e.i.WITHIN_RTO},{id:18,value:e.i.RTO},{id:19,value:e.i.COMPLETE},{id:20,value:e.i.CANCELED},{id:21,value:e.i.CLOSED},{id:22,value:e.i.COMPLETE_PARTIAL_REFUND},{id:23,value:e.i.ON_HOLD}]}getFilterOrders(n=1,_=10,g,A){return this._HttpClient.get(`${this.baseUrl}orders?page=${n}&per_page=${_}&search_key=${A}&filters[order_date_from]=${g?.fromDate?g?.fromDate:""}&filters[order_date_to]=${g?.toDate?g?.toDate:""}&filters[order_status]=${g?.orderStatusId?g?.orderStatusId:""}&filters[city_id]=${g?.cityId?g?.cityId:""}&filters[payment_id]=${g?.paymentMethodId?g?.paymentMethodId:""}`)}getOrdersStatistics(){return this._HttpClient.get(`${this.baseUrl}orders/statistics`)}getOrdersDetails(n){return this._HttpClient.get(`${this.baseUrl}orders/${n}/details`)}changeProductStatus(n){return this._HttpClient.patch(`${this.baseUrl}orders/products/change-status`,{status_shipment_products:[n]})}getExportOrders(n,_){return this._HttpClient.get(`${this.baseUrl}orders/export`,"all"===_?{responseType:"blob"}:{responseType:"blob",params:{"ids[]":n}})}getReasonRejected(){return this._HttpClient.get(`${this.baseUrl}reasons`)}getAWB(n){return this._HttpClient.get(`${this.baseUrl}orders/download`,{responseType:"blob",params:{"shipments[]":n}})}getSalesReport(n,_){return this._HttpClient.get(`${this.baseUrl}order-sales/report?date_from=${n}&date_to=${_}`,{responseType:"blob"})}addComment(n,_){return this._HttpClient.post(`${this.baseUrl}orders/${_}/comment`,n)}addReply(n,_){return this._HttpClient.post(`${this.baseUrl}orders/${_}/reply`,n)}}return E.\u0275fac=function(n){return new(n||E)(c.LFG(d.eN))},E.\u0275prov=c.Yz7({token:E,factory:E.\u0275fac,providedIn:"root"}),E})()},3746:(y,p,o)=>{o.d(p,{G:()=>d});var a=o(6895),e=o(4650);function c(l,E){if(1&l){const f=e.EpF();e.TgZ(0,"a",2),e.NdJ("click",function(){e.CHM(f);const _=e.oxw();return e.KtG(_.goBack())}),e._UZ(1,"i",3),e.qZA()}}let d=(()=>{class l{constructor(){this.canGoBack=!1}goBack(){history.back()}}return l.\u0275fac=function(f){return new(f||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["head-title"]],inputs:{headTitle:"headTitle",canGoBack:"canGoBack"},standalone:!0,features:[e.jDz],decls:4,vars:2,consts:[[1,"d-flex"],["class","go-back",3,"click",4,"ngIf"],[1,"go-back",3,"click"],[1,"fa-solid","fa-chevron-left"]],template:function(f,n){1&f&&(e.TgZ(0,"div",0),e.YNc(1,c,2,0,"a",1),e.TgZ(2,"h2"),e._uU(3),e.qZA()()),2&f&&(e.xp6(1),e.Q6J("ngIf",n.canGoBack),e.xp6(2),e.hij(" ",n.headTitle," "))},dependencies:[a.ez,a.O5],styles:['h2[_ngcontent-%COMP%]{font-weight:600;font-size:1.125rem;line-height:165%;position:relative;line-height:1.6rem;margin-bottom:0}h2[_ngcontent-%COMP%]:after{position:absolute;content:"";width:17px;height:2px;background-color:#48a299;left:4px;right:auto;bottom:0}h2[_ngcontent-%COMP%]:lang(ar):after{right:4px;left:auto}.go-back[_ngcontent-%COMP%]{color:#000;margin-right:10px;margin-left:0}.go-back[_ngcontent-%COMP%]:lang(ar){transform:rotate(180deg);margin-left:10px;margin-right:0}']}),l})()},5917:(y,p,o)=>{o.d(p,{i:()=>a});var a=(()=>{return(e=a||(a={})).READY_TO_SHIP="Ready to ship",e.COMPLETE="Completed",e.DELIVERED="Delivered",e.RETURNED="Returned",e.PENDING_PAYMENT="Pending payment",e.PAYMENT_FAILED="Payment failed",e.PENDING="Pending",e.VALIDATED="Validated",e.PENDING_SELLERS_CONFIRMATION="Pending sellers confirmation",e.OUT_FOR_DELIVERY="Out for deliveray",e.PARTIALLY_DELIVERED="Partially delivered",e.LOGISTICS_ISSUE="Logistics issue",e.SELLER_ISSUE="Seller issue",e.CUSTOMER_ISSUE="Customer issue",e.RETURN_REQUEST="Return request",e.OUT_FOR_RETURN="Out for return",e.PARTIALLY_RETURNED="Partially returned",e.WITHIN_RTO="Within rto",e.RTO="Rto",e.CANCELED="Canceled",e.CLOSED="Closed",e.COMPLETE_PARTIAL_REFUND="Comlete partial refund",e.ON_HOLD="On hold",e.REJECTED="Rejected ",e.REFUNDED="Refunded",e.ORDERED="Ordered",e.SHIPPED="Shipped",e.READY_FOR_PICKUP="Ready for pickup",a;var e})()},7789:(y,p,o)=>{o.d(p,{G:()=>e});var a=o(4650);let e=(()=>{class c{constructor(){this.countryId=localStorage.getItem("countryId")}transform(l){return 1==l?"EGP":"SAR"}}return c.\u0275fac=function(l){return new(l||c)},c.\u0275pipe=a.Yjl({name:"currencySymbol",type:c,pure:!0}),c})()},4466:(y,p,o)=>{o.d(p,{m:()=>c});var a=o(6895),e=o(4650);let c=(()=>{class d{}return d.\u0275fac=function(E){return new(E||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[a.ez]}),d})()},5017:(y,p,o)=>{o.d(p,{A8:()=>A,Ov:()=>_,Z9:()=>l,eX:()=>n,k:()=>P,o2:()=>d,yy:()=>f});var a=o(4033),e=o(7579),c=o(4650);class d{}function l(h){return h&&"function"==typeof h.connect&&!(h instanceof a.c)}class f{applyChanges(t,i,s,u,r){t.forEachOperation((m,R,D)=>{let T,C;if(null==m.previousIndex){const I=s(m,R,D);T=i.createEmbeddedView(I.templateRef,I.context,I.index),C=1}else null==D?(i.remove(R),C=3):(T=i.get(R),i.move(T,D),C=2);r&&r({context:T?.context,operation:C,record:m})})}detach(){}}class n{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(t,i,s,u,r){t.forEachOperation((m,R,D)=>{let T,C;null==m.previousIndex?(T=this._insertView(()=>s(m,R,D),D,i,u(m)),C=T?1:0):null==D?(this._detachAndCacheView(R,i),C=3):(T=this._moveView(R,D,i,u(m)),C=2),r&&r({context:T?.context,operation:C,record:m})})}detach(){for(const t of this._viewCache)t.destroy();this._viewCache=[]}_insertView(t,i,s,u){const r=this._insertViewFromCache(i,s);if(r)return void(r.context.$implicit=u);const m=t();return s.createEmbeddedView(m.templateRef,m.context,m.index)}_detachAndCacheView(t,i){const s=i.detach(t);this._maybeCacheView(s,i)}_moveView(t,i,s,u){const r=s.get(t);return s.move(r,i),r.context.$implicit=u,r}_maybeCacheView(t,i){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(t);else{const s=i.indexOf(t);-1===s?t.destroy():i.remove(s)}}_insertViewFromCache(t,i){const s=this._viewCache.pop();return s&&i.insert(s,t),s||null}}class _{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(t=!1,i,s=!0,u){this._multiple=t,this._emitChanges=s,this.compareWith=u,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new e.x,i&&i.length&&(t?i.forEach(r=>this._markSelected(r)):this._markSelected(i[0]),this._selectedToEmit.length=0)}select(...t){this._verifyValueAssignment(t),t.forEach(s=>this._markSelected(s));const i=this._hasQueuedChanges();return this._emitChangeEvent(),i}deselect(...t){this._verifyValueAssignment(t),t.forEach(s=>this._unmarkSelected(s));const i=this._hasQueuedChanges();return this._emitChangeEvent(),i}setSelection(...t){this._verifyValueAssignment(t);const i=this.selected,s=new Set(t);t.forEach(r=>this._markSelected(r)),i.filter(r=>!s.has(r)).forEach(r=>this._unmarkSelected(r));const u=this._hasQueuedChanges();return this._emitChangeEvent(),u}toggle(t){return this.isSelected(t)?this.deselect(t):this.select(t)}clear(t=!0){this._unmarkAll();const i=this._hasQueuedChanges();return t&&this._emitChangeEvent(),i}isSelected(t){return this._selection.has(this._getConcreteValue(t))}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(t){this._multiple&&this.selected&&this._selected.sort(t)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(t){t=this._getConcreteValue(t),this.isSelected(t)||(this._multiple||this._unmarkAll(),this.isSelected(t)||this._selection.add(t),this._emitChanges&&this._selectedToEmit.push(t))}_unmarkSelected(t){t=this._getConcreteValue(t),this.isSelected(t)&&(this._selection.delete(t),this._emitChanges&&this._deselectedToEmit.push(t))}_unmarkAll(){this.isEmpty()||this._selection.forEach(t=>this._unmarkSelected(t))}_verifyValueAssignment(t){}_hasQueuedChanges(){return!(!this._deselectedToEmit.length&&!this._selectedToEmit.length)}_getConcreteValue(t){if(this.compareWith){for(let i of this._selection)if(this.compareWith(t,i))return i;return t}return t}}let A=(()=>{class h{constructor(){this._listeners=[]}notify(i,s){for(let u of this._listeners)u(i,s)}listen(i){return this._listeners.push(i),()=>{this._listeners=this._listeners.filter(s=>i!==s)}}ngOnDestroy(){this._listeners=[]}}return h.\u0275fac=function(i){return new(i||h)},h.\u0275prov=c.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})();const P=new c.OlP("_ViewRepeater")}}]);