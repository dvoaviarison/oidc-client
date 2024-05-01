import oidcConfigDev from "./oidcConfigDev";

const oidcConfigProd = {
    ...oidcConfigDev,
    redirect_uri: "/"
};

export default oidcConfigProd;
