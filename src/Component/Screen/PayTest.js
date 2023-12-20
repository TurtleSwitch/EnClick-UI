import {useEffect} from "react";
import {PayCard} from "./PayCard";
import {PayKakao} from "./PayKakao";
import {PayNaver} from "./PayNaver";


export const PayTest = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.iamport.kr/v1/iamport.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return <>
        <PayCard/>
        <PayKakao/>
    </>
}