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

// auth.onAuthStateChanged(function(user) {
//   if(user) {
//     var email = user.email;
//     alert("ログインユーザー：" + email);
//   } else {
//     alert("ログイン、または新規登録をしてください。");
//   }
// });

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    const userId = document.getElementById('userId');
    userId.textContent = "ID: " + user.uid.slice(0, 6); //UIDを５桁目まで表示
  } else {
    userId.textContent = "ID: No User";
  }
});