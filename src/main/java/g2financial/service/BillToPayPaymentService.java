package g2financial.service;

import java.util.List;

import g2financial.domain.BillToPayPayment;
import g2financial.generic.EventException;

public interface BillToPayPaymentService {

	public List<BillToPayPayment> updateList(List<BillToPayPayment> listBillToPayPayment) throws EventException;
	
}
