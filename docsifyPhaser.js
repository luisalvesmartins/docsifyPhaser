/* 
** DocsifyPhaser Plugin
** 2019 Luis Alves Martins
*/
function docsifyPhaser(hook,vm){
    hook.beforeEach(function(content) {
        // Invoked each time before parsing the Markdown file.
        var p1=content.indexOf("<!-- PHASER -->");
        if (p1>0)
        {
          var p2=content.indexOf("<!-- ENDPHASER -->");
          this.jscript=content.substr(p1+15,p2-p1-15);
          return content.substr(0,p1) + "<div id=phaserapp></div>" + content.substr(p2+18);
        }
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