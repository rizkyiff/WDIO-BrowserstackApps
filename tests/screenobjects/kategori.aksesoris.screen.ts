import AppScreen from './AppScreen';
import { setUiSelectorByText } from '../helpers/common';

class kategoriAksesoris extends AppScreen {
    constructor() {
        super(setUiSelectorByText('Aksesoris'));

    }
    private get txtHeader () {return $(setUiSelectorByText('Aksesoris'));}
    private get txtHeader2 () {return $(setUiSelectorByText('Aksesoris Auto2000 secara khusus dirancang, dibuat, diuji, dan disertifikasi untuk digunakan pada kendaraan Toyota'));}
    private get btnCart () {return $('~btn-accessoriesPLP-navigateToCart');}
    private get btnSearch () {return $('~btn-accessoriesSearch-searchItem');}
    private get txtInside () {return $(setUiSelectorByText('New Avanza'));}
    private get txtUrutkan () {return $(setUiSelectorByText('Urutkan'));}
    private get txtFilter () {return $(setUiSelectorByText('Filter'));}

    async tapBtnSearch(){
        await (await this.btnSearch).waitForDisplayed();
        await this.btnSearch.click();
    }
    async verifyScreen(){
        await (await this.txtHeader).waitForDisplayed();
        await (await this.txtHeader2).waitForDisplayed();
        await (await this.btnCart).waitForDisplayed();
        await (await this.txtInside).waitForDisplayed();
        await (await this.txtUrutkan).waitForDisplayed();
        await (await this.txtFilter).waitForDisplayed();
    }

}

export default new kategoriAksesoris();
