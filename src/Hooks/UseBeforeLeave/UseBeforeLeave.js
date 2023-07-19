import { useEffect } from "react";
//useBeforeLeave 훅.
const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      //클라이언트가 이동시키는 커서의 위치의 y축!
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle); //mouseleave일 때 handle함수 호출.
  }, []); //마운트 될 때 단 한번.
  return document.removeEventListener("mouseleave", handle);
};
export default function UseBeforeLeave() {
  //UseBeforeleave 컴포넌트. 훅의 이름과 소문자대문자 하나만 다른데 혼용이 될까?

  const begForLife = () => console.log("please don't leave..");
  useBeforeLeave(begForLife);

  return <h1>Hello</h1>;
}
// 사용자들이 창을 닫거나 떠나지 못하도록 할인 이벤트 등을 노출시킬 때 활용.
// 혹은 위의 코드를 활용하여 커서의 위치 수집, 어디서 창을 떠나는 가 등등 할 수 있음.
