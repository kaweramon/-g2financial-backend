package g2financial.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity(name = "tipo_cobranca")
@Data
public class TypeInterestCharge {

	@Id
	@Column(name = "Codigo")
	private Integer id;
	
	@Column(name = "Tipo_cobranca")
	private String type;
	
	@Column(name = "Percentual_multa")
	private Double percentInterest;
	
	@Column(name = "Percentual_mora_dia")
	private Double percentLiveDays;
	
	@Column(name = "Percentual_encargos")
	private Double percentCharges;
}
