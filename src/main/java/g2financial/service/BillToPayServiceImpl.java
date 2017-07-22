package g2financial.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import g2financial.domain.BillToPay;
import g2financial.generic.EventException;
import g2financial.repository.BillToPayPaymentRepository;
import g2financial.repository.BillToPayRepository;
import g2financial.repository.ClientRepository;

@Service
public class BillToPayServiceImpl implements BillToPayService {

	@Autowired
	private BillToPayRepository repository;
	
	@Autowired
	private ClientRepository clientRepository;
	
	@Autowired
	private BillToPayPaymentRepository billToPayPaymentRepository;
	
	public List<BillToPay> listByClientId(Integer clientId, String isBillToPay) throws EventException {
		
		if (clientRepository.findOne(clientId) == null) {
			throw new EventException("Cliente não encontrado", HttpStatus.NOT_FOUND);
		}
		
		List<BillToPay> listBillToPay = repository.findAllByClientIdAndIsCancelFalse(clientId);
		
		for (BillToPay billToPay: listBillToPay) {
			billToPay.setListBillToPayPayment(billToPayPaymentRepository.findAllByBillToPayIdAndIsPayAndIsCancelFalseOrderByMaturity(billToPay.getId(), isBillToPay));
		}
		
		return listBillToPay;
	}

}
