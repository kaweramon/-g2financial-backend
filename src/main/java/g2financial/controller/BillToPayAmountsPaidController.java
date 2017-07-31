package g2financial.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import g2financial.domain.dto.BillToPayAmountsPaidDto;
import g2financial.generic.EventException;
import g2financial.service.BillToPayAmountsPaidService;

@Controller
@RequestMapping(path = "/bill-to-pay-amounts-paid")
public class BillToPayAmountsPaidController {

	@Autowired
	private BillToPayAmountsPaidService service;
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<BillToPayAmountsPaidDto> list(){
		return BillToPayAmountsPaidDto.fromObject(service.list());
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody BillToPayAmountsPaidDto create(@RequestBody BillToPayAmountsPaidDto billToPayAmountsPaidDto) {
		return BillToPayAmountsPaidDto.fromObject(service.create(billToPayAmountsPaidDto.toObject()));
	}
	
	@RequestMapping(method = RequestMethod.POST, path = "/list")
	public @ResponseBody List<BillToPayAmountsPaidDto> create(@RequestBody List<BillToPayAmountsPaidDto> listBillToPayAmountsPaidDto) {
		return BillToPayAmountsPaidDto.fromObject(service.saveAll(BillToPayAmountsPaidDto.toObject(listBillToPayAmountsPaidDto)));
	}
	
	@RequestMapping(method = RequestMethod.PUT, path = "/{billToPayAmountsPaidId}")
	public @ResponseBody BillToPayAmountsPaidDto update(@RequestParam("billToPayAmountsPaidId") Integer billToPayAmountsPaidId, 
			@RequestBody BillToPayAmountsPaidDto billToPayAmountsPaidDto) throws EventException {
		return BillToPayAmountsPaidDto.fromObject(service.update(billToPayAmountsPaidId, billToPayAmountsPaidDto.toObject()));
	}
}
