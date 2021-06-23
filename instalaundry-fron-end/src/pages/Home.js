import React, { Suspense, useEffect, useState } from 'react';

// components
import Slider from '../components/Slider/Slider';
import MyTextFeild from '../components/common/MyTextFeild';
import Button from '@material-ui/core/Button';
import { Colors } from '../config/Colors';

// lazy pages
const About = React.lazy(() => import('./About'));

// laxy components
const Services = React.lazy(() => import('../components/Services'));
const Testimonial = React.lazy(() => import('../components/Testimonial'));

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = function (event) {
    // let scrollTop = event.srcElement.body.scrollTop,
    //     itemTranslate = Math.min(0, scrollTop / 3 - 60);

    setShow(true);
  };

  return (
    <div>
      <Slider />
      <Suspense fallback={<div></div>}>
        <div className="container-fluid" style={{ marginTop: '7rem' }}>
          <div className="row d-flex justify-content-center align-items-center">
            <div
              className="col-8 d-flex justify-content-center align-items-center"
              style={{
                color: Colors.secondary,
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            >
              Check whether we are available in your area or not!
            </div>
          </div>
          <div
            className="row d-flex justify-content-center align-items-center"
            style={{ marginTop: '2.5rem' }}
          >
            <div className="col-8 d-flex justify-content-center align-items-center">
              <MyTextFeild
                width={'50%'}
                label="Postal Code"
                onChange={(value) => console.log(value)}
              />
            </div>
          </div>
          <div
            className="row d-flex justify-content-center align-items-center"
            style={{ marginTop: '2.5rem' }}
          >
            <div className="col-8 d-flex justify-content-center align-items-center">
              <Button
                style={{
                  backgroundColor: Colors.secondary,
                  color: Colors.white,
                }}
                className="btn btn-primary py-md-2 px-md-4 mt-2"
                variant="contained"
              >
                Check
              </Button>
            </div>
          </div>
        </div>
        <Services />

        {show ? <About removeHeader={true} /> : null}

        <Testimonial />
      </Suspense>
    </div>
  );
}
