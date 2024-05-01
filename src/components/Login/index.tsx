import { ReactElement } from "react";
import { H3, Text, StackLayout, Card, Button } from "@salt-ds/core";
import { useAuth } from 'react-oidc-context';

const Login = (): ReactElement => {
    const auth = useAuth();
    return (
        <Card
            style={{
                width: "360px",
            }}
            accent="top"
            hoverable
        >
            <StackLayout
                style={{
                    padding: "var(--salt-spacing-200)",
                }}
                align="start"
            >
                <StackLayout gap={1}>
                    <H3>Welcome to OIDC Client App</H3>
                    <Text>
                        It looks like you are accessing as a guest.<br />
                        Please authenticate.
                    </Text>
                </StackLayout>
                <Button variant="cta" onClick={() => void auth.signinRedirect()}>Login</Button>
            </StackLayout>
        </Card>
    );
};

export default Login;