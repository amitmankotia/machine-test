var formHelper = (function () {
  function validateForm(user){

      var _isValidEmail = function(){
        var _emailId = user && user["emailId"];
        return _emailId  === "clarion@clarion.com";
      }
      var _isValidPassword = function () {
          var _regExp =  /[A-Z]/,
              _password = user && user["password"];
        return _password === "Clarion123" && _regExp.test(_password);
      }
      return _isValidPassword() && _isValidEmail();
  }
  return {
    validateForm: validateForm
  }
}())
