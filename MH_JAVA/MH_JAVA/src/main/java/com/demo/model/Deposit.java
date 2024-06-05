package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "deposit")
public class Deposit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int d_id;
    private String date;
    private long depositAmount;

    @ManyToOne
    @JoinColumn(name = "m_id", nullable = false)
    private Merchant merchant;

    public Deposit() {
        super();
    }

    public Deposit(int d_id, String date, long depositAmount, Merchant merchant) {
        super();
        this.d_id = d_id;
        this.date = date;
        this.depositAmount = depositAmount;
        this.merchant = merchant;
    }

    public int getD_id() {
        return d_id;
    }

    public void setD_id(int d_id) {
        this.d_id = d_id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public long getDepositAmount() {
        return depositAmount;
    }

    public void setDepositAmount(long depositAmount) {
        this.depositAmount = depositAmount;
    }

    public Merchant getMerchant() {
        return merchant;
    }

    public void setMerchant(Merchant merchant) {
        this.merchant = merchant;
    }

    @Override
    public String toString() {
        return "Deposit [d_id=" + d_id + ", date=" + date + ", depositAmount=" + depositAmount + ", merchant=" + merchant + "]";
    }
}
