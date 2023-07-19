// api 요청을 보낸 상태에서 사람들이 나가는 걸 방지하려면 function 활성화화
const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = ""; //꼭 넣어줘야 한다.
  };
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener); //beforeunload는 returnValue를 요구함.
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
  };
  return { enablePrevent, disablePrevent };
};

export default function UsePreventLeave() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button>
    </div>
  );
}
