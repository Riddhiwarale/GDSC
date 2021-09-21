import React, { Component } from 'react'
import Slider from 'react-slick'
// import events4 from "../../assets/images/EventImages/events4.jpeg"
import events from '../../assets/images/EventsImages/events.jpeg'
import events3 from '../../assets/images/EventsImages/events3.jpeg'
import events4 from '../../assets/images/EventsImages/events4.jpeg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style, display: "block",background:'lightgray', borderRadius:'50%',boxShadow:'0px 0px 5px 0px gray'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style, display: "block",background:'lightgray', borderRadius:'50%',boxShadow:'0px 0px 5px 0px gray'}}
      onClick={onClick}
    />
  );
}


export default class Events extends Component {
    render() {
        var settings = {
            className: "center",
            // centerMode: true,
            infinite: true,
            // autoplay: true,
            // autoplaySpeed:3000,
            cssEase:'linear',
            dots: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide:0,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 350,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            
            <div className='p-10 bg-blue-50'>
                <p className='text-center pt-6 pb-4 text-4xl font-bold text-gray-700'>Our <span className='text-yellow-400'>Dream Events</span></p>
                <p className='text-center text-gray-600 pb-8'>
                    An event is something that happens, especially when its unusual or important. <br />
                    You can use events to describe <br /> all the things that are happening in a particular situation. 
                </p>
                <Slider className="w-20 overflow-hidden"  {...settings}>
                
                <div className='xl:px-4  xl:px-2  xl:pt-4 pb-10 sm:px-14 '>
                    {/* for hover effect add -- transform transition ease-linear delay-150 hover:scale-105 */}
                    <figure className='overflow-hidden  rounded-lg shadow-xl'>
                        <img className='swipeImage' src={events3}/>
                    </figure>
                </div> 
                <div className=' xl:px-4  xl:px-2  xl:pt-4 pb-10 sm:px-14'>
                    <figure className='overflow-hidden  rounded-lg shadow-xl'>
                        <img className='swipeImage' src={events}/>
                    </figure>
                </div>
                <div className=' xl:px-4  xl:px-2  xl:pt-4 pb-10 sm:px-14'>
                    <figure className='overflow-hidden  rounded-lg shadow-xl'>
                        <img className='swipeImage' src={events4}/>
                    </figure>
                </div>
                <div className=' xl:px-4  xl:px-2  xl:pt-4 pb-10 sm:px-14'>
                    <figure className='overflow-hidden  rounded-lg shadow-xl'>
                        <img className='swipeImage' src={events3}/>
                    </figure>
                </div>
                <div className=' xl:px-4  xl:px-2  xl:pt-4 pb-10 sm:px-14'>
                    <figure className='overflow-hidden  rounded-lg shadow-xl'>
                        <img className='swipeImage' src={events}/>
                    </figure>
                </div>
                <div className=' xl:px-4  xl:px-2  xl:pt-4 pb-10 sm:px-14'>
                    <figure className='overflow-hidden  rounded-lg shadow-xl'>
                        <img className='swipeImage' src={events4}/>
                    </figure>
                </div>
                </Slider>
            </div>
        )
    }
}
