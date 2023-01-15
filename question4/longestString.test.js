const findLongestString1 = require('./longestString')
const findLongestString2 = require('./longestString')


describe('Test cases to find longest string',()=>{

    test('test case one',()=>{
        
        expect(findLongestString1(["My", "name", "is", "darshit"])).toBe("darshit")
    })

    test('test case two',()=>{
        expect(findLongestString2(["Hello","how","is your day going?"])).toBe("is your day going?")
        
    })

    test('test case three',()=>{
       
        expect(findLongestString2(["one","two"])).toBe("one")
    })

    
}
)