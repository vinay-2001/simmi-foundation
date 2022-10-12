import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/about';
import Donate from './components/donate';
import Blog from './components/blog';
import Volunteer from './components/volunteer';
import Gallery from './components/gallery';
import Events from './components/events';
import Careers from './components/careers';
import Contact from './components/contact';
import img1 from './components/images/img1.jpeg'
import img2 from './components/images/img2.jpg'
import img3 from './components/images/img3.jpg'
import img4 from './components/images/img4.jpg'
import { Carousel } from 'react-bootstrap'
import img5 from './components/images/education.jpg';
import img6 from './components/images/livelihood.jpg';
import img7 from './components/images/healthcare.jpg';
import img8 from './components/images/womenempowerment.jpg'
import img from './components/images/img.jpg'
import img10 from './components/images/img10.jpeg';
import img11 from './components/images/img11.jpeg'
import img12 from './components/images/img12.jpeg'
import img13 from './components/images/img13.jpeg'
import img14 from './components/images/img14.jpeg'
import img15 from './components/images/img15.jpeg'
import img16 from './components/images/img16.jpeg'
import img17 from './components/images/img17.jpeg'
import bg_3 from './components/images/bg_3.jpg'
import map from './components/images/map-dark.png'
import help from './components/images/help.jpg'
import './components/scroll.css'
import logo from './components/images/logo.png'
import './components/card.css'


function App() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <a href="/" className="navbar-brand">
      
      <img src={logo} width="45" alt="" className="d-inline-block align-middle mr-2" />
      
      <span className="text-uppercase font-weight-bold">SIMMI FOUNDATION</span>
    </a>

    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link fs-4" to="">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="donate">Donate</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="volunteer">Volunteer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="events">Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="careers">Careers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="scroll-container">
          <div className="scroll-text">Smart India Multi Management Institute!   स्मार्ट इंडिया बहुद्देश्यीय प्रबन्धन संस्थान!   Registration number : 085953/2020   Niti Aayog (Govt. Of India ) Unique Id : HR/2020/0258148
</div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/donate" element={<Donate />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/volunteer" element={<Volunteer />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img4}
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="card mb-3 bg-dark">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body text-white text-center">
              <h1>Welcome to SIMMI</h1>
              <p>Smart India Multi Management Institute is a pan India NGO registered in Haryana, India; carrying out welfare projects on education, healthcare, livelihood and women empowerment. We believe that unless members of the civil society are involved proactively in the process of development, sustainable change will not happen. Based on this, Simmi Foundation sensitizes and engages the civil society, making it an active partner in all its welfare initiatives.</p>
            </div>
          </div>
          <div className="col-md-4">
            <img src={map} className="img-fluid rounded-start" alt="..." />
          </div>
        </div>
      </div>

      <div className='container text-center'>
        <h2>Objectives</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card">
              <img src={img5} className="card-img-top w-100" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Education</h5>
                <p className="card-text">We provide free academic education, scholarship, training and other incentives to the children.</p>
                <Link>Read More</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img6} className="card-img-top w-100" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Livelihood</h5>
                <p className="card-text">We implement various schemes to provide livelihood and uplift the poor in society.</p>
                <Link>Read More</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img7} className="card-img-top w-100" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Healthcare</h5>
                <p className="card-text">We are increasing awareness on Sanitization and providing people with access to better nutrition, clean water and toilets.</p>
                <Link>Read More</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img8} className="card-img-top w-100" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Women and Youth Empowerment</h5>
                <p className="card-text">We focus on providing equal opportunities for women in the work field. This content is a little bit longer.</p>
                <Link>Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div><br></br></div>

    <div className="card">
          <img src={help} className="card-img" alt="..." />
          <div className="card-img-overlay">
            <h2 className='text-center'>How can you help us</h2>
            <div className="row row-cols-1 row-cols-md-3 pb-10 g-4">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Collaborate</h5>
                    <p className="card-text">Simmi Foundation serves in the collaboration with schools, colleges and other institutions.</p>
                    <Link>Collaborate with us</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Donate Money</h5>
                    <p className="card-text">Your donation will further our mission of ensuring a happy and healthy life of those in need.</p>
                    <Link>Donate us</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Be a Volunteer</h5>
                    <p className="card-text">Even the all-powerful Pointing has no control about the blind texts.</p>
                    <Link>Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{backgroundColor:'black'}}>
          <h1 className='text-danger text-center'>Current and Upcoming events</h1>
          <div className='container'>
            <div className="row row-cols-1 row-cols-md-2 g-4 text-center">
              <div className="col">
                <div className="card">
                  <img src={bg_3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Marathon Event</h5>
                    <p className="card-text">Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee</p>
                    <Link>Read More</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={img10} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Event-til</h5>
                    <p className="card-text">event-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-descevent-desc</p>
                    <Link>Read More</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">"Know your heart better" By Dr. Rahul Katariya</h5>
                    <p className="card-text">"Know your heart better" Catch Dr. Rahul Katariya speak live on the topic cardiac pain on SIMMI foundation's official instagram handle. Link : https://instagram.com/simmifoundation/ #simmifounda</p>
                    <Link>Read More</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={img11} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Corona Virus and the country</h5>
                    <p className="card-text">The SIMMI FOUNDATION introduces Dr. Arnab Mandal! Dr. Mandal is an MBBS gold-medallist from RG Kar Medical College and is currently working as a house physician at the department of pediatrics in RG</p>
                    <Link>Read More</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={img12} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Development and Empowerment</h5>
                    <p className="card-text">Ms. Poonam Shroti addresses the unaddressed topic of disability and women empowerment, and the true face of rural development in the country</p>
                    <Link>Read More</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={img13} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Wellness and Health, a vital concept</h5>
                    <p className="card-text">Ms. Lade talks about the issues of liver disease and how Ayurveda can help in solving the modern problems of today</p>
                    <Link>Read More</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={img15} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mental Health and Motivation</h5>
                    <p className="card-text">Ms. Papiya talks about mental health and the stigma around it, and how to overcome difficulties in talking about it and treating it.</p>
                    <Link>Read More</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={img14} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Rural Development</h5>
                    <p className="card-text">Mr. Dushyant talks about rural development, especially infrastructure and roadways</p>
                    <Link>Read More</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={img17} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Understanding Archeology</h5>
                    <p className="card-text">we dive with Ms. Neha into the field of archeology, as she explains the basics of archeology and the inner workings of libraries</p>
                    <Link>Read More</Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={img16} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Understanding Entrepreneurship</h5>
                    <p className="card-text">Mr. Amman Khurana talks about his journey as an entrepreneur and how he became the "ultimate life coach"</p>
                    <Link>Read More</Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
