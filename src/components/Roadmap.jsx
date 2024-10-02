import { Col, Container, Row } from "react-bootstrap";

export default function Roadmap() {
    const roadmapcards = [
        {
            title: "Phase",
            color: "#0F7CE1",
            tbg: "#B0D0E9",
            des: [
                "Finish Presale",
                "List RECYCLING on DEXes",
                "Huge Marketing Campaign",
                "CMC & CoinGecko"
            ]
        },
        {
            title: "Phase",
            color: "#37B0F5",
            tbg: "#8F46EB",
            des: [
                "CEX Listings",
                "Bonus Campaign for RECYLING Holders",
                "NFT Collection",
            ]
        },
        {
            title: "Phase",
            color: "#13B1B2",
            tbg: "#1FB142",
            des: [
                "Tier-1 CEX listings",
                "HUGE Partnerships ",
                "Brewing Real RECYLING",
                "Millions of RECYLING enjoyers"
            ]
        },
        {
            title: "Phase",
            color: "#1FB142",
            tbg: "#8F46EB",
            des: [
                "Making RECYCLING global social currency",
                "Global Mass Adoption",
                "Biggest world Influencers",
                "Massive Rewards for RECYLING Holders",

            ]
        },
    ]
    return (
        <div className="roadmap common-padding">
            <Container>
                <Row className=" justify-content-between align-items-end roadmap-heading ">
                    <Col xs={12} md={5}>
                        <div className="roadmap-title text-center">
                            <h2>RECYLING</h2>
                            <h2 className="title2">roadmap</h2>
                        </div>
                    </Col>
                    <Col xs={12} md={6} >
                        <div className="roadmap-subtitle">
                            <p>Our roadmap outlines the exciting journey ahead RECYCLING From Launch to Future developments</p>
                        </div>
                    </Col>
                </Row>
                <Row className="position-relative z-0" >

                    {
                        roadmapcards.map((item, idx) => (
                            <Col xs={12} md={6} lg={4} xl={3} key={idx} className=" itembottom mb-xl-0" >
                                <div className=" cardbar w-100  position-absolute z-n1">
                                    <div className=" h-100 bar" ></div>
                                </div>
                                <div className="roadmap-cards position-relative z-0">
                                    <div className=" position-absolute z-1 count d-flex justify-content-center align-items-center" style={{ backgroundColor: `${item.tbg}` }} ><span>0{idx + 1}</span></div>
                                    <h5>Phase {idx + 1}</h5>
                                    <div className="bar"></div>
                                    {
                                        item.des.map((items, idx) => (
                                            <ul key={idx} className="d-flex align-items-center gap-1 gap-md-2 mb-2 mb-md-3">
                                                <span>
                                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.4648 24.4834C19.8158 24.4834 24.9643 19.3349 24.9643 12.9838C24.9643 6.63281 19.8158 1.48429 13.4648 1.48429C7.11374 1.48429 1.96521 6.63281 1.96521 12.9838C1.96521 19.3349 7.11374 24.4834 13.4648 24.4834Z" fill="black" stroke="black" strokeWidth="1.26852" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12.2737 25.4844C18.6247 25.4844 23.7732 20.3358 23.7732 13.9848C23.7732 7.63375 18.6247 2.48523 12.2737 2.48523C5.92264 2.48523 0.774109 7.63375 0.774109 13.9848C0.774109 20.3358 5.92264 25.4844 12.2737 25.4844Z" fill={item.color} />
                                                    </svg>
                                                </span>
                                                <li>{items}</li>
                                            </ul>
                                        )
                                        )
                                    }
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}
