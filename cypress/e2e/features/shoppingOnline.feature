Feature: Realizar fluxo de manejo de produto
    //OBS: realizar o npm install via terminal para baixar todas as dependencias
    Background: Acessar URL da aplicacao https://advantageonlineshopping.com/
        Given que acesso URL da aplicacao

    Scenario Outline: Shopping Online
        Given que no campo Search faço uma busca por '<PRODUTO>'
        When o '<PRODUTO>' estiver na tela devo selecionalo e adicionar ao carrinho
        Then validar produtos inclusos no carrinho na tela de pagamento '<ASSERT>'

    Examples:
        | PRODUTO   | ASSERT |
        | TABLET    | TABLET |

