import ShoppingOnline from "../pages/shoppingOnline_page";

const ShoppingOnline_pages = new ShoppingOnline

Given("que acesso URL da aplicacao", () => {
	ShoppingOnline_pages.acessoAplicacao()

});


Given("que no campo Search faço uma busca por {string}", (PRODUTO) => {
	ShoppingOnline_pages.realizarBuscaProduto(PRODUTO)

});

When("o {string} estiver na tela devo selecionalo e adicionar ao carrinho", (PRODUTO) => {
	ShoppingOnline_pages.selecionarProduto(PRODUTO)
	
});

Then("validar produtos inclusos no carrinho na tela de pagamento {string}", (ASSERT) => {
	ShoppingOnline_pages.assertProdutosCarrinho(ASSERT)
	
});

