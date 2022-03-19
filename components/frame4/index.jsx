import Image from "next/image";
import styles from "./index.module.css";
import arrow from "../../assets/img/frame4/arrow.png";
import bolikuai2 from "../../assets/img/frame4/bolikuai2.png";
import p1 from "../../assets/img/frame4/1.png";
import qrcode1 from "../../assets/img/frame4/qrcode1.png";
import qrcode2 from "../../assets/img/frame4/qrcode2.png";
import p2 from "../../assets/img/frame4/2.png";
import p3 from "../../assets/img/frame4/3.png";
import p4 from "../../assets/img/frame4/4.png";
import xingyun from "../../assets/img/frame4/xingyun.png";
import xingyun2 from "../../assets/img/frame4/xingyun2.png";
import { useState } from "react";
export default function Frame4({ vh }) {
  const [choose, setChoose] = useState(0);

  const createNav = () => {
    const navs = [];
    for (let i = 0; i < 5; i++) {
      navs.push(
        <div
          key={i}
          className={choose === i ? styles.active : ""}
          onClick={() => {
            setChoose(i);
          }}
        ></div>
      );
    }
    return navs;
  };
  return (
    <div className={styles.frame4}>
      <div
        className={styles.p1}
        style={{
          transform: `translate(${-100 * choose}%)`,
        }}
      >
        <div
          className={styles.p1box}
          style={{
            height: 280 * vh,
            top: 200 * vh,
          }}
        >
          <div
            className={styles.font5 + " font3"}
            style={{
              height: 50 * vh,
            }}
          >
            掌上重邮
          </div>
          <div
            className={styles.font6 + " font4"}
            style={{
              height: 24 * vh,
              top: 54 * vh,
            }}
          >
            “掌上重邮APP，你的重邮信息资源整合站!”
          </div>
          <div
            className={styles.font7 + " font4"}
            style={{
              height: 96 * vh,
              top: 120 * vh,
            }}
          >
            校园行程表和课表帮你轻松规划在校每一天；重邮地图带你游历美丽校园；
            一体化查询系统搞定你的志愿时长、考试成绩，校内信息查询；
            更有邮问，和邮子一同谈天说地，畅聊校园。精彩校园生活，尽在掌上重邮。
          </div>
          <div
            className={styles.font8 + " font1"}
            style={{
              height: 20 * vh,
              top: 240 * vh,
            }}
          >
            了解更多：www. .com
          </div>
          <div
            className={styles.arrow}
            style={{
              top: 268 * vh,
            }}
          >
            <Image src={arrow}></Image>
          </div>
        </div>
        <div
          className={styles.bolikuai2}
          style={{
            top: 526 * vh,
          }}
        >
          <Image src={bolikuai2}></Image>
        </div>
        <div
          className={styles.back}
          style={{
            height: 558 * vh,
          }}
        ></div>
        <div
          className={styles.zu1}
          style={{
            top: 113 * vh,
          }}
        >
          <Image src={p1}></Image>
        </div>
        <div
          className={styles.xingyun}
          style={{
            top: 150 * vh,
          }}
        >
          <Image src={xingyun}></Image>
        </div>
        <div
          className={styles.xingyun2}
          style={{
            top: 526 * vh,
          }}
        >
          <Image src={xingyun2}></Image>
        </div>
      </div>
      <div
        className={styles.p1}
        style={{
          transform: `translate(${-100 * choose}%)`,
        }}
      >
        <div
          className={styles.xingyun2}
          style={{
            top: 526 * vh,
          }}
        >
          <Image src={xingyun2}></Image>
        </div>
        <div
          className={styles.p2box}
          style={{
            height: 304 * vh,
            top: 200 * vh,
          }}
        >
          <div
            className={styles.font5 + " font3"}
            style={{
              height: 50 * vh,
            }}
          >
            重邮帮
          </div>
          <div
            className={styles.font6 + " font4"}
            style={{
              height: 24 * vh,
              top: 54 * vh,
            }}
          >
            “ 重邮帮，你的专属校园活动管家! ”
          </div>
          <div
            className={styles.font7 + " font4"}
            style={{
              height: 96 * vh,
              top: 120 * vh,
            }}
          >
            在此了解最详细的校园活动信息，快速参与各种校园活动。一站式志愿报名服务，更快发现更多志愿服务；便携影票系统，体验线上抢票的惊心动魄。重邮帮，帮你发现大学生活的更多可能。
          </div>
          <div className={styles.qrcode1}>
            <Image src={qrcode1}></Image>
          </div>
        </div>
        <div
          className={styles.bolikuai3}
          style={{
            top: 557 * vh,
          }}
        >
          <Image src={bolikuai2}></Image>
        </div>
        <div
          className={styles.bolikuai4}
          style={{
            top: 136 * vh,
          }}
        >
          <Image src={bolikuai2}></Image>
        </div>
        <div
          className={styles.back2}
          style={{
            height: 712 * vh,
            top: -104 * vh,
          }}
        ></div>
        <div
          className={styles.zu2}
          style={{
            top: 186 * vh,
          }}
        >
          <Image src={p2}></Image>
        </div>
      </div>
      <div
        className={styles.p1}
        style={{
          transform: `translate(${-100 * choose}%)`,
        }}
      >
        <div
          className={styles.xingyun2}
          style={{
            top: 526 * vh,
          }}
        >
          <Image src={xingyun2}></Image>
        </div>
        <div
          className={styles.p3box}
          style={{
            height: 384 * vh,
            top: 200 * vh,
          }}
        >
          <div
            className={styles.font9 + " font3"}
            style={{
              height: 50 * vh,
            }}
          >
            重邮小帮手
          </div>
          <div
            className={styles.font6 + " font4"}
            style={{
              height: 24 * vh,
              top: 54 * vh,
            }}
          >
            “ 重邮粉丝量最大的全功能微社区平台! ”
          </div>
          <div
            className={styles.font7 + " font4"}
            style={{
              height: 96 * vh,
              top: 120 * vh,
            }}
          >
            重邮小帮手是红岩网校工作站在重庆邮电大学团委指导下运营的公众号平台。作为重邮校园全功能微社区平台，重邮小帮手为邮子们提供了查询服务、丰富精彩的推文、寓教于乐的H5等。同时也在校团委的领导和支持下，积极推动校园媒体融合发展。
          </div>
          <div
            className={styles.qrcode2}
            style={{
              top: 240 * vh,
            }}
          >
            <Image src={qrcode2}></Image>
          </div>
          <div className={styles.bolikuai5}>
            <Image src={bolikuai2}></Image>
          </div>
        </div>

        <div
          className={styles.back3}
          style={{
            height: 698.78 * vh,
            top: -50.31 * vh,
          }}
        ></div>
        <div
          className={styles.zu3}
          style={{
            top: 158 * vh,
          }}
        >
          <Image src={p3}></Image>
        </div>
      </div>
      <div
        className={styles.p1}
        style={{
          transform: `translate(${-100 * choose}%)`,
        }}
      >
        <div
          className={styles.xingyun2}
          style={{
            top: 526 * vh,
          }}
        >
          <Image src={xingyun2}></Image>
        </div>
        <div
          className={styles.p4box}
          style={{
            height: 264 * vh,
            top: 200 * vh,
          }}
        >
          <div
            className={styles.font10 + " font3"}
            style={{
              height: 54 * vh,
            }}
          >
            开源镜像站
          </div>
          <div
            className={styles.font6 + " font4"}
            style={{
              height: 24 * vh,
              top: 54 * vh,
            }}
          >
            “ 为邮子提供海量开源镜像服务! ”
          </div>
          <div
            className={styles.font7 + " font4"}
            style={{
              height: 72 * vh,
              top: 120 * vh,
            }}
          >
            重邮开源软件镜像站面向全国提供服务，致力于在重邮校内以及西南地区提供高质量的开源软件镜像、Linux
            镜像源服务，帮助邮子们和广大开源爱好者更方便地获取开源软件。
          </div>
          <div
            className={styles.font11 + " font1"}
            style={{
              height: 20 * vh,
              top: 216 * vh,
              textAlign: "end",
            }}
          >
            http://mirrors.cqupt.edu.cn/
          </div>
          <div
            className={styles.arrow2}
            style={{
              top: 252 * vh,
            }}
          >
            <Image src={arrow}></Image>
          </div>
        </div>
        <div
          className={styles.bolikuai6}
          style={{
            top: 506 * vh,
          }}
        >
          <Image src={bolikuai2}></Image>
        </div>
        <div
          className={styles.bolikuai4}
          style={{
            top: 136 * vh,
          }}
        >
          <Image src={bolikuai2}></Image>
        </div>
        <div
          className={styles.back4}
          style={{
            height: 583.89 * vh,
            top: -31.44 * vh,
          }}
        ></div>
        <div
          className={styles.zu4}
          style={{
            top: 125 * vh,
          }}
        >
          <Image src={p4}></Image>
        </div>
        <div
          className={styles.xingyun}
          style={{
            top: 158 * vh,
          }}
        >
          <Image src={xingyun}></Image>
        </div>
      </div>
      <div
        className={styles.p1}
        style={{
          transform: `translate(${-100 * choose}%)`,
        }}
      >
        <div
          className={styles.p5box}
          style={{
            height: 280 * vh,
            top: 200 * vh,
          }}
        >
          <div
            className={styles.font5 + " font3"}
            style={{
              height: 50 * vh,
            }}
          >
            媒体站
          </div>
          <div
            className={styles.font6 + " font4"}
            style={{
              height: 24 * vh,
              top: 54 * vh,
            }}
          >
            “ 属于重邮人的媒体资源整合站! ”
          </div>
          <div
            className={styles.font7 + " font4"}
            style={{
              height: 96 * vh,
              top: 120 * vh,
            }}
          >
            这里为邮子们提供了丰富的高清影视资源、音乐音频、网络课程等多媒体资源的浏览与下载，为你的大学生活增添一抹别样色彩。
          </div>
          <div
            className={styles.font8 + " font1"}
            style={{
              height: 20 * vh,
              top: 192 * vh,
            }}
          >
            了解更多：www. .com
          </div>
          <div
            className={styles.arrow}
            style={{
              top: 234 * vh,
            }}
          >
            <Image src={arrow}></Image>
          </div>
        </div>
        <div
          className={styles.bolikuai2}
          style={{
            top: 526 * vh,
          }}
        >
          <Image src={bolikuai2}></Image>
        </div>

        <div
          className={styles.zu1}
          style={{
            top: 113 * vh,
          }}
        >
          <Image src={p1}></Image>
        </div>
        <div
          className={styles.xingyun}
          style={{
            top: 150 * vh,
          }}
        >
          <Image src={xingyun}></Image>
        </div>
        <div
          className={styles.xingyun2}
          style={{
            top: 526 * vh,
          }}
        >
          <Image src={xingyun2}></Image>
        </div>
      </div>
      <div
        className={styles.producet_nav}
        style={{
          top: 648 * vh,
          height: 12 * vh,
        }}
      >
        {createNav()}
      </div>
    </div>
  );
}
