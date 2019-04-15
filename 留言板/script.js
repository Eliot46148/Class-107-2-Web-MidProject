function OnShow(json){
    $('#show .row').empty();
    for (var i = 0; i < json.feed.entry.length; i++) {
      var field0 = json.feed.entry[i].gsx$value0.$t;
      var field1 = json.feed.entry[i].gsx$value1.$t;
      $("#show .row").append(CreatePanel(field0 +'說：',field1));
    }
};

function GetUrl(Page) { 
  var http = new XMLHttpRequest(); 
  http.onreadystatechange=function()
  {       
      if(http.readyState==4 || http.readyState=="complete")
      {
        Refresh();
      }
  }
  http.open("GET", Page, true);
  http.send(null);
}

function Refresh(){
    $.getJSON("https://spreadsheets.google.com/feeds/list/1Nma9KfUQLtwhi9eNMeOANjObV1QELovyQQmQuis5m2k/1/public/values?alt=json", function(data) {
      OnShow(data);
      parent.iframeLoaded();
    });
}

function Submit(in1, in2){
    if (in1 != '' && in2 != ''){
        var sub="https://docs.google.com/forms/d/e/1FAIpQLSda3uOTU8Yo79Zii2SKECP3iXbduOzEbABGLaYbOKqD_XghoQ/formResponse?entry.303366569=" + in1 + "&entry.923697582=" + in2 + "&submit=Submit";
        GetUrl(sub);
    }
}

function CreatePanel(name, comment){
  var node = "<div class='col-md-3'><div class='panel panel-default'><div class='panel-heading'><strong>" + name + "</strong><span class='text-muted'></span></div><div class='panel-body'>" + comment + "</div></div></div>"
  return node;
}