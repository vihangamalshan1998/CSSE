package com.example.demo;

import com.example.demo.controller.PaymentController;
import com.example.demo.controller.SmartCardController;
import com.example.demo.model.SmartCard;
import com.example.demo.repository.ISmartCardRepository;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;


@TestMethodOrder(OrderAnnotation.class)
@RunWith(SpringRunner.class)
@SpringBootTest
class SmartCardTest {
	@Autowired
	private SmartCardController smartCardController;

	@Autowired
	private PaymentController paymentController;

	@Autowired
	ISmartCardRepository smartCardRepository;

	//Add Smart Card
	@Test
	@Order(1)
	void addSmartCard() {
		SmartCard smartcard = new SmartCard();
		smartcard.setCardId(111);
		smartcard.setUrlCode("1111");
		smartcard.setCardType("new");
		smartcard.setUserCode("1111");
		smartcard.setCardAmount(111);
		smartCardController.addDetails(smartcard);
		assertNotNull(smartCardRepository.findById(111));
	}

	//Delete Smart Card
	@Test
	@Order(2)
	void deleteSmartCard() {
		smartCardRepository.deleteById(111);
		assertThat(smartCardRepository.existsById(111)).isEqualTo(false);
	}

	//Get All Payments
	@Test
	@Order(3)
	void test() {
		int count = paymentController.getAllPayments().size();
		boolean res = count > 0 ? true : false;
		assertEquals(true, res);
	}

	//Get payment by Type
	@Test
	void test2() {
		int count = paymentController.findByType("debit").size();
		boolean res = count > 0 ? true : false;
		assertEquals(true, res);
	}

	//Find Payment Type and ID
	@Test
	void test3() {
		int count = paymentController.findByTypeAndID(202, "debit").size();
		boolean res = count > 0 ? true : false;
		assertEquals(true, res);
	}

}
