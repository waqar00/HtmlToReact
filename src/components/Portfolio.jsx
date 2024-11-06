import React from 'react'
import HeroImg from './../assets/images/robot.png'
import PortFolioImg from './../assets/images/portfolio.png'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <>
    <section class="pt-5 primary-bg">
    <div class="container section-1 bg-2 pt-5 position-relative">
        <div class="row g-5 pt-5">
            <div class="col-lg-6 align-self-center text-center text-lg-start mb-lg-5 p-r">
                <div class="about-us">
                    <h1 class="text-white mb-4 animated slideInRight">Our Projects</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item active text-white" aria-current="page">Our Projects</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="col-lg-6 col-lg-6 align-self-end text-center text-lg-end">
                <div class="hero-img">
                    <img src={HeroImg} alt="image"/>
                </div>
            </div>
        </div>
    </div>
</section>
<section>
    <div class="container section-4 py-5">
        <div class="row py-5  justify-content-center">
            <div class="col-lg-4">
                <div class="section-title text-center">
                    <a href="#" class="btn btn-sm border rounded-pill px-3 mb-3">Case Study</a>
                    <h2>Explore Our Recent AI Case Studies</h2>
                </div>
            </div>
        </div>
        <div class="row g-4">
            <div class="col-lg-4">
                <div class="case-item position-relative overflow-hidden rounded mb-2" id="overlay">
                    <img class="img-fluid" src={PortFolioImg} alt="project-1"/>
                    <a href="#" class="case-overlay text-decoration-none">
                        <small>Robotic Automation</small>
                        <h5 class="lh-base text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita</h5>
                        <button class="btn btn-primary">
                            Next
                            <i></i>
                        </button>
                    </a>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="case-item position-relative overflow-hidden rounded mb-2" id="overlay">
                    <img class="img-fluid" src={PortFolioImg} alt="project-2"/>
                        <a href="#" class="case-overlay text-decoration-none">
                            <small>Machine learning</small>
                            <h5 class="lh-base text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita</h5>
                            <button class="btn btn-primary">
                                Next
                                <i></i>
                            </button>
                        </a>
                    </div>
            </div>
            <div class="col-lg-4">
                <div class="case-item position-relative overflow-hidden rounded mb-2" id="overlay">
                    <img class="img-fluid" src={PortFolioImg} alt="project-3"/>
                        <a href="#" class="case-overlay text-decoration-none">
                            <small>Predictive Analysis</small>
                            <h5 class="lh-base text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita</h5>
                            <button class="btn btn-primary">
                                Next
                                <i></i>
                            </button>
                        </a>
                    </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Portfolio