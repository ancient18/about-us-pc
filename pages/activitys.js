import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";
import { getBannar, getCard, getEasyInfo } from "../api";
import Event from "../components/Event";
import styles from "../styles/index.module.css";


const types = ["全部", "活动", "技术分享"];


export async function getStaticProps(ctx) {
	const data = await Promise.all([getBannar(), getCard(), getEasyInfo()]);
	return {
		props: {
			state: {
				bannar: data[0].figures,
				card: data[1].cards,
				easyInfo: data[2].essays,
			},
		},
	};
}

export default function Activity({ vh, state }) {
	const [type, setType] = useState("全部");
	const router = useRouter();
	const [href, setHref] = useState("")

	const { bannar, easyInfo, card } = state;

	useEffect(() => {
		setHref(window.location.href);
	}, [router.query]);

	const filerPicUrls = easyInfo.filter((item) => {
		if (type === "全部") return true;
		else if (type === "活动") return item.type === type;
		else return item.type !== "活动";
	});


	return (
		<div style={{ backgroundColor: "#fafafa" }}>
			<div className={styles.box2} style={{ paddingTop: 40 * vh }}>
				<div className={styles.h1 + " font2"}>
					<span />
					<div>近期活动</div>
				</div>
				<div
					className={styles.types + " font2"}
					style={{ marginTop: 36 * vh }}
				>
					{types.map((item, i) => {
						return (
							<div
								className={item === type ? styles.select : ""}
								key={i}
								onClick={() => setType(item)}
							>
								{item}
							</div>
						);
					})}
				</div>
				<div
					className={styles.event_box}
					style={{ marginTop: 48 * vh }}
				>
					{filerPicUrls.map((item, index) => {
						return (
							<Event
								{...item}
								key={index}
								marginBottom={28}
								index={index}
								vh={vh}
							/>
						);

					})}

				</div>
			</div >
		</div>)
}
