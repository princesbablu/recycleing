import { Col, Container, Row } from "react-bootstrap";
import card1 from "../assets/img/product1.png"
import card2 from "../assets/img/product2.png"
import card3 from "../assets/img/product3.png"
export default function Product() {
    const productcards=[
        {
            title: "Global RECYLING invtiatives",
            des:"The struggle for helping the planet’s ecology will never end especially with global warming. We aim for sustainable projects that prevent planet pollution and environmental conservation",
            img:card1
        },
        {
            title: "donate $recycling nft series",
            des:"The $RECEYLING NFT Series is a way to be a charitable person and have a chance to earn even more then you donated! Being a great be rewarded! ",
            img:card2
        },
        {
            title: "Unique game saving the $recycling",
            des:"$RECYCLING introduces a unique and engaging game mechanic inspired by the states of the recycling - Saving (Unique staking system) with charity and rewards.",
            img:card3
        },
    ]
    return (
        <div className="product common-padding">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={6} lg={8}>
                        <div className="product-title text-center">
                            <h2  >Recycling Future Product</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        productcards.map((item,idx)=>(
                            <Col xs={12} xl={idx==2?12:6} key={idx} className={`mb-3 mb-md-4`} >
                            <div className={`${idx==2 ? " ":""}  product-cards`}>
                                <div className="product-cards-text d-md-flex  align-items-center ">
                                    <div className="product-cards-text-image mb-3 mb-md-0 "><img src={item.img} alt="" /></div>
                                    <div>
                                        <h3 className={`${idx==2 ? "titlewidth":""}   mb-2 mb-md-3`}>{item.title}</h3>
                                        <p className={`${idx==2 ? "deswidth":""}   mb-3 mb-md-3 mb-lg-4`}>{item.des}</p>
                                        <button className="productbtn" >Coming soon</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}
