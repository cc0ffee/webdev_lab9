function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById('entrybutton'); 
    
  function func() {
    return true;
  }



  button.addEventListener('click', func);
}
window.addEventListener('load', init);
