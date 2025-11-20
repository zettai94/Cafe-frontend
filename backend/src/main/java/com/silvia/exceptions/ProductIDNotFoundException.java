package com.silvia.exceptions;

public class ProductIDNotFoundException extends RuntimeException{
    public ProductIDNotFoundException(Long id){
        super("Product ID not found: " + id);
    }
}