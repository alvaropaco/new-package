const hello = require("./index")

describe('Hello World', () => {
    it('should say Hello World', () => {
         expect(hello).toEqual('Hello World')
    })
})