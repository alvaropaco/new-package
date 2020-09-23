const { soma } = require("./index")

describe('Math', () => {
    it('should return correct value for soma', () => {
         expect(soma(1, 1)).toEqual(2)
    })
})