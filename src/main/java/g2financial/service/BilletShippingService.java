package g2financial.service;

import g2financial.domain.BilletShipping;

public interface BilletShippingService {

	public BilletShipping create(BilletShipping billetShipping);
	
	public BilletShipping getLast();
	
	public BilletShipping getByCounter(Integer counter);
}
