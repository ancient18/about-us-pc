import Image from "next/image";
import styles from "./index.module.css";
import vector2 from "../../assets/img/frame3/Vector 43.png";
import { useEffect, useRef } from "react";

export default function Frame3({ vh }) {
  const $body = useRef(null);
  const $img = useRef(null);

  useEffect(() => {
    $img.current.style.height = "26vw";
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
  });

  return (
    <div className={styles.frame} ref={$body}>
      <div className={styles.box}>
        <span
          className={styles.font + " font2"}
          style={{
            top: 167 * vh,
            height: 34 * vh,
          }}
        >
          来看看
        </span>
        <span
          className={styles.font1 + " font3"}
          style={{
            top: 232 * vh,
            height: 50 * vh,
          }}
        >
          我们的产品吧!
        </span>
        <div className={styles.vector2}>
          {/* <Image src={vector2}></Image> */}
          <div className={styles.mySprite} ref={$img}></div>
        </div>
      </div>
    </div>
  );
}
