package g2financial.service;

import java.util.List;

import g2financial.domain.BillToPay;
import g2financial.generic.EventException;

public interface BillToPayService {

	List<BillToPay> listByClientId(Integer clientId) throws EventException;
	
}
