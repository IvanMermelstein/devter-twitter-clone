import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD32HP26YRT5BUD44pDzunOQYw7anTpvrg",
    authDomain: "devter-7d1c7.firebaseapp.com",
    projectId: "devter-7d1c7",
    storageBucket: "devter-7d1c7.appspot.com",
    messagingSenderId: "893936331537",
    appId: "1:893936331537:web:7c74f22c43af87170b3ab0",
    measurementId: "G-ST6TCS2HXF"
};

!firebase.apps.length &&
firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = user => {
    
    const { photoURL, email, displayName } = user

    return {
        avatar: photoURL,
        email,
        username: displayName
    }
}

export const onAuthStateChange = onChange => {
    return firebase
        .auth()
        .onAuthStateChanged(user => {
            const normalizedUser = user ? 
                mapUserFromFirebaseAuthToUser(user) :
                null
            onChange(normalizedUser)
        })
}

export const loginWithGitHub = () => {
    const githubProvider = new firebase.default.auth.GithubAuthProvider()
    return firebase
        .auth()
        .signInWithPopup(githubProvider)
  }