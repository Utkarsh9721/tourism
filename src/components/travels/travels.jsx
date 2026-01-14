import React from 'react'
import './travels.css'
import { Link } from "react-router-dom";
const Travels = () => {
  const places = [
    {
      name: "Taj Mahal, Agra",
      img: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=800&auto=format&fit=crop&q=60"
    },
    {
      name: "India Gate, Delhi",
      img: "https://images.pexels.com/photos/14520365/pexels-photo-14520365.jpeg"
    },
    {
      name: "Ghat in Varanasi",
      img: "https://images.unsplash.com/photo-1599831069477-b2acdc0bcb91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmFyYW5hc2l8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Kerala",
      img: "https://images.unsplash.com/photo-1589983846997-04788035bc83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2VyYWxhfGVufDB8fDB8fHww"
    },
    {
      name: "Himachal Pradesh",
      img: "https://plus.unsplash.com/premium_photo-1661952578770-79010299a9f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGltYWNoYWx8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Goa",
      img: "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29hfGVufDB8fDB8fHww"
    },
    {
    name: "Rishikesh",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmlzaGlrZXNofGVufDB8fDB8fHww"
        },{
        name: "south india",
        img: "https://images.unsplash.com/photo-1541173061692-bbec3dc2bf85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c291dGglMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D"
    }
    

    ];

  return (
    <div className='travels' id='travels'>
      <h1>
        Find Your Next Journey with TransXs - <span className="highlight">Where Every Trip is a New Story!</span>
      </h1>
      <div className="places">
        {places.map((place, index) => (
          <div key={index} className="card">
            <img src={place.img} alt={place.name} />
            <div id="name"><h2>{place.name}</h2></div>
          </div>
        ))}
      </div>
      <div className="travel">
        <Link to="/find">Find more</Link>
      </div>
    </div>
  )
}

export default Travels
