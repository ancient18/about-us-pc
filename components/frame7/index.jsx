import styles from "./index.module.css";
import vector4 from "../../assets/img/frame7/Vector 43.png";
import Image from "next/image";
import square from "../../assets/网页动效/无限循环.png";
import { useEffect, useRef } from "react";

export default function Frame7({ vh }) {
  const $body = useRef(null);
  const $img = useRef(null);

  useEffect(() => {
    const container = $body.current.parentNode.parentNode;
    const animation = new MutationObserver((mu, ob) => {
      if (container.getAttribute("aria-hidden") === "false") {
        $img.current.style.animation =
          "frame9_myAnimation__A18mr 2.04s steps(1) forwards";
      } else {
        setTimeout(() => {
          $img.current.style.animation = "";
        }, 500);
      }
    });

    animation.observe(container, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    const imgArr = document
      .getElementsByClassName(styles.frame)[0]
      .querySelectorAll("img");

    imgArr.forEach((item) => {
      if (item.className === "square") {
        item.style.height = "16vh";
        item.style.width = "33vh";
        item.style.top = "-5vh";
        item.style.left = "-15vh";
        item.style["min-width"] = "";
        item.style["min-height"] = "";
        item.style["max-width"] = "";
        item.style["max-height"] = "";
        item.parentNode.style.width = "20vh";
        item.parentNode.style.height = "20vh";
        item.parentNode.style["max-width"] = "";
      }
    });
  });
  return (
    <div className={styles.frame} ref={$body}>
      <div
        className={styles.box}
        style={{
          marginTop: 117 * vh,
        }}
      >
        {/* <Image src={vector4}></Image> */}
        <div className={styles.mySprite} ref={$img}></div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <div
          className={"font2"}
          style={{
            height: 34 * vh,
            marginBottom: 31 * vh,
            marginTop: 135 * vh,
          }}
        >
          看看
        </div>
        <div
          className={"font3"}
          style={{
            height: 50 * vh,
          }}
        >
          我们的21年!
        </div>
      </div>
      <div
        className={styles.box2}
        style={{
          marginTop: 129 * vh,
        }}
      >
        <Image className="square" src={square}></Image>
      </div>
    </div>
  );
}
