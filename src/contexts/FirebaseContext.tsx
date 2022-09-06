import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { createContext, useEffect, useReducer } from "react";
import { verify } from "services/index";
import { setSession } from "utils/jwt";
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
type AuthUser = Record<string, any>;

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
  payload: {
    user: Record<string, any> | null;
    isAuthenticated: boolean;
  };
}

const initialState: AuthState = {
  isAuthenticated: true,
  user: null,
};

const reducer = (state: AuthState, action: Action) => {
  const { isAuthenticated, user } = action.payload;
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: isAuthenticated,
        user: user,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(state);

      if (user) {
        //get token
        user.getIdToken().then(async (token) => {
          console.log("TOKEN: ", token);

          // verify
          try {
            // await verify(token);

            setSession(token);

            dispatch({
              type: "LOGIN",
              payload: {
                isAuthenticated: true,
                user: user,
              },
            });
          } catch (error) {
            console.error(error);
          }
        });
      } else {
        console.log("LOGOUT");

        dispatch({
          type: "LOGOUT",
          payload: {
            isAuthenticated: true,
            user: null,
          },
        });
      }
    });
  }, [dispatch]);
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
          isAuthenticated: state.isAuthenticated,
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
