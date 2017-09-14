package g2financial.service;

import g2financial.domain.CieloPayment;

public interface CieloPaymentService {

	public CieloPayment create(CieloPayment cieloPayment);

	public Integer getCountOrderId();
}
