package g2financial.domain.dto;

import java.util.Date;

import org.springframework.beans.BeanUtils;

import g2financial.domain.CieloPayment;
import lombok.Data;

@Data
public class CieloPaymentDto {

	private Integer id;	
	private Double amount;
	private Boolean authenticate;
	private String authorizationCode;
	private Boolean capture;
	private String country;
	private String currency;
	private Integer installments;
	private Double interest;
	private String paymentId;
	private String proofOfSale;
	private String provider;
	private Date receivedDate;
	private Boolean recurrent;
	private String returnCode;
	private String returnMessage;
	private Double serviceTaxAmount;
	private String softDescriptor;
	private Integer status;
	private String tid;
	private String type;
	private CieloPaymentCardsDto cieloPaymentCards;
	private Integer clientId;
	private boolean isForSale;
	private String description;
	
	public static CieloPaymentDto fromObject(CieloPayment cieloPayment) {
		CieloPaymentDto cieloPaymentDto = new CieloPaymentDto();
		BeanUtils.copyProperties(cieloPayment, cieloPaymentDto);
		if (cieloPayment.getCieloPaymentCards() != null) {
			cieloPaymentDto.setCieloPaymentCards(CieloPaymentCardsDto.fromObject(cieloPayment.getCieloPaymentCards()));
		}
		return cieloPaymentDto;
	}
	
	public CieloPayment toObject(){
		CieloPayment cieloPayment = new CieloPayment();
		BeanUtils.copyProperties(this, cieloPayment);
		if (this.cieloPaymentCards != null) {
			cieloPayment.setCieloPaymentCards(this.cieloPaymentCards.toObject());
		}
		return cieloPayment;
	}
	
}
