///<reference types="Cypress"/>
import { faker } from '@faker-js/faker';
const BASEURL1 = "https://advantageonlineshopping.com/catalog/api/v1/products"
const BASEURL2 = "https://advantageonlineshopping.com/accountservice/accountrest/api/v1/register"


class ShoppingOnline_API {

    // Estou utilizando o plugin: npm i cypress-plugin-api

    buscaProduto(ID){

        cy.api({
            url: `${BASEURL1}/${ID}`,
            method:'GET',
        })
   };

    AssertProduto(ID, produto){

        cy.api({
            url: `${BASEURL1}/${ID}`,
            method:'GET',
        }).then(res => 
            expect(res.body.productName).be.eq(`${produto}`) )
    }

    assertStatusCode(ID){
 
        cy.api({
            url: `${BASEURL1}/${ID}`,
            method:'GET',
        }).then(res => {
            expect(res.status).be.eq(200)
        })
       
    }

    criaNovaConta(email, nome, sobreNome, nomeLogin, telefone, password){

         email = faker.internet.email()
         nome = faker.internet.userName()
         sobreNome = faker.internet.domainName()
         nomeLogin = faker.internet.displayName()

        cy.api({
            url: `${BASEURL2}`,
            method:'POST',
            headers: {"content-type": "application/json"
                },
            body: {
                accountType: "USER",
                address: "zxczxc",
                allowOffersPromotion: true,
                aobUser: true,
                cityName: "sao paulo",
                country: "AUSTRALIA_AU",
                email: `${email}`,
                firstName: `${nome}`,
                lastName: `${sobreNome}`,
                loginName: `${nomeLogin}`,
                password: `${password}`,
                phoneNumber: `${telefone}`,
                stateProvince: "Sao paulo",
                zipcode: "03321-000"


                
            }

        }).then(res => {
            // console.log(res.body.response.userId)
            // console.log(res)

            // https://www.advantageonlineshopping.com/catalog/api/v1/product/image/{userId}/{source}/{color}

        });

    }

    realizarLogin(email, loginPassword, loginUser){
        cy.api({
            url: `https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login`,
            method:'POST',
            body: {
                email: `${email}`,
                loginPassword: `${loginPassword}`,
                loginUser: `${loginUser}`
            }

        }).then(res => {//console.log(res.body.statusMessage.token)
            cy.wrap(res.body.statusMessage.userId).as("USERID");
            cy.wrap(res.body.statusMessage.token).as("TOKEN");
        })

    }

    atualizoProduto(){

        cy.get('@USERID').then(USERID => {
            return USERID
        }).then(userId => {
            userId 
        
            cy.get('@TOKEN').then(TOKEN => {
                return TOKEN
            }).then(token => {
                
                cy.api({
                    
                    url: `https://www.advantageonlineshopping.com/catalog/api/v1/14/ABCDEF##2400/${userId}/{source}/{pink}`,
                    method: 'PUT',
                    headers: {Authorization: `JWT ${token}`},
                    body:{

                        "id": 14,
                        "imageColor": "blue",
                        "imageId": "12",
                        "reason": "string",
                        "success": true    
                    }

                }).then(res => {
                    //    console.log(res)
                })

            })
        })
    }


    


} export default ShoppingOnline_API