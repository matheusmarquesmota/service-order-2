function generateText() {
  var name = document.getElementById("name").value;
  var lastName = document.getElementById("last-name").value;
  var nickname = document.getElementById("nickname").value;
  var result = document.getElementById("result");
  result.innerHTML = "Your name is " + name + " " + lastName + " and your nickname is " + nickname + ".";
}
