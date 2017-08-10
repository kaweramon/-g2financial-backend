package g2financial.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import g2financial.domain.dto.TicketSantanderDto;
import g2financial.generic.EventException;
import g2financial.service.TicketSantanderService;

@Controller
@RequestMapping(path = "/ticket-santander")
public class TicketSantanderController {

	@Autowired
	private TicketSantanderService service;
	
	@RequestMapping(method = RequestMethod.POST, path = "/security-ticket")
	public @ResponseBody String securityTicket(@RequestBody TicketSantanderDto ticketSantander) throws IOException, EventException {
		return service.requestSecutiryTicket(ticketSantander.toObject());
	}
}
