describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('when I upload a file', () => {
  describe('when the file contains only headers', () => {
    it('should show input upload file', () => {
      cy.visit('/')
      cy.get('[role=open-national-product-dialog]').click()
      cy.get('[role=uploader]').find('input[type=file]').attachFile('national_one_line.csv')
      cy.get('[role=uploader] button').first().click()
      cy.get('[role=table]').contains('INVV9ZPL6XQC6IMGAME')
    })
  })
})
