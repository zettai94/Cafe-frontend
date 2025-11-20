package com.silvia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.silvia.entity.Product;

public interface ProductRepo extends JpaRepository<Product, Long>{
    
    Optional<Product> findByProductName(String name);
    List<Product> findAllByCategory(String category);
    List<Product> findByProductNameContainingIgnoreCase(String name);
}
