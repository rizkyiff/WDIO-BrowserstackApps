import homeScreen from '../screenobjects/homescreen';

describe ('Sebagai customer, Saya dapat login dengan akun email yang sudah terdaftar ', () => {

    it('check location', async() => {
        await homeScreen.doRelocate();
    });

});
