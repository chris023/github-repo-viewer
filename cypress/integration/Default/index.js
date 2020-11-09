const sizes = ['iphone-6', 'ipad-2', 'macbook-13', 'macbook-16']

sizes.forEach((size) => {
  describe(`[${size}]`, () => {
    beforeEach(() => {
      cy.viewport(size)
    })

    describe('Server Status', () => {
      it(`Should load search page [${size}]`, () => {
        cy.viewport(size)
        cy.visit('/')
        cy.findByText(/Useless But Sick Repo Searcher/i).should('be.visible')
        cy.findByTestId('cy-search-input').should('be.visible')
      })
    })

    describe('Search', () => {
      beforeEach(() => {
        cy.viewport(size)
        cy.visit('/search')
      })

      it('Should render search bar ', () => {})

      it('Should be able to get search results with default filters', () => {})

      it('Should be able to select language', () => {})
    })

    describe('Sorting, Filtering & Paging', () => {
      beforeEach(() => {
        cy.viewport(size)
        cy.visit('/search')
      })

      it('Should be able change result sorting', () => {})

      it('Should be able to change page size', () => {})

      it('Should be able to go to next page', () => {})

      it('Should be able to go back to previous page', () => {})
    })

    describe('Routing', () => {
      beforeEach(() => {
        cy.viewport(size)
        cy.visit('/search')
      })

      it('Should default path to /search', () => {})

      it('Should load repository detailed page on search result click', () => {})
    })

    describe('Repository Details', () => {
      beforeEach(() => {
        cy.viewport(size)
      })

      it(`Should render repository details`, () => {})

      it(`Should render repository or owner's image`, () => {})

      it('Should be able to redirect to repository page on GitHub', () => {})
    })
  })
})
