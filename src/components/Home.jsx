import React from 'react'
import Navbar from './Navbar'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
const Home = () => {
  return (
    <div>
        <Navbar/>
        <section >
      <div className="container-fluid py-0">
        {/* <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow> */}

        <MDBRow>
          {/* <MDBCol lg="3">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol> */}
          <MDBCol lg="3">
          <div className="mb-4 mb-lg-0 bg-transparent">
              <div className="p-0 bg-transparent">
                <div flush className="rounded-3 bg-transparent" style={{height:'90vh', overflow:'auto'}}>
                  <MDBListGroupItem className="d-flex gap-2 align-items-center p-3" style={{border:'none'}}>
                    <MDBIcon fas icon="user-circle fa-lg" />
                    <div>Muhammed suhaib</div>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex gap-3 align-items-center p-3" style={{border:'none'}}>
                    <MDBIcon fas icon="user-friends fa-lg" style={{ color: '#333333' }} />
                    <div>mdbootstrap</div>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex gap-3 align-items-center p-3" style={{border:'none'}}>
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex gap-3 align-items-center p-3" style={{border:'none'}}>
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex gap-3 align-items-center p-3" style={{border:'none'}}>
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex gap-3 align-items-center p-3" style={{border:'none'}}>
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex gap-3 align-items-center p-3" style={{border:'none'}}>
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex gap-3 align-items-center p-3" style={{border:'none'}}>
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  
                  
                </div>
              </div>
            </div>
            </MDBCol>
          <MDBCol lg="7">
            <div className="mb-4 py-3">
              <div>
                <MDBRow>
                                 
                  
                  <MDBCol sm="3">
                  <MDBCard>
                  <div className='bg-image' style={{borderRadius:"10px"}}>
                  <MDBCardImage position='top' alt='...' src='https://scontent.fcok6-2.fna.fbcdn.net/v/t39.30808-6/440202660_311067238681076_8882129841343376231_n.jpg?stp=dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=llueHodhtD8Q7kNvgFTEQ-t&_nc_ht=scontent.fcok6-2.fna&oh=00_AYDhFqJTnaBrlar2ddc-KXT8MYGbV4RU1PIhGBG-3mS_JA&oe=6680C79F'  height='230px' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='  h-100' >
          <div className='p-1' style={{marginBottom:'141px'}}>
          <img className='text-white ' src="https://scontent.fcok6-1.fna.fbcdn.net/v/t39.30808-1/448474001_1102716254548247_2613997786866384047_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=hxk3TKq6pdEQ7kNvgGRWAX_&_nc_ht=scontent.fcok6-1.fna&oh=00_AYCLEqrQKK5VaWiGa8pl6mvgsrepYzY1TJzTlNLvFb_XRg&oe=6680F1E1" alt="" style={{borderRadius:'50px',border:'3px solid blue'}} />
         </div> 
         <p className='text-white p-0 m-2 '>Ronaldo</p>
        </div>
      </div>
    </div>      
    </MDBCard>
                  </MDBCol>
                  <MDBCol sm="3">
                  <MDBCard>
                  <div className='bg-image' style={{borderRadius:"10px"}}>
                  <MDBCardImage position='top' alt='...' src='https://scontent.fcok6-2.fna.fbcdn.net/v/t39.30808-6/440202660_311067238681076_8882129841343376231_n.jpg?stp=dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=llueHodhtD8Q7kNvgFTEQ-t&_nc_ht=scontent.fcok6-2.fna&oh=00_AYDhFqJTnaBrlar2ddc-KXT8MYGbV4RU1PIhGBG-3mS_JA&oe=6680C79F'  height='230px' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='  h-100' >
          <div className='p-1' style={{marginBottom:'141px'}}>
          <img className='text-white ' src="https://scontent.fcok6-1.fna.fbcdn.net/v/t39.30808-1/448474001_1102716254548247_2613997786866384047_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=hxk3TKq6pdEQ7kNvgGRWAX_&_nc_ht=scontent.fcok6-1.fna&oh=00_AYCLEqrQKK5VaWiGa8pl6mvgsrepYzY1TJzTlNLvFb_XRg&oe=6680F1E1" alt="" style={{borderRadius:'50px',border:'3px solid blue'}} />
         </div> 
         <p className='text-white p-0 m-2 '>Ronaldo</p>
        </div>
      </div>
    </div>      
    </MDBCard>
                  </MDBCol>
                  <MDBCol sm="3">
                  <MDBCard>
                  <div className='bg-image' style={{borderRadius:"10px"}}>
                  <MDBCardImage position='top' alt='...' src='https://scontent.fcok6-2.fna.fbcdn.net/v/t39.30808-6/440202660_311067238681076_8882129841343376231_n.jpg?stp=dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=llueHodhtD8Q7kNvgFTEQ-t&_nc_ht=scontent.fcok6-2.fna&oh=00_AYDhFqJTnaBrlar2ddc-KXT8MYGbV4RU1PIhGBG-3mS_JA&oe=6680C79F'  height='230px' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='  h-100' >
          <div className='p-1' style={{marginBottom:'141px'}}>
          <img className='text-white ' src="https://scontent.fcok6-1.fna.fbcdn.net/v/t39.30808-1/448474001_1102716254548247_2613997786866384047_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=hxk3TKq6pdEQ7kNvgGRWAX_&_nc_ht=scontent.fcok6-1.fna&oh=00_AYCLEqrQKK5VaWiGa8pl6mvgsrepYzY1TJzTlNLvFb_XRg&oe=6680F1E1" alt="" style={{borderRadius:'50px',border:'3px solid blue'}} />
         </div> 
         <p className='text-white p-0 m-2 '>Ronaldo</p>
        </div>
      </div>
    </div>      
    </MDBCard>
                  </MDBCol>
                  <MDBCol sm="3">
                  <MDBCard>
                  <div className='bg-image' style={{borderRadius:"10px"}}>
                  <MDBCardImage position='top' alt='...' src='https://scontent.fcok6-2.fna.fbcdn.net/v/t39.30808-6/440202660_311067238681076_8882129841343376231_n.jpg?stp=dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=llueHodhtD8Q7kNvgFTEQ-t&_nc_ht=scontent.fcok6-2.fna&oh=00_AYDhFqJTnaBrlar2ddc-KXT8MYGbV4RU1PIhGBG-3mS_JA&oe=6680C79F'  height='230px' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='  h-100' >
          <div className='p-1' style={{marginBottom:'141px'}}>
          <img className='text-white ' src="https://scontent.fcok6-1.fna.fbcdn.net/v/t39.30808-1/448474001_1102716254548247_2613997786866384047_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=hxk3TKq6pdEQ7kNvgGRWAX_&_nc_ht=scontent.fcok6-1.fna&oh=00_AYCLEqrQKK5VaWiGa8pl6mvgsrepYzY1TJzTlNLvFb_XRg&oe=6680F1E1" alt="" style={{borderRadius:'50px',border:'3px solid blue'}} />
         </div> 
         <p className='text-white p-0 m-2 '>Ronaldo</p>
        </div>
      </div>
    </div>      
    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </div>
            </div>

            <MDBRow>
              <MDBCol md="12">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                  <MDBRow>
                  <MDBCol md="1">
                  <img className='text-white ' src="https://scontent.fcok6-1.fna.fbcdn.net/v/t39.30808-1/448474001_1102716254548247_2613997786866384047_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=hxk3TKq6pdEQ7kNvgGRWAX_&_nc_ht=scontent.fcok6-1.fna&oh=00_AYCLEqrQKK5VaWiGa8pl6mvgsrepYzY1TJzTlNLvFb_XRg&oe=6680F1E1" alt="" style={{borderRadius:'50px'}} />
                 </MDBCol>
                  <MDBCol md="11" >
                    <input type="text" className='w-100 border-0' style={{borderRadius:"10px",backgroundColor:'whitesmoke'}} />
                  {/* <img className='text-center ' src="https://scontent.fcok6-1.fna.fbcdn.net/v/t39.30808-1/448474001_1102716254548247_2613997786866384047_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=hxk3TKq6pdEQ7kNvgGRWAX_&_nc_ht=scontent.fcok6-1.fna&oh=00_AYCLEqrQKK5VaWiGa8pl6mvgsrepYzY1TJzTlNLvFb_XRg&oe=6680F1E1" alt="" style={{borderRadius:'50px'}} /> */}
                 </MDBCol>
                 </MDBRow>
                  <hr />
                    {/* <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <div className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</div>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <div className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</div>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <div className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</div>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <div className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</div>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              {/* <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol> */}
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </div>
    </section>
    </div>
  )
}

export default Home