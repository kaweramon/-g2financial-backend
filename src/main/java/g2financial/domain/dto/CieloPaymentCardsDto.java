package g2financial.domain.dto;

import java.util.Date;

import org.springframework.beans.BeanUtils;

import g2financial.domain.CieloPaymentCards;
import lombok.Data;

@Data
public class CieloPaymentCardsDto {

	private Integer id;
	private CieloPaymentDto cieloPayment;
	private String type;
	private String brand;
	private String cardNumber;
	private String expirationDate;
	private String holder;
	private Boolean saveCard;
	private Boolean authorizeNow;
	private Date endDate;
	private Integer interval;
	private Date nextRecurrency;
	private Integer reasonCode;
	private String reasonMessage;
	private String recurrentPaymentId;
	private String cardToken;

	public static CieloPaymentCardsDto fromObject(CieloPaymentCards cieloPaymentCards) {
		CieloPaymentCardsDto cieloPaymentCardsDto = new CieloPaymentCardsDto();
		BeanUtils.copyProperties(cieloPaymentCards, cieloPaymentCardsDto);
		return cieloPaymentCardsDto;
	}
	
	public CieloPaymentCards toObject() {
		CieloPaymentCards cieloPaymentCards = new CieloPaymentCards();
		BeanUtils.copyProperties(this, cieloPaymentCards);
		return cieloPaymentCards;
	}
}
