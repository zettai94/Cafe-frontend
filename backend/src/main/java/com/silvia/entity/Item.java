package com.silvia.entity;

import com.silvia.model.CafeItemType;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name ="items")
@Getter @Setter
public class Item {
    @Id
    @GeneratedValue
    @Column(name = "menu_items")
    private Long itemID;

    @Enumerated(EnumType.STRING)
    @Column(name = "item_type")
    private CafeItemType type;

    @Column(name = "item_name")
    private String itemName;

    @Column(name ="item_price")
    private Double itemPrice;

    
}
