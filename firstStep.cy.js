describe('Авторизация с пробелами', () => {
  beforeEach(() => {
    let url = 'https://ru.jalinga.cloud/'
    cy.visit(url)
})
  it('Пробел в почте', () => {
    
    cy.contains("Создать аккаунт").click()
    cy.get('input[type="text"]').type('smol@mail.ru ')
    cy.get('input[type="password"]').type('112233.Da')
    cy.get('[type="checkbox"]').check()
    cy.get('[type="checkbox"]').check().should('be.checked')
    cy.contains("Создать аккаунт").click()
    cy.get('[class="TitledInput__subtext TitledInput__subtext--error"]').should('be.visible')
  });
   
//   it ('Авторизация под собой в Клауд', () =>{






//   })
// }
})