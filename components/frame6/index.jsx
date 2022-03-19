import styles from "./index.module.css";
import square from "../../assets/网页动效/无限循环.png";
import chanpin from "../../assets/网页动效/产品.png";
import shijue from "../../assets/网页动效/视觉.png";
import yidong from "../../assets/网页动效/移动.png";
import yunwei from "../../assets/网页动效/SRE.png";
import web from "../../assets/网页动效/WEB.png";
import Image from "next/image";

import { useEffect } from "react";

export default function Frame6({ vh }) {
  useEffect(() => {
    const imgArr = document
      .getElementsByClassName(styles.frame)[0]
      .querySelectorAll("img");

    imgArr.forEach((item) => {
      if (item.className === "square") {
        item.style.height = "32vh";
        item.style.width = "66vh";
        item.style.top = "6vh";
        item.style.left = "-29vh";
        item.style["min-width"] = "";
        item.style["min-height"] = "";
        item.style["max-width"] = "";
        item.style["max-height"] = "";
        item.parentNode.style.width = "40vh";
        item.parentNode.style.height = "25vh";
      }

      item.addEventListener("mouseover", () => {
        switch (item.className) {
          case "web":
            item.src = web.src;
            break;
          case "chanpin":
            item.src = chanpin.src;
            break;
          case "yidong":
            item.src = yidong.src;
            break;
          case "yunwei":
            item.src = yunwei.src;
            break;
          case "shijue":
            item.src = shijue.src;
            break;
          default:
            return;
        }
      });
    });
  });

  return (
    <div className={styles.frame} style={{ paddingTop: 118 * vh }}>
      <div
        className={styles.square}
        style={{
          height: 205 * vh,
        }}
      >
        <div
          className={styles.pic1}
          style={{ marginTop: 28 * vh, marginBottom: 13 * vh }}
        >
          <Image className="chanpin" src={chanpin}></Image>
        </div>
        <div
          className={styles.title2 + " font2"}
          style={{ marginBottom: 4 * vh }}
        >
          产品策划及运营部
        </div>
        <div className={styles.title2 + " font1"}>“创意聚集港，产品造梦厂”</div>
      </div>
      <div
        className={styles.square}
        style={{
          height: 205 * vh,
        }}
      >
        <div
          className={styles.pic2}
          style={{ marginTop: 20 * vh, marginBottom: 4 * vh }}
        >
          <Image className="shijue" src={shijue}></Image>
        </div>
        <div
          className={styles.title3 + " font2"}
          style={{ marginBottom: 4 * vh }}
        >
          视觉设计部
        </div>
        <div className={styles.title3 + " font1"}>
          “色彩涂抹梦想，画笔创造未来”
        </div>
      </div>
      <div className={styles.fragment1} style={{ height: 205 * vh }}></div>
      <div
        className={styles.square}
        style={{
          height: 205 * vh,
        }}
      >
        <div
          className={styles.pic1}
          style={{ marginTop: 28 * vh, marginBottom: 16 * vh }}
        >
          <Image className="yidong" src={yidong}></Image>
        </div>
        <div
          className={styles.title3 + " font2"}
          style={{ marginBottom: 4 * vh }}
        >
          移动开发部
        </div>
        <div className={styles.title3 + " font1"}>“方寸间世界的创造者“</div>
      </div>
      <div className={styles.fragment2} style={{ height: 205 * vh }}></div>
      <div className={styles.square2} style={{ height: 205 * vh }}>
        <Image className="square" src={square}></Image>
      </div>
      <div
        className={styles.square}
        style={{
          height: 205 * vh,
        }}
      >
        <div
          className={styles.pic2}
          style={{ marginTop: 9 * vh, marginBottom: 8 * vh }}
        >
          <Image className="web" src={web}></Image>
        </div>
        <div
          className={styles.title3 + " font2"}
          style={{ marginBottom: 4 * vh }}
        >
          WEB研发部
        </div>
        <div className={styles.title3 + " font1"}>
          “WEB，实现互联网的不可思议”
        </div>
      </div>
      <div
        className={styles.square}
        style={{
          height: 205 * vh,
        }}
      >
        <div
          className={styles.pic1}
          style={{ marginTop: 28 * vh, marginBottom: 13 * vh }}
        >
          <Image className="yunwei" src={yunwei}></Image>
        </div>
        <div
          className={styles.title3 + " font2"}
          style={{ marginBottom: 4 * vh }}
        >
          运维安全部
        </div>
        <div className={styles.title3 + " font1"}>“运维安全在，网校没意外”</div>
      </div>
    </div>
  );
}
