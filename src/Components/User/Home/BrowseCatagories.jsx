import React from 'react'
import BrowseJobCatagories from './BrowseJobCatagories'

const BrowseCatagories = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center">
                            <h3 className="title">Browser Jobs Categories </h3>
                            <p className="text-muted">
                                Post a job to tell us about your project. We'll quickly
                                match you with the right freelancers.
                            </p>
                        </div>
                    </div>
                    {/*end col*/}
                </div>
                {/*end row*/}
                <div className="row">
                    <BrowseJobCatagories />
                </div>
                {/*end row*/}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mt-5 text-center">
                            <a href="#" className="btn btn-primary btn-hover">
                                Browse All Categories <i className="uil uil-arrow-right" />
                            </a>
                        </div>
                    </div>
                    {/*end col*/}
                </div>
                {/*end row*/}
            </div>
            {/*end container*/}
        </section>
    )
}

export default BrowseCatagories