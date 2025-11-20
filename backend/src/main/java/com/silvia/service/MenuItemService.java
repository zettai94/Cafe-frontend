package com.silvia.service;

import com.silvia.entity.Product;
import com.silvia.repository.ProductRepo;
import com.silvia.service.interfaces.ProductInterface;
import com.silvia.exceptions.ProductIDNotFoundException;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class ProductService implements ProductInterface{

    private final ProductRepo productRepo;

    @Autowired
    public ProductService(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    public Optional<Product> getProductById(Long id)
    {
        return productRepo.findByProductID(id);
    }

    public List<Product> getProductsByCategory(String category)
    {
        return productRepo.findAllByCategory(category);
    }

    //search bar usage
    public List<Product> getProductsByName(String name)
    {
        return productRepo.findByProductNameContainingIgnoreCase(name);
    }

    public List<Product> getAllProducts()
    {
        return productRepo.findAll();
    }

    public Optional<Product> addOrReturnProduct(Product newProduct)
    {
        Optional<Product> existing = productRepo.findByProductName(newProduct.getProductName());
        if(existing.isPresent())
        {
            return existing;
            //to be handled in Controller 
        }
        Product saved = productRepo.save(newProduct);
        return Optional.of(saved);
    }

    public Product updateProduct(Long id, Product product)
    {
        Product exisitng = productRepo.findById(id).orElseThrow(()-> new ProductIDNotFoundException(id));
        exisitng.setCategory(product.getCategory());
        exisitng.setProductName(product.getProductName());
        exisitng.setProductPrice(product.getProductPrice());
        return productRepo.save(exisitng);
    }

    public void deleteProduct(Long id)
    {
        productRepo.deleteById(id);
    }

}