(() => {
    var isLogin = sessionStorage.getItem("user");
    console.log(isLogin)
    if (isLogin != "true") {
        location.href = '../pages/signup.html'
    }
  })()