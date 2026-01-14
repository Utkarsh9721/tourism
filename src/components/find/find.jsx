// src/components/TourismMap.js
import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import '../find/find.css';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom tourism icons
const createCustomIcon = (color) => new L.Icon({
  iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const tourismIcon = createCustomIcon('green');
const historicalIcon = createCustomIcon('red');
const natureIcon = createCustomIcon('blue');
const religiousIcon = createCustomIcon('gold');
const culturalIcon = createCustomIcon('violet');

// Custom location icon for user searches
const locationIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Map controller component
function MapController({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

// Map resize component to handle mobile issues
function MapResize() {
  const map = useMap();
  
  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        map.invalidateSize();
      }, 150);
    };
    
    // Initial resize
    handleResize();
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [map]);
  
  return null;
}

// Tile layer controller for satellite view
function TileLayerController({ isSatelliteView }) {
  const map = useMap();
  
  useEffect(() => {
    // Force map refresh when tile layer changes
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [isSatelliteView, map]);
  
  return isSatelliteView ? (
    <>
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
        maxZoom={19}
      />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        opacity={0.3}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        maxZoom={19}
      />
    </>
  ) : (
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      maxZoom={19}
    />
  );
}

const TourismMap = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [tourismPlaces, setTourismPlaces] = useState([]);
  const [mapCenter, setMapCenter] = useState([20.5937, 78.9629]);
  const [mapZoom, setMapZoom] = useState(5);
  const [loading, setLoading] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [isSatelliteView, setIsSatelliteView] = useState(false);
  const [selectedState, setSelectedState] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showSidebar, setShowSidebar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const mapRef = useRef(null);

  // Comprehensive tourism data for all Indian states and union territories
  const indiaTourismData = [
    // Maharashtra
    {
      id: 1,
      name: "Gateway of India",
      city: "Mumbai",
      state: "Maharashtra",
      type: "Historical Monument",
      coordinates: [18.9220, 72.8347],
      description: "Basalt arch monument built in the early 20th century",
      category: "historical"
    },
    {
      id: 2,
      name: "Ajanta Caves",
      city: "Aurangabad",
      state: "Maharashtra",
      type: "Historical Caves",
      coordinates: [20.5523, 75.7004],
      description: "Ancient Buddhist rock-cut cave monuments with paintings",
      category: "historical"
    },
    {
      id: 3,
      name: "Ellora Caves",
      city: "Aurangabad",
      state: "Maharashtra",
      type: "Historical Caves",
      coordinates: [20.0261, 75.1790],
      description: "Rock-cut cave temples representing Buddhist, Hindu, and Jain traditions",
      category: "historical"
    },
    {
      id: 4,
      name: "Shaniwar Wada",
      city: "Pune",
      state: "Maharashtra",
      type: "Historical Fort",
      coordinates: [18.5196, 73.8553],
      description: "Historical fortification palace built by the Peshwas",
      category: "historical"
    },

    // Delhi
    {
      id: 5,
      name: "Red Fort",
      city: "Delhi",
      state: "Delhi",
      type: "Historical Fort",
      coordinates: [28.6562, 77.2410],
      description: "Historical fort in Old Delhi, built by Mughal Emperor Shah Jahan",
      category: "historical"
    },
    {
      id: 6,
      name: "India Gate",
      city: "Delhi",
      state: "Delhi",
      type: "War Memorial",
      coordinates: [28.6129, 77.2295],
      description: "War memorial dedicated to Indian soldiers who died in World War I",
      category: "historical"
    },
    {
      id: 7,
      name: "Qutub Minar",
      city: "Delhi",
      state: "Delhi",
      type: "Historical Monument",
      coordinates: [28.5245, 77.1855],
      description: "Tallest brick minaret in the world, built in 1193",
      category: "historical"
    },

    // Uttar Pradesh
    {
      id: 8,
      name: "Taj Mahal",
      city: "Agra",
      state: "Uttar Pradesh",
      type: "Historical Monument",
      coordinates: [27.1751, 78.0421],
      description: "Iconic white marble mausoleum built by Shah Jahan",
      category: "historical"
    },
    {
      id: 9,
      name: "Varanasi Ghats",
      city: "Varanasi",
      state: "Uttar Pradesh",
      type: "Religious Site",
      coordinates: [25.3176, 83.0054],
      description: "Famous riverfront steps leading to the Ganges River",
      category: "religious"
    },

    // Rajasthan
    {
      id: 10,
      name: "Amer Fort",
      city: "Jaipur",
      state: "Rajasthan",
      type: "Historical Fort",
      coordinates: [26.9855, 75.8513],
      description: "Magnificent fort in Jaipur with artistic Hindu elements",
      category: "historical"
    },
    {
      id: 11,
      name: "City Palace",
      city: "Udaipur",
      state: "Rajasthan",
      type: "Palace",
      coordinates: [24.5763, 73.6831],
      description: "Palace complex with museums, hotels, and gardens",
      category: "historical"
    },

    // Kerala
    {
      id: 12,
      name: "Backwaters",
      city: "Alleppey",
      state: "Kerala",
      type: "Natural",
      coordinates: [9.4981, 76.3388],
      description: "Serene backwaters and houseboats",
      category: "nature"
    },
    {
      id: 13,
      name: "Munnar Hills",
      city: "Munnar",
      state: "Kerala",
      type: "Hill Station",
      coordinates: [10.0889, 77.0595],
      description: "Beautiful hill station with tea plantations",
      category: "nature"
    },

    // Tamil Nadu
    {
      id: 14,
      name: "Meenakshi Temple",
      city: "Madurai",
      state: "Tamil Nadu",
      type: "Temple",
      coordinates: [9.9195, 78.1196],
      description: "Historic Hindu temple dedicated to Meenakshi and Sundareshwar",
      category: "religious"
    },
    {
      id: 15,
      name: "Marina Beach",
      city: "Chennai",
      state: "Tamil Nadu",
      type: "Beach",
      coordinates: [13.0544, 80.2837],
      description: "Longest natural urban beach in India",
      category: "nature"
    },

    // Karnataka
    {
      id: 16,
      name: "Mysore Palace",
      city: "Mysore",
      state: "Karnataka",
      type: "Palace",
      coordinates: [12.3052, 76.6552],
      description: "Historical palace of the Wadiyar dynasty",
      category: "historical"
    },
    {
      id: 17,
      name: "Hampi Ruins",
      city: "Hampi",
      state: "Karnataka",
      type: "Historical Ruins",
      coordinates: [15.3350, 76.4600],
      description: "Ruins of the medieval Hindu kingdom of Vijayanagara",
      category: "historical"
    },

    // Gujarat
    {
      id: 18,
      name: "Sabarmati Ashram",
      city: "Ahmedabad",
      state: "Gujarat",
      type: "Historical Site",
      coordinates: [23.0605, 72.5800],
      description: "Ashram where Mahatma Gandhi lived",
      category: "historical"
    },
    {
      id: 19,
      name: "Rann of Kutch",
      city: "Kutch",
      state: "Gujarat",
      type: "Desert",
      coordinates: [23.7331, 69.8597],
      description: "Seasonal salt marsh in the Thar Desert",
      category: "nature"
    },

    // West Bengal
    {
      id: 20,
      name: "Victoria Memorial",
      city: "Kolkata",
      state: "West Bengal",
      type: "Museum",
      coordinates: [22.5448, 88.3425],
      description: "Large marble building museum dedicated to Queen Victoria",
      category: "historical"
    },
    {
      id: 21,
      name: "Sundarbans",
      city: "South 24 Parganas",
      state: "West Bengal",
      type: "National Park",
      coordinates: [21.9497, 88.9401],
      description: "Mangrove forest and tiger reserve",
      category: "nature"
    },

    // Punjab
    {
      id: 22,
      name: "Golden Temple",
      city: "Amritsar",
      state: "Punjab",
      type: "Sikh Temple",
      coordinates: [31.6200, 74.8765],
      description: "Most significant gurdwara of Sikhism",
      category: "religious"
    },
    {
      id: 23,
      name: "Wagah Border",
      city: "Amritsar",
      state: "Punjab",
      type: "Border Ceremony",
      coordinates: [31.6047, 74.5731],
      description: "Border closing ceremony between India and Pakistan",
      category: "historical"
    },

    // Himachal Pradesh
    {
      id: 24,
      name: "Shimla Mall Road",
      city: "Shimla",
      state: "Himachal Pradesh",
      type: "Hill Station",
      coordinates: [31.1048, 77.1734],
      description: "Famous shopping street in the hill station",
      category: "nature"
    },
    {
      id: 25,
      name: "Manali",
      city: "Manali",
      state: "Himachal Pradesh",
      type: "Hill Station",
      coordinates: [32.2396, 77.1887],
      description: "Popular hill station and honeymoon destination",
      category: "nature"
    },

    // Jammu & Kashmir
    {
      id: 26,
      name: "Dal Lake",
      city: "Srinagar",
      state: "Jammu & Kashmir",
      type: "Lake",
      coordinates: [34.1238, 74.8717],
      description: "Famous lake with houseboats and shikaras",
      category: "nature"
    },
    {
      id: 27,
      name: "Gulmarg",
      city: "Gulmarg",
      state: "Jammu & Kashmir",
      type: "Hill Station",
      coordinates: [34.0486, 74.3814],
      description: "Popular skiing destination and hill station",
      category: "nature"
    },

    // Uttarakhand
    {
      id: 28,
      name: "Rishikesh",
      city: "Rishikesh",
      state: "Uttarakhand",
      type: "Spiritual Town",
      coordinates: [30.0869, 78.2676],
      description: "Yoga capital of the world on the banks of Ganges",
      category: "religious"
    },
    {
      id: 29,
      name: "Nainital Lake",
      city: "Nainital",
      state: "Uttarakhand",
      type: "Lake",
      coordinates: [29.3919, 79.4542],
      description: "Beautiful natural freshwater lake",
      category: "nature"
    },

    // Goa
    {
      id: 30,
      name: "Calangute Beach",
      city: "Calangute",
      state: "Goa",
      type: "Beach",
      coordinates: [15.5439, 73.7553],
      description: "Largest beach in North Goa",
      category: "nature"
    },
    {
      id: 31,
      name: "Basilica of Bom Jesus",
      city: "Old Goa",
      state: "Goa",
      type: "Church",
      coordinates: [15.5007, 73.9116],
      description: "UNESCO World Heritage Site with St. Francis Xavier's tomb",
      category: "historical"
    },

    // Andhra Pradesh
    {
      id: 32,
      name: "Tirupati Temple",
      city: "Tirupati",
      state: "Andhra Pradesh",
      type: "Temple",
      coordinates: [13.6825, 79.3491],
      description: "Famous Hindu temple of Lord Venkateswara",
      category: "religious"
    },

    // Telangana
    {
      id: 33,
      name: "Charminar",
      city: "Hyderabad",
      state: "Telangana",
      type: "Monument",
      coordinates: [17.3616, 78.4747],
      description: "Iconic monument and mosque",
      category: "historical"
    },

    // Bihar
    {
      id: 34,
      name: "Mahabodhi Temple",
      city: "Bodh Gaya",
      state: "Bihar",
      type: "Buddhist Temple",
      coordinates: [24.6959, 84.9914],
      description: "UNESCO World Heritage Site where Buddha attained enlightenment",
      category: "religious"
    },

    // Madhya Pradesh
    {
      id: 35,
      name: "Khajuraho Temples",
      city: "Khajuraho",
      state: "Madhya Pradesh",
      type: "Temples",
      coordinates: [24.8516, 79.9337],
      description: "Group of Hindu and Jain temples famous for erotic sculptures",
      category: "historical"
    },

    // Odisha
    {
      id: 36,
      name: "Konark Sun Temple",
      city: "Konark",
      state: "Odisha",
      type: "Temple",
      coordinates: [19.8876, 86.0945],
      description: "13th-century Sun Temple shaped like a giant chariot",
      category: "historical"
    },

    // Assam
    {
      id: 37,
      name: "Kaziranga National Park",
      city: "Golaghat",
      state: "Assam",
      type: "National Park",
      coordinates: [26.5725, 93.1713],
      description: "UNESCO World Heritage Site famous for one-horned rhinoceros",
      category: "nature"
    },

    // Sikkim
    {
      id: 38,
      name: "Nathula Pass",
      city: "Gangtok",
      state: "Sikkim",
      type: "Mountain Pass",
      coordinates: [27.3869, 88.8236],
      description: "Mountain pass on the Indo-China border",
      category: "nature"
    },

    // Union Territories
    {
      id: 39,
      name: "Cellular Jail",
      city: "Port Blair",
      state: "Andaman & Nicobar",
      type: "Historical Prison",
      coordinates: [11.6750, 92.7625],
      description: "British colonial prison used for Indian freedom fighters",
      category: "historical"
    },
    {
      id: 40,
      name: "Radhanagar Beach",
      city: "Havelock Island",
      state: "Andaman & Nicobar",
      type: "Beach",
      coordinates: [11.9864, 92.9819],
      description: "One of Asia's best beaches with white sand and clear water",
      category: "nature"
    },

    // More detailed locations for smaller areas
    {
      id: 41,
      name: "Chandni Chowk",
      city: "Delhi",
      state: "Delhi",
      type: "Market",
      coordinates: [28.6517, 77.2300],
      description: "One of the oldest and busiest markets in Old Delhi",
      category: "cultural"
    },
    {
      id: 42,
      name: "Colaba Causeway",
      city: "Mumbai",
      state: "Maharashtra",
      type: "Shopping Street",
      coordinates: [18.9063, 72.8132],
      description: "Famous shopping destination in South Mumbai",
      category: "cultural"
    },
    {
      id: 43,
      name: "Baga Beach",
      city: "Goa",
      state: "Goa",
      type: "Beach",
      coordinates: [15.5589, 73.7494],
      description: "Popular beach known for nightlife and water sports",
      category: "nature"
    },
    {
      id: 44,
      name: "Vaishno Devi Temple",
      city: "Katra",
      state: "Jammu & Kashmir",
      type: "Temple",
      coordinates: [33.0314, 74.9476],
      description: "Hindu temple dedicated to Goddess Vaishno Devi",
      category: "religious"
    },
    {
      id: 45,
      name: "Lotus Temple",
      city: "Delhi",
      state: "Delhi",
      type: "Temple",
      coordinates: [28.5535, 77.2588],
      description: "Baháʼí House of Worship shaped like a lotus flower",
      category: "religious"
    },
    {
      id: 46,
      name: "Hawa Mahal",
      city: "Jaipur",
      state: "Rajasthan",
      type: "Palace",
      coordinates: [26.9239, 75.8267],
      description: "Palace of Winds with unique honeycomb structure",
      category: "historical"
    },
    {
      id: 47,
      name: "Jaisalmer Fort",
      city: "Jaisalmer",
      state: "Rajasthan",
      type: "Fort",
      coordinates: [26.9124, 70.9126],
      description: "Golden fort in the heart of Thar Desert",
      category: "historical"
    },
    {
      id: 48,
      name: "Kerala Backwaters",
      city: "Kumarakom",
      state: "Kerala",
      type: "Natural",
      coordinates: [9.6171, 76.4295],
      description: "Network of interconnected canals, rivers, and lakes",
      category: "nature"
    },
    {
      id: 49,
      name: "Akshardham Temple",
      city: "Delhi",
      state: "Delhi",
      type: "Temple",
      coordinates: [28.6127, 77.2773],
      description: "Large Hindu temple complex with exhibitions and gardens",
      category: "religious"
    },
    {
      id: 50,
      name: "Sanchi Stupa",
      city: "Sanchi",
      state: "Madhya Pradesh",
      type: "Buddhist Monument",
      coordinates: [23.4794, 77.7396],
      description: "Oldest stone structure in India, Buddhist stupa",
      category: "historical"
    },
    {
      id: 51,
      name: "Kashi Institute of Technology",
      city: "Varanasi",
      state: "Uttar Pradesh",
      type: "Educational Institute",
      coordinates: [26.3700, 80.4242],
      description: "Premier educational institute in Varanasi",
      category: "cultural"
    },
    {
      id: 52,
      name: "Shri Kashi Vishwanath Temple",
      city: "Varanasi",
      state: "Uttar Pradesh",
      type: "Hindu Temple",
      coordinates: [25.3109, 83.0099],
      description: "One of the most sacred Hindu temples dedicated to Lord Shiva, located in Varanasi.",
      category: "religious"
    },
    {
      id: 53,
      name: "Sarnath",
      city: "Varanasi",
      state: "Uttar Pradesh",
      type: "Buddhist Pilgrimage Site",
      coordinates: [25.3667, 83.0167],
      description: "The place where Lord Buddha gave his first sermon after attaining enlightenment.",
      category: "religious"
    }
  ];

  // Get unique states for filter
  const states = ['all', ...new Set(indiaTourismData.map(place => place.state))];
  const categories = ['all', 'historical', 'nature', 'religious', 'cultural'];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setShowSidebar(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize map after component mounts
  useEffect(() => {
    setTimeout(() => {
      setMapReady(true);
      setTourismPlaces(indiaTourismData);
    }, 100);
  }, []);

  // Search for locations using OpenStreetMap Nominatim
  const searchLocation = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    };
    
    setLoading(true);
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query + ', India')}&limit=5`,
        {
          headers: {
            'Accept-Language': 'en',
          }
        }
      );
      
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching location:', error);
      setSearchResults([]);
    }
    setLoading(false);
  };

  // Handle location selection from search
  const handleLocationSelect = (location) => {
    const coords = [parseFloat(location.lat), parseFloat(location.lon)];
    setSelectedLocation({
      name: location.display_name,
      coordinates: coords
    });
    setMapCenter(coords);
    setMapZoom(13);
    setSearchResults([]);
    setSearchQuery(location.display_name);
    
    findNearbyTourismPlaces(coords);
  };

  // Find tourism places near the selected location
  const findNearbyTourismPlaces = (coordinates) => {
    const nearbyPlaces = indiaTourismData.filter(place => {
      const distance = calculateDistance(
        coordinates[0], coordinates[1],
        place.coordinates[0], place.coordinates[1]
      );
      return distance <= 300; // Reduced from 500 to 300km for better relevance
    });
    setTourismPlaces(nearbyPlaces);
    setSelectedState('all');
    setSelectedType('all');
  };

  // Calculate distance between two coordinates using Haversine formula
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Show all India tourism places
  const showAllIndiaPlaces = () => {
    setTourismPlaces(indiaTourismData);
    setMapCenter([20.5937, 78.9629]);
    setMapZoom(5);
    setSelectedLocation(null);
    setSearchQuery('');
    setSearchResults([]);
    setSelectedState('all');
    setSelectedType('all');
  };

  // Filter places by state and type
  const filterPlaces = () => {
    let filtered = indiaTourismData;
    
    if (selectedState !== 'all') {
      filtered = filtered.filter(place => place.state === selectedState);
    }
    
    if (selectedType !== 'all') {
      filtered = filtered.filter(place => place.category === selectedType);
    }
    
    setTourismPlaces(filtered);
    setSelectedLocation(null);
    setSearchQuery('');
    
    // Adjust map view based on filtered results
    if (filtered.length > 0) {
      const firstPlace = filtered[0];
      setMapCenter(firstPlace.coordinates);
      setMapZoom(filtered.length === 1 ? 12 : 7);
    }
  };

  // Get appropriate icon based on category
  const getIconForCategory = (category) => {
    switch (category) {
      case 'historical': return historicalIcon;
      case 'nature': return natureIcon;
      case 'religious': return religiousIcon;
      case 'cultural': return culturalIcon;
      default: return tourismIcon;
    }
  };

  useEffect(() => {
    filterPlaces();
  }, [selectedState, selectedType]);

  // Handle search input change with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) {
        searchLocation(searchQuery);
      } else {
        setSearchResults([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  if (!mapReady) {
    return (
      <div className="tourism-map-container loading">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading India Tourism Map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="tourism-map-container">
     

      <div className="map-content">
        <div className="search-section">
          <div className="search-container">
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Search for any city, town, or location in India..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && searchLocation(searchQuery)}
                className="search-input"
              />
              {loading && <div className="search-loader"></div>}
            </div>
            <button 
              onClick={() => searchLocation(searchQuery)}
              className="search-button"
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
            <button 
              onClick={showAllIndiaPlaces}
              className="all-india-button"
            >
              All India
            </button>
            <button 
              onClick={() => setIsSatelliteView(!isSatelliteView)}
              className={`satellite-button ${isSatelliteView ? 'active' : ''}`}
            >
              {isSatelliteView ? 'Map View' : 'Satellite'}
            </button>
            {isMobile && (
              <button 
                onClick={() => setShowSidebar(!showSidebar)}
                className="sidebar-toggle"
              >
                {showSidebar ? 'Hide List' : 'Show List'}
              </button>
            )}
          </div>

          <div className="filter-section">
            <div className="filter-group">
              <label>Filter by State:</label>
              <select 
                value={selectedState} 
                onChange={(e) => setSelectedState(e.target.value)}
                className="filter-select"
              >
                {states.map(state => (
                  <option key={state} value={state}>
                    {state === 'all' ? 'All States' : state}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Filter by Type:</label>
              <select 
                value={selectedType} 
                onChange={(e) => setSelectedType(e.target.value)}
                className="filter-select"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Types' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="search-result-item"
                  onClick={() => handleLocationSelect(result)}
                >
                  <div className="result-name">{result.display_name}</div>
                  <div className="result-type">{result.type}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="map-layout">
          {(showSidebar || !isMobile) && (
            <div className={`places-sidebar ${isMobile ? 'mobile-sidebar' : ''}`}>
              <div className="sidebar-header">
                <h3>
                  {selectedState !== 'all' 
                    ? `Tourist Places in ${selectedState}`
                    : selectedLocation 
                      ? `Tourist Places near ${selectedLocation.name.split(',')[0]}`
                      : 'Popular Tourist Places in India'
                  }
                  <span className="places-count"> ({tourismPlaces.length})</span>
                </h3>
                {isMobile && (
                  <button 
                    className="close-sidebar"
                    onClick={() => setShowSidebar(false)}
                  >
                    ×
                  </button>
                )}
              </div>
              
              {tourismPlaces.length === 0 ? (
                <div className="no-places">
                  <p>No tourist places found for the selected filters</p>
                  <button onClick={showAllIndiaPlaces} className="show-all-button">
                    Show All India Tourism Places
                  </button>
                </div>
              ) : (
                <div className="places-list">
                  {tourismPlaces.map(place => (
                    <div 
                      key={place.id} 
                      className="place-card"
                      onClick={() => {
                        setMapCenter(place.coordinates);
                        setMapZoom(14);
                        if (isMobile) setShowSidebar(false);
                      }}
                    >
                      <h4>{place.name}</h4>
                      <p className="place-location">{place.city}, {place.state}</p>
                      <div className="place-meta">
                        <span className={`place-type ${place.category}`}>
                          {place.category}
                        </span>
                        <span className="place-category">
                          {place.type}
                        </span>
                      </div>
                      <p className="place-description">{place.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className={`map-container ${!showSidebar && isMobile ? 'full-map' : ''}`}>
            <MapContainer
              center={mapCenter}
              zoom={mapZoom}
              style={{ height: '100%', width: '100%' }}
              ref={mapRef}
              whenCreated={(map) => {
                mapRef.current = map;
                setTimeout(() => {
                  map.invalidateSize();
                }, 100);
              }}
              zoomControl={true}
              scrollWheelZoom={true}
              touchZoom={true}
              doubleClickZoom={true}
            >
              <MapController center={mapCenter} zoom={mapZoom} />
              <MapResize />
              <TileLayerController isSatelliteView={isSatelliteView} />
              
              {selectedLocation && (
                <Marker 
                  position={selectedLocation.coordinates}
                  icon={locationIcon}
                >
                  <Popup>
                    <div className="popup-content">
                      <strong>📍 Your Location</strong><br />
                      {selectedLocation.name}
                    </div>
                  </Popup>
                </Marker>
              )}
              
              {tourismPlaces.map(place => (
                <Marker 
                  key={place.id} 
                  position={place.coordinates}
                  icon={getIconForCategory(place.category)}
                >
                  <Popup>
                    <div className="popup-content">
                      <h4>{place.name}</h4>
                      <p><strong>📍 City:</strong> {place.city}</p>
                      <p><strong>🏛️ State:</strong> {place.state}</p>
                      <p><strong>🏷️ Type:</strong> {place.type}</p>
                      <p><strong>🎯 Category:</strong> {place.category}</p>
                      <p>{place.description}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourismMap;