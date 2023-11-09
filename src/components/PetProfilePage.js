import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import { materialIcons } from '@mui/material';
import { FaHeart, FaHeartOutline } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PetProfilePage = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();
  // console.log("id " + id);
  const [petData, setPetData] = useState('');
  const [filteredPetData, setFilteredPetData] = useState([])
  const petList = [
    {
      id : 1,
      name: 'Pet Name 1',
      price: 100,
      description : 'A lovely breed '
    },
    {
      id : 2,
      name: 'Pet Name 2',
      price: 150,
      description : 'A lovely breed '
    },
    {
      id : 3,
      name: 'Pet Name 3',
      price: 120,
      description : 'A lovely breed '
    },
    // Add more pet items here
  ];

  const Int = (value) => parseInt(value, 10);

  useEffect(() => {
    const storedPetData = (localStorage.getItem('petList'))
    setPetData(storedPetData);
    console.log(petData)
    console.log("id " + id);
    const filtered = petList.filter(item => item.id === Int(id));
    console.log(filtered);
    setFilteredPetData(filtered)

    
    if (localStorage.getItem(`pet-fav`) === 'true') {
      setIsFavorite(true);
    }
  }, [petData, id])


//   useEffect(() => {
//     console.log(petData);
// if(petData){
//   const filteringPetData = petData.filter(item => item.id === id);
//   setFilteredPetData(filteringPetData)
//   console.log(filteredPetData);
// }
//   },[petData])
  
  // const filteringPetData = petData.filter(item => item.id === id);
  // setFilteredPetData(filteringPetData)
  // console.log(filteredPetData);

  const handleEnquire = () => {
    // Implement the functionality to enquire about the pet
    // You can use a chat system or any other method to handle enquires.
    alert('Enquire about this pet: ');
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);

    if (isFavorite) {
      localStorage.removeItem('pet-fav');
    } else {
      localStorage.setItem('pet-fav', 'true');
    }
  };

  const favoriteIcon = isFavorite ? <FaHeart /> : '';

  return (
    <div className="pet-profile">
    {filteredPetData.map((pet) => (
      <div key={pet.id}>
        <h1>{pet.name}</h1>
        <h2>{pet.description}</h2>
        <h2>{pet.age}</h2>
        <h2>{pet.price}</h2>
      </div>
    ))}
    
   <Link to='/chat'> <button>Enquire</button></Link>
    </div>
  );
};

export default PetProfilePage;
