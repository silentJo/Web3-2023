import React, {useState} from 'react';
import {useMutation} from '@apollo/client';

import {ALL_AUTHORS, ALL_BOOKS, CREATE_BOOK} from '../queries';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [published, setPublished] = useState('');
    const [genre, setGenre] = useState('');
    const [genres, setGenres] = useState([]);

    const [createBook] = useMutation(CREATE_BOOK, {
        refetchQueries: [{query: ALL_BOOKS}, {query: ALL_AUTHORS}],
    });

    const submit = async (event) => {
        event.preventDefault();
        try {
            await createBook({
                variables: {title, author, published: parseInt(published, 10), genres},
            });
            setTitle('');
            setAuthor('');
            setPublished('');
            setGenre('');
            setGenres([]);
        } catch (error) {
            console.error("Mutation error:", error);
        }
    };

    const addGenre = () => {
        if (genre) {
            setGenres([...genres, genre]);
            setGenre('');
        }
    };

    return (
        <div>
            <h2>Create new book</h2>
            <form onSubmit={submit}>
                <div>
                    Title{' '}
                    <input
                        type="text"
                        value={title}
                        onChange={({target}) => setTitle(target.value)}
                    />
                </div>
                <div>
                    Author{' '}
                    <input
                        type="text"
                        value={author}
                        onChange={({target}) => setAuthor(target.value)}
                    />
                </div>
                <div>
                    Published{' '}
                    <input
                        type="number"
                        value={published}
                        onChange={({target}) => setPublished(target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={genre}
                        onChange={({target}) => setGenre(target.value)}
                    />
                    <button type="button" onClick={addGenre}>
                        Add Genre
                    </button>
                </div>
                <div>
                    Genres:{' '}
                    {genres.map((g, index) => (
                        <span key={index}>
                            {g},{' '}
                            </span>
                    ))}
                </div>
                <button type="submit">Create book</button>
            </form>
        </div>
    );
};

export default BookForm;
