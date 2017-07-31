package g2financial.service;

import java.util.List;

import g2financial.domain.BillToPayAmountsPaid;
import g2financial.generic.EventException;

public interface BillToPayAmountsPaidService {

	public List<BillToPayAmountsPaid> list();
	
	public BillToPayAmountsPaid create(BillToPayAmountsPaid billToPayAmountsPaid);
	
	public List<BillToPayAmountsPaid> saveAll(List<BillToPayAmountsPaid> listBillToPayAmountsPaid);
	
	public BillToPayAmountsPaid update(Integer billToPayAmountsPaidId, BillToPayAmountsPaid billToPayAmountsPaid) throws EventException;
	
}
