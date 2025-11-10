import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Import Swiper styles
    import('swiper/css');
    import('swiper/css/pagination');
  }, []);
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-4 pb-2">
              <h3 className="title mb-3">Happy Candidates</h3>
              <p className="text-muted">
                Post a job to tell us about your project. We'll quickly
                match you with the right freelancers.
              </p>
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Swiper
              className="testimonialSlider pb-5"
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              pagination={{ 
                clickable: true,
                dynamicBullets: true
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              loop={true}
              speed={800}
              effect={'slide'}
            >
              <SwiperSlide>
                <div className="card testi-box">
                  <div className="card-body">
                    <div className="mb-4">
                      <img
                        src="assets/images/logo/mailchimp.svg"
                        height={50}
                        alt=""
                      />
                    </div>
                    <p className="testi-content lead text-muted mb-4">
                      " Very well thought out and articulate
                      communication. Clear milestones, deadlines and fast
                      work. Patience. Infinite patience. No shortcuts.
                      Even if the client is being careless. "
                    </p>
                    <h5 className="mb-0">Jeffrey Montgomery</h5>
                    <p className="text-muted mb-0">Product Manager</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card testi-box">
                  <div className="card-body">
                    <div className="mb-4">
                      <img
                        src="assets/images/logo/wordpress.svg"
                        height={50}
                        alt=""
                      />
                    </div>
                    <p className="testi-content lead text-muted mb-4">
                      " Very well thought out and articulate
                      communication. Clear milestones, deadlines and fast
                      work. Patience. Infinite patience. No shortcuts.
                      Even if the client is being careless. "
                    </p>
                    <h5 className="mb-0">Rebecca Swartz</h5>
                    <p className="text-muted mb-0">Creative Designer</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card testi-box">
                  <div className="card-body">
                    <div className="mb-4">
                      <img
                        src="assets/images/logo/Instagram.svg"
                        height={50}
                        alt=""
                      />
                    </div>
                    <p className="testi-content lead text-muted mb-4">
                      " Very well thought out and articulate
                      communication. Clear milestones, deadlines and fast
                      work. Patience. Infinite patience. No shortcuts.
                      Even if the client is being careless. "
                    </p>
                    <h5 className="mb-0">Charles Dickens</h5>
                    <p className="text-muted mb-0">Store Assistant</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            {/*end swiper-container  */}
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
    </section>
  )
}

export default Testimonials