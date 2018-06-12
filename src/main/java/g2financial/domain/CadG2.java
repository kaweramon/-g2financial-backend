package g2financial.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity(name = "cadusuario")
@Data
public class CadG2 {

	@Id
	@Column(name = "Codigo")
	private Integer id;

	@Column(name = "RazaoSocial")
	private String razaoSocial;
	
	@Column(name = "Nome_Fantasia")
	private String fantasyName;
	
	private String cnpj;
	
	@Column(name = "Endereco")
	private String address;
	
	private Integer num;
	
	@Column(name = "Bairro")
	private String neighborhood;
	
	@Column(name = "Cidade")
	private String city;
	
	@Column(name = "UF")
	private String uf;
	
	@Column(name = "CEP")
	private String zipCode;
	
}

