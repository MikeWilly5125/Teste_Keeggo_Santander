///<reference types="Cypress"/>
import { faker } from '@faker-js/faker';
const BASEURL1 = "https://advantageonlineshopping.com/catalog/api/v1/products"
const BASEURL2 = "https://advantageonlineshopping.com/accountservice/accountrest/api/v1/register"

class ShoppingOnline_API {

    // Estou utilizando o plugin: npm i cypress-plugin-api

    buscaProduto(ID) {
        cy.api({
            url: `${BASEURL1}/${ID}`,
            method: 'GET',
        })
    };

    AssertProduto(ID, produto) {
        cy.api({
            url: `${BASEURL1}/${ID}`,
            method: 'GET',
        }).then(res => expect(res.body.productName).be.eq(`${produto}`))
    }

    assertStatusCode(ID) {
        cy.api({
            url: `${BASEURL1}/${ID}`,
            method: 'GET',
        }).then(res => {
            expect(res.status).be.eq(200)
        })
    }

    criaNovaConta(email, nome, sobreNome, nomeLogin, telefone, password) {

        email = faker.internet.email()
        nome = faker.internet.userName()
        sobreNome = faker.internet.domainName()
        nomeLogin = faker.internet.displayName()

        cy.api({
            url: `${BASEURL2}`,
            method: 'POST',
            headers: {
                "content-type": "application/json"
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
        })
    }

    realizarLogin(email, loginPassword, loginUser) {

        cy.api({
            url: `https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login`,
            method: 'POST',
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

    atualizoProduto() {

        cy.get('@USERID').then(USERID => {
            return USERID
        }).then(userId => {
            userId
            console.log(userId)
            cy.get('@TOKEN').then(TOKEN => {
                return TOKEN
            }).then(token => {
                console.log(token)
                cy.api({

                    url: `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/{source}/{color}`,
                    method: 'PUT',
                    headers: { Authorization: `Bearer ${token}` },
                    body: {
                        "attributes": [
                            {
                                "attributeName": "OMPATIBILITY",
                                "attributeValue": "Compatible with most notebook PCs, netbooks, tablets, mobile phones, and MP3 players with a 3.5 mm port available."
                            }
                        ],
                        "categoryId": 2,
                        "colors": [
                            {
                                "code": "414141",
                                "inStock": 0,
                                "name": "BLACK"
                            }
                        ],
                        "description": "eatures on this product will exceeded your expectations.",
                        "imageUrl": "2400",
                        "images": [
                            "ABCDEF##2400"
                        ],
                        "price": 39.99,
                        "productId": 14,
                        "productName": "ogitech USB Headset H390",
                        "productStatus": "Active"
                    }

                })

            })

        })
    }

} export default ShoppingOnline_API