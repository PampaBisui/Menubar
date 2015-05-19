// ==UserScript==
// @name          BOI-FirefoxColorScheme
// @namespace     https://github.com/abusalam/BOI-FirefoxColorScheme
// @description   Helper Script For Color Correction in Firefox
// @include       https://www.paschimmedinipur.gov.in/
// @grant         none
// @downloadURL   https://github.com/abusalam/BOI-FirefoxColorScheme/raw/master/BOIFCS.user.js
// @updateURL     https://github.com/abusalam/BOI-FirefoxColorScheme/raw/master/BOIFCS.user.js
// @version       1.0
// @icon          http://www.gravatar.com/avatar/43f0ea57b814fbdcb3793ca3e76971cf
// ==/UserScript==

/**
 * How can I use jQuery in Greasemonkey scripts in Google Chrome?
 * All Credits to Original Author for this wonderfull function.
 *
 * @author  Erik Vergobbi Vold & Tyler G. Hicks-Wright
 * @link    http://stackoverflow.com/questions/2246901
 * @param   {reference} callback
 * @returns {undefined}
 */
function jQueryInclude(callback) {
  var jQueryScript = document.createElement("script");
  var jQueryCDN = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
  jQueryScript.setAttribute("src", jQueryCDN);
  jQueryScript.addEventListener('load', function() {
    var UserScript = document.createElement("script");
    UserScript.textContent = 'window.jQ=jQuery.noConflict(true);'
            + 'var BaseURL = "https://www.paschimmedinipur.gov.in/";'
            + '(' + callback.toString() + ')();';
    document.head.appendChild(UserScript);
  }, false);
  document.head.appendChild(jQueryScript);
}

/**
 * Main Body of Script
 *
 * @returns {undefined}
 */
jQueryInclude(function() {
/**  

  jQ("h1").css("fo.css ("background-image", "url(../Images/MenuBar.jpg");nt-size", "30px");
*/
jQ(".MenuBar").before('<div class="menu"><a class="me">&#9776;</a></div>');
jQ(".me").css("text-decoration", "none");
jQ(".menu").hide();
jQ(".menu").height(40).width("auto");
jQ(".menu").css("font-weight", "bold").css("color","black").css("font-size","20px").css("padding","10px 0px 10px 10px").css("text-align","left");
jQ(".menu").css ("background-image", "url(../Images/MenuBar.jpg");
  jQ(".me").click(function() {
     
         jQ(".MenuBar").toggle();                             
});

jQ(window).resize(function() {
    if (jQ(window).width() < 1000 ) {

         jQ(".menu").show();
         jQ(".MenuBar").css("display","none");
         jQ(".MenuBar ul").height("auto").width("auto");
         jQ(".MenuBar ul li").height("auto").width("auto");
         jQ(".MenuBar").css("background-image", "none");
         jQ(".MenuBar div").css("margin-left","0px").css("position","relative").css("left","0%");
         jQ(".MenuBar div").height("auto").width("auto");
         jQ(".MenuBar").height("auto").width("auto");
         jQ(".MenuBar").css("background-color", "#757575");
         jQ(".MenuBar li").css("background-color", "#333");
         jQ(".MenuBar li").css("background-image", "none");
         jQ(".MenuBar li").css("padding", "10px 5px");
         jQ(".MenuBar li").css("margin", "5px");
         jQ(".MenuBar li").css("float", "none");
         jQ(".MenuBar li").height("auto").width("auto");
         jQ(".MenuBar").css("border","1px solid #999999");
         jQ(".MenuBar").css("position","relative");
         jQ(".MenuBar").css("margin","0px");
         jQ(".MenuBar").css("padding","0px");
         jQ(".content").css("margin","0px");
         jQ(".content").width("auto");
         jQ(".LeftMenuitems").css("padding", "10px 5px");
         jQ(".LeftMenuitems").css("margin", "5px");
         jQ(".LeftMenu").height("auto").width("auto");
         jQ(".LeftMenu li").height("auto").width("auto");
         jQ(".RightMenu li").height("auto").width("auto");
         jQ(".LeftMenu").css("float","none");
         jQ(".RightMenu").height("auto").width("auto");
         jQ(".LeftMenu").insertAfter(".content");
         jQ(".RightMenu").insertAfter(".LeftMenu");
         jQ(".RightMenu").css("float","none");
         jQ(".RightMenu").css("margin-bottom","5px");
         jQ("body").css("min-width","auto");
        
          jQ(".BottomMenu").insertAfter(".RightMenu");
         jQ(".BottomMenu").css("background-color", "#757575");
         jQ(".BottomMenu li").css("background-color", "#333");
         jQ(".BottomMenu").height("auto").width("auto");
         jQ(".BottomMenu li").height("auto").width("auto");
        // jQ(".BottomMenu").css("border-top","0px");
         jQ(".BottomMenu a").css("color","#999");
         jQ(".BottomMenu").css("margin","0px 3px 10px 5px");
         jQ(".BottomMenu li").css("padding","10px 5px");
         jQ(".BottomMenu li").css("margin","5px");
         jQ(".BottomMenu li").css("float","none");
         jQ(".BottomMenu li").css("float","none");
         jQ(".BottomMenu").css("text-align","left");
         jQ(".BottomMenu").css("padding","0px");
         jQ(".BottomMenu div").css("position","relative").css("margin-left","0px").css("left","0px");
         jQ(".BottomMenu div").width("auto").height("auto");
        


       jQ(".Menuitems").each(function() {
		if(jQ(this).text() == "|") {
			jQ(this).hide();
		}
	});   
        jQ(".Menuitems").each(function() {
		if(jQ(this).text() == "| ") {
			jQ(this).hide();
		}
	});

}
else
{
  
    jQ(".menu").hide(); 
    jQ(".MenuBar").css("display","block");
    jQ(".MenuBar div").css("margin-left","-405px").css("position","absolute").css("left","50%");
    jQ(".MenuBar").height("53").width("auto");
    jQ(".MenuBar li").css("background-image", "url(../Images/MenuBar.jpg");
    jQ(".MenuBar ul").height("43").width("auto");
    jQ(".MenuBar ul li").height("53").width("auto");
    jQ(".MenuBar li").css("padding", "0px 4px");
    jQ(".MenuBar li").css("margin", "0px");   
    jQ(".MenuBar li").css("float", "left"); 
    jQ(".BottomMenu .Menuitems").css("color", "#690");
    jQ(".MenuBar").css("background-color","#C0C0C0");
    jQ(".MenuBar").css ("background-image", "url(../Images/MenuBar.jpg");
    jQ(".MenuBar").css("border","1px solid black");
    jQ(".LeftMenu").show();
    jQ(".RightMenu").show();
    jQ(".content").css("margin","0px 160px 10px 200px");
    jQ(".MenuBar").css("border","0px");
    jQ(".MenuBar").css("border-top","1px solid #000");
    jQ(".LeftMenu").insertBefore(".content");
    jQ(".LeftMenu").height("auto").width("auto");
    jQ(".LeftMenuitems").css("margin", "5px");
    jQ(".LeftMenuitems").css("padding", "10px 5px");
    jQ(".LeftMenuitems").height("auto").width("auto");
    jQ(".RightMenu").height("auto").width("auto");
    jQ(".RightMenu").insertAfter(".LeftMenu");
    jQ(".LeftMenuitems").css("float","none");
    jQ(".RightMenu").css("float","right");
    jQ(".LeftMenu").css("float","left");
    jQ("body").css("min-width","auto");
    jQ(".BottomMenu").css("display","block");
    jQ(".BottomMenu").height("auto").width("auto");
    jQ(".BottomMenu li").height("auto").width("auto");
    jQ(".BottomMenu").css("background-color","#DBDBDB");
    jQ(".BottomMenu").css("padding","5px 0px 20px"); 
    jQ(".BottomMenu").css("border-top","thin solid #000");
    jQ(".BottomMenu li").css("padding","0px 5px");
    jQ(".BottomMenu li").css("margin","0px");
    jQ(".BottomMenu").css("margin","0px");
    jQ(".BottomMenu li").css("float","left");
    jQ(".BottomMenu li").css("background-color", "#DBDBDB");
    jQ(".BottomMenu div").css("margin-left","-450px").css("position","absolute").css("left","50%");
    jQ(".BottomMenu div").width("auto").height("auto");
    jQ(".BottomMenu a").css("color","#666");
   jQ(".Menuitems").each(function() {
		if(jQ(this).text() == "|") {
			jQ(this).show();
		}
	});
 
   jQ(".Menuitems").each(function() {
		if(jQ(this).text() == "| ") {
			jQ(this).show();
		}
	});

}
});
});




