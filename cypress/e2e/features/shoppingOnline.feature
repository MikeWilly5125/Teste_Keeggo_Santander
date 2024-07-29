Feature: Realizar fluxo de API Shopping Online

//OBS: realizar o npm install via terminal para baixar todas as dependencias

    Scenario Outline: Shopping Online busca de Produtos
        Given Realizo a busca por um ptoduto '<ID>'
        And Verificar se a lista exibe somente produtos conforme busca '<ID>' '<produto>'
        Then Valido o status code com o produto '<ID>' 

    Examples:
        | ID     | produto                   | 
        | 14     | Logitech USB Headset H390 | 

    Scenario Outline: Shopping Online alterar imagem de Produtos
        Given crio uma nova conta '<email>' '<nome>' '<sobreNome>' '<nomeLogin>' '<telefone>' '<password>' 
        And Realizo o login '<email>' '<loginPassword>' '<loginUser>'
        # And Realizo a atualizacao do produto
        
       
    Examples:
        | nome  | sobreNome | nomeLogin | telefone    | password    |email                         |loginPassword |loginUser |
        | Msike | Wcilly    | MikeWilly | 11951256739 | Miked12345@ |mike.inspeferreira@gmail.com  |TesteKeeggo2  | Mike     |

