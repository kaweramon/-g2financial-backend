package g2financial.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Entity(name = "contas_a_receber_val_pagos")
@Data
public class BillToPayAmountsPaid {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Codigo")
	private Integer id;
	
	@Column(name = "Cod_CR_Pagamento")
	private Integer billToPayPaymentId;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "Data")
	private Date date;
	
	@Temporal(TemporalType.TIME)
	@Column(name = "Hora")
	private Date hour;
	
	@Column(name = "Valor")
	private Double amount;
	
	@Column(name = "Operador")
	private String operator;
	
	@Column(name = "Obs")
	private String observation;
}
