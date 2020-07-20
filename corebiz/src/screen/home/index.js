import React from 'react';
import ProductsCarousel from '../../components/carousel';
import banner from '../../assets/images/banner.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Home extends React.Component {
    state = {
        products: []

    }

    renderItemBanner(array = [1,1,1]) {
        let arr = [], obj = null;
        arr = array;
        obj = (arr.map((item, index) => {
            return (
                <div>
                    <div
                        className={`mtauto mbauto j-center pointer`}
                        style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, marginLeft: '15vw', maxWidth: '25vw', }}
                    >
                        <span className={`fw-black tc-white fs-fsbig tleft mb16`}>
                            {"Olá, o que você está buscando?"}
                        </span>
                        <span className={`fw-black tc-white fs-extraforce tleft `}>
                            {"Criar ou migrar seu"}
                        </span>
                        <span className={`fw-black tc-white fs-extraforce tleft `}>
                            {"e-commerce?"}
                        </span>
                    </div>
                    <img src={banner} alt="Banner" height={400} />
                </div>
            )
        }));
        return obj;
    }

    render() {
        let itemsInPage = 4;
        let width = window.innerWidth;
        if (width < 390) itemsInPage = 2;
        return (
            <div className="bgc-white f1" style={{ ...{ height: 250 } }}>
                <div className="mb24">
                    <Carousel
                        className="f1 jCenter"
                        showStatus={false}
                        showArrows={true}
                        showThumbs={false}
                        showIndicators={true}
                        verticalSwipe={false}
                        autoPlay={true}
                        {...this.props}
                    >
                        {this.renderItemBanner()}
                    </Carousel>
                </div>
                <div className="content">
                    <div className="mb20">
                        <span className="tc-primary fw-black fs-big mb4" >Mais Vendidos</span>
                        <span className="bgc-grey-medium bRad16 ovfHidden" style={{ height: 4, width: 60 }} />
                    </div>
                    <div>
                        <ProductsCarousel itemsInPage={itemsInPage} />
                    </div>
                </div>
            </div>
        );
    }
}