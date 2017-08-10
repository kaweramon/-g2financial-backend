package g2financial.domain.dto;

import java.util.Date;

import org.springframework.beans.BeanUtils;

import g2financial.domain.TicketSantander;
import lombok.Data;

@Data
public class TicketSantanderDto {

	private ClientDto client;
	private Integer clientId;
	private BilletShippingDto billetShipping;
	private Date titleMaturityDate;
	private Date titleEmissionDate;
	private String titleSpecie;
	private String titleNominalValue;
	private Double titlePercentTrafficTicket;
	private Integer titleQtdDaysTrafficTicket;
	private Double titlePercentInterest;
	
	public static TicketSantanderDto fromObject(TicketSantander ticketSantander) {
		TicketSantanderDto ticketSantanderDto = new TicketSantanderDto();
		BeanUtils.copyProperties(ticketSantander, ticketSantanderDto);
		if (ticketSantander.getClient() != null) {
			ticketSantanderDto.setClient(
					ClientDto.fromObject(ticketSantander.getClient()));
		}
		if (ticketSantander.getBilletShipping() != null) {
			ticketSantanderDto.setBilletShipping(
					BilletShippingDto.fromObject(ticketSantander.getBilletShipping()));
		}
		return ticketSantanderDto;
	}
	
	public TicketSantander toObject() {
		TicketSantander ticketSantander = new TicketSantander();
		BeanUtils.copyProperties(this, ticketSantander);
		if (this.client != null) {
			ticketSantander.setClient(this.client.toObject());
		}
		if (this.billetShipping != null) {
			ticketSantander.setBilletShipping(this.billetShipping.toOject());
		}
		return ticketSantander;
	}
}
