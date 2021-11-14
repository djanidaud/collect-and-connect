import React, {useState} from "react";
import {styled} from "../styled";
import styles from "./Modal.styles.js"
import classNames from "classnames";
import Carousel from "../carousel/Carousel";

function Modal({className, onClose, onSell}) {
    const [sellName, setSellName] = useState("");
    const [sellDesc, setSellDesc] = useState("");
    const [sellValue, setSellValue] = useState("");
    const [sellTags, setSellTags] = useState("");

    return (
        <div className={classNames(className)}>
            <div className="overlay" onClick={onClose} />
            <div className="modal-body">
                <Carousel selectedSlide={0}>
                    <div style={{height:"100%"}}>
                        <img src="https://i.pinimg.com/originals/bb/5e/ee/bb5eeee907c3439c86eb4f21456bd3bd.png" />
                        <div className="title">Sell Item</div>
                        <div className={"form"}>
                            <div>
                                <span> Name </span> <input value={sellName} onChange={(e) => setSellName(e.target.value)} placeholder="Banana"/>
                            </div>
                            <div>
                                <span>Description </span> <input value={sellDesc} onChange={(e) =>setSellDesc(e.target.value)} />
                            </div>
                            <div>
                                <span>Value </span> <input value={sellValue} onChange={(e) =>setSellValue(e.target.value)} placeholder="10"/>
                            </div>
                            <div>
                                <span>Tags </span> <input value={sellTags} onChange={(e) =>setSellTags(e.target.value)} placeholder="Food"/>
                            </div>
                            <button onClick={() => {
                                onSell(sellName, sellDesc, sellValue, sellTags);
                                onClose();
                            }}>Finish</button>
                        </div>
                    </div>
                    <div style={{height:"100%", display:"flex", flexDirection:"column", justifyContent: "center"}}>
                        <img src="https://img.freepik.com/free-vector/social-team-helping-charity-sharing-hope_74855-6660.jpg?size=626&ext=jpg" />
                        <div className="title" style={{ left:"85px", paddingTop: "20px"}}>Make a Donation</div>
                        <div className={"form"}>
                            <button>Continue</button>
                        </div>
                    </div>
                </Carousel>

            </div>
        </div>
    );
}

export default styled(Modal)(styles);
