package g2financial.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Calendar;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import g2financial.domain.TicketSantander;
import g2financial.generic.EventException;

@Service
public class TicketSantanderServiceImpl implements TicketSantanderService {

	@Autowired
	private ClientService clientService;
	
	public String requestSecutiryTicket(TicketSantander ticketSantander) throws IOException, FileNotFoundException, EventException {
		
		if (ticketSantander.getClientId() != null) {
			ticketSantander.setClient(clientService.view(ticketSantander.getClientId()));
		}
		
		String fileLocation = new File("static\\ticket-santander").getAbsolutePath() + "\\" + getFileName();
		FileOutputStream fos;
		fos = new FileOutputStream(fileLocation);
		fos.write(createXmlRequestSecurityTicket(ticketSantander).getBytes());
		fos.close();	
		
		return null;
	}

	/***
	 * 
	 * @return File Name
	 */
	private String getFileName() {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Date());
		String toReturn = "ticket_santander_" + calendar.get(Calendar.DAY_OF_MONTH) + "-" + calendar.get(Calendar.MONTH) + 
				"-" + calendar.get(Calendar.YEAR) + "_" + calendar.get(Calendar.HOUR_OF_DAY) + "-" + calendar.get(Calendar.MINUTE)
				+ "-" + calendar.get(Calendar.SECOND) + ".xml";
		return toReturn;
	}
	
	private String createXmlRequestSecurityTicket(TicketSantander ticketSantander) {
		String toReturn = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" "
				+ "xmlns:impl=\"http://impl.webservice.dl.app.bsbr.altec.com/\">" + "\n" 
				+ "<soapenv:Header/>" + "\n" 
				+ "<soapenv:Body>" + "\n"
				+ "<impl:create>" + "\n"
				+ "<TicketRequest>" + "\n"
				+ "<dados>" + "\n"
				+ "		<entry>" + "\n"
				+ "			<key>>CONVENIO.COD-BANCO</key>" + "\n"
				+ "			<value>0033</value>" + "\n"
				+ "		</entry>" + "\n"
				+ "		<entry>" + "\n"	
				+ "			<key>CONVENIO.COD-CONVENIO</key>" + "\n"
				+ "			<value>123456789</value>" + "\n"
				+ "		</entry>" + "\n";
		if (ticketSantander.getClient() != null) {
//			 01 -> CPF | 02 -> CNPJ
			if (ticketSantander.getClient().getCnpj() != null && !ticketSantander.getClient().getCnpj().isEmpty()) {
				toReturn += "		<entry>" + "\n"
							+ "			<key>PAGADOR.TP-DOC</key>" + "\n"
							+ "			<value>02</value>"
							+ "		</entry>" + "\n"
							+ "		<entry>" + "\n"
							+ "			<key>PAGADOR.NUM-DOC</key>" + "\n"
							+ "			<value>" + ticketSantander.getClient().getCnpj() + "</value>" + "\n"
							+ "		</entry>" + "\n";
			} else if (ticketSantander.getClient().getCpf() != null && !ticketSantander.getClient().getCpf().isEmpty()) {
				toReturn += "		<entry>" + "\n"
						+ "			<key>PAGADOR.TP-DOC</key>" + "\n"
						+ "			<value>01</value>"
						+ "			</entry>" + "\n"
						+ "		<entry>" + "\n"
						+ "			<key>PAGADOR.NUM-DOC</key>" + "\n"
						+ "			<value>" + ticketSantander.getClient().getCpf() + "</value>" + "\n"
						+ "		</entry>" + "\n";
			}
		}
		if (ticketSantander.getClient().getName() != null && !ticketSantander.getClient().getName().isEmpty()) {
			toReturn += "		<entry>" + "\n"
						+ "			<key>PAGADOR.NOME</key>" + "\n"
						+ "			<value>" + ticketSantander.getClient().getName() + "</value>" + "\n"
						+ "		</entry>" + "\n";
		}
		if (ticketSantander.getClient().getAddress() != null  && !ticketSantander.getClient().getAddress().isEmpty()) {
			toReturn += "		<entry>" + "\n"
						+ "			<key>PAGADOR.ENDER</key>" + "\n"
						+ "			<value>" + ticketSantander.getClient().getAddress() + "</value>" + "\n"
						+ "		</entry>" + "\n";
		}
		if (ticketSantander.getClient().getNeighborhood() != null  && !ticketSantander.getClient().getNeighborhood().isEmpty()) {
			toReturn += "		<entry>" + "\n"
						+ "			<key>PAGADOR.BAIRRO</key>" + "\n"
						+ "			<value>" + ticketSantander.getClient().getNeighborhood() + "</value>" + "\n"
						+ "		</entry>" + "\n";
		}
		if (ticketSantander.getClient().getCity() != null  && !ticketSantander.getClient().getCity().isEmpty()) {
			toReturn += "		<entry>" + "\n"
						+ "			<key>PAGADOR.CIDADE</key>" + "\n"
						+ "			<value>" + ticketSantander.getClient().getCity() + "</value>" + "\n"
						+ "		</entry>" + "\n";
		}
		if (ticketSantander.getClient().getUf() != null  && !ticketSantander.getClient().getUf().isEmpty()) {
			toReturn += "		<entry>" + "\n"
						+ "			<key>PAGADOR.UF</key>" + "\n"
						+ "			<value>" + ticketSantander.getClient().getUf() + "</value>" + "\n"
						+ "		</entry>" + "\n";
		}
		if (ticketSantander.getClient().getZipCode() != null  && !ticketSantander.getClient().getZipCode().isEmpty()) {
			toReturn += "		<entry>" + "\n"
						+ "			<key>PAGADOR.CEP</key>" + "\n"
						+ "			<value>" + ticketSantander.getClient().getZipCode() + "</value>" + "\n"
						+ "		</entry>" + "\n";
		}
		//Dados do Título
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Date());
		String dtNowStr = "" + calendar.get(Calendar.DAY_OF_MONTH) + calendar.get(Calendar.MONTH) + calendar.get(Calendar.YEAR);
		if (ticketSantander.getBilletShipping() != null) {
			if (ticketSantander.getBilletShipping().getOurNumber() != null) {
				toReturn += "		<entry>" + "\n"
						+ "			<key>TITULO.NOSSO-NUMERO</key>" + "\n"
						+ "			<value>" + ticketSantander.getBilletShipping().getOurNumber() + "</value>" + "\n"
						+ "		</entry>" + "\n";
			}
			toReturn += "		<entry>" + "\n"
					+ "			<key>TITULO.DT-EMISSAO</key>" + "\n"
					+ "			<value>" + dtNowStr + "</value>" + "\n"
					+ "		</entry>" + "\n";
			toReturn += "		<entry>" + "\n"
					+ "			<key>TITULO.ESPECIE</key>" + "\n"
					+ "			<value>DM</value>" + "\n"
					+ "		</entry>";
			if (ticketSantander.getBilletShipping().getBillValue() != null) {
				toReturn += "		<entry>" + "\n"
						+ "			<key>TITULO.VL-NOMINAL</key>" + "\n"
						+ "			<value>" + ticketSantander.getBilletShipping().getBillValue() + "</value>" + "\n"
						+ "		</entry>" + "\n";
			}
		}
		toReturn += "		<entry>" + "\n"
				+ "			<key>TITULO.TP-DESC</key>" + "\n"
				+ "			<value>0</value>" + "\n"
				+ "		</entry>" + "\n";
		toReturn += "		<entry>" + "\n"
				+ "			<key>TITULO.DT-LIMI-DESC</key>" + "\n"
				+ "			<value>" + dtNowStr + "</value>" + "\n"
				+ "		</entry>";
		toReturn += "		<entry>" + "\n"
				+ "			<key>TITULO.TP-PROTESTO</key>" + "\n"
				+ "			<value>0</value>" + "\n"
				+ "		</entry>";
		toReturn += "		<entry>" + "\n"
				+ "			<key>TITULO.QT-DIAS-PROTESTO</key>" + "\n"
				+ "			<value>0</value>" + "\n"
				+ "		</entry>" + "\n";
		toReturn += "		<entry>" + "\n"
				+ "			<key>TITULO.QT-DIAS-BAIXA</key>" + "\n"
				+ "			<value>30</value>" + "\n"
				+ "		</entry>" + "\n";
		//Fechar Tags
		toReturn += "</dados>" + "\n"
				+ "<expiracao>100</expiracao>" + "\n"
				+ "<sistema>YMB</sistema>" + "\n"
				+ "</TicketRequest>" + "\n"
				+ "</impl:create>" + "\n"
				+ "</soapenv:Body>" + "\n"
				+ "</soapenv:Envelope>";
		return toReturn;
	}
	
	private String createXmlRequestTitleInclusion(String dtNsu, String station, String nsu, String ticket) {
		String toReturn = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\""
				+ "xmlns:impl=\"http://impl.webservice.ymb.app.bsbr.altec.com/\">" + "\n"
				+ "<soapenv:Header/>" + "\n"
				+ "<soapenv:Body>" + "\n"
				+ "<impl:registraTitulo>" + "\n"
				+ "<dto>" + "\n"
				+ "	<dtNsu>" + dtNsu + "</dtNsu>" + "\n"
				+ "	<estacao>" + station + "</estacao>" + "\n"
				+ "	<nsu>" + nsu + "</nsu>" + "\n"
				+ "	<ticket>" + ticket + "</ticket>" + "\n"
				+ "	<tpAmbiente>T</tpAmbiente>" + "\n"
				+ "</dto>" + "\n"
				+ "</impl:registraTitulo>" + "\n"
				+ "</soapenv:Body>" + "\n"
				+ "</soapenv:Envelope>";
		
		return toReturn;
	}
}
