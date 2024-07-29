///<reference types="Cypress"/>
const BASEURL = "https://advantageonlineshopping.com/"

class ShoppingOnline {
    campoPesquisa = '//div[@id="mobileSearch"]';
    produto = 16;
    tituloProduto = '//div[@id="Description"]/h1';
    adicionarCarrinho = "//button[contains(text(), 'ADD TO CART')]";
    navegaTablet = `//a[contains(text(), 'TABLETS')]`;
    carrinho = '(*//*[@id="menuCart"])[1]';

    acessoAplicacao() {
        cy.visit(BASEURL);
        cy.url(BASEURL).should('include', 'https://advantageonlineshopping.com').and('include', 'shopping');
        cy.log('Acesso realizado');
    }

    realizarBuscaProduto(PRODUTO) {
        cy.xpath(this.campoPesquisa).type(`${PRODUTO}{enter}`);
    }

    selecionarProduto(PRODUTO) {

        let produtos = [16, 17, 18];

        for (let i = 0; i <= (produtos.length - 1); i++) {

            cy.xpath(`//img[@id="${produtos[i]}"]`).click();

            cy.xpath(this.tituloProduto).invoke('text').then(res => {

                if (res.includes('TABLET')) {
                    cy.wrap(res).should('includes', `${PRODUTO}`);
                    cy.log('produto encontrado!!');

                    cy.wait(3000);
                    cy.xpath(this.adicionarCarrinho).click({ force: true });
                    cy.xpath(this.navegaTablet).click();
                }
            });
        }

        cy.xpath(this.carrinho).click();

    }

    assertProdutosCarrinho(ASSERT) {
        for (let i = 1; i <= 3; i++) {
            cy.xpath(`//*[@id="shoppingCart"]/table/tbody/tr[${i}]/td[2]`).invoke('text').then(res => {
                cy.wrap(res).should('includes', ASSERT).and('not.be.empty')
            });

        };

        cy.screenshot(`pesquisa por produtos: ${ASSERT}`);

    }

} export default ShoppingOnline