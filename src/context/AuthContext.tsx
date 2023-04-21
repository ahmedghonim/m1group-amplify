import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { CognitoUser } from "@aws-amplify/auth";
import { Auth, Hub } from "aws-amplify";

interface UserContextType {
  user: CognitoUser | null | string;
  setUser: Dispatch<SetStateAction<CognitoUser | null | string>>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

interface Props {
  children: React.ReactElement;
}

export default function AuthContext({ children }: Props): ReactElement {
  const [user, setUser] = useState<CognitoUser | null | string>("");

  async function checkUser() {
    const userLocalStorage = localStorage.getItem("user");
    const userParse =
      userLocalStorage !== null ? JSON.parse(userLocalStorage ?? "") : null;
    //set in local storage
    if (userParse) {
      setUser(userParse);
      return null;
    } else {
      setUser(null);
    }
    try {
      const amplifyUser = await Auth.currentAuthenticatedUser();
      setUser(amplifyUser);
      localStorage.setItem("user", JSON.stringify(amplifyUser));
    } catch (error) {
      setUser(null);
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    Hub.listen("auth", () => {
      checkUser();
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = (): UserContextType => useContext(UserContext);
