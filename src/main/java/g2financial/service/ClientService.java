package g2financial.service;

import g2financial.domain.Client;
import g2financial.generic.EventException;

public interface ClientService {

	public Integer getClientIdByCnpj(String cnpj) throws EventException;
	
	public Client view(Integer clientId) throws EventException;
	
}
