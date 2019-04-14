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

function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}

function changeHTML(id, html) {
  var element = document.getElementById(id);
  if (html!=''){
    element.setAttribute('src',html);
  }
}