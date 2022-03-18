import 'firebase/compat/auth';
import { Navigate, useLocation } from "react-router-dom";
import { getAccessToken } from '../utils/access-token';

// const storageKey: string = process.env.REACT_APP_TOKEN_STORAGE_NAME || '';

export type LocationState = {
  from: string;
};

type Props = {}

export function withAuth<T extends Props = Props>(
  WrappedPage: React.FC<T>
) {
  const PageWithAuth = (props: Omit<T, keyof Props>) => {
    const accessToken = getAccessToken();
    const location = useLocation();

    // We don't authorized the access to the guard route and we send the visitor to the 
    // sign in page.
    // We set the state for the location to memoize the current route, so once the visitor logged in,
    // we will be able to send him back to the route he was trying to access. 
    
    if (!accessToken) {
      return <Navigate
        to="/sign-in"
        replace
        state={{ from: location.pathname }}
      />
        ;
    }

    // Otherwise, we just render the page initialy passed as an argument.
    return <WrappedPage {...props} />;
  };

  return PageWithAuth;
}
