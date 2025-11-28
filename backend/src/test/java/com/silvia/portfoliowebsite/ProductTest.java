package com.silvia.test;

import com.silvia.entity.Product;
import com.silvia.service.ProductService;
import com.silvia.repository.ProductRepo;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.Test;

@SpringBootTest
public class ProductTest {
    
    @Mock
    private ProductRepo productRepo;

    @InjectMocks
    private ProductService productService;

    private AutoCloseable closeable;

    @BeforeEach
    public void setUp() {
        closeable = MockitoAnnotations.openMocks(this);
    }

    @AfterEach
    public void tearDown() throws Exception {
        closeable.close();
    }

    @Test
    public void getProductByIdTest()
    {  
        
    }

    @Test
    public void getProductsByCategoryTest()
    {

    }

    @Test
    public void getProductsByNameTest()
    {

    }

    @Test
    public void getAllProductsTest()
    {

    }
    
    @Test
    public void createOrCheckProductTest()
    {

    }

    @Test
    public void updateProductTest()
    {

    }

    @Test
    public void deleteProductTest()

    
}