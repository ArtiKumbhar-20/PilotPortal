import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./styles.css"; 

export default function EventsList() {
  const events = [
    {
      location: "Pune",
      date: "Aug 08, 2023",
      title: "Youth Empowerment",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "assets/images/events/event2.jpg",
    },
    {
      location: "Nashik",
      date: "Aug 08, 2023",
      title: "Youth Empowerment",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "assets/images/events/event2.jpg",
    },
    {
      location: "Nagpur",
      date: "Aug 08, 2023",
      title: "Youth Empowerment",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "assets/images/events/event2.jpg",
    },
    {
      location: "Pune",
      date: "Aug 08, 2023",
      title: "Youth Empowerment",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "assets/images/events/event2.jpg",
    },
  ];

  const sliderSettings = {

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <div className="service-section service-three pt-0 section-padding">
      <div className="container">
        <div className="row">
          <div
            className="col-12 wow fadeIn"
            data-wow-duration=".7s"
            data-wow-delay=".1s"
          >
            <div className="section-title-center section-head text-left">
              <h2 className="title">Upcoming Events</h2>
              <p className="text text-left">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. when the musics over turn off the light
              </p>
            </div>
          </div>
        </div>
        <Slider {...sliderSettings} className="events-slider">
          {events.map((event, index) => (
            <div key={index} className="col mb-30">
              <div
                className="blog wow fadeIn"
                data-wow-duration="1.5s"
                data-wow-delay={`.${index + 1}s`}
              >
                <div className="blog-thumbnail">
                  <a href="blog-details.html" className="image">
                    <img src={event.image} alt="Blog" />
                  </a>
                </div>
                <div className="blog-info">
                  <ul className="meta">
                    <li>{event.location}</li>
                    <li>{event.date}</li>
                  </ul>
                  <h3 className="title text-uppercase">{event.title}</h3>
                  <p className="text">{event.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
