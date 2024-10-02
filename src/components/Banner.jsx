
import { Container, Row, Col } from 'react-bootstrap';
import { FaEye } from "react-icons/fa";
import sericon1 from '../assets/img/bnrsricon1.png'
import sericon2 from '../assets/img/bnrsricon2.png';
import bnrserlogo1 from '../assets/img/bnrserlogo1.png';
import bnrserlogo2 from '../assets/img/bnrserlogo2.png';

import btn_img_1 from '../assets/img/btnimg1.png';
import btn_img_2 from '../assets/img/btnimg2.png';
import btn_img_3 from '../assets/img/btnimg3.png';

import banner_img from '../assets/img/banner-img.png'
import notice from '../assets/img/banner-notice.png'

import dexTools from '../assets/img/dextools.png'
import dex from '../assets/img/dex.png'

import banner_bg from '../assets/img/banner-bg-shape.png'

export default function Banner() {
  return (
    <div className='banner position-relative z-1'>
      <div className="banner-shape w-100 h-auto position-absolute top-0 start-0">
        <svg className='w-100 h-auto' width="1728" height="274" viewBox="0 0 1728 274" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-349.315 220.494C-321.476 216.232 -297.539 200.73 -270.657 206.026C-254.185 209.271 -247.204 218.904 -235.204 225.464C-206.494 241.159 -152.588 236.231 -120.954 222.043C-89.3209 207.855 -72.5857 187.314 -50.7052 169.024C-38.3209 158.672 -18.0945 147.651 5.22482 150.393C33.9956 153.776 49.8938 176.674 78.1413 172.308C97.5269 169.311 104.347 154.385 124.576 153.71C132.848 153.434 140.513 155.84 146.897 158.511C172.125 169.064 186.724 184.603 207.333 197.463C227.941 210.323 260.54 221.159 291.915 216.412C306.048 214.274 317.668 209.273 328.833 204.402C364.258 188.944 397.282 185.756 431.761 169.761C455.543 158.729 494.011 160.158 522.43 167.9C550.849 175.641 572.349 176.37 595.854 187.553C619.359 198.736 647.644 208.994 679.906 209.645C716.071 210.374 748.609 198.923 775.214 186.526C801.818 174.128 826.687 169.912 860.01 162.774C888.008 156.777 920.592 156.458 949.028 161.904C970.984 166.109 990.02 163.479 1011.47 168.308C1048.11 176.558 1091.41 176.46 1128.45 168.882C1162.37 161.942 1191.83 147.504 1231.09 157.902C1272.77 168.939 1272.3 200.763 1307.94 216.289C1341.71 231.001 1395.74 225.219 1431.01 211.434C1466.28 197.65 1489.75 186.703 1520.36 170.32C1536.37 161.753 1557.14 153.663 1580.38 154.674C1609.17 155.925 1627.7 170.05 1643.96 182.116C1664.58 197.41 1694.94 204.062 1731.32 201.906C1789.96 198.43 1810.88 152.683 1869.73 150.244C1901.99 148.906 1930.27 162.413 1942.66 177.523C1955.04 192.631 1955.95 209.4 1961.53 225.507C1967.12 241.614 1979.33 258.504 2006.48 267.402C2027.09 274.154 2053.23 275.024 2077.31 271.992V65.8127V0H-349.315V220.494Z" fill="white" />
        </svg>
      </div>
      <div className="banner-bg w-100 h-auto position-absolute top-0 start-0 z-n1">
        <img className='w-100 h-auto' src={banner_bg} alt="" />
      </div>
      <div className="banner-top">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="banner-content text-center">
                <h1 className='fw-bold'>
                  <span className='d-block'>MISSED BITCOIN?</span>
                  <span className='d-block'>don’t miss</span>
                  <span className='d-block'>$Recycling coin</span>
                </h1>
                <div className="banner-img position-relative z-1">
                  <img src={banner_img} alt="" />
                  <div className="notice position-absolute top-0 start-0"><img src={notice} alt="" /></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="banner-bottom mt-5">
        <Container>
          <Row>
            <div className="banner-service-wrapper flex-wrap d-flex align-item-start justify-content-center gap-4">
              <div className="single-item">
                <div className="box-item">
                  <figure className="icon">
                    <img src={sericon1} alt="" />
                  </figure>
                  <figure className="logo">
                    <img src={bnrserlogo1} alt="" />
                  </figure>
                  <h3>BUY on Dex</h3>
                  <p className='fw-bold'>Use your Phantom wallet and connect to
                  Raydium or Jupiter to buy $RECL</p>
                  <div className="btns">
                    <a href="#" className='boxed-btn one'>
                      <img src={btn_img_1} alt="" />
                    </a>
                    <a href="#" className='boxed-btn two'>
                      <img src={btn_img_2} alt="" />
                    </a>
                    <a href="#" className='boxed-btn three'>
                      <img src={btn_img_3} alt="" />
                    </a>
                  </div>
                </div>
                <div className="box-item chart mt-4">
                  <p><a><FaEye /></a> Track $EARTH CHART:</p>
                  <div className="socials d-flex align-items-center gap-3">
                    <a href="#" className='social-icon'>
                      <img src={dexTools} alt="" />
                    </a>
                    <a href="#" className='social-icon'>
                      <img src={dex} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="single-item box-item cex">
                <figure className="icon">
                  <img src={sericon2} alt="" />
                </figure>
                <figure className="logo">
                  <img src={bnrserlogo2} alt="" />
                </figure>
                <h3 className='fw-bold text-white'>Buy On CEX</h3>
                <p className='fw-medium text-white'>$RECL Listed on most popular CEXes and Keep listing</p>
                <div className="tba-inner d-flex flex-wrap align-items-center justify-content-center gap-3">
                  <a href="#" className='tba-btn'>TBA</a>
                  <a href="#" className='tba-btn'>TBA</a>
                  <a href="#" className='tba-btn'>TBA</a>
                  <a href="#" className='tba-btn'>TBA</a>
                  <a href="#" className='tba-btn'>TBA</a>
                  <a href="#" className='tba-btn'>TBA</a>
                  <a href="#" className='tba-btn'>TBA</a>
                  <a href="#" className='tba-btn'>TBA</a>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  )
}
