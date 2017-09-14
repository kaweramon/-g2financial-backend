package g2financial.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2financial.domain.CieloPayment;

@Repository
public interface CieloPaymentRepository extends CrudRepository<CieloPayment, Integer> {
	
	@Query(value = "SELECT * FROM retorno_pagamento_cielo order by contador_cod_pedido DESC LIMIT 1", nativeQuery = true)
	public CieloPayment findByFirstDesc();

}
