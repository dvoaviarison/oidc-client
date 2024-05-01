import { ReactElement } from "react";
import { useAuth } from 'react-oidc-context';
import { Button, Text, Toast, ToastContent } from "@salt-ds/core";
import { CloseIcon } from "@salt-ds/icons";
import Login from "../Login";
import Loading from "../Loading";
import { useNavigate } from 'react-router-dom';

export type AuthenticatedProps = {
    children?: string | JSX.Element | JSX.Element[],
}

const Authenticated = (props: AuthenticatedProps): ReactElement => {
    const auth = useAuth();
    const navigate = useNavigate();

    if (auth.isLoading) {
        return <Loading />;
    }

    if (auth.error) {
        return <Toast status="error" style={{ width: 260 }}>
                <ToastContent>
                    <Text>
                        <strong>An error occurred</strong>
                    </Text>
                    <div>{auth.error.message}</div>
                </ToastContent>
                <Button variant="secondary" onClick={() => {
                        navigate("/");
                        navigate(0);
                    }}>
                    <CloseIcon />
                </Button>
            </Toast>
    }

    if (auth.isAuthenticated) {
        return <>{props.children}</>
    }

    return <Login />;
}

export default Authenticated;