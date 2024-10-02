import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-scroll'
import Logo from './Logo'
import { menu } from './MenuList'
import Token from './Token'
import Social from './Social'

export default function Footer() {
  const navLinks = menu;
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="footer-top pb-4 d-flex align-items-center gap-4 flex-wrap justify-content-center justify-content-md-between">
              <div className="footer-top-left text-center">
                <Logo />
              </div>
              <div className="footer-top-right d-flex flex-column align-items-end">
                <ul className="d-lg-flex align-items-center mb-3 mb-lg-4">
                  {navLinks.map((link, index) => (
                    <li key={index} className='d-block'>
                      <Link className="heading-link text-uppercase" to={link.to} spy={true} smooth={true} duration={600} offset={0}>{link.btn_title}</Link>
                    </li>
                  ))}
                </ul>
                <Token />
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className="footer-middle py-4 text-center border border-start-0 border-end-0">
              <p className="mb-3 mb-md-4">RISK WARNING: Trading Cryptocurrencies is highly speculative, carries a level of risk and may not be suitable for all investors. You may lose some or all of your invested capital, therefore you should not speculate with capital that you cannot afford to lose. The content on this site should not be considered investment advice. Investing is speculative. When investing your capital is at risk.</p>
              <p>We do not allow users of these countries to participate in the presale: The information on this site is not intended for residents of Afghanistan, Benin, Bhutan, China, Crimea region, Cuba, Iran, Iraq, Syria, USA, Vatican City, or for use by any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.</p>
            </div>
          </Col>
          <Col xs={12}>
            <div className='footer-bottom text-center'>
            <Social className={'justify-content-center'} />
            <p className='mt-3'>Copyright © 2024 recycling - All Rights Reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
