(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{ZvWB:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class o{}var t=u("pMnS"),d=u("s7LF"),r=u("l90o"),i=u("w9WL");class s{constructor(){this.rows=[],this.selected=[],this.temp=[],this.columns=[{name:"Marca"},{prop:"modelo"},{name:"total_ini"},{name:"total_fim"}],this.fetch(l=>{this.temp=[...l],this.rows=l})}fetch(l){const n=new XMLHttpRequest;n.open("GET","assets/data/impressoras.json"),n.onload=()=>{l(JSON.parse(n.response))},n.send()}updateFilter(l){const n=l.target.value,u=this.temp.filter((function(l){return-1!==l.nome.toLowerCase().indexOf(n)||!n}));this.rows=u}onSelect(l){console.log("Event: select: ",l,this.selected)}onActivate(l){console.log("Event: activate: ",l)}}var a=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function c(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"input",[["class","form-control mb-3"],["id","cliente"],["placeholder","Pesquisar nome do cliente..."],["required",""],["type","email"]],null,[[null,"keyup"]],(function(l,n,u){var e=!0;return"keyup"===n&&(e=!1!==l.component.updateFilter(u)&&e),e}),null,null)),(l()(),e["\u0275eld"](1,0,null,null,5,"ngx-datatable",[["class","ngx-datatable"]],[[2,"fixed-header",null],[2,"fixed-row",null],[2,"scroll-vertical",null],[2,"virtualized",null],[2,"scroll-horz",null],[2,"selectable",null],[2,"checkbox-selection",null],[2,"cell-selection",null],[2,"single-selection",null],[2,"multi-selection",null],[2,"multi-click-selection",null]],[["window","resize"]],(function(l,n,u){var o=!0;return"window:resize"===n&&(o=!1!==e["\u0275nov"](l,2).onWindowResize()&&o),o}),r.b,r.a)),e["\u0275did"](2,5750784,null,4,i.n,[[1,i.v],[1,i.o],e.ChangeDetectorRef,e.ElementRef,e.KeyValueDiffers,i.a,[2,"configuration"]],{rows:[0,"rows"],columns:[1,"columns"],rowHeight:[2,"rowHeight"],columnMode:[3,"columnMode"],headerHeight:[4,"headerHeight"],footerHeight:[5,"footerHeight"],limit:[6,"limit"]},null),e["\u0275qud"](603979776,1,{columnTemplates:1}),e["\u0275qud"](603979776,2,{rowDetail:0}),e["\u0275qud"](603979776,3,{groupHeader:0}),e["\u0275qud"](603979776,4,{footer:0})],(function(l,n){var u=n.component;l(n,2,0,u.rows,u.columns,"auto","force",40,50,10)}),(function(l,n){l(n,1,1,[e["\u0275nov"](n,2).isFixedHeader,e["\u0275nov"](n,2).isFixedRow,e["\u0275nov"](n,2).isVertScroll,e["\u0275nov"](n,2).isVirtualized,e["\u0275nov"](n,2).isHorScroll,e["\u0275nov"](n,2).isSelectable,e["\u0275nov"](n,2).isCheckboxSelection,e["\u0275nov"](n,2).isCellSelection,e["\u0275nov"](n,2).isSingleSelection,e["\u0275nov"](n,2).isMultiSelection,e["\u0275nov"](n,2).isMultiClickSelection])}))}function m(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-impressoras",[],null,null,null,c,a)),e["\u0275did"](1,49152,null,0,s,[],null,null)],null,null)}var p=e["\u0275ccf"]("app-impressoras",s,m,{},{},[]),g=u("SVse"),v=u("9AJC"),f=u("G0yt"),C=u("KwZS"),h=u("1ta/");class b{constructor(l){this.clienteService=l}ngOnInit(){this.clienteService.getClientes().then(l=>{this.clientes=l}).catch(l=>console.log(l)),this.cliente=new C.a(0,"","","","")}onSubmit(){this.cliente=new C.a(0,"","","","");let l=+this.idCliente;l&&this.clienteService.getCliente(l).then(l=>{this.cliente=l})}}var _=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function S(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),e["\u0275did"](1,147456,null,0,d.NgSelectOption,[e.ElementRef,e.Renderer2,[2,d.SelectControlValueAccessor]],{value:[0,"value"]},null),e["\u0275did"](2,147456,null,0,d["\u0275angular_packages_forms_forms_y"],[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](3,null,["",""]))],(function(l,n){l(n,1,0,e["\u0275inlineInterpolate"](1,"",n.context.$implicit.id,"")),l(n,2,0,e["\u0275inlineInterpolate"](1,"",n.context.$implicit.id,""))}),(function(l,n){l(n,3,0,n.context.$implicit.nome)}))}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,30,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,13,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,0,"div",[["class","form-group col-sm-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,3,"div",[["class","form-group col-md-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,1,"label",[["for","inputFranquia"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Qtd. Franquia"])),(l()(),e["\u0275eld"](7,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputFranquia"],["mdbInput",""],["placeholder",""],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,3,"div",[["class","form-group col-md-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,1,"label",[["for","inputQtdExcedente"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Qtd. Excedente"])),(l()(),e["\u0275eld"](11,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputQtdExcedente"],["mdbInput",""],["placeholder",""],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,3,"div",[["class","form-group col-md-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,1,"label",[["for","inputTotal"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Qtd. Total"])),(l()(),e["\u0275eld"](15,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputTotal"],["mdbInput",""],["placeholder",""],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,13,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,0,"div",[["class","form-group col-sm-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,3,"div",[["class","form-group col-md-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,1,"label",[["for","inputVlrFranquia"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Valor Franquia"])),(l()(),e["\u0275eld"](21,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputVlrFranquia"],["mdbInput",""],["placeholder",""],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,3,"div",[["class","form-group col-md-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,1,"label",[["for","inputVlrExcedente"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Valor Excedente"])),(l()(),e["\u0275eld"](25,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputVlrExcedente"],["mdbInput",""],["placeholder",""],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,3,"div",[["class","form-group col-md-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](27,0,null,null,1,"label",[["for","inputVlrTotal"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Valor Total"])),(l()(),e["\u0275eld"](29,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputVlrTotal"],["mdbInput",""],["placeholder",""],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](30,0,null,null,0,"br",[],null,null,null,null,null))],null,null)}function I(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-impressoras",[],null,null,null,c,a)),e["\u0275did"](1,49152,null,0,s,[],null,null)],null,null)}function N(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"p",[["class","text-uppercase mb-3 fw-600"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Relat\xf3rio Mensal"])),(l()(),e["\u0275eld"](4,0,null,null,49,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,48,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0,t=l.component;return"submit"===n&&(o=!1!==e["\u0275nov"](l,7).onSubmit(u)&&o),"reset"===n&&(o=!1!==e["\u0275nov"](l,7).onReset()&&o),"ngSubmit"===n&&(o=!1!==t.onSubmit()&&o),o}),null,null)),e["\u0275did"](6,16384,null,0,d["\u0275angular_packages_forms_forms_z"],[],null,null),e["\u0275did"](7,4210688,null,0,d.NgForm,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e["\u0275prd"](2048,null,d.ControlContainer,null,[d.NgForm]),e["\u0275did"](9,16384,null,0,d.NgControlStatusGroup,[[4,d.ControlContainer]],null,null),(l()(),e["\u0275eld"](10,0,null,null,10,"div",[["class","form-inline"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,0,"div",[["style","width: 1%;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,2,"div",[["class","form-group col-sm-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,1,"label",[["class","col-form-label"],["for"," exampleSelect1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Cliente"])),(l()(),e["\u0275eld"](15,0,null,null,2,"div",[["class","form-group col-sm-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,1,"label",[["class","col-form-label"],["for","example-date-input"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Data In\xedcio"])),(l()(),e["\u0275eld"](18,0,null,null,2,"div",[["class","form-group col-sm-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,1,"label",[["class","col-form-label"],["for","example-date-input"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Data Fim"])),(l()(),e["\u0275eld"](21,0,null,null,31,"div",[["class","form-inline"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,0,"div",[["style","width: 1%;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,12,"div",[["class","form-group col-sm-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,null,null,11,"select",[["class","form-control form-control-sm"],["name","idCliente"],["style","width: 100%;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(l,n,u){var o=!0,t=l.component;return"change"===n&&(o=!1!==e["\u0275nov"](l,25).onChange(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,25).onTouched()&&o),"ngModelChange"===n&&(o=!1!==(t.idCliente=u)&&o),o}),null,null)),e["\u0275did"](25,16384,null,0,d.SelectControlValueAccessor,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,d.NG_VALUE_ACCESSOR,(function(l){return[l]}),[d.SelectControlValueAccessor]),e["\u0275did"](27,671744,null,0,d.NgModel,[[2,d.ControlContainer],[8,null],[8,null],[6,d.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,d.NgControl,null,[d.NgModel]),e["\u0275did"](29,16384,null,0,d.NgControlStatus,[[4,d.NgControl]],null,null),(l()(),e["\u0275eld"](30,0,null,null,3,"option",[["value",""]],null,null,null,null,null)),e["\u0275did"](31,147456,null,0,d.NgSelectOption,[e.ElementRef,e.Renderer2,[2,d.SelectControlValueAccessor]],{value:[0,"value"]},null),e["\u0275did"](32,147456,null,0,d["\u0275angular_packages_forms_forms_y"],[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](-1,null,["Selecione"])),(l()(),e["\u0275and"](16777216,null,null,1,null,S)),e["\u0275did"](35,278528,null,0,g.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](36,0,null,null,6,"div",[["class","form-group col-sm-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](37,0,null,null,5,"input",[["class","form-control form-control-sm"],["id","dtIni"],["name","dtIni"],["style","width: 100%;"],["type","date"],["value",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0,t=l.component;return"input"===n&&(o=!1!==e["\u0275nov"](l,38)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,38).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,38)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,38)._compositionEnd(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(t.dtIni=u)&&o),o}),null,null)),e["\u0275did"](38,16384,null,0,d.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,d.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,d.NG_VALUE_ACCESSOR,(function(l){return[l]}),[d.DefaultValueAccessor]),e["\u0275did"](40,671744,null,0,d.NgModel,[[2,d.ControlContainer],[8,null],[8,null],[6,d.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,d.NgControl,null,[d.NgModel]),e["\u0275did"](42,16384,null,0,d.NgControlStatus,[[4,d.NgControl]],null,null),(l()(),e["\u0275eld"](43,0,null,null,6,"div",[["class","form-group col-sm-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](44,0,null,null,5,"input",[["class","form-control form-control-sm"],["id","dtFim"],["name","dtFim"],["style","width: 100%;"],["type","date"],["value",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0,t=l.component;return"input"===n&&(o=!1!==e["\u0275nov"](l,45)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,45).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,45)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,45)._compositionEnd(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(t.dtFim=u)&&o),o}),null,null)),e["\u0275did"](45,16384,null,0,d.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,d.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,d.NG_VALUE_ACCESSOR,(function(l){return[l]}),[d.DefaultValueAccessor]),e["\u0275did"](47,671744,null,0,d.NgModel,[[2,d.ControlContainer],[8,null],[8,null],[6,d.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,d.NgControl,null,[d.NgModel]),e["\u0275did"](49,16384,null,0,d.NgControlStatus,[[4,d.NgControl]],null,null),(l()(),e["\u0275eld"](50,0,null,null,2,"div",[["class","form-group col-sm-3 justify-content-left"]],null,null,null,null,null)),(l()(),e["\u0275eld"](51,0,null,null,1,"button",[["class","btn btn-primary"],["style","width: 30%;"],["type","submit"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Gerar"])),(l()(),e["\u0275eld"](53,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](54,0,null,null,1,"p",[["class","text-uppercase mb-3 fw-600"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Dados do Cliente"])),(l()(),e["\u0275eld"](56,0,null,null,43,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](57,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](58,0,null,null,40,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0;return"submit"===n&&(o=!1!==e["\u0275nov"](l,60).onSubmit(u)&&o),"reset"===n&&(o=!1!==e["\u0275nov"](l,60).onReset()&&o),o}),null,null)),e["\u0275did"](59,16384,null,0,d["\u0275angular_packages_forms_forms_z"],[],null,null),e["\u0275did"](60,4210688,null,0,d.NgForm,[[8,null],[8,null]],null,null),e["\u0275prd"](2048,null,d.ControlContainer,null,[d.NgForm]),e["\u0275did"](62,16384,null,0,d.NgControlStatusGroup,[[4,d.ControlContainer]],null,null),(l()(),e["\u0275eld"](63,0,null,null,9,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](64,0,null,null,0,"div",[["class","form-group col-sm-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](65,0,null,null,3,"div",[["class","form-group col-md-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](66,0,null,null,1,"label",[["for","inputCustCNPJ"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["CNPJ do Cliente"])),(l()(),e["\u0275eld"](68,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputCustCNPJ"],["mdbInput",""],["placeholder",""],["readonly",""],["type","text"]],[[8,"value",0]],null,null,null,null)),(l()(),e["\u0275eld"](69,0,null,null,3,"div",[["class","form-group col-md-7"]],null,null,null,null,null)),(l()(),e["\u0275eld"](70,0,null,null,1,"label",[["for","inputCustName"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Nome"])),(l()(),e["\u0275eld"](72,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputCustName"],["mdbInput",""],["placeholder",""],["readonly",""],["type","text"]],[[8,"value",0]],null,null,null,null)),(l()(),e["\u0275eld"](73,0,null,null,5,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](74,0,null,null,0,"div",[["class","form-group col-sm-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](75,0,null,null,3,"div",[["class","form-group col-md-10"]],null,null,null,null,null)),(l()(),e["\u0275eld"](76,0,null,null,1,"label",[["for","inputCustAddress"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Endere\xe7o"])),(l()(),e["\u0275eld"](78,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputCustAddress"],["mdbInput",""],["placeholder",""],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](79,0,null,null,9,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](80,0,null,null,0,"div",[["class","form-group col-sm-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](81,0,null,null,3,"div",[["class","form-group col-md-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](82,0,null,null,1,"label",[["for","inpuCustNeighborhood"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Bairro"])),(l()(),e["\u0275eld"](84,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inpuCustNeighborhood"],["mdbInput",""],["placeholder",""],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](85,0,null,null,3,"div",[["class","form-group col-md-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](86,0,null,null,1,"label",[["for","inputCustCity"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Cidade"])),(l()(),e["\u0275eld"](88,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputCustCity"],["mdbInput",""],["placeholder",""],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](89,0,null,null,9,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](90,0,null,null,0,"div",[["class","form-group col-sm-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](91,0,null,null,3,"div",[["class","form-group col-md-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](92,0,null,null,1,"label",[["for","inputResponsable"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Respons\xe1vel"])),(l()(),e["\u0275eld"](94,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputResponsable"],["mdbInput",""],["placeholder",""],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](95,0,null,null,3,"div",[["class","form-group col-md-5 "]],null,null,null,null,null)),(l()(),e["\u0275eld"](96,0,null,null,1,"label",[["for","inputCustEmail"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Email"])),(l()(),e["\u0275eld"](98,0,null,null,0,"input",[["class","form-control form-control-sm"],["id","inputCustEmail"],["mdbInput",""],["placeholder",""],["readonly",""],["type","text"]],[[8,"value",0]],null,null,null,null)),(l()(),e["\u0275eld"](99,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](100,0,null,null,16,"ngb-accordion",[["activeIds","ngb-panel-0"],["class","accordion"],["role","tablist"]],[[1,"aria-multiselectable",0]],null,null,v.m,v.c)),e["\u0275did"](101,2146304,[["acc",4]],1,f.b,[f.c],{activeIds:[0,"activeIds"],closeOtherPanels:[1,"closeOtherPanels"]},null),e["\u0275qud"](603979776,1,{panels:1}),(l()(),e["\u0275eld"](103,0,null,null,6,"ngb-panel",[["title","Quadro de Impress\xf5es - Resumo"]],null,null,null,null,null)),e["\u0275did"](104,2113536,[[1,4]],3,f.P,[],{title:[0,"title"]},null),e["\u0275qud"](603979776,2,{titleTpls:1}),e["\u0275qud"](603979776,3,{headerTpls:1}),e["\u0275qud"](603979776,4,{contentTpls:1}),(l()(),e["\u0275and"](0,null,null,1,null,y)),e["\u0275did"](109,16384,[[4,4]],0,f.Q,[e.TemplateRef],null,null),(l()(),e["\u0275eld"](110,0,null,null,6,"ngb-panel",[["title","Lista de Impressoras"]],null,null,null,null,null)),e["\u0275did"](111,2113536,[[1,4]],3,f.P,[],{title:[0,"title"]},null),e["\u0275qud"](603979776,5,{titleTpls:1}),e["\u0275qud"](603979776,6,{headerTpls:1}),e["\u0275qud"](603979776,7,{contentTpls:1}),(l()(),e["\u0275and"](0,null,null,1,null,I)),e["\u0275did"](116,16384,[[7,4]],0,f.Q,[e.TemplateRef],null,null)],(function(l,n){var u=n.component;l(n,27,0,"idCliente",u.idCliente),l(n,31,0,""),l(n,32,0,""),l(n,35,0,u.clientes),l(n,40,0,"dtIni",u.dtIni),l(n,47,0,"dtFim",u.dtFim),l(n,101,0,"ngb-panel-0",!1),l(n,104,0,"Quadro de Impress\xf5es - Resumo"),l(n,111,0,"Lista de Impressoras")}),(function(l,n){var u=n.component;l(n,5,0,e["\u0275nov"](n,9).ngClassUntouched,e["\u0275nov"](n,9).ngClassTouched,e["\u0275nov"](n,9).ngClassPristine,e["\u0275nov"](n,9).ngClassDirty,e["\u0275nov"](n,9).ngClassValid,e["\u0275nov"](n,9).ngClassInvalid,e["\u0275nov"](n,9).ngClassPending),l(n,24,0,e["\u0275nov"](n,29).ngClassUntouched,e["\u0275nov"](n,29).ngClassTouched,e["\u0275nov"](n,29).ngClassPristine,e["\u0275nov"](n,29).ngClassDirty,e["\u0275nov"](n,29).ngClassValid,e["\u0275nov"](n,29).ngClassInvalid,e["\u0275nov"](n,29).ngClassPending),l(n,37,0,e["\u0275nov"](n,42).ngClassUntouched,e["\u0275nov"](n,42).ngClassTouched,e["\u0275nov"](n,42).ngClassPristine,e["\u0275nov"](n,42).ngClassDirty,e["\u0275nov"](n,42).ngClassValid,e["\u0275nov"](n,42).ngClassInvalid,e["\u0275nov"](n,42).ngClassPending),l(n,44,0,e["\u0275nov"](n,49).ngClassUntouched,e["\u0275nov"](n,49).ngClassTouched,e["\u0275nov"](n,49).ngClassPristine,e["\u0275nov"](n,49).ngClassDirty,e["\u0275nov"](n,49).ngClassValid,e["\u0275nov"](n,49).ngClassInvalid,e["\u0275nov"](n,49).ngClassPending),l(n,58,0,e["\u0275nov"](n,62).ngClassUntouched,e["\u0275nov"](n,62).ngClassTouched,e["\u0275nov"](n,62).ngClassPristine,e["\u0275nov"](n,62).ngClassDirty,e["\u0275nov"](n,62).ngClassValid,e["\u0275nov"](n,62).ngClassInvalid,e["\u0275nov"](n,62).ngClassPending),l(n,68,0,e["\u0275inlineInterpolate"](1,"",u.cliente.cnpj,"")),l(n,72,0,e["\u0275inlineInterpolate"](1,"",u.cliente.nome,"")),l(n,98,0,e["\u0275inlineInterpolate"](1,"",u.cliente.email,"")),l(n,100,0,!e["\u0275nov"](n,101).closeOtherPanels)}))}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-monitor",[],null,null,null,N,_)),e["\u0275did"](1,114688,null,0,b,[h.a],null,null)],(function(l,n){l(n,1,0)}),null)}var R=e["\u0275ccf"]("app-monitor",b,w,{},{},[]),E=u("iInd");const x={heading:"Monitor"},M={heading:"Impressoras"};u.d(n,"MonitorModuleNgFactory",(function(){return F}));var F=e["\u0275cmf"](o,[],(function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[t.a,R,p]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,g.NgLocalization,g.NgLocaleLocalization,[e.LOCALE_ID,[2,g["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,i.v,i.v,[g.DOCUMENT]),e["\u0275mpd"](4608,i.o,i.o,[]),e["\u0275mpd"](4608,i.a,i.a,[]),e["\u0275mpd"](4608,d["\u0275angular_packages_forms_forms_o"],d["\u0275angular_packages_forms_forms_o"],[]),e["\u0275mpd"](4608,h.a,h.a,[]),e["\u0275mpd"](1073742336,g.CommonModule,g.CommonModule,[]),e["\u0275mpd"](1073742336,E.s,E.s,[[2,E.x],[2,E.o]]),e["\u0275mpd"](1073742336,f.d,f.d,[]),e["\u0275mpd"](1073742336,i.r,i.r,[]),e["\u0275mpd"](1073742336,d["\u0275angular_packages_forms_forms_d"],d["\u0275angular_packages_forms_forms_d"],[]),e["\u0275mpd"](1073742336,d.FormsModule,d.FormsModule,[]),e["\u0275mpd"](1073742336,o,o,[]),e["\u0275mpd"](1024,E.m,(function(){return[[{path:"",component:b,data:x},{path:"",children:[{path:"impressora",component:s,data:M}]}]]}),[])])}))}}]);