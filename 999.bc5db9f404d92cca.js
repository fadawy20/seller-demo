"use strict";(self.webpackChunkseller=self.webpackChunkseller||[]).push([[999],{1999:(x,c,i)=>{i.r(c),i.d(c,{LoginComponent:()=>v});var g=i(6895),o=i(4006),s=i(1310),d=i(8746),_=i(9151),n=i(4650),m=i(793);function f(t,a){1&t&&(n.TgZ(0,"small",16),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&t&&(n.xp6(1),n.hij(" ",n.lcZ(2,1,"seller.auth.Email_Address_is_Required")," "))}function h(t,a){1&t&&(n.TgZ(0,"small",16),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&t&&(n.xp6(1),n.hij(" ",n.lcZ(2,1,"seller.auth.Email_Address_is_Invalid")," "))}function C(t,a){1&t&&(n.TgZ(0,"small",16),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&t&&(n.xp6(1),n.hij(" ",n.lcZ(2,1,"seller.auth.Password_is_Required")," "))}function O(t,a){1&t&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&t&&(n.xp6(1),n.hij(" ",n.lcZ(2,1,"seller.auth.Submit")," "))}function P(t,a){1&t&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&t&&(n.xp6(1),n.hij(" ",n.lcZ(2,1,"seller.auth.Waiting"),"... "))}const M=function(){return["/forgetPassword"]};let v=(()=>{class t{constructor(r,e,l){this._Router=r,this._AuthServiceService=e,this._FormBuilder=l,this.loadingIndicator=!1,this.isShow=!1,this.inintForm()}ngOnInit(){}inintForm(){this.loginForm=this._FormBuilder.group({email:["",[o.kI.required,o.kI.email]],password:["",o.kI.required]})}login(){this.loadingIndicator=!0,this.submitted=!0,this.loginForm.invalid?this.loadingIndicator=!1:this._AuthServiceService.login(this.loginForm.value).pipe((0,d.x)(()=>{this.loadingIndicator=!1})).subscribe(r=>{this._AuthServiceService.saveUserData("user",r.data),this._AuthServiceService.setToken(r?.token),this._AuthServiceService.setCountryId(JSON.stringify(r?.country)),this._Router.navigateByUrl("/dashboard")})}}return t.\u0275fac=function(r){return new(r||t)(n.Y36(s.F0),n.Y36(m.e),n.Y36(o.qu))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],standalone:!0,features:[n.jDz],decls:30,vars:26,consts:[["id","loginForm",1,"form",3,"formGroup"],[1,"container"],[1,"title"],[1,"fa-solid","fa-arrow-right-to-bracket","icon"],[1,"form-group"],["type","text","formControlName","email",1,"form-control",3,"placeholder","keyup.enter"],["class","text-danger",4,"ngIf"],[1,"form-group","my-3"],[1,"position-relative","password"],["formControlName","password",1,"form-control",3,"type","placeholder","keyup.enter"],[1,"password-icon","position-absolute",3,"click"],["title","Enter your password",3,"src"],[1,"forget_pasword","mb-3"],["routerLinkActive","router-link-active",1,"text-decoration-underline",3,"routerLink"],["type","button",1,"submit-btn",3,"disabled","click"],[4,"ngIf"],[1,"text-danger"]],template:function(r,e){if(1&r&&(n.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"h4"),n._uU(4),n.ALo(5,"translate"),n.qZA(),n.TgZ(6,"h2"),n._UZ(7,"i",3),n._uU(8),n.ALo(9,"translate"),n.qZA()(),n.TgZ(10,"div",4)(11,"input",5),n.NdJ("keyup.enter",function(){return e.login()}),n.ALo(12,"translate"),n.qZA(),n.YNc(13,f,3,3,"small",6),n.YNc(14,h,3,3,"small",6),n.qZA(),n.TgZ(15,"div",7)(16,"div",8)(17,"input",9),n.NdJ("keyup.enter",function(){return e.login()}),n.ALo(18,"translate"),n.qZA(),n.TgZ(19,"div",10),n.NdJ("click",function(){return e.isShow=!e.isShow}),n._UZ(20,"img",11),n.qZA()(),n.YNc(21,C,3,3,"small",6),n.qZA(),n.TgZ(22,"div",12)(23,"a",13),n._uU(24),n.ALo(25,"translate"),n.qZA()(),n.TgZ(26,"div")(27,"button",14),n.NdJ("click",function(){return e.login()}),n.YNc(28,O,3,3,"span",15),n.YNc(29,P,3,3,"span",15),n.qZA()()()()),2&r){let l,u,p;n.Q6J("formGroup",e.loginForm),n.xp6(4),n.Oqu(n.lcZ(5,15,"seller.auth.Welcom_Back")),n.xp6(4),n.hij(" ",n.lcZ(9,17,"seller.auth.Login_to_Your_Account")," "),n.xp6(3),n.Q6J("placeholder",n.lcZ(12,19,"seller.auth.Email")),n.xp6(2),n.Q6J("ngIf",e.submitted&&(null==(l=e.loginForm.get("email"))?null:l.hasError("required"))),n.xp6(1),n.Q6J("ngIf",e.submitted&&(null==(u=e.loginForm.get("email"))?null:u.hasError("email"))),n.xp6(3),n.Q6J("type",e.isShow?"text":"password")("placeholder",n.lcZ(18,21,"seller.auth.Passowrd")),n.xp6(3),n.Q6J("src",e.isShow?"../../../../../assets/images/eye.svg":"../../../../../assets/images/eye-off.svg",n.LSH),n.xp6(1),n.Q6J("ngIf",e.submitted&&(null==(p=e.loginForm.get("password"))?null:p.hasError("required"))),n.xp6(2),n.Q6J("routerLink",n.DdM(25,M)),n.xp6(1),n.hij("",n.lcZ(25,23,"seller.auth.Forget_Password")," ?"),n.xp6(3),n.Q6J("disabled",e.loadingIndicator),n.xp6(1),n.Q6J("ngIf",!e.loadingIndicator),n.xp6(1),n.Q6J("ngIf",e.loadingIndicator)}},dependencies:[g.ez,g.O5,o.UX,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,_.aw,_.X$,s.Bz,s.rH,s.Od],styles:[".my-btn[_ngcontent-%COMP%]{font-size:14px;font-weight:400;padding:5px 10px}.my-btn[_ngcontent-%COMP%]:lang(ar){flex-direction:row-reverse}.my-btn-dark-blue[_ngcontent-%COMP%]{background-color:#0f183d;color:#fff}.my-btn-grey[_ngcontent-%COMP%]{background-color:#f2f2f2;color:#0e1740}.view-list[_ngcontent-%COMP%]{border-radius:40px}.bg-sales-report[_ngcontent-%COMP%]{background-color:#e5f6f4}.submit-btn[_ngcontent-%COMP%]{background-color:transparent;border:solid 1px #e85c72;color:#e85c72;width:100%;padding:10px;font-size:14px;font-weight:600;transition:all .2s ease-in-out;border-radius:3px;letter-spacing:1px}.submit-btn[_ngcontent-%COMP%]:hover{color:#fff;background-color:#e85c72}.form[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40%}.form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column}.form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#627084;font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{color:#e85c72!important}.form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#7d7f81;font:400 15px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.form[_ngcontent-%COMP%]   .forget_pasword[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#627084}.submitBTN[_ngcontent-%COMP%]{background-color:transparent;border:solid 1px #e85c72;color:#e85c72;width:100%;padding:10px;font-size:14px;font-weight:600;transition:all .2s ease-in-out;border-radius:3px;letter-spacing:1px}.submitBTN[_ngcontent-%COMP%]:hover{color:#fff;background-color:#e85c72}@media screen and (max-width: 750px){.form[_ngcontent-%COMP%]{width:100%!important}}.password[_ngcontent-%COMP%]   .password-icon[_ngcontent-%COMP%]{top:50%;right:8px;left:auto;transform:translateY(-50%);cursor:pointer;z-index:999}.password[_ngcontent-%COMP%]   .password-icon[_ngcontent-%COMP%]:lang(ar){right:auto;left:8px}"]}),t})()}}]);