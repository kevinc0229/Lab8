const fvip = require('../assets/scripts/main');

describe('volume value', () => {
    test('between 67 and 100 ', () => {
        expect(fvip(80)).toMatch('./assets/media/icons/volume-level-3.svg');
    })
    test('between 34 and 66 ', () => {
        expect(fvip(45)).toMatch('./assets/media/icons/volume-level-2.svg');
    })
    test('between 1 and 33 ', () => {
        expect(fvip(25)).toMatch('./assets/media/icons/volume-level-1.svg');
    })
    test('is 0 ', () => {
        expect(fvip(0)).toMatch('./assets/media/icons/volume-level-0.svg');
    })
})