package g2financial.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import lombok.Data;

@Entity(name = "contas_a_receber_pagamento")
@Data
public class BillToPayPayment implements Comparable<BillToPayPayment> {

	@Id
	@Column(name = "Codigo")
	private Integer id;

	@Column(name = "Cod_Contas_a_receber")
	private Integer billToPayId;
	
	@Column(name = "Pago")
	private String isPay;
	
	@Column(name = "Operador")
	private String operator;
	
	@Column(name = "vencimento")
	@Temporal(TemporalType.DATE)
	private Date maturity;
	
	@Column(name = "Data_Hora")
	@Temporal(TemporalType.TIMESTAMP)
	private Date hourDate;
	
	@Column(name = "Observacao")
	private String Observation;
	
	@Column(name = "Valor_Pago")
	private Double amountPaid;
	
	@Column(name = "Valor")
	private Double amount;
	
	@Transient
	private Double subTotal;
	
	@Column(name = "Valor_Desconto")
	private Double amountDiscount;
	
	@Column(name = "Valor_Acrescimo")
	private Double amountAccrual;
	
	@Column(name = "Juros")
	private Double interest;
	
	@Column(name = "Nosso_numero")
	private String ourNumber;
	
	@Column(name = "Cancelado")
	private Boolean isCancel;

	@Column(name = "banco")
	private Integer bankId;
	
	@Transient
	private Bank bank;
	
	@Transient
	private BilletShipping billetShipping;
	
	@Transient
	private String description;
	
	public int compareTo(BillToPayPayment billToPayPayment) {
		return getMaturity().compareTo(billToPayPayment.getMaturity());
	}

}
