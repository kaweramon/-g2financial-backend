package g2financial.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity(name = "cadastro_bancos")
@Data
public class Bank {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Codigo")
	private Integer id;
	
	@Column(name = "Nome_Banco")
	private String name;
	
	@Column(name = "boletos")
	private Boolean isBillet;
	
	@Column(name = "nomeBancoRem")
	private String nameBankRem;
}
