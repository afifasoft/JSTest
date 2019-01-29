function User() {
  var username, password;

    function doLogin(user, pwd) {
      username = user;
      password = pwd;

        console.log( "doLogin" );
        console.log(user);
        console.log(pwd);
        // do the rest of the login work
    }

    var publicAPI = {
      login: doLogin
    };

    return publicAPI;
}

// create a 'User' module instance

var fred = User();
console.log( fred );
fred.login("fred", "123");
//fred.login("fred", "12Battery34!");
