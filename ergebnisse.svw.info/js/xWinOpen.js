// var xChildWindow = null;
function xWinOpen(sUrl)
{
  var features = "left=0,top=0,width=600,height=450,location=0,menubar=0," +
    "resizable=1,scrollbars=1,status=0,toolbar=0";
//   if (xChildWindow && !xChildWindow.closed) {xChildWindow.location.href = sUrl;}
//   else {
  	xChildWindow = window.open(sUrl, "_blank", features);
//   }
  xChildWindow.focus();
  return false;
}