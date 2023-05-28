describe('Форма отправки заявки', () => {
    beforeEach(() => {
        cy.visit('')
        cy.viewport(1980, 850)
    })

    const validForm = () => {
        cy.get('button[type="submit"]').should('be.disabled')

        cy.get('input[name="name"]').type('Женя Тест')
        cy.get('input[name="phone"]').type('+79009009090')
        cy.get('input[name="email"]').type('test@example.com')

        cy.get('button[type="submit"]').should('not.be.disabled')
        cy.get('button[type="submit"]').click()

        cy.get('input[name="name"]').should('have.value', '')
        cy.get('input[name="phone"]').should('have.value', '')
        cy.get('input[name="email"]').should('have.value', '')

        cy.get('button[type="submit"]').should('be.disabled')

        cy.get('input[name="name"]').type('Женя Тест')
        cy.get('input[name="phone"]').type('+79009009090')
        cy.get('input[name="email"]').type('test@example.com')

        cy.get('button[type="submit"]').should('not.be.disabled')
        cy.get('button[type="submit"]').click()

        cy.get('input[name="name"]').should('have.value', '')
        cy.get('input[name="phone"]').should('have.value', '')
        cy.get('input[name="email"]').should('have.value', '')
    }

    it('Кнопка по умолчанию отключена', () => {
        cy.get('button[type="submit"]').should('be.disabled')
    })

    it('Проверка валидации формы на пустые значения', () => {
        cy.get('input[name="name"]').click()
        cy.get('input[name="name"]').should('be.focused')
        cy.get('input[name="phone"]').focus()
        cy.get('input[name="name"]').should('not.be.focused').and('have.attr', 'placeholder', 'Введите ваше имя')
        cy.get('input[name="phone"]').should('be.focused')
        cy.get('input[name="email"]').focus()
        cy.get('input[name="phone"]').should('not.be.focused').and('have.attr', 'placeholder', 'Введите телефон')
        cy.get('input[name="email"]').should('be.focused')
        cy.get('input[name="phone"]').focus()
        cy.get('input[name="email"]').should('not.be.focused').and('have.attr', 'placeholder', 'Введите email')

        cy.get('button[type="submit"]').should('be.disabled')
    })

    it('Проверка валидной заявки формы', validForm)
})
