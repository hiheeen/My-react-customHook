import { useEffect, useRef } from "react";
import { render } from "react-dom";
const useFadeIn = (animation = 1, delay = 0) => {
  //props기본값 설정
  if (typeof animation !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      //current를 element.current와 동일시함. 근데 왜 여기서 element.current가 아니라 element로 쓰지?

      //useRef()를 사용하여 생성된 element는 객체 형태의 값이며, 이 객체는 current라는 속성을 가지고 있습니다.
      //current 속성은 실제 DOM 요소를 참조하는 역할을 합니다.
      //따라서 const { current } = element;은 구조 분해 할당(destructuring assignment) 문법을 사용하여
      //element 객체의 current 속성을 current이라는 변수로 추출하는 것입니다.
      //이렇게 하면 current 변수를 통해 element.current에 접근할 수 있습니다.
      //따라서 const { current } = element;은 element.current에 접근하기 위해 구조 분해 할당을 사용하는 것이며, const element = current;과는 다른 개념입니다.

      current.style.opacity = 1;
      current.style.transition = `opacity ${animation}s ease-in-out ${delay}s`;
      // element.current.style.transition = `opacity ${animation}s ease-in-out ${delay}s`;
      // element.current.style.opacity = 1;
    }
  }, [animation, delay]);
  return { ref: element, style: { opacity: 0 } };
}; //element가 어떠한 요소를 참조하게 만드는 ref custom 훅이다.

export default function App() {
  const fadeInH1 = useFadeIn(1, 2); //fadeInH1 은 element를 return
  const fadeInP = useFadeIn(5, 5);
  return (
    <div>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>blablablablab</p>
    </div>
  ); // element가 return 되어 h1을 참조
}
