import React, {useState} from "react";
import {styled} from "../styled";
import styles from "./Dashboard.styles.js"
import classNames from "classnames";
import LeafletMap from "../leaflet-map/LeafletMap";
import SideMenu from "../side-menu/SideMenu";
import Modal from "../modal/Modal";

function Dashboard({className, offers}) {
    const [filteredOffers, setFilteredOffers] = useState(offers);
    const [modal, setModal] = useState(false);
    const [loc, setLoc] = useState("");

    /*
        image=request.FILES['image'],
				location=request.POST.get('location', ''),
   */
    const onSell = (sellName, sellDesc, sellValue, sellTags) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: "Petunia",
                text: sellDesc,
                title: sellName,
                location: loc,
                value: sellValue,
                type: sellTags,
                tags: [sellTags]
            })
        };

        fetch('http://localhost:8000/offers/sell', requestOptions);
    }

    return (
        <div className={classNames(className)}>
            {
                modal && <Modal onSell={onSell} onClose={() => setModal(false)}/>
            }
            <div className="header">
                Collect & Connect
                <div className="profile">
                    <div className="gems" onClick={() => setModal(true)}>
                        20
                    </div>
                    <img onClick={() => setModal(true)} src={"https://images.assetsdelivery.com/compings_v2/viktoriadesign888/viktoriadesign8882006/viktoriadesign888200600086.jpg"} />
                    <div className="account-name">
                        Petunia
                    </div>
                    <div className="circle" />
                </div>
            </div>
            <SideMenu className="sidemenu"
                      onQuery={(val) => {
                setFilteredOffers(offers.filter(e =>
                    val.trim() === "" || e.title.toLowerCase().split(" ").includes(val.toLowerCase()) || e.text.toLowerCase().split(" ").includes(val.toLowerCase())
                ));
            }}
                      onFur={(v) => {
                          if (!v) setFilteredOffers(offers.filter(e => e.tags[0] !== "Furniture"))
                          else setFilteredOffers(offers)
                      }}
                      onTools={(v) => {}}
                      onFoods={(v) => {}}
                      onTech={(v) => {}}
                      onBooks={(v) => {}}
                      onClothes={(v) => {
                          if (!v) setFilteredOffers(offers.filter(e => e.tags[0] !== "Clothes"))
                          else setFilteredOffers(offers)
                      }}
            />
            <LeafletMap offers={filteredOffers} onLoc={setLoc}/>
        </div>
    );
}

export default styled(Dashboard)(styles);
