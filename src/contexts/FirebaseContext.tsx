import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential,
} from "firebase/auth";
import { createContext, useReducer } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdDsgb-9eIf4c-j-Ao4slJXLP6zuhEEYk",
  authDomain: "phong-kham-bst.firebaseapp.com",
  projectId: "phong-kham-bst",
  storageBucket: "phong-kham-bst.appspot.com",
  messagingSenderId: "575148237372",
  appId: "1:575148237372:web:d0e09d72f7dcc031349939",
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
type AuthUser = {
  username: string | null;
};
type FirebaseContextType = {
  isAuthenticated: boolean;
  user?: AuthUser | null;
  login: (email: string, password: string) => Promise<UserCredential>;
  loginWithGoogle: () => Promise<UserCredential>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => void;
};

const FirebaseContext = createContext<FirebaseContextType | null>(null);
interface AuthState {
  isAuthenticated: boolean;
  user?: AuthUser | null;
}
interface Action {
  type: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const reducer = (state: AuthState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const resetPassword = () => {
    console.log("Reset Password");
  };
  return (
    <>
      <FirebaseContext.Provider
        value={{
          isAuthenticated: false,
          user: null,
          login: login,
          loginWithGoogle: loginWithGoogle,
          logout: logout,
          resetPassword: () => {},
        }}
      >
        {children}
      </FirebaseContext.Provider>
    </>
  );
};

export { AuthProvider, FirebaseContext };
