import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/index.module.css";
import r from "../../assets/img/about/r.png";

const style = (index, marginBottom, vh) =>
  (index + 1) % 4 === 0
    ? {
        marginRight: 0,
        marginBottom,
        height: 295 * vh,
      }
    : {
        marginBottom,
        height: 295 * vh,
      };

const Event = ({
  pic,
  title,
  introduction,
  marginBottom,
  index,
  vh,
  ID,
  type,
  onClick,
}) => (
  <Link href={`/article?aid=${ID}`}>
    <div
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      className={styles.event}
      style={style(index, marginBottom * vh, vh)}
    >
      <div className={styles.pic} style={{ height: 141 * vh }}>
        <Image src={pic || r} layout="fill" />
      </div>
      <div
        className="font5"
        style={{ marginTop: 24 * vh, color: "#141414", marginBottom: 4 * vh }}
        title={title}
      >
        {title}
      </div>
      <div className="font1" style={{ color: "#6a6a6a" }} title={introduction}>
        {introduction}
      </div>
      {type !== "活动" ? (
        <div className={styles.tag2 + " font1"} style={{ bottom: 14 * vh }}>
          #{type}
        </div>
      ) : (
        <div className={styles.tag + " font1"} style={{ bottom: 14 * vh }}>
          #{type}
        </div>
      )}
    </div>
  </Link>
);

export default Event;
