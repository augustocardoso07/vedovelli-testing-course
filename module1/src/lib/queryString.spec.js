const { queryString } = require('./queryString')

describe('Object to string', () => {
    it('should pass object to string', () => {
        const obj = {
            'name': 'Renan',
            'age': '36',
        }
        const result = 'name=Renan&age=36'
        expect(queryString(obj)).toBe(result)
    });
});