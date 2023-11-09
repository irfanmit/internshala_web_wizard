import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('');
  const [sortOrder, setSortOrder] = useState(''); // Initial sort order is empty
  const [sortedPets, setSortedPets] = useState([]); // State for the sorted pet list

  const petList = [
    {
      name: 'Pet Name 1',
      price: 100,
    },
    {
      name: 'Pet Name 2',
      price: 150,
    },
    {
      name: 'Pet Name 3',
      price: 120,
    },
    // Add more pet items here
  ];

  useEffect(() => {
    // This effect runs whenever searchQuery, filterCriteria, or sortOrder changes.
    // It filters, sorts, and updates the sortedPets state accordingly.

    // Create a filtered list based on the search query
    const filteredPets = petList.filter((pet) => {
      return pet.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    // Sort the filtered list based on the sort order
    let newSortedPets = [...filteredPets];

    if (sortOrder === 'asc') {
      newSortedPets.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      newSortedPets.sort((a, b) => b.price - a.price);
    }

    // Update the sortedPets state with the sorted and filtered list
    setSortedPets(newSortedPets);
  }, [searchQuery, filterCriteria, sortOrder]);

  const handleSearch = () => {
    // No need to manually set sortedPets here; it will be updated by the effect.
  };

  const handleFilterChange = (event) => {
    setFilterCriteria(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div className="home-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for pets..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="filter-sort">
        <input
          type="text"
          placeholder="Filter by criteria..."
          value={filterCriteria}
          onChange={handleFilterChange}
        />
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div className="pet-list">
        {sortedPets.map((pet, index) => (
          <div className="pet-item" key={index}>
            <h3>{pet.name}</h3>
            <p>Price: ${pet.price}</p>
            <Link to={`/PetProfile/124eef42`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
