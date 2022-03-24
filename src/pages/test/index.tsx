import { useRef, useEffect, useState } from "react";

const Test: React.FC = () => {
  let ref: any = useRef(null);
  let ref2: any = null;
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(ref2);
    ref2.style.opacity = 0.8;
    console.log("1 lan");
    return () => {
      console.log("Effect 1 lan Xong");
    };
  }, []);

  useEffect(() => {
    console.log("Every", count);
    return () => {
      console.log("Effect Every Xong :", count);
    };
  });

  return (
    <div>
      <div
        ref={(el) => {
          console.log(el);
          ref2 = el;
        }}
        // ref={ref2}
      >
        Hello {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count
        </button>
      </div>
    </div>
  );
};

export default Test;
