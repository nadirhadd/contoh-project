let getValue = () => {
  let text = document.getElementById("textbox").value;
  let con = document.getElementById("output").innerHTML;
  alert("value: " + text + " & " + con);
};

let changeText = () => {
  let sp1 = document.getElementById("output");
  sp1.innerHTML = "replaced! <br/> <button>New</button>";
  document.getElementById("textbox").value = "Connie";
};
