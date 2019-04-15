$(window).scroll(function(){
        var pos = $(window).scrollTop();
        var height = document.getElementById('logo').offsetHeight;
        var margT = document.getElementById('navigator').offsetHeight;
        var site = document.getElementById('splitSite');
        Refresh();
        if(pos > height){
          $('#navigator').addClass('nav-fixed');
          site.style.marginTop = margT + 'px';
        }else{
          $('#navigator').removeClass('nav-fixed');
          site.style.marginTop = 0;
        }
});

function iframeLoaded() {
  var iFrameID = document.getElementById('splitSite');
  if(iFrameID) {
        iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
  }   
}

function changeHTML(id, html, newTitle) {
  var element = document.getElementById(id);
  if (html!=''){
    element.setAttribute('src',html);
    changeTitle(newTitle);
  }
}

function changeTitle(newTitle){
  if (document.title != newTitle){
    document.title = newTitle;
  }
}