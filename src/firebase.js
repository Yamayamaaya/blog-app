// Firebase関連の関数をimport
import { initializeApp } from "firebase/app"; // Firebaseアプリを初期化するための関数
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Firebase Authenticationを使用するための関数とGoogle認証プロバイダー
import { getFirestore } from "firebase/firestore"; // Cloud Firestoreを使用するための関数
// Firebaseの構成情報を定義
const firebaseConfig = {
  apiKey: "AIzaSyBpLThTAD5tbWQTt1pLL5jxRM8HqPE5fyk",
  authDomain: "blog-app-ebc39.firebaseapp.com",
  projectId: "blog-app-ebc39",
  storageBucket: "blog-app-ebc39.appspot.com",
  messagingSenderId: "965948578540",
  appId: "1:965948578540:web:fe4336ffe34604b71aa3c9",
};

// Firebaseアプリを初期化
const app = initializeApp(firebaseConfig);

// Firebase Authenticationを初期化
const auth = getAuth(app); // 初期化されたFirebaseアプリを使用して、Firebase Authenticationを取得

// Google認証プロバイダーを初期化
const provider = new GoogleAuthProvider(); // Google認証プロバイダーのインスタンスを作成

// Cloud Firestoreを初期化
const db = getFirestore(app); // 初期化されたFirebaseアプリを使用して、Cloud Firestoreを取得

// exportして、他のファイルでimportできるようにする
export { auth, provider, db };
