package com.silvia.entity;

import com.silvia.model.Category;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Entity
@Table(name ="products")
@Getter @Setter
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue
    @Column(name = "productID")
    private Long productID;

    @Enumerated(EnumType.STRING)
    @Column(name = "product_category")
    @NotNull(message = "Pick a category for the product")
    private Category category;

    @Column(name = "product_name")
    @NotNull(message = "Product name cannot be null")
    private String productName;

    @Column(name ="product_price")
    @Positive(message = "Product price must be greater than 0")
    private Double productPrice;

    //this is used to autolink tracked inventory products
    //one to one relationship; auto cascade when product is deleted
    //lazy fetch to avoid loading inventory data unless needed (beverage not tracked)
    @OneToOne(mappedBy = "products", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Inventory inventory;

    //constructors in progress

    //custom setter for managing bi-directional relationship between Product and Inventory
    public void setInventory(Inventory inventory) {
        this.inventory = inventory;
        if(inventory != null)
        {
            inventory.setProduct(this);
        }
    }
    
}
