package g2financial.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Entity(name = "retorno_pagamento_cielo_cartoes")
@Data
public class CieloPaymentCards {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "codigo")
	private Integer id;

	@OneToOne(mappedBy = "cieloPaymentCards")
	@JoinColumn(name = "codigo_retorno_pagamento_cielo")
	private CieloPayment cieloPayment;
	
	@Column(name = "tipo")
	private String type;
	
	@Column(name = "bandeira")
	private String brand;
	
	@Column(name = "numero_cartao")
	private String cardNumber;
	
	@Column(name = "data_expiracao")
	private String expirationDate;
	
	@Column(name = "comprador")
	private String holder;
	
	@Column(name = "salvar_cartao")
	private Boolean saveCard;
	
	@Column(name = "autorizar_agora")
	private Boolean authorizeNow;
	
	@Column(name = "data_final")
	private Date endDate;
	
	@Column(name = "Intervalo")
	private Integer interval;
	
	@Column(name = "proxima_recorrencia")
	@Temporal(TemporalType.DATE)
	private Date nextRecurrency;
	
	@Column(name = "codigo_razao")
	private Integer reasonCode;
	
	@Column(name = "mensagem_razao")
	private String reasonMessage;
	
	@Column(name = "codigo_pagamento_recorrente")
	private String recurrentPaymentId;
	
	@Column(name = "token_cartao")
	private String cardToken;
}
