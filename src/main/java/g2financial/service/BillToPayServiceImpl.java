package g2financial.service;

import java.util.ArrayList;
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
	
	public List<BillToPay> listByClientId(Integer clientId, String isBillToPay, Integer bankId) throws EventException {
		
		if (clientRepository.findOne(clientId) == null) {
			throw new EventException("Cliente não encontrado", HttpStatus.NOT_FOUND);
		}
		
		List<BillToPay> listBillToPay = repository.findAllByClientIdAndIsCancelFalse(clientId);
		
		for (BillToPay billToPay: listBillToPay) {
//			billToPay.setListBillToPayPayment(billToPayPaymentRepository.findAllByBillToPayIdAndIsPayAndBankIdAndIsTicketGeneratedTrueAndIsCancelFalseOrderByMaturity(billToPay.getId(), isBillToPay, 9));
			List<BillToPayPayment> listBillToPayPayment = new ArrayList<BillToPayPayment>();
			//TODO: tirar filtro do banco
			for (BillToPayPayment billToPayPayment: billToPayPaymentRepository.findAllByBillToPayIdAndIsPayAndBankIdAndIsTicketGeneratedTrueAndIsCancelFalseOrderByMaturity(billToPay.getId(), 7)) {
				BilletShipping billetShipping = billetShippingRepository.findByCounter(billToPayPayment.getId());
				if (billetShipping != null) {
					listBillToPayPayment.add(billToPayPayment);
				}
			}
			billToPay.setListBillToPayPayment(listBillToPayPayment);
		}
		
		return listBillToPay;
	}

}
