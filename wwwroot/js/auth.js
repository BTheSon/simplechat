import { auth } from '/js/firebase-init.js';
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

export async function signInWithGooglePopup() {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // await fetch('/Account/ExternalSignIn', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ idToken }) });

        return {
            ok: true,
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
        };
    } catch (err) {
        return {
            ok: false
        };
    }
}

export async function signOutUser() {
    await signOut(auth);
}

export function observeAuthState(onChange) {
    return onAuthStateChanged(auth, (user) => {
        onChange(user);
    });
}

window.signInWithGooglePopup = signInWithGooglePopup;
window.signOutUser = signOutUser;
window.observeAuthState = observeAuthState;