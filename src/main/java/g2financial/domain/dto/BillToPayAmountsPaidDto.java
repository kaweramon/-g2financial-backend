package g2financial.domain.dto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.BeanUtils;

import g2financial.domain.BillToPayAmountsPaid;
import lombok.Data;

@Data
public class BillToPayAmountsPaidDto {

	private Integer id;
	private Integer billToPayPaymentId;
	private Date date;
	private Date hour;
	private Double amount;
	private String operator;
	private String observation;
	
	public static BillToPayAmountsPaidDto fromObject(BillToPayAmountsPaid billToPayAmountsPaid) {
		BillToPayAmountsPaidDto billToPayAmountsPaidDto = new BillToPayAmountsPaidDto();
		BeanUtils.copyProperties(billToPayAmountsPaid, billToPayAmountsPaidDto);
		return billToPayAmountsPaidDto;
	}
	
	public static List<BillToPayAmountsPaidDto> fromObject(List<BillToPayAmountsPaid> listBillToPayAmountsPaid) {
		List<BillToPayAmountsPaidDto> listBillToPayAmountsPaidDto = new ArrayList<BillToPayAmountsPaidDto>();
		for (BillToPayAmountsPaid billToPayAmountsPaid : listBillToPayAmountsPaid) {
			BillToPayAmountsPaidDto billToPayAmountsPaidDto = new BillToPayAmountsPaidDto();
			BeanUtils.copyProperties(billToPayAmountsPaid, billToPayAmountsPaidDto);
			listBillToPayAmountsPaidDto.add(billToPayAmountsPaidDto);
		}
		return listBillToPayAmountsPaidDto;
	}
	
	public BillToPayAmountsPaid toObject() {
		BillToPayAmountsPaid billToPayAmountsPaid = new BillToPayAmountsPaid();
		BeanUtils.copyProperties(this, billToPayAmountsPaid);
		return billToPayAmountsPaid;
	}
	
	public static List<BillToPayAmountsPaid> toObject(List<BillToPayAmountsPaidDto> listBillToPayAmountsPaidDto){
		List<BillToPayAmountsPaid> listBillToPayAmountsPaid = new ArrayList<BillToPayAmountsPaid>();
		for (BillToPayAmountsPaidDto billToPayAmountsPaidDto: listBillToPayAmountsPaidDto) {
			listBillToPayAmountsPaid.add(billToPayAmountsPaidDto.toObject());
		}
		return listBillToPayAmountsPaid;
	}
}
