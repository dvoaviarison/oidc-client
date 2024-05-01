import oidcConfigDev from "./oidcConfigDev";
import oidcConfigProd from "./oidcConfigProd";

let oidcConfig = oidcConfigProd;
if (process.env.NODE_ENV === 'development'){
    oidcConfig = oidcConfigDev;
}

export default oidcConfig;