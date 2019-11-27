function check(form)/*function to check userid & password*/ {
  /*the following code checkes whether the entered userid and password are matching*/
  if (form.userid.value == "a" && form.pswrd.value == "a") {
    window.open('control.html');
  }
  else {
    alert("Error Password or Username")/*displays error message*/
  };
};