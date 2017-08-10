package g2financial.service;

import java.io.IOException;

import g2financial.domain.TicketSantander;
import g2financial.generic.EventException;

public interface TicketSantanderService {

	public String requestSecutiryTicket(TicketSantander ticketSantander) throws IOException, EventException;
	
}
