package g2financial.domain;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;

import lombok.Data;

@Entity(name = "contas_a_receber")
@Data
public class BillToPay {

	@Id
	@Column(name = "Codigo")
	private Integer id;
	
	@Column(name = "Cliente")
	private String clientName;
	
	@Column(name = "Discriminacao")
	private String description;
	
	@Column(name = "Observacao")
	private String observation;
	
	@Column(name = "Tipo_cobranca")
	private String type;
	
	@Column(name = "Credito")
	private Boolean isCredit;
	
	@Column(name = "Cancelado")
	private Boolean isCancel;

	@Column(name = "Cod_Cliente")
	private Integer clientId;
	
	@Transient
	private List<BillToPayPayment> listBillToPayPayment;
	
}
