import { FC, useState } from "react";

interface Props {}

const App: FC<Props> = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const moveButton = () => {
    // 获取浏览器窗口的尺寸
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    // 生成随机的 top 和 left 值
    const newTop = Math.random() * (screenHeight - 50); // 假设按钮高度大约为50px
    const newLeft = Math.random() * (screenWidth - 100); // 假设按钮宽度大约为100px

    // 更新状态以改变按钮的位置
    setPosition({ top: newTop, left: newLeft });
  };
  return (
    <div className="m-10 h-screen items-center justify-center">
      <div className="text-6xl mb-8">Hey?</div>
      <div className="cyber-button">
        <span aria-hidden className="cyber-button__glitch">
          HiDdEn GlItCh MeSsAgE
        </span>
        Yes
        {/* <span aria-hidden className="cyber-button__tag">90%</span> */}
      </div>
      <div className="h-1"></div>
      <div
        className="cyber-button absolute"
        onClick={moveButton}
        // onTouchMove={moveButton}
        style={
          position.left
            ? {
                position: "absolute",
                top: `${position.top}px`,
                left: `${position.left}px`,
              }
            : {}
        }
      >
        <span aria-hidden className="cyber-button__glitch">
          HiDdEn GlItCh MeSsAgE
        </span>
        No
      </div>
    </div>
  );
};

export default App;
