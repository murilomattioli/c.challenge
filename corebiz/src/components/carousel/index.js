import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Stars from '../stars';
import Button from '../button';

export default class ProductsCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            pages: [],
            change: -1,
        };
    }

    componentDidMount() {
        this.getAll();
    }

    getAll() {
        global.postman.getAll().then(res => {
            console.log("sucesso ao retornar dados carousel", res)
            let obj = this.state;
            obj.products = res;
            obj.pages = this.itemsPagination(res);
            obj.change += 1;
            this.carousel = obj;
            this.setState({ products: obj.products, pages: obj.pages, change: obj.change + 1 })
        }).catch(error => {
            console.log("erro ao retornar dados", error)
        })
    }

    // função para paginação de items no carousel
    itemsPagination(items = []) {
        let { itemsInPage = 4 } = this.props;
        let allPages = [];
        let page = 0;
        let pages = [];
        for (let i = 0; i < items.length; i++) {
            page++;
            pages.push(items[i]);
            if (page == itemsInPage) {
                page = 0;
                allPages.push(pages);
                pages = [];
            }
            if (i == items.length - 1 && page < itemsInPage && pages.length > 0) {
                allPages.push(pages);
            }
        }
        return allPages;
    }

    moeda(value) {
        let str = "" + value;
        let newStr = str.substr(0, str.length - 2);
        let restStr = str.substr(str.length - 2, str.length);
        let returnString = newStr + ',' + restStr;
        return returnString;
    }

    render() {
        return (
            <Carousel className="f1 jCenter" showStatus={false} showArrows={true} showThumbs={true} showIndicators={false} verticalSwipe={true} {...this.props}>
                {this.state.pages.map((item, index) => {
                    let products = item;
                    return (
                        <div key={`page${index - 1}`} className="row bgc-white">
                            {products.map((item, index) => {
                                let lastItem = {}
                                if (index == 3) lastItem = { marginRight: 0 };
                                return (
                                    <div key={`product${index}`} className="mr40 product f1" style={{ ...lastItem }}>
                                        <div className="f1 mb8">
                                            <img src={item.imageUrl} />
                                        </div>
                                        <div className="mb8">
                                            <span className="fs-small tc-grey tcenter">{item.productName}</span>
                                        </div>
                                        <div className="mb8">
                                            <Stars stars={item.stars} />
                                        </div>
                                        <div className="fw-extrabold mb8">
                                            <span className="mr8 fs-def">{'por '}
                                                <span className="fs-big">R$ {this.moeda(item.price)}</span>
                                            </span>
                                        </div>
                                        <div className="mh16 mb16 product-button">
                                            <Button text="COMPRAR" size={32} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </Carousel>
        );
    }
};