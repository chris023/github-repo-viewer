const sizes = ['iphone-6', 'ipad-2', 'macbook-13', 'macbook-16']

sizes.forEach((size) => {
  describe(`[${size}]`, () => {
    beforeEach(() => {
      cy.reload(true)
      cy.viewport(size)
      cy.visit('/search')
    })

    describe('Server Status', () => {
      it(`Should load search page [${size}]`, () => {
        cy.visit('/')
        cy.findByText(/Useless But Sick Repo Searcher/i).should('be.visible')
        cy.findByTestId('cy-search-component').should('be.visible')
      })
    })

    describe('Search', () => {
      beforeEach(() => {
        cy.server()
        cy.route(
          'GET',
          'https://api.github.com/search/repositories?q=test&sort=best-match&page=1&per_page=10',
          'fixture:search/test/page-1.json',
        )
      })

      it('Should render search bar ', () => {
        cy.findByTestId('cy-search-component').should('be.visible')
      })

      it('Should be able to get search results with default filters', () => {
        cy.findByTestId('cy-search-input').type('test')
        cy.findByTestId('cy-search-button').click()
        cy.findByTestId('cy-search-results').should('be.visible')
      })

      it('Should be able to select language', () => {
        cy.findByTestId('cy-language-menu')
          .should('be.visible')
          .contains('All')
          .click()
        cy.findByTestId('cy-language-menu-option-C')
          .should('be.visible')
          .click()
        cy.findByTestId('cy-language-menu').contains('C')
      })
    })

    describe('Sorting, Filtering & Paging', () => {
      beforeEach(() => {})

      it('Should be able change result sorting', () => {})

      it('Should be able to change page size', () => {})

      it('Should be able to go to next page', () => {})

      it('Should be able to go back to previous page', () => {})
    })

    describe('Routing', () => {
      beforeEach(() => {})

      it('Should default path to /search', () => {})

      it('Should load repository detailed page on search result click', () => {})
    })

    describe('Repository Details', () => {
      beforeEach(() => {})

      it(`Should render repository details`, () => {})

      it(`Should render repository or owner's image`, () => {})

      it('Should be able to redirect to repository page on GitHub', () => {})
    })
  })
})
