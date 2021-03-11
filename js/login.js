
function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  if (email.value !== "" && password !== "") {
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  
    promise.catch(_ => alert("エラーです。\nメールアドレスを正しく入力してください。\nまた、パスワードは６文字以上で設定してください。"));
    promise.then(_ => alert("新規登録が完了しました。"));
  } else {
    alert("メールアドレスとパスワードは必須です。");
  }
}

function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);

  promise.catch(_ => alert("メールアドレス、またはパスワードが間違っています。"));
  promise.then(_ => alert("ログインしました。"));
}

function signOut() {
  auth.signOut();
  alert("ログアウトしました。"); 
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    const ranking = document.getElementById("ranking");
    const userId = document.getElementById('userId');

    userId.textContent = "ID: " + user.uid.slice(0, 6); //UIDを５桁目まで表示
  } else {
    userId.textContent = "ID: No User";
    ranking.textContent = "";
  }
});

