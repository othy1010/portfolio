/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[17],{424:function(ia,ea,e){e.r(ea);var da=e(1),fa=e(237);ia=e(414);var ha=e(89);e=e(359);var ca={},ba=function(e){function w(w,r){var h=e.call(this,w,r)||this;h.url=w;h.range=r;h.status=fa.a.NOT_STARTED;return h}Object(da.c)(w,e);w.prototype.start=function(e){var r=this;"undefined"===typeof ca[this.range.start]&&(ca[this.range.start]={ot:function(h){var n=atob(h),f,w=n.length;h=new Uint8Array(w);for(f=0;f<w;++f)h[f]=n.charCodeAt(f);
n=h.length;f="";for(var x=0;x<n;)w=h.subarray(x,x+1024),x+=1024,f+=String.fromCharCode.apply(null,w);r.ot(f,e)},VQ:function(){r.status=fa.a.ERROR;e({code:r.status})}},window.external.Pma(this.url),this.status=fa.a.STARTED);r.sB()};return w}(ia.ByteRangeRequest);ia=function(e){function w(w,r,h,n){w=e.call(this,w,h,n)||this;w.Lw=ba;return w}Object(da.c)(w,e);w.prototype.Xu=function(e,r){return e+"?"+r.start+"&"+(r.stop?r.stop:"")};return w}(ha.a);Object(e.a)(ia);Object(e.b)(ia);ea["default"]=ia}}]);}).call(this || window)
