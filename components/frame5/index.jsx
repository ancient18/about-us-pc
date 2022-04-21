import styles from "./index.module.css";
import vector3 from "../../assets/img/frame5/Vector 43 (1).png";
import img2 from "../../assets/线条动画/img2.webp"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Frame5({ vh }) {

  const $body = useRef(null);
  const $img = useRef(null);

  let [visible, setVisible] = useState(false);

  useEffect(() => {
    $img.current.querySelectorAll("span").forEach((item) => {
      item.style.width = "100%";
      item.style.height = "100%";
    })

    const container = $body.current.parentNode.parentNode;
    const animation = new MutationObserver((mu, ob) => {
      if (container.getAttribute("aria-hidden") === "false") {
        $img.current.style.display = "block";
        setVisible(true);
      }
      else {
        setTimeout(() => {
          setVisible(false);
          $img.current.style.display = "none";
        }, 500);
      }
    });

    animation.observe(container, {
      attributes: true,
      childList: true,
      subtree: true,
    });
  }, []);
  return (
    <div className={styles.frame} ref={$body}>
      <div
        className={styles.font1 + " font2"}
        style={{
          height: 34 * vh,
          top: 177 * vh,
        }}
      >
        关于
      </div>
      <div
        className={styles.font2 + " font3"}
        style={{
          height: 50 * vh,
          top: 242 * vh,
        }}
      >
        我们的部门！
      </div>
      <div
        className={styles.box}
        ref={$img}
      >
        {<Image src={visible ? img2 : vector3}></Image>}
      </div>
    </div>
  );
}
