import { default as React } from 'react';

interface interfacelogin {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
declare function Login({ show, setShow }: interfacelogin): import("react/jsx-runtime").JSX.Element;
export default Login;
