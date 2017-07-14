package g2financial.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import g2financial.domain.dto.ClientDto;
import g2financial.generic.EventException;
import g2financial.service.ClientService;

@Controller
@RequestMapping(path = "/client")
public class ClientController {

	@Autowired
	private ClientService service;
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<Integer> getClientIdByCnpj(@RequestParam("cnpj") String cnpj) throws EventException {
		return new ResponseEntity<Integer>(service.getClientIdByCnpj(cnpj), HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/{clientId}")
	public @ResponseBody ClientDto view(@RequestParam("clientId") Integer clientId) throws EventException {
		return ClientDto.fromObject(service.view(clientId));
	}
}
