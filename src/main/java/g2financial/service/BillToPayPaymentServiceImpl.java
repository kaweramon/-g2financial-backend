package g2financial.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import g2financial.domain.BillToPayPayment;
import g2financial.generic.EventException;
import g2financial.repository.BillToPayPaymentRepository;

@Service
public class BillToPayPaymentServiceImpl implements BillToPayPaymentService {

	@Autowired
	private BillToPayPaymentRepository repository;

	public List<BillToPayPayment> updateList(List<BillToPayPayment> listBillToPayPayment) throws EventException {
		
		List<BillToPayPayment> listBillToPayPaymentBD = new ArrayList<BillToPayPayment>();
		
		for (BillToPayPayment billToPayPayment: listBillToPayPayment) {
			BillToPayPayment billToPayPaymentDB = repository.findOne(billToPayPayment.getId());
			
			if (billToPayPaymentDB == null) {
				throw new EventException("Conta a receber pagamento não encontrada!", HttpStatus.NOT_FOUND);
			}
			
			billToPayPaymentDB.setIsPay("SIM");
			billToPayPaymentDB.setAmountPaid(billToPayPayment.getSubTotal());
			
			listBillToPayPaymentBD.add(billToPayPaymentDB);
		}
		
		return (List<BillToPayPayment>) repository.save(listBillToPayPaymentBD);
	}
	
}
