import {
  login as loginLocal,
  logout as logoutLocal,
} from "@src/Domain/authLocal/authLocal.reducer";
import {
  login as loginSession,
  logout as logoutSession,
} from "@src/Domain/authSession/authSession.reducer";
import { AppDispatch, RootState } from "@src/store";
import { useDispatch, useSelector } from "react-redux";
// tes
const useAuth = () => {
  const dispatch: AppDispatch = useDispatch();
  const { session, local } = useSelector((state: RootState) => ({
    session: state.authSession,
    local: state.authLocal,
  }));

  return {
    auth:
      session.data !== null
        ? session.data
        : local.data !== null
        ? local.data
        : null,
    onLogin: (data: { name: string; token: string }, remember = false) => {
      if (remember) {
        dispatch(loginLocal(data));
      } else {
        dispatch(loginSession(data));
      }
      return null;
    },
    onLogout: () => {
      dispatch(logoutLocal());
      dispatch(logoutSession());
      return null;
    },
  };
};

export default useAuth;
