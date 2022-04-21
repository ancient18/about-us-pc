import Image from "next/image";
import styles from "./index.module.css";
import vector2 from "../../assets/img/frame3/Vector 43.png";
import img1 from "../../assets/线条动画/img1.webp"
import { useEffect, useRef, useState } from "react";

export default function Frame3({ vh }) {
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
      <div className={styles.box}>
        <span
          className={styles.font + " font2"}
          style={{
            top: 207 * vh,
            height: 34 * vh,
          }}
        >
          来看看
        </span>
        <span
          className={styles.font1 + " font3"}
          style={{
            top: 272 * vh,
            height: 50 * vh,
          }}
        >
          我们的产品吧!
        </span>
        <div className={styles.img1} ref={$img}>
          {<Image src={visible ? img1 : vector2}></Image>}
        </div>
      </div>
    </div>
  );
}
