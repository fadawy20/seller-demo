"use strict";(self.webpackChunkseller=self.webpackChunkseller||[]).push([[790],{5790:(V,f,r)=>{r.r(f),r.d(f,{SendOtpComponent:()=>L});var C=r(727),p=r(6895),v=r(9151),c=r(4006),h=r(1310),y=r(9549),b=r(8184),t=r(4650),d=r(3238),x=r(7376);r(7340);const I={provide:new t.OlP("mat-select-scroll-strategy"),deps:[b.aV],useFactory:function w(i){return()=>i.scrollStrategies.reposition()}};let k=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[I],imports:[p.ez,b.U8,d.Ng,d.BQ,x.ZD,y.lN,d.Ng,d.BQ]}),i})();var T=r(793);function E(i,o){1&i&&(t.TgZ(0,"small",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"seller.auth.Phone_is_Required")," "))}function D(i,o){1&i&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"seller.auth.Submit")," "))}function R(i,o){1&i&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"seller.auth.Waiting"),"... "))}const F=function(){return["/login"]};let L=(()=>{class i{constructor(e,n,a){this._Router=e,this._AuthServiceService=n,this._FormBuilder=a,this.selectedCountryCode="+2",this.loadingIndicator=!1,this.subscription=new C.w0,this.inintForm()}ngOnInit(){}inintForm(){this.sendCodeForm=this._FormBuilder.group({email:["",c.kI.required]})}submit(){this.subscription.add(this._AuthServiceService.sendOtp(this.sendCodeForm.value).subscribe(e=>{this._Router.navigate(["/verifyOtpCode"],{queryParams:this.sendCodeForm.value})},e=>{this.sendCodeForm.reset()}))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(h.F0),t.Y36(T.e),t.Y36(c.qu))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-send-otp"]],standalone:!0,features:[t.jDz],decls:13,vars:13,consts:[[3,"formGroup"],[1,"form-group","my-3","d-flex","align-items-center"],["type","email","formControlName","email",1,"form-control","phone-num","mx-2",3,"placeholder","keyup.enter"],["class","text-danger",4,"ngIf"],[1,"d-flex","justify-content-end","mb-2"],[1,"text-decoration-underline",2,"color","#627084",3,"routerLink"],["type","button",1,"submit-btn",3,"disabled","click"],[4,"ngIf"],[1,"text-danger"]],template:function(e,n){if(1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"input",2),t.NdJ("keyup.enter",function(){return n.submit()}),t.ALo(3,"translate"),t.qZA(),t.YNc(4,E,3,3,"small",3),t.qZA(),t.TgZ(5,"div",4)(6,"a",5),t._uU(7),t.ALo(8,"translate"),t.qZA()(),t.TgZ(9,"div")(10,"button",6),t.NdJ("click",function(){return n.submit()}),t.YNc(11,D,3,3,"span",7),t.YNc(12,R,3,3,"span",7),t.qZA()()()),2&e){let a;t.Q6J("formGroup",n.sendCodeForm),t.xp6(2),t.Q6J("placeholder",t.lcZ(3,8,"seller.auth.Email")),t.xp6(2),t.Q6J("ngIf",n.submitted&&(null==(a=n.sendCodeForm.get("password"))?null:a.hasError("required"))),t.xp6(2),t.Q6J("routerLink",t.DdM(12,F)),t.xp6(1),t.hij("",t.lcZ(8,10,"seller.auth.Login")," ?"),t.xp6(3),t.Q6J("disabled",n.loadingIndicator),t.xp6(1),t.Q6J("ngIf",!n.loadingIndicator),t.xp6(1),t.Q6J("ngIf",n.loadingIndicator)}},dependencies:[p.ez,p.O5,v.aw,v.X$,c.UX,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,y.lN,k,h.Bz,h.rH],styles:[".my-btn[_ngcontent-%COMP%]{font-size:14px;font-weight:400;padding:5px 10px}.my-btn[_ngcontent-%COMP%]:lang(ar){flex-direction:row-reverse}.my-btn-dark-blue[_ngcontent-%COMP%]{background-color:#0f183d;color:#fff}.my-btn-grey[_ngcontent-%COMP%]{background-color:#f2f2f2;color:#0e1740}.view-list[_ngcontent-%COMP%]{border-radius:40px}.bg-sales-report[_ngcontent-%COMP%]{background-color:#e5f6f4}.submit-btn[_ngcontent-%COMP%]{background-color:transparent;border:solid 1px #e85c72;color:#e85c72;width:100%;padding:10px;font-size:14px;font-weight:600;transition:all .2s ease-in-out;border-radius:3px;letter-spacing:1px}.submit-btn[_ngcontent-%COMP%]:hover{color:#fff;background-color:#e85c72}.phone-num[_ngcontent-%COMP%]{background-color:#f5f5f5;border:none;height:48px}  .mat-mdc-form-field-infix{width:95px!important;min-height:48px!important}  .mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mat-mdc-form-field-infix{padding-top:10px;padding-bottom:10px}  .mat-mdc-form-field-subscript-wrapper{display:none}"]}),i})()}}]);