import React, {useState} from 'react';
import {useQuery} from '@apollo/client';

import Authors from './components/Authors';
import Books from './components/Books';
import BookForm from './components/BookForm';
import {ALL_AUTHORS, ALL_BOOKS} from './queries';
import PhoneForm from "./components/BornForm";

const App = () => {
    const allAuthorsQueryResult = useQuery(ALL_AUTHORS);
    const allBooksQueryResult = useQuery(ALL_BOOKS);
    const [authors, setAuthors] = useState([]);
    const [books, setBooks] = useState([]);
    const [pageToShow, setPageToShow] = useState('');

    if (allAuthorsQueryResult.loading || allBooksQueryResult.loading) return <div>loading...</div>;

    const showAuthors = () => {
        setAuthors(allAuthorsQueryResult.data.allAuthors);
        setPageToShow('authors');
    };

    const showBooks = () => {
        setBooks(allBooksQueryResult.data.allBooks);
        setPageToShow('books');
    };

    const showAddBook = () => {
        setPageToShow('addBook');
    };

    const authorsPage = () => {
        return (
            <div>
                <Authors authors={authors}/>
                <PhoneForm />
            </div>
        )
    }

    return (
        <div>
            <button onClick={showAuthors}>Authors</button>
            <button onClick={showBooks}>Books</button>
            <button onClick={showAddBook}>Add book</button>
            {pageToShow === 'authors' && authorsPage()}
            {pageToShow === 'books' && <Books books={books}/>}
            {pageToShow === 'addBook' && <BookForm/>}
        </div>
    );
};

export default App;