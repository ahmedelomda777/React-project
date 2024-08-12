import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
const Foter = () => {
  return (
    <div>
        <MDBFooter  className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get c onnected with us on social networks:</span>
        </div>

        <div>
          <a target='_blank' href='https://www.facebook.com/profile.php?id=100048936392914&sk=about&locale=ar_AR' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a target='_blank' href='https://x.com/ahmedel67333421?s=11' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a target='_blank' href='https://www.instagram.com/ahmedabs777?igsh=MW9udnlvOGQ0N3Y2Yw==' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a target='_blank' href='https://www.linkedin.com/in/ahmed-el-omda-6b1097253
' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a target='_blank' href='https://github.com/ahmedelomda777
' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <p className='text-reset'>
                  Angular
                </p>
              </p>
              <p>
                <p className='text-reset'>
                  React
                </p>
              </p>
              <p>
                <p className='text-reset'>
                  Vue
                </p>
              </p>
              <p>
                <p  className='text-reset'>
                  Laravel
                </p>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <p className='text-reset'>
                  Pricing
                </p>
              </p>
              <p>
                <p className='text-reset'>
                  Settings
                </p>
              </p>
              <p>
                <p  className='text-reset'>
                  Orders
                </p>
              </p>
              <p>
                <p  className='text-reset'>
                  Help
                </p>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Mansoura,  Egypt
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                ahmedabs777@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 20 106 916 0736
              </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright: 
        <span className='signature' >
          Ahmed Abbas
        </span>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Foter