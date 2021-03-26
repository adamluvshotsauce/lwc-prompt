import { LightningElement, api } from 'lwc';

export default class Prompt extends LightningElement {

    @api heading;
    @api iconName;
    @api iconVariant;
    @api iconSize;
    @api theme;
    @api textured = false;

    /******************
     * 
     * Getters
     * 
     *****************/

    /**
     * @description Getter property setting slds classes by prompty theme
     * @return {string} Returns a css class string
     */
    get themeClass() {
        let baseClasses = 'slds-modal__header';

        switch (this.theme) {
            case 'info':
                return `${baseClasses} slds-theme_info ${this.texturedClass}`;
            case 'warning':
                return `${baseClasses} slds-theme_warning ${this.texturedClass}`;
            case 'error':
                return `${baseClasses} slds-theme_error ${this.texturedClass}`;
            case 'offline':
                return `${baseClasses} slds-theme_offline ${this.texturedClass}`;
            default:
                return `${baseClasses} slds-theme_info ${this.texturedClass}`;
        }
    }

    /**
     * @description Getter property which returns the textured alert theme
     * @return {string} Returns a css class string
     */
    get texturedClass() {
        return this.textured ? 'slds-theme_alert-texture' : '';
    }

}