package g2financial.service;

import java.util.List;

import g2financial.domain.BillToPayPayment;
import g2financial.generic.EventException;

public interface BillToPayService {

	List<BillToPayPayment> listByClientId(Integer clientId, String isBillToPay) throws EventException;
	
}
