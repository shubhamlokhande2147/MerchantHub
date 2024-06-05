package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "bill")
public class Bill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int b_id;
    private String date;
    private long payAmount;
    private String goodNames;

    @ManyToOne
    @JoinColumn(name = "m_id", nullable = false)
    private Merchant merchant;

    public Bill() {
        super();
    }

    public Bill(int b_id, String date, long payAmount, String goodNames, Merchant merchant) {
        super();
        this.b_id = b_id;
        this.date = date;
        this.payAmount = payAmount;
        this.goodNames = goodNames;
        this.merchant = merchant;
    }

    public int getB_id() {
        return b_id;
    }

    public void setB_id(int b_id) {
        this.b_id = b_id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public long getPayAmount() {
        return payAmount;
    }

    public void setPayAmount(long payAmount) {
        this.payAmount = payAmount;
    }

    public String getGoodNames() {
        return goodNames;
    }

    public void setGoodNames(String goodNames) {
        this.goodNames = goodNames;
    }

    public Merchant getMerchant() {
        return merchant;
    }

    public void setMerchant(Merchant merchant) {
        this.merchant = merchant;
    }

    @Override
    public String toString() {
        return "Bill [b_id=" + b_id + ", date=" + date + ", payAmount=" + payAmount + ", goodNames=" + goodNames
                + ", merchant=" + merchant + "]";
    }
}
