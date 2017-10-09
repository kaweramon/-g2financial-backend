package g2financial.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.Type;

import lombok.Data;

@Entity(name = "cadastro_bancos")
@Data()
public class Bank {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Codigo")
	private Integer id;
	
	@Column(name = "Nome_Banco")
	private String name;
	
	@Column(name = "boletos")
	@Type(type= "org.hibernate.type.NumericBooleanType")
	private Boolean isBillet;
	
	@Column(name = "cod_banco")
	private Integer bankCode;
	
	@Column(name = "cod_transmissao")
	private String transmissionCode;
	
	@Column(name = "layoutInf")
	private String layoutInf;
	
	@Column(name = "nomeBancoRem")
	private String bankNameRem;
	
	@Column(name = "nome_cedente")
	private String assignorName;
	
	@Column(name = "num_versao_remessa")
	private Integer shippingNumber;
	
	@Column(name = "num_sequencial")
	private Integer sequencialNumber;
	
	@Column(name = "agencia")
	private String agency;
	
	@Column(name = "conta")
	private String account;
	
	@Column(name = "num_carteira_remessa")
	private Integer walletShippingNumber;
	
	@Column(name = "complemento")
	private String complement;
}

