import styles from "./index.module.css";
import Image from "next/image";
import flower from "../../assets/img/frame11/flower.png";
import yinhao from "../../assets/img/frame11/Vector (2).png";
import qrcode1 from "../../assets/img/frame4/qrcode2.png";
import qrcode2 from "../../assets/img/frame11/qrcode.png";
export default function Frame10({ vh }) {
  return (
    <div className={styles.frame}>
      <div className={styles.head} style={{ height: 256 * vh }}>
        <div className={styles.y1} style={{ top: 46 * vh }}>
          <Image src={yinhao} />
        </div>
        <div className={styles.flower}>
          <Image src={flower} />
        </div>
        <div className={styles.y2} style={{ top: 128 * vh }}>
          <Image src={yinhao} />
        </div>
        <div className={styles.font + " font2"} style={{ top: 80 * vh }}>
          我们之所以来到这个世界上 ，是因为上天想让我们遇见 ，一些可爱又有趣的人
          红岩网校工作站期待你的加入！！！
        </div>
      </div>
    </div>
  );
}
