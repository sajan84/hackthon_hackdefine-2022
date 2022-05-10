var divs = ["Div1", "Div2", "Div3", "Div4"];
var visibleDivId = null;
function divVisibility(divId) {
  if(visibleDivId === divId) {
    visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}

document.getElementById("but1").addEventListener('click',function()
{
  
    document.getElementById("popup").style.display = "flex";
    console.log("ajit");
  });


  document.getElementById("but2").addEventListener('click',function()
{
  
    document.getElementById("popup").style.display = "flex";
    console.log("ajit");
  });


  document.getElementById("but3").addEventListener('click',function()
{
  
    document.getElementById("popup").style.display = "flex";
    console.log("ajit");
  });


  document.getElementById("but4").addEventListener('click',function()
  {
    
      document.getElementById("popup").style.display = "flex";
      console.log("ajit");
    });


document.getElementById("clos").addEventListener('click',function()
{
  
    document.getElementById("popup").style.display = "none";
    console.log("haedik");
  });


