import { ReactElement } from "react";
import { Avatar, H3, FlexItem, StackLayout, Card, Button } from "@salt-ds/core";
import { useAuth } from 'react-oidc-context';

const UserInfo = (): ReactElement => {
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
                <StackLayout direction="row">
                    <FlexItem key={1}><Avatar name={auth.user?.profile?.name} src={auth.user?.profile?.picture} /></FlexItem>
                    <FlexItem key={2}><H3>Hello {auth.user?.profile?.name}!</H3></FlexItem>
                </StackLayout>
                <StackLayout gap={1}>
                    <li>First Name: {auth.user?.profile?.given_name}</li>
                    <li>Last Name: {auth.user?.profile?.family_name}</li>
                </StackLayout>
                <Button variant="cta" onClick={() => void auth.removeUser()}>Logout</Button>
            </StackLayout>
        </Card>
    );
};

export default UserInfo;