!function(){function e(t,n){return(e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(t,n)}function t(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,a=o(e);if(t){var r=o(this).constructor;i=Reflect.construct(a,arguments,r)}else i=a.apply(this,arguments);return n(this,i)}}function n(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?i(e):t}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1q0e":function(e,t,n){},"8yIH":function(e,t){},EBXN:function(e,t,n){"use strict";n("eme+");var i=n("jc9v");n.d(t,"NgxMatFileInputModule",(function(){return i.a}));var o=n("8yIH");n.o(o,"MaxSizeValidator")&&n.d(t,"MaxSizeValidator",(function(){return o.MaxSizeValidator})),n("1q0e");var a=n("tcmV");n.d(t,"MaxSizeValidator",(function(){return a.a}))},YVpx:function(e,t,n){"use strict";var i=n("EBXN");n.o(i,"MaxSizeValidator")&&n.d(t,"MaxSizeValidator",(function(){return i.MaxSizeValidator})),n.o(i,"NgxMatFileInputModule")&&n.d(t,"NgxMatFileInputModule",(function(){return i.NgxMatFileInputModule}))},a9zD:function(e,t,n){"use strict";n.r(t),n.d(t,"DemoFileInputModule",(function(){return j}));var i=n("ofXK"),o=n("3Pt+"),r=n("bTqV"),c=n("Wp6s"),u=n("bSwM"),b=n("iadO"),f=n("NFeN"),s=n("qFsG"),p=n("QibW"),d=n("d3UM"),m=n("tyNb"),g=n("PiuI"),h=n("YVpx"),v=n("fXoL"),P=n("wZkO"),y=n("DScz"),x=n("kmnG"),Q=n("eme+"),_=n("FKr1");function C(e,t){if(1&e&&(v.Qb(0,"li"),v.vc(1),v.Pb()),2&e){var n=t.$implicit;v.Ab(1),v.wc(null==n?null:n.name)}}function M(e,t){if(1&e&&(v.Qb(0,"mat-radio-button",26),v.vc(1),v.Pb()),2&e){var n=t.$implicit;v.gc("value",n.value),v.Ab(1),v.xc(" ",n.label,"")}}function w(e,t){if(1&e&&(v.Qb(0,"mat-radio-button",26),v.vc(1),v.Pb()),2&e){var n=t.$implicit;v.gc("value",n.value),v.Ab(1),v.xc(" ",n.label,"")}}function O(e,t){if(1&e&&(v.Qb(0,"mat-option",27),v.vc(1),v.Pb()),2&e){var n=t.$implicit;v.gc("value",n),v.Ab(1),v.xc(" ",n," ")}}function k(e,t){if(1&e&&(v.Qb(0,"mat-option",27),v.vc(1),v.Pb()),2&e){var n=t.$implicit;v.gc("value",n),v.Ab(1),v.xc(" ",n," ")}}new File([],"file 1"),new File([],"file 2"),new File([],"file 1");var F,A,I=((F=function(){function e(){a(this,e),this.color="primary",this.disabled=!1,this.multiple=!1,this.options=[{value:!0,label:"True"},{value:!1,label:"False"}],this.listColors=["primary","accent","warn"],this.listAccepts=[null,".png","image/*",".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"],this.code3='<mat-form-field>\n  <ngx-mat-file-input [formControl]="fileControl" [multiple]="multiple" [accept]="accept" [color]="color">\n    \x3c!-- <mat-icon ngxMatFileInputIcon>folder</mat-icon> --\x3e\n  </ngx-mat-file-input>\n</mat-form-field>',this.code4='<mat-form-field>\n  <ngx-mat-file-input [formControl]="file2Control" [multiple]="multiple" [accept]="accept" [color]="color">\n    <mat-icon ngxMatFileInputIcon>folder</mat-icon>\n  </ngx-mat-file-input>\n</mat-form-field>',this.code5='<mat-form-field appearance="outline">\n  <ngx-mat-file-input [formControl]="file3Control">\n  </ngx-mat-file-input>\n  <mat-hint>Hint</mat-hint>\n</mat-form-field>',this.code1="npm install --save @angular-material-components/file-input",this.code2="import { NgxMatFileInputModule } from '@angular-material-components/file-input';\n  \n  @NgModule({\n     ...\n     imports: [\n          ...\n          NgxMatFileInputModule\n     ]\n     ...\n  })\n  export class AppModule { }",this.code6='<link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block" rel="stylesheet">',this.maxSize=16,this.nbFiles=0,this.fileControl=new o.e(this.files,[o.u.required,Object(h.MaxSizeValidator)(1024*this.maxSize)]),this.file2Control=new o.e(this.files),this.file3Control=new o.e(this.files)}return l(e,[{key:"ngOnInit",value:function(){var e=this;this.fileControl.valueChanges.subscribe((function(t){e.files=Array.isArray(t)?t:[t]})),this.file3Control.valueChanges.subscribe((function(t){var n;n=Array.isArray(t)?t:[t],e.nbFiles=n.length}))}},{key:"onDisabledChanged",value:function(e){e?this.fileControl.disable():this.fileControl.enable()}}]),e}()).\u0275fac=function(e){return new(e||F)},F.\u0275cmp=v.Fb({type:F,selectors:[["app-demo-fileinput"]],decls:148,vars:26,consts:[["label","API"],["href","https://www.npmjs.com/package/@angular-material-components/file-input","target","_blank"],["src","https://badge.fury.io/js/%40angular-material-components%2Ffile-input.svg"],["ngxMatHighlight","",1,"language-typescript"],[1,"api-table-properties"],["href","https://material.angular.io/guide/theming#using-a-pre-built-theme"],["ngxMatHighlight","",1,"language-css"],["label","Example"],[1,"zone","zone-picker"],[3,"formControl","multiple","accept","color"],[1,"zone","zone-value","flex-column"],[1,"title"],[1,"value"],[4,"ngFor","ngForOf"],[1,"zone","zone-errors","flex-column"],[1,"zone","zone-config"],[1,"config-wrapper"],[1,"label"],["aria-label","Select an option",3,"ngModel","ngModelChange"],["class","example-radio-button",3,"value",4,"ngFor","ngForOf"],[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["ngxMatHighlight","",1,"language-html"],[3,"formControl"],["ngxMatFileInputIcon",""],["appearance","outline"],[1,"example-radio-button",3,"value"],[3,"value"]],template:function(e,t){1&e&&(v.Qb(0,"mat-tab-group"),v.Qb(1,"mat-tab",0),v.Qb(2,"h1"),v.vc(3,"API reference for @angular-material-components/file-input"),v.Pb(),v.Qb(4,"h2"),v.vc(5,"Getting started"),v.Pb(),v.Qb(6,"a",1),v.Mb(7,"img",2),v.Pb(),v.Qb(8,"pre"),v.Qb(9,"code"),v.vc(10),v.Pb(),v.Pb(),v.Qb(11,"h2"),v.vc(12,"Setup"),v.Pb(),v.Qb(13,"pre"),v.Qb(14,"code",3),v.vc(15),v.Pb(),v.Pb(),v.Qb(16,"h2"),v.vc(17,"Properties @Input"),v.Pb(),v.Qb(18,"table",4),v.Qb(19,"tbody"),v.Qb(20,"tr"),v.Qb(21,"th"),v.vc(22,"Name"),v.Pb(),v.Qb(23,"th"),v.vc(24,"Type"),v.Pb(),v.Qb(25,"th"),v.vc(26,"Default value"),v.Pb(),v.Qb(27,"th"),v.vc(28,"Description"),v.Pb(),v.Pb(),v.Qb(29,"tr"),v.Qb(30,"td"),v.Qb(31,"div"),v.vc(32,"disabled"),v.Pb(),v.Pb(),v.Qb(33,"td"),v.vc(34,"boolean"),v.Pb(),v.Qb(35,"td"),v.vc(36,"null"),v.Pb(),v.Qb(37,"td"),v.Qb(38,"p"),v.vc(39,"If true, the file input is readonly."),v.Pb(),v.Pb(),v.Pb(),v.Qb(40,"tr"),v.Qb(41,"td"),v.Qb(42,"div"),v.vc(43,"multiple"),v.Pb(),v.Pb(),v.Qb(44,"td"),v.vc(45,"boolean"),v.Pb(),v.Qb(46,"td"),v.vc(47,"false"),v.Pb(),v.Qb(48,"td"),v.Qb(49,"p"),v.vc(50,"If true, the file input allows the user to select more than one file. "),v.Pb(),v.Pb(),v.Pb(),v.Qb(51,"tr"),v.Qb(52,"td"),v.Qb(53,"div"),v.vc(54,"accept"),v.Pb(),v.Pb(),v.Qb(55,"td"),v.vc(56,"string"),v.Pb(),v.Qb(57,"td"),v.vc(58,"null"),v.Pb(),v.Qb(59,"td"),v.Qb(60,"p"),v.vc(61,'Limiting accepted file types (For example: accept="image/png, image/jpeg" or accept=".png, .jpg, .jpeg" \u2014 Accept PNG or JPEG files.) '),v.Pb(),v.Pb(),v.Pb(),v.Qb(62,"tr"),v.Qb(63,"td"),v.Qb(64,"div"),v.vc(65,"color"),v.Pb(),v.Pb(),v.Qb(66,"td"),v.vc(67,"ThemePalette"),v.Pb(),v.Qb(68,"td"),v.vc(69,"null"),v.Pb(),v.Qb(70,"td"),v.Qb(71,"p"),v.vc(72,"Theme color palette for the component. "),v.Pb(),v.Pb(),v.Pb(),v.Pb(),v.Pb(),v.Qb(73,"h2"),v.vc(74,"Theming"),v.Pb(),v.Qb(75,"p"),v.vc(76,"@see @angular/material "),v.Qb(77,"a",5),v.vc(78,"Using a pre-built theme"),v.Pb(),v.Pb(),v.Qb(79,"p"),v.vc(80,"Add the Material Design icon font to your index.html"),v.Pb(),v.Qb(81,"pre"),v.Qb(82,"code",6),v.vc(83),v.Pb(),v.Pb(),v.Pb(),v.Qb(84,"mat-tab",7),v.Qb(85,"mat-card",8),v.Qb(86,"mat-form-field"),v.Mb(87,"ngx-mat-file-input",9),v.Pb(),v.Pb(),v.Qb(88,"mat-card",10),v.Qb(89,"div",11),v.vc(90,"Selected file(s):"),v.Pb(),v.Qb(91,"div",12),v.Qb(92,"ul"),v.uc(93,C,2,1,"li",13),v.Pb(),v.Pb(),v.Pb(),v.Qb(94,"mat-card",14),v.Qb(95,"div",11),v.vc(96),v.Pb(),v.Qb(97,"div",12),v.vc(98),v.cc(99,"json"),v.Pb(),v.Pb(),v.Qb(100,"mat-card",15),v.Qb(101,"div",16),v.Qb(102,"span",17),v.vc(103,"disabled (Default: false) "),v.Pb(),v.Qb(104,"mat-radio-group",18),v.Xb("ngModelChange",(function(e){return t.onDisabledChanged(e)})),v.uc(105,M,2,2,"mat-radio-button",19),v.Pb(),v.Pb(),v.Qb(106,"div",16),v.Qb(107,"span",17),v.vc(108,"multiple (Default: false) "),v.Pb(),v.Qb(109,"mat-radio-group",18),v.Xb("ngModelChange",(function(e){return t.multiple=e})),v.uc(110,w,2,2,"mat-radio-button",19),v.Pb(),v.Pb(),v.Qb(111,"div",16),v.Qb(112,"span",17),v.vc(113,"accept (Default: null) "),v.Pb(),v.Qb(114,"mat-form-field"),v.Qb(115,"mat-label"),v.vc(116,"Select accept"),v.Pb(),v.Qb(117,"mat-select",20),v.Xb("ngModelChange",(function(e){return t.accept=e})),v.uc(118,O,2,2,"mat-option",21),v.Pb(),v.Pb(),v.Pb(),v.Qb(119,"div",16),v.Qb(120,"span",17),v.vc(121,"color (Default: primary) "),v.Pb(),v.Qb(122,"mat-form-field"),v.Qb(123,"mat-label"),v.vc(124,"Select color"),v.Pb(),v.Qb(125,"mat-select",20),v.Xb("ngModelChange",(function(e){return t.color=e})),v.uc(126,k,2,2,"mat-option",21),v.Pb(),v.Pb(),v.Pb(),v.Pb(),v.Qb(127,"pre"),v.Qb(128,"code",22),v.vc(129),v.Pb(),v.Pb(),v.Qb(130,"h4"),v.vc(131,"You can provide a custom icon by using the directive ngxMatFileInputIcon"),v.Pb(),v.Qb(132,"pre"),v.Qb(133,"code",22),v.vc(134),v.Pb(),v.Pb(),v.Qb(135,"mat-form-field"),v.Qb(136,"ngx-mat-file-input",23),v.Qb(137,"mat-icon",24),v.vc(138,"folder"),v.Pb(),v.Pb(),v.Pb(),v.Qb(139,"h4"),v.vc(140,"You can use with all properties of MatFormField such as appearance variants, hint..."),v.Pb(),v.Qb(141,"pre"),v.Qb(142,"code",22),v.vc(143),v.Pb(),v.Pb(),v.Qb(144,"mat-form-field",25),v.Mb(145,"ngx-mat-file-input",23),v.Qb(146,"mat-hint"),v.vc(147),v.Pb(),v.Pb(),v.Pb(),v.Pb()),2&e&&(v.Ab(10),v.wc(t.code1),v.Ab(5),v.wc(t.code2),v.Ab(68),v.wc(t.code6),v.Ab(4),v.gc("formControl",t.fileControl)("multiple",t.multiple)("accept",t.accept)("color",t.color),v.Ab(6),v.gc("ngForOf",t.files),v.Ab(3),v.xc("Errors (Max size: ",t.maxSize,"Ko)"),v.Ab(2),v.wc(v.dc(99,24,t.fileControl.errors)),v.Ab(6),v.gc("ngModel",t.disabled),v.Ab(1),v.gc("ngForOf",t.options),v.Ab(4),v.gc("ngModel",t.multiple),v.Ab(1),v.gc("ngForOf",t.options),v.Ab(7),v.gc("ngModel",t.accept),v.Ab(1),v.gc("ngForOf",t.listAccepts),v.Ab(7),v.gc("ngModel",t.color),v.Ab(1),v.gc("ngForOf",t.listColors),v.Ab(3),v.wc(t.code3),v.Ab(5),v.wc(t.code4),v.Ab(2),v.gc("formControl",t.file2Control),v.Ab(7),v.wc(t.code5),v.Ab(2),v.gc("formControl",t.file3Control),v.Ab(2),v.xc("",t.nbFiles," selected file(s)"))},directives:[P.b,P.a,y.a,c.a,x.b,Q.a,o.o,o.f,i.j,p.b,o.r,x.f,d.a,f.a,Q.b,x.e,p.a,_.l],pipes:[i.e],styles:[".config-wrapper[_ngcontent-%COMP%]{margin-bottom:15px}.config-wrapper[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700;margin-right:15px}.config-wrapper[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.config-wrapper_step[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:100px}.zone[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.zone-value[_ngcontent-%COMP%]{font-weight:700}.zone-config[_ngcontent-%COMP%]{flex-direction:column}pre[_ngcontent-%COMP%]{background:rgba(0,0,0,.01);border:.5px solid rgba(0,0,0,.03);border-radius:5px;display:block;overflow-x:auto;padding:20px;white-space:pre-wrap;font-family:Roboto Mono,monospace}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:transparent;padding:0;font-size:100%}.api-table-properties[_ngcontent-%COMP%]{text-align:left;border-radius:2px;border-spacing:0;margin:0 0 32px;width:100%;box-shadow:0 2px 2px rgba(0,0,0,.24),0 0 2px rgba(0,0,0,.12);border-collapse:collapse;border-spacing:2px;border-color:grey}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{display:table-row-group;vertical-align:middle}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.03);padding:8px 16px}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{font-weight:700}.flex-column[_ngcontent-%COMP%]{flex-direction:column}.flex-column[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:10px}.flex-column[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{display:block}"]}),F),z=n("M0ag"),S=[{path:"",component:I}],j=((A=function e(){a(this,e)}).\u0275mod=v.Jb({type:A}),A.\u0275inj=v.Ib({factory:function(e){return new(e||A)},imports:[[i.b,m.c.forChild(S),b.e,s.c,o.j,o.t,r.c,g.b,p.c,d.b,u.b,f.b,c.b,h.NgxMatFileInputModule,z.a]]}),A)},"eme+":function(n,o,r){"use strict";r.d(o,"b",(function(){return M})),r.d(o,"a",(function(){return w}));var c=r("8LU1"),u=r("fXoL"),b=r("FKr1"),f=r("kmnG"),s=r("XNiG"),p=r("nLfN"),d=r("3Pt+"),m=r("bTqV"),g=r("ofXK"),h=r("NFeN"),v=["inputFile"],P=["inputValue"];function y(e,t){1&e&&(u.Qb(0,"mat-icon",7),u.vc(1,"attach_file"),u.Pb())}var x=[[["","ngxMatFileInputIcon",""]]],Q=["[ngxMatFileInputIcon]"],_=0,C=Object(b.x)(function(){return function e(t,n,i,o){a(this,e),this._defaultErrorStateMatcher=t,this._parentForm=n,this._parentFormGroup=i,this.ngControl=o}}()),M=function(){var e=function e(){a(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=u.Gb({type:e,selectors:[["","ngxMatFileInputIcon",""]]}),e}(),w=function(){var n=function(n){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}(r,n);var o=t(r);function r(e,t,n,l,c,u,b){var f;return a(this,r),(f=o.call(this,b,c,u,l))._elementRef=e,f._platform=t,f._cd=n,f.ngControl=l,f.color="primary",f.fileNames=null,f._uid="ngx-mat-fileinput-"+_++,f.stateChanges=new s.a,f.focused=!1,f.controlType="ngx-mat-file-input",f.autofilled=!1,f._onTouched=function(){},f._onChange=function(){},f._disabled=!1,f._multiple=!1,f.placeholder="Choose a file",f.separator=",",f._required=!1,f._readonly=!0,f.id=f.id,f.ngControl&&(f.ngControl.valueAccessor=i(f)),f}return l(r,[{key:"ngOnChanges",value:function(){this.stateChanges.next()}},{key:"ngOnDestroy",value:function(){this.stateChanges.complete()}},{key:"ngDoCheck",value:function(){this.ngControl&&this.updateErrorState()}},{key:"writeValue",value:function(e){this._updateInputValue(e)}},{key:"registerOnChange",value:function(e){this._onChange=e}},{key:"registerOnTouched",value:function(e){this._onTouched=e}},{key:"setDisabledState",value:function(e){this.disabled=e,this.stateChanges.next()}},{key:"focus",value:function(e){this._inputValueRef.nativeElement.focus(e)}},{key:"_focusChanged",value:function(e){e===this.focused||this.readonly&&e||(this.focused=e,this.stateChanges.next())}},{key:"_markAsTouched",value:function(){this._onTouched(),this._cd.markForCheck(),this.stateChanges.next()}},{key:"_isBadInput",value:function(){var e=this._inputValueRef.nativeElement.validity;return e&&e.badInput}},{key:"setDescribedByIds",value:function(e){this._ariaDescribedby=e.join(" ")}},{key:"openFilePicker",value:function(e){this._inputFileRef.nativeElement.click(),e&&(e.preventDefault(),e.stopPropagation()),this._markAsTouched()}},{key:"handleFiles",value:function(e){if(e.length>0){for(var t=new Array,n=0;n<e.length;n++)t.push(e.item(n));this._updateInputValue(t),this._resetInputFile(),this._onChange(this.multiple?t:t[0])}}},{key:"onContainerClick",value:function(e){}},{key:"_resetInputFile",value:function(){this._inputFileRef.nativeElement.value=""}},{key:"_updateInputValue",value:function(e){var t=null;e&&(t=Array.isArray(e)?this._multiple?e.map((function(e){return e.name})).join(this.separator):e[0].name:null!=e.name?e.name:null),this._inputValueRef.nativeElement.value=t}},{key:"disabled",get:function(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled},set:function(e){this._disabled=Object(c.b)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}},{key:"id",get:function(){return this._id},set:function(e){this._id=e||this._uid}},{key:"multiple",get:function(){return this._multiple},set:function(e){this._multiple=Object(c.b)(e)}},{key:"required",get:function(){return this._required},set:function(e){this._required=Object(c.b)(e)}},{key:"value",get:function(){return this._value},set:function(e){this._value=e}},{key:"readonly",get:function(){return this._readonly},set:function(e){this._readonly=Object(c.b)(e)}},{key:"accept",get:function(){return this._accept},set:function(e){this._accept=e}},{key:"empty",get:function(){return!this._inputValueRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}},{key:"shouldLabelFloat",get:function(){return this.focused||!this.empty}}]),r}(C);return n.\u0275fac=function(e){return new(e||n)(u.Lb(u.l),u.Lb(p.a),u.Lb(u.h),u.Lb(d.n,10),u.Lb(d.q,8),u.Lb(d.i,8),u.Lb(b.b))},n.\u0275cmp=u.Fb({type:n,selectors:[["ngx-mat-file-input"]],contentQueries:function(e,t,n){var i;1&e&&u.Eb(n,M,!0),2&e&&u.kc(i=u.Yb())&&(t._customIcon=i.first)},viewQuery:function(e,t){var n;1&e&&(u.qc(v,!0),u.qc(P,!0)),2&e&&(u.kc(n=u.Yb())&&(t._inputFileRef=n.first),u.kc(n=u.Yb())&&(t._inputValueRef=n.first))},hostAttrs:[1,"ngx-mat-file-input"],inputs:{color:"color",disabled:"disabled",id:"id",multiple:"multiple",placeholder:"placeholder",separator:"separator",required:"required",errorStateMatcher:"errorStateMatcher",value:"value",readonly:"readonly",accept:"accept"},exportAs:["ngx-mat-file-input"],features:[u.zb([{provide:f.c,useExisting:Object(u.U)((function(){return n}))}]),u.xb,u.yb],ngContentSelectors:Q,decls:8,vars:13,consts:[["autocomplete","off",1,"mat-input-element","mat-form-field-autofill-control",3,"disabled","required"],["inputValue",""],[1,"mat-form-field-suffix"],["matSuffix","","mat-icon-button","","type","button",1,"button-browse",3,"color","disabled","click"],["class","ngx-mat-file-input--default-icon",4,"ngIf"],["type","file",1,"input-file",3,"multiple","accept","change"],["inputFile",""],[1,"ngx-mat-file-input--default-icon"]],template:function(e,t){1&e&&(u.fc(x),u.Mb(0,"input",0,1),u.Qb(2,"div",2),u.Qb(3,"button",3),u.Xb("click",(function(e){return t.openFilePicker(e)})),u.uc(4,y,2,0,"mat-icon",4),u.ec(5),u.Pb(),u.Pb(),u.Qb(6,"input",5,6),u.Xb("change",(function(e){return t.handleFiles(e.target.files)})),u.Pb()),2&e&&(u.gc("disabled",t.disabled)("required",t.required),u.Bb("id",t.id)("placeholder",t.placeholder)("readonly",t.readonly||null)("aria-describedby",t._ariaDescribedby||null)("aria-invalid",t.errorState)("aria-required",t.required.toString()),u.Ab(3),u.gc("color",t.color)("disabled",t.disabled),u.Ab(1),u.gc("ngIf",!t._customIcon),u.Ab(2),u.gc("multiple",t.multiple)("accept",t.accept))},directives:[m.b,f.h,g.k,h.a],styles:[".mat-form-field-appearance-legacy .mat-form-field-prefix .ngx-mat-file-input--default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .ngx-mat-file-input--default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .ngx-mat-file-input--default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .ngx-mat-file-input--default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .ngx-mat-file-input--default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .ngx-mat-file-input--default-icon{margin:auto}.ngx-mat-file-input{display:flex;line-height:18px;height:18px;align-items:center}.ngx-mat-file-input .input-file{display:block;visibility:hidden;width:0;height:0}"],encapsulation:2}),n}()},jc9v:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n("ofXK"),o=n("bTqV"),r=n("kmnG"),l=n("NFeN"),c=n("qFsG"),u=n("fXoL"),b=function(){var e=function e(){a(this,e)};return e.\u0275mod=u.Jb({type:e}),e.\u0275inj=u.Ib({factory:function(t){return new(t||e)},imports:[[i.b,o.c,l.b,r.d,c.c]]}),e}()},tcmV:function(e,t,n){"use strict";function i(e){return function(t){if(e=Number(e),isNaN(e))throw"MaxSizeValidator: max of size of file is invalid";if(!t.value)return null;var n=t.value;return Array.isArray(t.value)||(n=[t.value]),n.length&&n.map((function(e){return e.size})).reduce((function(e,t){return e+t}))>e?{maxSize:!0}:null}}n.d(t,"a",(function(){return i}))}}])}();