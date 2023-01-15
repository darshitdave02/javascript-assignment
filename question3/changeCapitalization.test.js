const changeCapitalization1 = require('./changeCapitalization')
const changeCapitalization2 = require('./changeCapitalization')

describe('Test to change capitalization',()=>{
    test('test case one',() => {
        
        expect(changeCapitalization1("Hello This is me")).toBe("hELLO tHIS IS ME")
    })

    test('test case two',() => {
        
        expect(changeCapitalization2("tHiS iS a TeSt FuNcTiOn")).toBe("ThIs Is A tEsT fUnCtIoN")
    })

    test('test case three',() => {
       
        expect(changeCapitalization2("darSHIT")).toBe("DARshit")
    })

}
)