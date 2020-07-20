import React from 'react';
import Logo from '../logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default class header extends React.Component {
    render() {
        return (
            <div id="header" style={{ height: 80 }}>
                <div className="content row aiCenter pv16">
                    <div className="mr40">
                        <a href="#home">
                            <Logo width={171} height={41} />
                        </a>
                    </div>
                    <div className="f1 mvauto row mr40">
                        <input placeholder="O que está procurando?" className="f1 pb0 ph20 fw-regular input-search" style={{ maxHeight: 40 }} />
                        <a href="#" className="tc-dark" style={{ marginLeft: -16 }}>
                            <FontAwesomeIcon icon={faSearch} />
                        </a>
                    </div>
                    <div className="mvauto mr16">
                        <a href="#profile" className="tc-dark">
                            <div className="row aiCenter tc-grey">
                                <FontAwesomeIcon icon={faUser} className="mr8 " />
                                <span className="fw-regular fs-regular">Minha Conta</span>
                            </div>
                        </a>
                    </div>
                    <div className="mvauto">
                        <a href="#cart" className="tc-dark">
                            <div className="row aiCenter tc-grey">
                                <FontAwesomeIcon icon={faShoppingCart} className="mr8" />
                                <div className="bCircle bgc-red ovfHidden">
                                    <span className="fw-regular fs-small tc-white tcenter f1" style={{ height: 16, width: 16 }}>{1}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div >
        );
    }
}
