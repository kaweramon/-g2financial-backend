package g2financial.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2financial.domain.BillToPayPayment;

@Repository
public interface BillToPayPaymentRepository extends CrudRepository<BillToPayPayment, Integer> {

	public List<BillToPayPayment> findAllByBillToPayIdAndIsPayAndBankIdAndIsTicketGeneratedTrueAndIsCancelFalseOrderByMaturity(Integer billToPayId, String isPay, Integer bankId);
	
	@Query(value  = "SELECT * FROM contas_a_receber_pagamento WHERE Cod_Contas_a_receber = ?1 AND Pago = 'NAO' "
			+ "AND Cancelado IS NOT TRUE "
			+ "AND boletoGerado IS TRUE "
			+ "AND banco = ?2 ORDER BY vencimento", nativeQuery = true)
	public List<BillToPayPayment> findAllByBillToPayIdAndIsPayAndBankIdAndIsTicketGeneratedTrueAndIsCancelFalseOrderByMaturity(Integer billToPayId, Integer bankId);
	
}
