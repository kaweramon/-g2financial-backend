package g2financial.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2financial.domain.BillToPayPayment;

@Repository
public interface BillToPayPaymentRepository extends CrudRepository<BillToPayPayment, Integer> {

	public List<BillToPayPayment> findAllByBillToPayIdAndIsPayAndIsCancelFalseOrderByMaturity(Integer billToPayId, String isPay);
}
