import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../assets/vendor/aos/aos.css";
import "../../assets/vendor/swiper/swiper-bundle.min.css";

import AOS from "aos";
import "aos/dist/aos.css";

import "./index.css";

const LandingComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <h1>
              Career<span>Genie</span>
            </h1>
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="#hero">Login</a>
              </li>
              <li>
                <Link to = "/signupPage">Signup</Link>
              </li>
            </ul>
          </nav>

          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>

      <section id="hero" className="hero">
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <div className="col-lg-12  order-lg-1 d-flex flex-column justify-content-center text-center caption">
              <h2>
                A place where dream <span>meets</span>
                <span className="circle"> reality</span>
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>

            <div className="row gy-4">
              <div className="col-lg-4">
                <img
                  src={require(`../../assets/images/successLanding.jpg`)}
                  className="img-fluid rounded-4 mb-4"
                  alt=""
                />
              </div>
              <div className="col-lg-8">
                <div className="content ps-0 ps-lg-5">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Xonsectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-1-square"></i> Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit.
                    </li>
                    <li>
                      <i className="bi bi-2-square"></i> Sed quia consequuntur
                      magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </li>
                    <li>
                      <i className="bi bi-3-square"></i> Neque porro quisquam
                      est, qui dolorem ipsum quia dolor sit amet.
                    </li>
                    <li>
                      <i className="bi bi-4-square"></i> Consectetur, adipisci
                      velit, sed quia non numquam eius.
                    </li>
                    <li>
                      <i className="bi bi-5-square"></i> Rempora incidunt ut
                      labore et dolore magnam aliquam quaerat voluptatem.{" "}
                    </li>
                    <li>
                      <i className="bi bi-6-square"></i> Sed do eiusmod tempor
                      incididunt ut labore et dolore
                    </li>
                    <li>
                      <i className="bi bi-7-square"></i> Enim ad minima veniam,
                      quis nostrum exercitationem ullam corporis.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="recent-posts" className="recent-posts sections-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Recent Blog Posts</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>

            <div className="row gy-4">
              <div className="col-xl-4 col-md-6">
                <article>
                  <div className="post-img">
                    <img
                      src={require(`../../assets/images/jobCanvasImg.jpg`)}
                      alt=""
                      className="img-fluid"
                    />
                  </div>

                  <p className="post-category">Lorem ipsum dolor</p>

                  <h2 className="title">
                    <a href="blog-details.html">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    </a>
                  </h2>

                  <div className="d-flex align-items-center">
                    <div className="post-meta">
                      <p className="post-author">Jai</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Feb 1, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              <div className="col-xl-4 col-md-6">
                <article>
                  <div className="post-img">
                    <img
                      src={require(`../../assets/images/jobCanvasImg.jpg`)}
                      alt=""
                      className="img-fluid"
                    />
                  </div>

                  <p className="post-category">Loreum</p>

                  <h2 className="title">
                    <a href="blog-details.html">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    </a>
                  </h2>

                  <div className="d-flex align-items-center">
                    <div className="post-meta">
                      <p className="post-author">Jai</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Oct 5, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              <div className="col-xl-4 col-md-6">
                <article>
                  <div className="post-img">
                    <img
                      src={require(`../../assets/images/jobCanvasImg.jpg`)}
                      alt=""
                      className="img-fluid"
                    />
                  </div>

                  <p className="post-category">Loreum</p>

                  <h2 className="title">
                    <a href="blog-details.html">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    </a>
                  </h2>

                  <div className="d-flex align-items-center">
                    <div className="post-meta">
                      <p className="post-author">Jai</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Dec 22, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="team sections-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Our Team</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>

            <div className="row gy-4">
              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="member">
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                  <img
                    src={require(`../../assets/images/successLanding.jpg`)}
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Jai</h4>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member">
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                  <img
                    src={require(`../../assets/images/successLanding.jpg`)}
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Jai1</h4>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="member">
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                  <img
                    src={require(`../../assets/images/successLanding.jpg`)}
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Jai2</h4>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="member">
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                  <img
                    src={require(`../../assets/images/successLanding.jpg`)}
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Ati2</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-12 col-md-12 footer-info text-center">
              <div className="social-links d-flex mt-4 justify-content-center">
                <a href="#" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>CareerGenie</span>
            </strong>
            . All Rights Reserved 2022
          </div>
          <div className="credits">
            Designed by <a href="#">NEUDevs</a>
          </div>
        </div>
      </footer>

      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <Helmet>
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
        />

        <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
      </Helmet>
    </>
  );
};

export default LandingComponent;