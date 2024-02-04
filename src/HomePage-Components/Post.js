// Post.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import forward from "../Images/right-arrow.png";

const Post = ({ filteredBooks }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const hp = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setBooks(hp.data);
    };

    return (
        <div>
            <ul className="boxContainer">
                {books
                    .filter(book => {
                        // Ensure filteredBooks is a string before calling toLowerCase()
                        const filterString = typeof filteredBooks === "string" ? filteredBooks.toLowerCase() : "";
                        if (!filterString) return true; // Display all books if no search query
                        return book.title.toLowerCase().includes(filterString);
                    })
                    .map((book, index) => (
                        <div key={index} className="post">
                            <img
                                src={`https://picsum.photos/200?random=${book.id}`}
                                alt={`Post ${book.id}`}
                                className="post-img"
                            />
                            <h3>{book.title}</h3>
                            <p>{book.body}</p>
                            <Link to={`/item/${book.id}`} state={{ title: book.title, body: book.body }}>
                                <button className="btn">
                                    <img src={forward} alt="Forward arrow" />
                                </button>
                            </Link>
                        </div>
                    ))}
            </ul>
        </div>
    );
};

export default Post;
