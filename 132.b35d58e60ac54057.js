"use strict";(self.webpackChunkseller=self.webpackChunkseller||[]).push([[132],{8132:(G,h,l)=>{function f(n,a,t,r,s,o,c){try{var u=n[o](c),p=u.value}catch(H){return void t(H)}u.done?a(p):Promise.resolve(p).then(r,s)}l.r(h),l.d(h,{OrdersComponent:()=>E});var g=l(6895),A=l(1422),_=l(671),D=l(3746),e=l(4650);let T=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["flag-data"]],inputs:{label:"label",count:"count",countClasses:"countClasses"},standalone:!0,features:[e.jDz],decls:5,vars:3,consts:[[1,"d-flex","align-items-center","flag-data"],[1,"label","mx-2"],[1,"my-alert",3,"ngClass"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2),e.qZA(),e.TgZ(3,"div",2),e._uU(4),e.qZA()()),2&t&&(e.xp6(2),e.Oqu(r.label),e.xp6(1),e.Q6J("ngClass",r.countClasses),e.xp6(1),e.Oqu(r.count))},dependencies:[g.ez,g.mk],styles:[".flag-data[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.my-alert[_ngcontent-%COMP%]{border-radius:50px;padding:3px 20px}.my-alert-danger[_ngcontent-%COMP%]{background-color:#feefd0}.my-alert-grey[_ngcontent-%COMP%]{background-color:#f1f1f1}"]}),n})();var P=l(42),i=l(4006),M=l(727),m=l(5917),b=l(2134),y=l(9151),L=l(2937),C=l(2340),v=l(529);let F=(()=>{class n{constructor(t){this._HttpClient=t,this.baseUrl=C.N.baseUrl}getAllCities(t){return this._HttpClient.get(`${this.baseUrl}seller/country/${t}/cities`)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(v.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),I=(()=>{class n{constructor(t){this._HttpClient=t,this.baseUrl=C.N.baseUrl}getPaymentMethod(){return this._HttpClient.get(`${this.baseUrl}seller/payment-methods`)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(v.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var J=l(7185);function N(n,a){if(1&n&&(e.ynx(0),e.TgZ(1,"div",30),e._UZ(2,"flag-data",31),e.ALo(3,"translate"),e.qZA(),e.BQk()),2&n){const t=a.$implicit,r=e.oxw();e.xp6(2),e.Q6J("label",e.lcZ(3,3,"seller.order.orderStatus."+t.label))("count",t.count)("countClasses",t.label==r.OrderStatus.CANCELED||t.label==r.OrderStatus.RETURNED?"my-alert-danger":"my-alert-grey")}}const O=function(){return["border-0","my-btn-dark-blue","mx-2","rounded"]},d=function(n,a){return{label:n,classes:a}},w=function(){return["rounded","my-btn-grey","bg-transparent","border-1"]};function U(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",32)(1,"form",33)(2,"div",34)(3,"div",35)(4,"div",36)(5,"div",37)(6,"custom-select",38),e.NdJ("selectedValue",function(s){e.CHM(t);const o=e.oxw();return e.KtG(o.setOrderStatusId(s))}),e.ALo(7,"translate"),e.ALo(8,"translate"),e.qZA()()(),e.TgZ(9,"div",36)(10,"div",37)(11,"custom-select",38),e.NdJ("selectedValue",function(s){e.CHM(t);const o=e.oxw();return e.KtG(o.setPaymentMethodId(s))}),e.ALo(12,"translate"),e.ALo(13,"translate"),e.qZA(),e._uU(14),e.qZA()()(),e.TgZ(15,"div",39)(16,"div",36)(17,"div",37)(18,"label",24),e._uU(19),e.ALo(20,"translate"),e.qZA(),e._UZ(21,"input",40),e.qZA()(),e.TgZ(22,"div",36)(23,"div",37)(24,"label",26),e._uU(25),e.ALo(26,"translate"),e.qZA(),e._UZ(27,"input",41),e.qZA()()()(),e.TgZ(28,"div",42)(29,"div",43)(30,"btn",29),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.apllyFilter())}),e.ALo(31,"translate"),e.qZA(),e.TgZ(32,"btn",29),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.resetFilter())}),e.ALo(33,"translate"),e.qZA()()()()()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.filterField),e.xp6(5),e.Q6J("inputId","orderStatus")("inputLabel",e.lcZ(7,18,"seller.order.Order_Status"))("items",t.orderStatus)("bindLabel","value")("itemPlaceHolder",e.lcZ(8,20,"seller.order.Order_Status")),e.xp6(5),e.Q6J("inputId","paymentId")("inputLabel",e.lcZ(12,22,"seller.order.Payment_methods"))("items",t.paymentMethods)("bindLabel","en"==t.langSeller?"name_en":"name_ar")("itemPlaceHolder",e.lcZ(13,24,"seller.order.Payment_methods")),e.xp6(3),e.hij(" ",t.paymentId," "),e.xp6(5),e.Oqu(e.lcZ(20,26,"seller.order.from")),e.xp6(2),e.Q6J("max",t.maxDate),e.xp6(4),e.Oqu(e.lcZ(26,28,"seller.order.to")),e.xp6(2),e.Q6J("max",t.maxDate),e.xp6(3),e.Q6J("btn",e.WLB(35,d,e.lcZ(31,30,"seller.order.Apply_Filter"),e.DdM(34,O))),e.xp6(2),e.Q6J("btn",e.WLB(39,d,e.lcZ(33,32,"seller.order.Reset"),e.DdM(38,w)))}}const Q=function(){return["bg-filter","border-1","rounded"]},R=function(){return["fa-filter"]},S=function(){return["rounded","my-btn-grey","border-0","mx-2"]},Z=function(){return["fa-download"]},B=function(){return["fa-print"]},q=function(){return["rounded","my-btn-grey","border-0","bg-sales-report"]},k=function(){return["rounded","my-btn-grey","bg-transparent","border-1","mx-2","disabled"]};let E=(()=>{class n{get fromDateSalesReport(){return this.salesReportForm.get("date_from")}get toDateSalesReport(){return this.salesReportForm.get("date_to")}apllyFilter(){this.removeEmptyKeys(this.filterField.value),this.getFilterOrders()}resetFilter(){this.filterField.reset(),this.CustomSelectComponents.forEach(t=>t.clearSelectedValue())}get OrderStatus(){return m.i}constructor(t,r,s,o,c){this._FormBuilder=t,this._OrderService=r,this._CitiesService=s,this._PaymentMethodsService=o,this._ToastrService=c,this.searchStringOrder="",this.orderStatus=this._OrderService.orderStatus,this.countryId=Number(localStorage.getItem("countryId")),this.langSeller=localStorage.getItem("selller-lang")||"en",this.orderIds=[],this.order_orderIds=[],this.cities=[],this.paymentMethods=[],this.totalItems=15,this.itemsPerPage=10,this.currentPage=1,this.dataSource=new _.by,this.isFilter=!1,this.filterBtnDisabled=!1,this.orderStatisticsRes={},this.orderStatisticsData=[],this.dataBody=[],this.dataHeader=[{field:"order_serial_number",label:"seller.order.id",type:"text"},{field:"num_of_items",label:"seller.order.Products",type:"viewList"},{field:"customer_name",label:"seller.order.Customer_Name",type:"text"},{field:"amount",label:"seller.order.Grand_Total",type:"text"},{field:"order_status",label:"seller.order.Status",type:"status"},{field:"payment_info",label:"seller.order.payment_info",type:"text"},{field:"creation_date",label:"seller.order.Creation_Date",type:"date"},{field:"action",label:"seller.order.Action",type:"action"}],this.displayedColumns=["select","order_serial_number","num_of_items","customer_name","amount","creation_date","order_status","payment_info","action"],this.filterField=this._FormBuilder.group({fromDate:[""],toDate:[""],orderStatusId:[""],cityId:[""],paymentMethodId:[""]}),this.salesReportForm=this._FormBuilder.group({date_from:[""],date_to:[""]}),this.subscribtion=new M.w0,this.maxDate=(new Date).toISOString().slice(0,10)}ngOnInit(){this.getFilterOrders(),this.getOrdersStatistics(),this.getAllCities(),this.getPaymentMethod()}setPaymentMethodId(t){const r=t?.id;this.filterField.get("paymentMethodId")?.setValue(r)}setOrderStatusId(t){const r=t?.id;this.filterField.get("orderStatusId")?.setValue(r)}resetField(t){console.log(t)}setCityId(t){const r=t?.id;this.filterField.get("cityId")?.setValue(r)}getAllCities(){this.subscribtion.add(this._CitiesService.getAllCities(this.countryId).subscribe(t=>{this.cities=t?.data}))}getPaymentMethod(){this.subscribtion.add(this._PaymentMethodsService.getPaymentMethod().subscribe(t=>{this.paymentMethods=t?.data}))}getFilterOrders(){this.subscribtion.add(this._OrderService.getFilterOrders(Number(this.currentPage),Number(this.itemsPerPage),this.filterField.value,this.searchStringOrder).subscribe(t=>{this.dataBody=t?.data,this.totalItems=t?.meta?.total,this.dataSource=new _.by(this.dataBody)}))}getOrdersStatistics(){var t=this;this.subscribtion.add(this._OrderService.getOrdersStatistics().subscribe(function(){var r=function x(n){return function(){var a=this,t=arguments;return new Promise(function(r,s){var o=n.apply(a,t);function c(p){f(o,r,s,c,u,"next",p)}function u(p){f(o,r,s,c,u,"throw",p)}c(void 0)})}}(function*(s){t.orderStatisticsRes=yield s?.data,t.setOrderStatisticsData(t.orderStatisticsRes)});return function(s){return r.apply(this,arguments)}}()))}setOrderStatisticsData(t){this.orderStatisticsData=[{label:"allOrder",count:t.total_orders},{label:m.i.DELIVERED,count:t.delivered},{label:m.i.CANCELED,count:t.canceled},{label:m.i.ON_HOLD,count:t.on_hold},{label:m.i.RETURNED,count:t.returned},{label:m.i.VALIDATED,count:t.validated}]}pageChange(t){this.currentPage=t,this.getFilterOrders()}itemsPerPageChanged(t){this.itemsPerPage=t,this.getFilterOrders()}itemsSelected(t){this.orderIds=t.map(r=>r.id),this.order_orderIds=t.map(r=>r.order_id)}toggleFilter(){this.isFilter=!this.isFilter}removeEmptyKeys(t){Object.keys(t).forEach(r=>{(null==t[r]||""===t[r])&&delete t[r]})}exportOrders(t){"all"==t||this.orderIds.length?this.subscribtion.add(this._OrderService.getExportOrders(this.orderIds,t).subscribe(r=>{this.exportDataToCSV(r,r?.type)})):this._ToastrService.warning("please select at least one order")}exportDataToCSV(t,r){const s=new Blob([t],{type:r}),o=window.URL.createObjectURL(s);window.open(o)}getAWB(){this.orderIds.length?this.subscribtion.add(this._OrderService.getAWB(this.orderIds).subscribe(t=>{this.exportDataToCSV(t,t?.type)})):this._ToastrService.warning("please select at least one order")}getSalesReport(){this.subscribtion.add(this._OrderService.getSalesReport(this.fromDateSalesReport?.value,this.toDateSalesReport?.value).subscribe(t=>{this.exportDataToCSV(t,t?.type)}))}ngOnDestroy(){this.subscribtion.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(i.qu),e.Y36(L.p),e.Y36(F),e.Y36(I),e.Y36(J._W))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-orders"]],viewQuery:function(t,r){if(1&t&&e.Gf(b.T,5),2&t){let s;e.iGM(s=e.CRH())&&(r.CustomSelectComponents=s)}},standalone:!0,features:[e.jDz],decls:53,vars:79,consts:[[1,"d-flex","align-items-center","justify-content-between","mb-3"],[3,"headTitle"],[1,"d-flex","align-items-center"],[1,"form-group","position-relative","search-order","mx-2"],[1,"form-control",3,"ngModel","placeholder","keyup.enter","ngModelChange"],[1,"search-icon","position-absolute",3,"click"],[1,"fa-solid","fa-magnifying-glass","text-grey"],[3,"btn","iconLeftClasses","click"],[1,"d-flex","mb-3","flex-wrap","gy-2","row"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","mb-3"],[1,"d-flex"],["data-bs-toggle","modal","data-bs-target","#salesReportModal",3,"btn"],["class","filter mb-3 shadow p-3",4,"ngIf"],[3,"dataHeader","dataSource","displayedColumns","totalItems","itemsPerPage","pageChanged","itemsPerPageChanged","itemsSelected"],["id","salesReportModal","data-bs-backdrop","static","data-bs-keyboard","false","tabindex","-1","aria-labelledby","staticBackdropLabel2","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"container"],[1,"row","gy-3",3,"formGroup"],[1,"form-group","col-md-6"],["for","fromDate"],["type","date","id","fromDate","formControlName","date_from",1,"form-control","mt-2",3,"max"],["for","toDate"],["type","date","id","toDate","formControlName","date_to",1,"form-control","mt-2",3,"max"],[1,"modal-footer"],[3,"btn","click"],[1,"col-md-2"],[3,"label","count","countClasses"],[1,"filter","mb-3","shadow","p-3"],[3,"formGroup"],[1,"row","gy-3"],[1,"row"],[1,"col-md-4"],[1,"form-group"],[3,"inputId","inputLabel","items","bindLabel","itemPlaceHolder","selectedValue"],[1,"row","mt-3"],["type","date","id","fromDate","formControlName","fromDate",1,"form-control","mt-2",3,"max"],["type","date","id","toDate","formControlName","toDate",1,"form-control","mt-2",3,"max"],[1,"row","justify-content-end","mt-2"],[1,"col-md-6","d-flex","justify-content-end"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"head-title",1),e.ALo(2,"translate"),e.TgZ(3,"div",2)(4,"div",3)(5,"input",4),e.NdJ("keyup.enter",function(){return r.getFilterOrders()})("ngModelChange",function(o){return r.searchStringOrder=o}),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"div",5),e.NdJ("click",function(){return r.getFilterOrders()}),e._UZ(8,"i",6),e.qZA()(),e.TgZ(9,"btn",7),e.NdJ("click",function(){return r.toggleFilter()}),e.ALo(10,"translate"),e.qZA()()(),e.TgZ(11,"div",8),e.YNc(12,N,4,5,"ng-container",9),e.qZA(),e.TgZ(13,"div",10)(14,"div",2)(15,"h5"),e._uU(16),e.ALo(17,"translate"),e.qZA(),e.TgZ(18,"btn",7),e.NdJ("click",function(){return r.exportOrders("selected")}),e.ALo(19,"translate"),e.qZA(),e.TgZ(20,"btn",7),e.NdJ("click",function(){return r.getAWB()}),e.ALo(21,"translate"),e.qZA()(),e.TgZ(22,"div",11),e._UZ(23,"btn",12),e.ALo(24,"translate"),e.TgZ(25,"btn",7),e.NdJ("click",function(){return r.exportOrders("all")}),e.ALo(26,"translate"),e.qZA()()(),e.YNc(27,U,34,42,"div",13),e.TgZ(28,"data-table",14),e.NdJ("pageChanged",function(o){return r.pageChange(o)})("itemsPerPageChanged",function(o){return r.itemsPerPageChanged(o)})("itemsSelected",function(o){return r.itemsSelected(o)}),e.qZA(),e.TgZ(29,"div",15)(30,"div",16)(31,"div",17)(32,"div",18)(33,"h5"),e._uU(34),e.ALo(35,"translate"),e.qZA(),e._UZ(36,"button",19),e.qZA(),e.TgZ(37,"div",20)(38,"div",21)(39,"div",22)(40,"div",23)(41,"label",24),e._uU(42),e.ALo(43,"translate"),e.qZA(),e._UZ(44,"input",25),e.qZA(),e.TgZ(45,"div",23)(46,"label",26),e._uU(47),e.ALo(48,"translate"),e.qZA(),e._UZ(49,"input",27),e.qZA()()()(),e.TgZ(50,"div",28)(51,"btn",29),e.NdJ("click",function(){return r.getSalesReport()}),e.ALo(52,"translate"),e.qZA()()()()()),2&t&&(e.xp6(1),e.Q6J("headTitle",e.lcZ(2,27,"seller.order.Orders")),e.xp6(4),e.Q6J("ngModel",r.searchStringOrder)("placeholder",e.lcZ(6,29,"seller.order.searchOrder")),e.xp6(4),e.Q6J("btn",e.WLB(52,d,e.lcZ(10,31,"seller.order.filter"),e.DdM(51,Q)))("iconLeftClasses",e.DdM(55,R)),e.xp6(3),e.Q6J("ngForOf",r.orderStatisticsData),e.xp6(4),e.Oqu(e.lcZ(17,33,"seller.order.Select_Order_For")),e.xp6(2),e.Q6J("btn",e.WLB(57,d,e.lcZ(19,35,"seller.order.export"),e.DdM(56,S)))("iconLeftClasses",e.DdM(60,Z)),e.xp6(2),e.Q6J("btn",e.WLB(62,d,e.lcZ(21,37,"seller.order.AWB"),e.DdM(61,S)))("iconLeftClasses",e.DdM(65,B)),e.xp6(3),e.Q6J("btn",e.WLB(67,d,e.lcZ(24,39,"seller.order.Sales_Report"),e.DdM(66,q))),e.xp6(2),e.Q6J("btn",e.WLB(71,d,e.lcZ(26,41,"seller.order.Export_All"),e.DdM(70,k)))("iconLeftClasses",e.DdM(74,Z)),e.xp6(2),e.Q6J("ngIf",r.isFilter),e.xp6(1),e.Q6J("dataHeader",r.dataHeader)("dataSource",r.dataSource)("displayedColumns",r.displayedColumns)("totalItems",r.totalItems)("itemsPerPage",r.itemsPerPage),e.xp6(6),e.Oqu(e.lcZ(35,43,"seller.order.Sales_Report")),e.xp6(5),e.Q6J("formGroup",r.salesReportForm),e.xp6(3),e.Oqu(e.lcZ(43,45,"seller.order.from")),e.xp6(2),e.Q6J("max",r.maxDate),e.xp6(3),e.Oqu(e.lcZ(48,47,"seller.order.to")),e.xp6(2),e.Q6J("max",r.maxDate),e.xp6(2),e.Q6J("btn",e.WLB(76,d,e.lcZ(52,49,"seller.auth.Submit"),e.DdM(75,O))))},dependencies:[g.ez,g.sg,g.O5,A.Q,D.G,T,P.r,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,b.T,i.u5,i.On,y.aw,y.X$],styles:["h5[_ngcontent-%COMP%]{font-weight:700;font-size:.875rem;line-height:170%;margin-bottom:0}.bg-sales-report[_ngcontent-%COMP%]{background-color:#e5f6f4}.search-order[_ngcontent-%COMP%]{min-width:300px}.search-order[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-weight:400;font-size:.875rem;line-height:170%}.search-order[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{top:50%;right:8px;left:auto;transform:translateY(-50%);cursor:pointer;z-index:999}.search-order[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]:lang(ar){right:auto;left:8px}.text-grey[_ngcontent-%COMP%]{color:#ced4da}"]}),n})()}}]);