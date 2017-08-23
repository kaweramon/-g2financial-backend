package g2financial.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import g2financial.domain.Bank;
import g2financial.generic.EventException;
import g2financial.service.BankService;

@Controller
@RequestMapping(path = "/bank")
public class BankController {

	@Autowired
	private BankService service;
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody Bank getByBankNamRem(@RequestParam("bankNameRem") String bankNameRem) throws EventException {
		return service.getByBankNameRem(bankNameRem);
	}
}
