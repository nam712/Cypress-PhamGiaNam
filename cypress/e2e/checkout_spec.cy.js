describe('Checkout Test', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('Should complete checkout and return to home page', () => {
    // Thêm sản phẩm vào giỏ hàng
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_link').click();

    // Đi đến bước checkout
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('John');
    cy.get('[data-test="lastName"]').type('Doe');
    cy.get('[data-test="postalCode"]').type('12345');
    // Xác nhân thanh toán
    cy.get('[data-test="continue"]').click();
    cy.url().should('include', '/checkout-step-two.html');
    // Hoàn thành
    cy.get('[data-test="finish"]').click();
    cy.url().should('include', '/checkout-complete.html');
    // Quay lại trang chủ
    cy.get('[data-test="back-to-products"]').click();
    cy.url().should('include', '/inventory.html');
  });
});
