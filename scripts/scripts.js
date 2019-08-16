function putContent(contentFile, classes="", element="main"){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      text = "<div class='"+classes+"'>"+this.responseText+"</div>";
      document.getElementById(element).innerHTML += text;
    }
  };
  xhttp.open("GET", contentFile, false);
  xhttp.send();
}

