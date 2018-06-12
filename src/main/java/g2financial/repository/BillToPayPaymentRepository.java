package g2financial.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2financial.domain.BillToPayPayment;

@Repository
public interface BillToPayPaymentRepository extends CrudRepository<BillToPayPayment, Integer> {

	public List<BillToPayPayment> findAllByBillToPayIdAndIsPayAndIsCancelFalseOrderByMaturity(Integer billToPayId, String isPay);
	
	@Query(value = "SELECT * FROM bancr.contas_a_receber_pagamento c "
			+ "WHERE Cod_Contas_a_receber = ?1 AND Pago = ?2 "
			+ "AND ((banco = 7 AND vencimento < '2017-09-31') OR banco != 7) "
			+ "AND Cancelado IS NOT TRUE ORDER BY vencimento;", nativeQuery = true)
	public List<BillToPayPayment> findAllByBillToPayIdAndIsPayAndIsCancelFalseAndBankSrAndMaturityDateOrBankCrOrderByMaturity(Integer billToPayId, String isPay);
	
}
