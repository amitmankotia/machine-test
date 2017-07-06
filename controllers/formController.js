  angular.module("myApp")
          .controller("formCtrl", formController);

          formController.$inject = ["$location"];
          function formController($location) {
                var vm = this;
                vm.user = {};
                vm.getUserName = function (eId){
                  return eId.split("@")[0];
                };
              /* var _formData = new FormData(form);
                var _emailId = _formData.get("email");
                var _password = _formData.get("password");
                var _username = getUserName(_emailId);*/

                vm.validateAndSubmit = function () {
                  var _user = this.user;
                  _user.username= this.getUserName(_user["emailId"]);
                  if (formHelper.validateForm(_user)) {
                        $location.path('/dashboard')
                  }else{
                  alert("Invalid Credentials");
                  }

                }
          }
