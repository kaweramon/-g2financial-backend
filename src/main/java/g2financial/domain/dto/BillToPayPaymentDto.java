package g2financial.domain.dto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.BeanUtils;

import g2financial.domain.Bank;
import g2financial.domain.BillToPayPayment;
import lombok.Data;

@Data
public class BillToPayPaymentDto {

	private Integer id;
	private Integer billToPayId;
	private String isPay;
	private String operator;
	private Date maturity;
	private Date hourDate;
	private String Observation;
	private Double amountPaid;
	private Double amount;
	private Double subTotal;
	private Double interest;
	private String ourNumber;
	private Boolean isCancel;
	private Integer bankId;
	private BilletShippingDto billetShipping;
	private String description;
	private Bank bank;
	
	public static BillToPayPaymentDto fromObject(BillToPayPayment billToPayPayment) {
		BillToPayPaymentDto billToPayPaymentDto = new BillToPayPaymentDto();
		BeanUtils.copyProperties(billToPayPayment, billToPayPaymentDto);
		if (billToPayPayment.getBilletShipping() != null) {
			billToPayPaymentDto.setBilletShipping(BilletShippingDto.fromObject(billToPayPayment.getBilletShipping()));
		}
		if (billToPayPayment.getBank() != null) {
			billToPayPaymentDto.setBank(billToPayPayment.getBank());
		}
		return billToPayPaymentDto;
	}
	
	public static List<BillToPayPaymentDto> fromObject(List<BillToPayPayment> listBillToPayPayment) {
		List<BillToPayPaymentDto> listBillToPayPaymentDto = new ArrayList<BillToPayPaymentDto>();
		for (BillToPayPayment billToPayPayment : listBillToPayPayment) {
			listBillToPayPaymentDto.add(BillToPayPaymentDto.fromObject(billToPayPayment));
		}
		return listBillToPayPaymentDto;
	}
	
	public BillToPayPayment toObject() {
		BillToPayPayment billToPayPayment = new BillToPayPayment();
		BeanUtils.copyProperties(this, billToPayPayment);
		if (this.billetShipping != null) {
			billToPayPayment.setBilletShipping(this.billetShipping.toOject());
		}
		return billToPayPayment;
	}
	
	public static List<BillToPayPayment> toObject(List<BillToPayPaymentDto> listBillToPayPaymentDto) {
		List<BillToPayPayment> listBillToPayPayment = new ArrayList<BillToPayPayment>();
		for (BillToPayPaymentDto billToPayPaymentDto: listBillToPayPaymentDto) {
			listBillToPayPayment.add(billToPayPaymentDto.toObject());
		}
		return listBillToPayPayment;
	}
}
