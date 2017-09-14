package g2financial.service;

import g2financial.domain.BilletShipping;
import g2financial.generic.EventException;

public interface BilletShippingService {

	public BilletShipping create(BilletShipping billetShipping);
	
	public BilletShipping getLast();
	
	public BilletShipping getById(Integer billetId) throws EventException;
}
