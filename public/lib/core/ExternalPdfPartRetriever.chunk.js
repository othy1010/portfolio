/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[8],{421:function(ia,ea,e){e.r(ea);var da=e(1);ia=e(50);var fa=e(162),ha=e(359),ca=e(223),ba=window;e=function(){function e(e,z){this.jT=function(e){e=e.split(".");return e[e.length-1].match(/(jpg|jpeg|png|gif)$/i)};z=z||{};this.url=e;this.filename=z.filename||e;this.$e=z.customHeaders;this.vja=!!z.useDownloader;this.withCredentials=!!z.withCredentials}e.prototype.qD=function(e){this.$e=e};e.prototype.getCustomHeaders=function(){return this.$e};
e.prototype.getFileData=function(w){var z=this,r=this,h=new XMLHttpRequest,n=0===this.url.indexOf("blob:")?"blob":"arraybuffer";h.open("GET",this.url,!0);h.withCredentials=this.withCredentials;h.responseType=n;this.$e&&Object.keys(this.$e).forEach(function(e){h.setRequestHeader(e,z.$e[e])});var f=/^https?:/i.test(this.url);h.addEventListener("load",function(h){return Object(da.b)(this,void 0,void 0,function(){var n,y,z,aa,ba,ea;return Object(da.d)(this,function(x){switch(x.label){case 0:if(200!==
this.status&&(f||0!==this.status))return[3,10];r.trigger(e.Events.DOCUMENT_LOADING_PROGRESS,[h.loaded,h.loaded]);if("blob"!==this.responseType)return[3,4];n=this.response;return r.jT(r.filename)?[4,Object(ca.b)(n)]:[3,2];case 1:return y=x.ea(),r.fileSize=y.byteLength,w(new Uint8Array(y)),[3,3];case 2:z=new FileReader,z.onload=function(e){e=new Uint8Array(e.target.result);r.fileSize=e.length;w(e)},z.readAsArrayBuffer(n),x.label=3;case 3:return[3,9];case 4:x.Ui.push([4,8,,9]);aa=new Uint8Array(this.response);
if(!r.jT(r.filename))return[3,6];n=new Blob([aa.buffer]);return[4,Object(ca.b)(n)];case 5:return y=x.ea(),r.fileSize=y.byteLength,w(new Uint8Array(y)),[3,7];case 6:r.fileSize=aa.length,w(aa),x.label=7;case 7:return[3,9];case 8:return x.ea(),r.trigger(e.Events.ERROR,["pdfLoad","Out of memory"]),[3,9];case 9:return[3,11];case 10:ba=h.currentTarget,ea=Object(fa.b)(ba),r.trigger(e.Events.ERROR,["pdfLoad",this.status+" "+ba.statusText,ea]),x.label=11;case 11:return r.Qx=null,[2]}})})},!1);h.onprogress=
function(f){r.trigger(e.Events.DOCUMENT_LOADING_PROGRESS,[f.loaded,0<f.total?f.total:0])};h.addEventListener("error",function(){r.trigger(e.Events.ERROR,["pdfLoad","Network failure"]);r.Qx=null},!1);h.send();this.Qx=h};e.prototype.getFile=function(){var e=this;return new Promise(function(w){ba.utils.isJSWorker&&w(e.url);if(e.vja){var r=Object(da.a)({url:e.url},e.$e?{customHeaders:e.$e}:{});w(r)}w(null)})};e.prototype.abort=function(){this.Qx&&(this.Qx.abort(),this.Qx=null)};e.Events={DOCUMENT_LOADING_PROGRESS:"documentLoadingProgress",
ERROR:"error"};return e}();Object(ia.a)(e);Object(ha.a)(e);Object(ha.b)(e);ea["default"]=e}}]);}).call(this || window)
