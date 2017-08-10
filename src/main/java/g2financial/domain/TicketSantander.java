package g2financial.domain;

import java.util.Date;

import lombok.Data;

@Data
public class TicketSantander {

	private Client client;
	
	private Integer clientId;
	
	private BilletShipping billetShipping;
	
	private Date titleMaturityDate;

	private Date titleEmissionDate;
	
	private String titleSpecie;
	
	private String titleNominalValue;
	
	private Double titlePercentTrafficTicket;
	
	private Integer titleQtdDaysTrafficTicket;
	
	private Double titlePercentInterest;

}
