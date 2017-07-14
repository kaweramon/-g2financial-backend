package g2financial.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import g2financial.domain.Client;
import g2financial.generic.EventException;
import g2financial.repository.ClientRepository;

@Service
public class ClientServiceImpl implements ClientService {

	@Autowired
	private ClientRepository repository;
	
	public Integer getClientIdByCnpj(String cnpj) throws EventException {
		
		Client client = repository.findOneByCnpj(cnpj);
		
		if (client == null) {
			throw new EventException("Cliente não encontrado", HttpStatus.NOT_FOUND);
		}
		
		return client.getId();
	}

	public Client view(Integer clientId) throws EventException {

		Client client = repository.findOne(clientId);
		
		if (client == null) {
			throw new EventException("Cliente não encontrado", HttpStatus.NOT_FOUND);
		}
		
		return client;
	}

}
