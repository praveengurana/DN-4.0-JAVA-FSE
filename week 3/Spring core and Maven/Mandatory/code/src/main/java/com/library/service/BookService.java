package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Spring will use this setter to inject the dependency
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void showBooks() {
        System.out.println("BookService: Calling BookRepository...");
        bookRepository.displayBooks();
    }
}
