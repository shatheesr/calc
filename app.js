function addDisplay(value){
document.getElementById('display').value += value;
}
function cleardisplay(){
    document.getElementById('display').value = "";
}
function remove(){
  let str = document.getElementById('display').value;
  document.getElementById('display').value = str.slice(0,-1);
}
function calc(){
    try{
        let solution = eval(document.getElementById('display').value);
        document.getElementById('display').value = solution;
    }
    catch (error){     
        document.getElementById('display').value = "error";
    }
}