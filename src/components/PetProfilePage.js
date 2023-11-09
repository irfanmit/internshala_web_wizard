import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PetProfilePage = ({ match }) => {
  // const [pet, setPet] = useState(null);

  useEffect(() => {
    // // Fetch pet data from the backend using the pet's ID from the URL
    // const petId = match.params.id;

    // fetch(`http://localhost:5000/api/pets/${petId}`)
    //   .then((response) => response.json())
    //   .then((data) => setPet(data))
    //   .catch((error) => console.error('Error fetching pet data:', error));
  }, []);

  const handleEnquire = () => {
    // Implement the functionality to enquire about the pet
    // You can use a chat system or any other method to handle enquires.
    alert('Enquire about this pet: ');
  };

  // if (!pet) {
  //   // Loading state while waiting for data from the backend
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="pet-profile">
      <h1>name</h1>
      <img src="" alt="name" />
      <p>Breed: </p>
      <p>Age: 10</p>
      <p>Description: good </p>
      <p>Price: $123</p>
      <Link to = "/chat"> 
      <button onClick={handleEnquire}>Enquire</button>
      </Link>
    </div>
  );
};

export default PetProfilePage;
