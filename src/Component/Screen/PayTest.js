import {OnClickPayment} from "./OnClickPayment";
import {useEffect} from "react";

export const PayTest = () => {
    useEffect(() => {
        console.log("render");
        const script = document.createElement("script");
        script.src = "https://cdn.iamport.kr/v1/iamport.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return <>
        <OnClickPayment/>
    </>
}