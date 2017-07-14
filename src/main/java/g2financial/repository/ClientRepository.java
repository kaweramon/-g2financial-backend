package g2financial.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2financial.domain.Client;

@Repository
public interface ClientRepository extends CrudRepository<Client, Integer> {

	public Client findOneByCnpj(String cnpj);
	
}
