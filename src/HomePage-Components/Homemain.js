// Homemain.js
import React, { useState } from "react";
import Search from "./Search";
import Post from "./Post";
import Navbar from "./Navbar";

const Homemain = () => {
    const [filteredBooks, setFilteredBooks] = useState([]);

    const handleSearch = (query) => {
        setFilteredBooks(query); // This should set the filteredBooks state with the search query
    };

    return (
        <div>
            <Navbar />
            <Search onSearch={handleSearch} /> {/* Pass handleSearch function as onSearch prop */}
            <Post filteredBooks={filteredBooks} /> {/* Pass filteredBooks as prop to Post component */}
        </div>
    );
};

export default Homemain;
