import React from "react";

const Books = ({books}) => {
    return (
        <div>
            <h2>Books</h2>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Author</th>
                    <th>Published</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => (
                    <tr key={book.title}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.published}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Books