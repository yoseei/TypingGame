const firebaseConfig = {
  apiKey: "AIzaSyDJPfLBIr-nLWG3PLHC7RC141WoGOuydu0",
  authDomain: "typingdam-872b8.firebaseapp.com",
  projectId: "typingdam-872b8",
  storageBucket: "typingdam-872b8.appspot.com",
  messagingSenderId: "1056827487439",
  appId: "1:1056827487439:web:db77e4c4e79f2599ce73ba",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  if (email.value !== "" && password !== "") {
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  
    promise.catch(_ => alert("エラーです。\nメールアドレスを正しく入力してください。\nまた、パスワードは６文字以上で設定してください。"));
    promise.then("新規登録が完了しました。");
  } else {
    alert("メールアドレスとパスワードは必須です。");
  }
}

function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  alert("ログインしました。");
  promise.catch(_ => alert("メールアドレス、またはパスワードが間違っています。"));
}

function signOut() {
  auth.signOut();
  alert("ログアウトしました。"); 
}

auth.onAuthStateChanged(function(user) {
  if(user) {
    var email = user.email;
    const ("ログインユーザー：" + email);
  } else {
    alert("ログイン、または新規登録をしてください。");
  }
});

