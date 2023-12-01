import style from "../css/modules/TheCard.module.css";
import img from "../assets/imgnot.png";
import TheButton from "./TheButton";
const tagColors = {
    js: "blue",
    php: "purple",
    html: "green",
    css: "red"
};
export default function TheCard({ title, image, content, tags, published }) {
    return (
        <div className={style.CardContainer}>
            <div className={style.Card}>
                <img className={style.imgSize} src={image} alt="immagine" />

                <div className={style.content}>
                    <h3>{title} </h3>
                    <p>{content}</p>
                    <div className={style.tagContainer}>
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className={style.colorTag}
                                style={{ backgroundColor: tagColors[tag] || "gray" }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <TheButton />
                </div>
            </div>

        </div>
    )
}