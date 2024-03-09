function openTab(evt, className, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName(className);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  document.getElementById(tabName).style.display = "block";
}