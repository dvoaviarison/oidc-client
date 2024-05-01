import { AuthProvider } from 'react-oidc-context';
import { SaltProvider } from "@salt-ds/core";
import Authenticated from './components/Authenticated';
import UserInfo from './components/UserInfo';
import oidcConfig from './oidcConfig';
import "@salt-ds/theme/index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <AuthProvider {...oidcConfig}>
      <SaltProvider>
        <div
          style={{
            display: "table",
            margin: "auto"
          }}>
          <Router>
            <Authenticated>
              <Routes>
                <Route path="/" element={<UserInfo />} />
              </Routes>
            </Authenticated>
          </Router>
        </div>
      </SaltProvider>
    </AuthProvider>
  )
}

export default App;
