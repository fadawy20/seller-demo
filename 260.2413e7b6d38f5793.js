"use strict";(self.webpackChunkseller=self.webpackChunkseller||[]).push([[260],{4260:(C,d,n)=>{n.r(d),n.d(d,{StorePasswordComponent:()=>w});var u=n(6895),p=n(9151),s=n(4006),c=n(727),e=n(4650),_=n(1310),m=n(793);function g(t,i){1&t&&(e.TgZ(0,"small",7),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"seller.auth.Password_is_Required")," "))}function h(t,i){1&t&&(e.TgZ(0,"small",7),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"seller.auth.Password_is_Required")," "))}function f(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"seller.auth.Submit")," "))}function P(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"seller.auth.Waiting"),"... "))}let w=(()=>{class t{constructor(o,r,a,l){this._Router=o,this._AuthServiceService=r,this._FormBuilder=a,this._ActivatedRoute=l,this.loadingIndicator=!1,this.subscription=new c.w0,this.inintForm(),this.getParams()}ngOnInit(){}inintForm(){this.storePasswordForm=this._FormBuilder.group({phone:["",s.kI.required],otp_code:["",s.kI.required],password:["",s.kI.required],password_confirmation:["",s.kI.required]})}submit(){this.storePasswordForm.get("phone")?.setValue(this.phoneNum),this.storePasswordForm.get("otp_code")?.setValue(this.otpCode),this.subscription.add(this._AuthServiceService.storePassword(this.storePasswordForm.value).subscribe(o=>{this._AuthServiceService.saveUserData("user",o.data),this._AuthServiceService.setToken(o?.token),this._AuthServiceService.setCountryId(JSON.stringify(o?.country)),this._Router.navigateByUrl("/dashboard")}))}getParams(){this._ActivatedRoute.queryParams.subscribe(o=>{this.phoneNum=o.phone_num,this.otpCode=o.otp_code})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(_.F0),e.Y36(m.e),e.Y36(s.qu),e.Y36(_.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-store-password"]],standalone:!0,features:[e.jDz],decls:13,vars:12,consts:[[3,"formGroup"],[1,"form-group","my-3"],["type","password","formControlName","password",1,"form-control",3,"placeholder","keyup.enter"],["class","text-danger",4,"ngIf"],["type","password","formControlName","password_confirmation",1,"form-control",3,"placeholder","keyup.enter"],["type","button",1,"submit-btn",3,"disabled","click"],[4,"ngIf"],[1,"text-danger"]],template:function(o,r){if(1&o&&(e.TgZ(0,"form",0)(1,"div",1)(2,"input",2),e.NdJ("keyup.enter",function(){return r.submit()}),e.ALo(3,"translate"),e.qZA(),e.YNc(4,g,3,3,"small",3),e.qZA(),e.TgZ(5,"div",1)(6,"input",4),e.NdJ("keyup.enter",function(){return r.submit()}),e.ALo(7,"translate"),e.qZA(),e.YNc(8,h,3,3,"small",3),e.qZA(),e.TgZ(9,"div")(10,"button",5),e.NdJ("click",function(){return r.submit()}),e.YNc(11,f,3,3,"span",6),e.YNc(12,P,3,3,"span",6),e.qZA()()()),2&o){let a,l;e.Q6J("formGroup",r.storePasswordForm),e.xp6(2),e.Q6J("placeholder",e.lcZ(3,8,"seller.auth.New_Passowrd")),e.xp6(2),e.Q6J("ngIf",r.submitted&&(null==(a=r.storePasswordForm.get("password"))?null:a.hasError("required"))),e.xp6(2),e.Q6J("placeholder",e.lcZ(7,10,"seller.auth.Confirm_New_Passowrd")),e.xp6(2),e.Q6J("ngIf",r.submitted&&(null==(l=r.storePasswordForm.get("password"))?null:l.hasError("required"))),e.xp6(2),e.Q6J("disabled",r.loadingIndicator),e.xp6(1),e.Q6J("ngIf",!r.loadingIndicator),e.xp6(1),e.Q6J("ngIf",r.loadingIndicator)}},dependencies:[u.ez,u.O5,p.aw,p.X$,s.UX,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u],styles:[".my-btn[_ngcontent-%COMP%]{font-size:14px;font-weight:400;padding:5px 10px}.my-btn[_ngcontent-%COMP%]:lang(ar){flex-direction:row-reverse}.my-btn-dark-blue[_ngcontent-%COMP%]{background-color:#0f183d;color:#fff}.my-btn-grey[_ngcontent-%COMP%]{background-color:#f2f2f2;color:#0e1740}.view-list[_ngcontent-%COMP%]{border-radius:40px}.bg-sales-report[_ngcontent-%COMP%]{background-color:#e5f6f4}.submit-btn[_ngcontent-%COMP%]{background-color:transparent;border:solid 1px #e85c72;color:#e85c72;width:100%;padding:10px;font-size:14px;font-weight:600;transition:all .2s ease-in-out;border-radius:3px;letter-spacing:1px}.submit-btn[_ngcontent-%COMP%]:hover{color:#fff;background-color:#e85c72}"]}),t})()}}]);