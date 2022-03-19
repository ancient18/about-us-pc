import styles from "./index.module.css";
import Image from "next/image";
import logo from "../../assets/img/frame11/logo.png";

export default function Footer({ vh }) {
  return (
    <div className={styles.foot} style={{ height: 260 * vh }}>
      <div className={styles.logo} style={{ top: 73 * vh }}>
        <Image src={logo} />
      </div>
      <div className={styles.link} style={{ top: 64 * vh }}>
        <div>重邮小帮手</div>
        <div>官方QQ</div>
        <div>|</div>
        <div>媒体站</div>
        <div>掌上重邮</div>
        <div>开源镜像站</div>
      </div>
      <div className={styles.imf} style={{ top: 131 * vh }}>
        <div className="font1">Email：redrock@cqupt.edu.cn(023-62461084)</div>
        <div className="font1">
          地址：重庆市南岸区崇文路2号（重庆邮电大学）400065
        </div>
        <div className="font1">copyright@红岩网校工作站</div>
      </div>
    </div>
  );
}
