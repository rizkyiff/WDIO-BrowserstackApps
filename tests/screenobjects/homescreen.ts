import AppScreen from './AppScreen';
import { setUiSelectorByText, setXpathSelectorByResourceId } from '../helpers/common';

class HomeScreen extends AppScreen {
    constructor() {
        super(setUiSelectorByText('Home'));

    }

    private get btnCheckGps () {return $('~Pusatkan lagi peta ke lokasi Anda');}
    // private get btnAllowGps () {return $('~permission_allow_foreground_only_button');}
    private get btnAllowGps () {return $(setXpathSelectorByResourceId('com.android.permissioncontroller:id/permission_allow_foreground_only_button'));}
    private get btnDenyBattery () {return $(setXpathSelectorByResourceId('com.mobile.fakelocation:id/tv_cancel'));}
    private get txtAddress () {return $(setXpathSelectorByResourceId('com.mobile.fakelocation:id/text_cur_address'));}

    async doRelocate(){
        await (await this.btnAllowGps).click();
        await (await this.btnDenyBattery).click();
        console.log('Address is : '+await (await this.txtAddress).getText());

    }

}

export default new HomeScreen();
