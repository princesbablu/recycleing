import { Col, Container, Row } from "react-bootstrap";


export default function Tokenomics() {
  const tokenData = [
    {
      name: 'Early Contributiors',
      percent: 11,
      color: '#3AA1FF',
    },
    {
      name: 'Treasury & Marketing',
      percent: 22,
      color: '#FF709F',
    },
    {
      name: 'Airdrop',
      percent: 1,
      color: '#FE8F2A',
    },
    {
      name: 'Presale',
      percent: 33,
      color: '#27B531',
    },
    {
      name: 'Liqudity,CEX MM',
      percent: 33,
      color: '#9B5CFE',
    },
  ];
  return (
    <div className='tokenomics common-padding position-relative z-0'>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
          <div className="tokenomics-title text-center">
            <h2 className="text-white mb-3 pb-1 mb-md-4 pb-lg-2 fw-bold">RECYCLINGOMICS</h2>
            <p className="text-white">$Recycling <span className="d-inline-block ms-3 ms-lg-4">555,000,000</span></p>
          </div>
            <div className="tokenomics-percentage d-flex gap-3 gap-md-4 flex-wrap align-items-center justify-content-center">
              {tokenData.map((item, index) => (
                <div className="tokenomics-percentage-item" key={index} data-aos="fade-up" data-aos-duration={'1600'} data-aos-delay={`${index+1}00`}>
                  <p className="d-flex align-items-center gap-2 fw-bold">
                    <span className="d-inline-block rounded-pill" style={{backgroundColor:item.color}}></span>
                    {item.name} - {item.percent}%
                  </p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}