package g2financial.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import g2financial.domain.BillToPay;
import g2financial.domain.BillToPayPayment;
import g2financial.domain.BilletShipping;
import g2financial.generic.EventException;
import g2financial.repository.BillToPayPaymentRepository;
import g2financial.repository.BillToPayRepository;
import g2financial.repository.BilletShippingRepository;
import g2financial.repository.ClientRepository;

@Service
public class BillToPayServiceImpl implements BillToPayService {

	@Autowired
	private BillToPayRepository repository;
	
	@Autowired
	private ClientRepository clientRepository;
	
	@Autowired
	private BillToPayPaymentRepository billToPayPaymentRepository;
	
	@Autowired
	private BilletShippingRepository billetShippingRepository;
	
	public List<BillToPayPayment> listByClientId(Integer clientId, String isBillToPay) throws EventException {
		
		if (clientRepository.findOne(clientId) == null) {
			throw new EventException("Cliente não encontrado", HttpStatus.NOT_FOUND);
		}
		
		List<BillToPay> listBillToPay = repository.findAllByClientIdAndIsCancelFalse(clientId);
		
		List<BillToPayPayment> listBillToPayPayment = new ArrayList<BillToPayPayment>();
		for (BillToPay billToPay: listBillToPay) {			
//			for (BillToPayPayment billToPayPayment: billToPayPaymentRepository.findAllByBillToPayIdAndIsPayAndIsCancelFalseOrderByMaturity(billToPay.getId(), isBillToPay)) {
			if (isBillToPay.equalsIgnoreCase("SIM")) {
				for (BillToPayPayment billToPayPayment : billToPayPaymentRepository.findAllByBillToPayIdAndIsPayAndIsCancelFalseOrderByMaturity(billToPay.getId(), isBillToPay)) {
					if (billToPayPayment.getDescription() == null && billToPay.getDescription() != null) {
						billToPayPayment.setDescription(billToPay.getDescription());
					}
					listBillToPayPayment.add(billToPayPayment);
				}
			} else if (isBillToPay.equalsIgnoreCase("NAO")) {
				for (BillToPayPayment billToPayPayment: billToPayPaymentRepository.findAllByBillToPayIdAndIsPayAndIsCancelFalseAndBankSrAndMaturityDateOrBankCrOrderByMaturity(billToPay.getId(), isBillToPay)) {
					
					List<BilletShipping> listBilletShipping = billetShippingRepository.findByCounter(billToPayPayment.getId());
					if (listBilletShipping != null && listBilletShipping.size() > 0) {
						billToPayPayment.setBilletShipping(listBilletShipping.get(0));
					}
					if (billToPayPayment.getDescription() == null && billToPay.getDescription() != null) {
						billToPayPayment.setDescription(billToPay.getDescription());
					}
					listBillToPayPayment.add(billToPayPayment);
				}
				
				billToPay.setListBillToPayPayment(listBillToPayPayment);
			}
			
		}
		Collections.sort(listBillToPayPayment);
		
		return listBillToPayPayment;
	}

}
