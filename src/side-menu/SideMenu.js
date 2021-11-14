import React, {useState} from "react";
import {styled} from "../styled";
import styles from "./SideMenu.styles.js"
import classNames from "classnames";

function SideMenu({className, onQuery, onFur, onTools, onFoods, onClothes, onBooks, onTech}) {
    const [query, setQuery] = useState("");

    const [fur, setFur] = useState(true);
    const [clothes, setClothes] = useState(true);
    const [tools, setTools] = useState(false);
    const [foods, setFoods] = useState(false);
    const [books, setBooks] = useState(false);
    const [tech, setTech] = useState(false);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(-1);


    return (
        <div className={classNames(className)}>
            <input className="filter" placeholder="Search" value={query} onChange={(val) => {
                setQuery(val.target.value);
                onQuery(val.target.value);
            }
            }/>
            <div className="lupa"></div>
            <div className="types">
                <div className="type">
                    <input type="checkbox" checked={fur} onClick={() => {
                        setFur(!fur);
                        onFur(!fur);
                    }}/>
                    <span onClick={() => {
                        setFur(!fur);
                        onFur(!fur);
                    }}>
                        Furniture
                    </span>
                </div>
                <div className="type">
                    <input type="checkbox" checked={tools} onClick={() => {
                        setTools(!tools);
                        onTools(!tools);
                    }}/>
                    <span onClick={() => {
                        setTools(!tools);
                        onTools(!tools);
                    }}>
                        Tools
                    </span>
                </div>
                <div className="type">
                    <input type="checkbox" checked={foods} onClick={() => {
                        setFoods(!foods);
                        onFoods(!foods);
                    }}/>
                    <span onClick={() => {
                        setFoods(!foods);
                        onFoods(!foods);
                    }}>
                        Food
                    </span>
                </div>
                <div className="type">
                    <input type="checkbox" checked={tech} onClick={() => {
                        setTech(!tech);
                        onTech(!tech);
                    }}/>
                    <span onClick={() => {
                        setTech(!tech);
                        onTech(!tech);
                    }}>
                        Tech
                    </span>
                </div>
                <div className="type">
                    <input type="checkbox" checked={books} onClick={() => {
                        setBooks(!books);
                        onBooks(!books);
                    }}/>
                    <span onClick={() => {
                        setBooks(!books);
                        onBooks(!books);
                    }}>
                        Books
                    </span>
                </div>
                <div className="type">
                    <input type="checkbox" checked={clothes} onClick={() => {
                        setClothes(!clothes);
                        onClothes(!clothes);
                    }}/>
                    <span onClick={() => {
                        setClothes(!clothes);
                        onClothes(!clothes);
                    }}>
                        Clothes
                    </span>
                </div>

            </div>
            <div className="price-range">Price Range</div>
            <div className="money-range">

                <input className="min-money" placeholder="0"/>
                -
                <input className="max-money" placeholder="∞"/>
            </div>

        </div>
    );
}

export default styled(SideMenu)(styles);
