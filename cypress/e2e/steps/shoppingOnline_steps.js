import ShoppingOnline_API from "../pages/shoppingOnline_page";

const ShoppingOnline_pages = new ShoppingOnline_API

Given("Realizo a busca por um ptoduto {string}", (ID) => {
	ShoppingOnline_pages.buscaProduto(ID)

});

And("Verificar se a lista exibe somente produtos conforme busca {string} {string}", (ID, produto) => {
	ShoppingOnline_pages.AssertProduto(ID, produto)

});


Then("Valido o status code com o produto {string}", (ID) => {
	ShoppingOnline_pages.assertStatusCode(ID)

});

Given("crio uma nova conta {string} {string} {string} {string} {string} {string}", (email, nome, sobreNome, nomeLogin, password, telefone) => {
	ShoppingOnline_pages.criaNovaConta(email, nome, sobreNome, nomeLogin, password, telefone)

});

Then("Realizo o login {string} {string} {string}", (email, loginPassword, loginUser) => {
	ShoppingOnline_pages.realizarLogin(email, loginPassword, loginUser)

});

Then("Realizo a atualizacao do produto", () => {
	ShoppingOnline_pages.atualizoProduto()

});




