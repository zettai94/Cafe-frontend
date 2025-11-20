package com.silvia.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "product_inven")
@Getter @Setter
public class Inventory {

    //create invenID that takes productID as PK
    @Id
    @Column(name = "invenID")
    private Long invenID;

    @OneToOne
    @MapsId
    @JoinColumn(name = "productID")
    @Column(name = "product")
    private Product product;

    @Column(name = "current_qty")
    @PositiveOrZero(message = "Inventory stock cannot be negative")
    private int inStock;
    
    public void setProduct(Product product) 
    {
        //to be implemented
    }
}
