import React, {useState} from "react";
import {styled} from "../styled";
import styles from "./WelcomePage.styles.js"
import classNames from "classnames";

function WelcomePage({className, login}) {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className={classNames(className, {isLogin})}>
            <div className="background"/>
            <div className="navbar">
                Collect & Connect
            </div>
            <div className="main login">
                <div className="heading">Sign In</div>
                <div className="form-input">
                    <span> Email </span>
                    <input placeholder="example@yahoo.com"/>
                </div>
                <div className="form-input">
                    <span> Password </span>
                    <input type="password"/>
                </div>
                <div className="form-submit">
                    <span onClick={() => setIsLogin(false)}>Register</span>
                    <button onClick={login}>Sign In</button>
                </div>
            </div>
            <div className="main register">
                <div className="heading">Register</div>
                <div className="form-input">
                    <span> Name </span>
                    <input placeholder="Petunia"/>
                </div>
                <div className="form-input">
                    <span> Email </span>
                    <input placeholder="example@yahoo.com"/>
                </div>
                <div className="form-input">
                    <span> Password </span>
                    <input type="password"/>
                </div>
                <div className="form-input">
                    <span> Phone Number  </span>
                    <input type="password"/>
                </div>
                <div className="form-submit">
                    <span onClick={() => setIsLogin(true)}>Log In</span>
                    <button>Register</button>
                </div>
            </div>
        </div>
    );
}

export default styled(WelcomePage)(styles);
