export const PayNaver = () => {
    const onClickPay = () => {
        if (!window.IMP) return;
        /* 1. 가맹점 식별하기 */
        const { IMP } = window;
        IMP.init("imp63552103"); // 가맹점 식별코드

        /* 2. 결제 데이터 정의하기 */
        const data = {
            pg: "naverpay", // 반드시 "tosspayments"임을 명시해주세요.
            pay_method: "naverpay",
            merchant_uid: "order_id_"+"202312181814",
            name: "나이키 와플 트레이너 2 SD",
            amount: "100",
            buyer_name: "홍길동",
            buyer_email: "buyer@example.com",
            buyer_tel: "02-1670-5176",
            buyer_addr: "성수이로 20길 16",
            buyer_postcode: "04783",
            m_redirect_url: "http://localhost"
        };

        /* 4. 결제 창 호출하기 */
        IMP.request_pay(data, callback);
    };

    /* 3. 콜백 함수 정의하기 */
    function callback(response) {
        const { success, error_msg } = response;

        if (success) {
            console.log(response);
            alert("결제 성공");
        } else {
            alert(`결제 실패: ${error_msg}`);
        }
    }

    return (
        <button onClick={onClickPay}>네이버 결제</button>
    );
}