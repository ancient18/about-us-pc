import styles from "./index.module.css";
import vector3 from "../../assets/img/frame5/Vector 43 (1).png";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Frame5({ vh }) {

  const $body = useRef(null);
  const $img = useRef(null);

  useEffect(() => {
    const container = $body.current.parentNode.parentNode;
    const animation = new MutationObserver((mu, ob) => {
      if (container.getAttribute('aria-hidden') === "false") {
        $img.current.style.animation = "frame9_myAnimation__A18mr 2.04s steps(1) forwards"
      } else {
        setTimeout(() => {
          $img.current.style.animation = ""
        }, 500)
      }

    })

    animation.observe(container, { attributes: true, childList: true, subtree: true })

  })
  return (
    <div className={styles.frame} ref={$body}>
      <div
        className={styles.font1 + " font2"}
        style={{
          height: 34 * vh,
          top: 147 * vh,
        }}
      >
        关于
      </div>
      <div
        className={styles.font2 + " font3"}
        style={{
          height: 50 * vh,
          top: 212 * vh,
        }}
      >
        我们的部门！
      </div>
      <div
        className={styles.box}
        style={{
          top: 75 * vh,
        }}
      >
        {/* <Image src={vector3}></Image> */}
        <div className={styles.mySprite} ref={$img}></div>
      </div>
    </div>
  );
}
