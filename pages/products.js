import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";
import { getBannar, getCard, getEasyInfo } from "../api";
import Event from "../components/Event";
import styles from "../styles/product.module.css";
import Image from "next/image";


const types = ["全部", "活动", "技术分享"];


const Product = ({ picUrl, title, article, vh }) => (
	<div className={styles.product} style={{ height: 134 * vh }}>
		<div className={styles.pic2} style={{ top: 24 * vh }}>
			<Image src={picUrl} layout="fill" />
		</div>
		<div
			className="font5"
			style={{ marginTop: 31 * vh, color: "#141414", marginBottom: 4 * vh }}
			title={title}
		>
			{title}
		</div>
		<div className="font1" style={{ color: "#2e2e2e" }} title={article}>
			{article}
		</div>
	</div>
);

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

export default function Products({ vh, state }) {
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
			<div className={styles.box2} >
				<div className={styles.h1 + " font2"} style={{ paddingTop: 40 * vh }} >
					<span />
					<div >活动产品</div>
				</div>
				<div
					className={styles.event_box}
					style={{ marginTop: 48 * vh }}
				>
					{card.slice(0, 6).map((item, index) => (
						<Product
							picUrl={item.pic}
							title={item.little_title}
							article={item.content}
							key={index}
							vh={vh}
						/>
					))}
				</div>
			</div >
		</div>)
}
