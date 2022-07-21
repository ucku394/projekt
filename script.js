var str = '';
document.getElementById('test').onkeypress = function(event){
   console.log(event);
   str += str + event.key
   console.log(str);
   // return false;
}