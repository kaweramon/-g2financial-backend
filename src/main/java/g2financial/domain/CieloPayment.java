package g2financial.domain;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.Type;

import lombok.Data;

@Entity(name = "retorno_pagamento_cielo")
@Data
public class CieloPayment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "codigo")
	private Integer id;
	
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "codigo_retorno_pagamento_cielo_cartoes")
	private CieloPaymentCards cieloPaymentCards;
	
	@Column(name = "codigo_cliente")
	private Integer clientId;
	
	@Column(name = "valor")
	private Double amount;
	
	@Column(name = "autenticado")
	@Type(type= "org.hibernate.type.NumericBooleanType")
	private boolean authenticate;
	
	@Column(name = "codigo_autorizacao")
	private String authorizationCode;

	@Column(name = "capturar")
	@Type(type= "org.hibernate.type.NumericBooleanType")
	private boolean capture;
	
	@Column(name = "pais")
	private String country;
	
	@Column(name = "moeda")
	private String currency;
	
	@Column(name = "parcelas")
	private Integer installments;
	
	@Column(name = "juros")
	private Double interest;

	@Column(name = "codigo_pagamento")
	private String paymentId;

	@Column(name = "prova_de_venda")
	private String proofOfSale;
	
	@Column(name = "fornecedor")
	private String provider;
	
	@Column(name = "date_recebimento")
	@Temporal(TemporalType.TIMESTAMP)
	private Date receivedDate;

	@Column(name = "recorrente")
	@Type(type= "org.hibernate.type.NumericBooleanType")
	private boolean recurrent;
	
	@Column(name = "codigo_retorno")
	private String returnCode;
	
	@Column(name = "mensagem_retorno")
	private String returnMessage;
	
	@Column(name = "valor_taxa_servico")
	private Double serviceTaxAmount;
	
	@Column(name = "descricao_na_fatura")
	private String softDescriptor;
	
	private Integer status;
	
	private String tid;
	
	@Column(name = "tipo")
	private String type;
	
	@Column(name = "eAvulso")
	@Type(type= "org.hibernate.type.NumericBooleanType")
	private boolean isForSale;
	
	@Column(name = "discriminacao")
	private String description;
	
	@Column(name = "contadorCodPedido")
	private Integer countOrderId;
}
