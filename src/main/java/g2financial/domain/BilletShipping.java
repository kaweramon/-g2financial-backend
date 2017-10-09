package g2financial.domain;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.Type;

import lombok.Data;

@Data
@Entity(name = "boletos_remessa")
public class BilletShipping {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Codigo")
	private Integer id;
	
	@Column(name = "Contador")
	private Integer counter;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "DATA_VENC")
	private Date maturityDate;
	
	@Column(name = "VALOR_CONTA")
	private Double billValue;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "DATA_QUIT")
	private Date dischargeDate;
	
	@Column(name = "VALOR_QUITADO")
	private Double dischargeValue;
	
	@Column(name = "COD_Cliente")
	private  Integer clientId;
	
	@Column(name = "NOSSO_NUMERO")
	private String ourNumber;
	
	@Column(name = "Cancelado")
	private Boolean isCancel;
	
	@Column(name = "Tipo_cobranca")
	private String chargingType;
	
	@Column(name = "Pagto_Parcial")
	private String partialPayment;
	
	@Column(name = "reg", columnDefinition = "int default 0")
	@Type(type= "org.hibernate.type.NumericBooleanType")
	private Boolean isRegister;
	
	@OneToMany
	@JoinTable(name = "boleto_remessa_aux", 
			joinColumns={ @JoinColumn(name="cod_boleto_remessa", referencedColumnName="Codigo") },
		    inverseJoinColumns={ @JoinColumn(name="cod_conta_a_receber_pagamento", referencedColumnName="Codigo", unique=true) })
	private List<BillToPayPayment> listBillToPayPayment;
}
