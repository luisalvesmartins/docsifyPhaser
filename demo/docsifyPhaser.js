/* 
** DocsifyPhaser Plugin
** 2019 Luis Alves Martins
*/
function docsifyPhaser(hook,vm){
  hook.beforeEach(function(content) {
      // Invoked each time before parsing the Markdown file.
      this.jscript="";
      var p1=0;
      while(p1>=0){
        p1=content.toUpperCase().indexOf("<!-- PHASER");
        if (p1>=0)
        {
          var p3=content.indexOf("(", p1);
          var p5=content.indexOf("-->",p1 );
          var p2=content.toUpperCase().indexOf("<!-- ENDPHASER -->");
          if (p3>-1 && p3<p5){
            var p4=content.indexOf(")",p3);
            this.divName=content.substr(p3+1,p4-p3-1);
            this.jscript+="(function(){\n" + content.substr(p5+3,p2-p5-3) + " })();";
          }
          else
            this.jscript+=content.substr(p1+15,p2-p1-15);
          content=content.substr(0,p1) + "<div id=" +this.divName + "></div>" + content.substr(p2+18);
        }
      }
      console.log(content)
      return content;
    });

    hook.ready(function() {
      var js = document.createElement('script'); 
      js.innerHTML=this.jscript;
      document.body.appendChild(js);
    });
}

if (window) {
  window.$docsify = window.$docsify || {};

  window.$docsify.plugins = [].concat(
      docsifyPhaser,
      (window.$docsify.plugins || [])
  );
}