package g2financial.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import g2financial.domain.dto.BillToPayPaymentDto;
import g2financial.generic.EventException;
import g2financial.service.BillToPayPaymentService;

@Controller
@RequestMapping(path = "/bill-to-pay-payment")
public class BillToPayPaymentController {

	@Autowired
	private BillToPayPaymentService service;
	
	@RequestMapping(path = "/list", method = RequestMethod.PUT)
	public @ResponseBody List<BillToPayPaymentDto> updateList(@RequestBody List<BillToPayPaymentDto> listBillToPayPaymentDto) 
			throws EventException {
		return BillToPayPaymentDto.fromObject(service.updateList(BillToPayPaymentDto.toObject(listBillToPayPaymentDto)));
	}
	
}
