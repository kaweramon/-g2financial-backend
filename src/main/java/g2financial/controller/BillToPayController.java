package g2financial.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import g2financial.domain.dto.BillToPayDto;
import g2financial.domain.dto.BillToPayPaymentDto;
import g2financial.generic.EventException;
import g2financial.service.BillToPayService;

@Controller
@RequestMapping(path = "/bill-to-pay")
public class BillToPayController {

	@Autowired
	private BillToPayService service;
	
	/*@RequestMapping(method = RequestMethod.GET, path = "/{clientId}")
	public @ResponseBody List<BillToPayDto> listByClientId(@RequestParam("clientId") Integer clientId, @RequestParam("isBillToPay") String isBillToPay) throws EventException {
		return BillToPayDto.fromObject(service.listByClientId(clientId, isBillToPay));
	}*/
	
	@RequestMapping(method = RequestMethod.GET, path = "/{clientId}")
	public @ResponseBody List<BillToPayPaymentDto> listByClientId(@RequestParam("clientId") Integer clientId, @RequestParam("isBillToPay") String isBillToPay) throws EventException {
		return BillToPayPaymentDto.fromObject(service.listByClientId(clientId, isBillToPay));
	}
	
}
