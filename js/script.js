function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById('entrybutton'); 
    
  function func() {
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Kacper Stasik: " + textbox.value);
  }
  
  button.addEventListener('click', func);
}
window.addEventListener('load', init);
