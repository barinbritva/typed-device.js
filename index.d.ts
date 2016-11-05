// Type definitions for device.js
// Project: https://github.com/soenkekluth/device.js
// Definitions by: Barin Britva <https://github.com/barinbritva>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

function device(userAgent?: string, classContainer?: Element): device.Device;

declare namespace device {
    interface CheckingFunction {
        (): boolean;
    }

    interface NoConflictFunction {
        (): Device;
    }
    
    export interface Device {
        mobile: CheckingFunction;
        tablet: CheckingFunction;
        desktop: CheckingFunction;
        ios: CheckingFunction;
        ipad: CheckingFunction;
        iphone: CheckingFunction;
        ipod: CheckingFunction;
        android: CheckingFunction;
        androidPhone: CheckingFunction;
        androidTablet: CheckingFunction;
        blackberry: CheckingFunction;
        blackberryPhone: CheckingFunction;
        blackberryTablet: CheckingFunction;
        windows: CheckingFunction;
        windowsPhone: CheckingFunction;
        windowsTablet: CheckingFunction;
        fxos: CheckingFunction;
        fxosPhone: CheckingFunction;
        fxosTablet: CheckingFunction;
        meego: CheckingFunction;
        television: CheckingFunction;

        landscape: CheckingFunction;
        portrait: CheckingFunction;

        noConflict: NoConflictFunction;
    }
}

export = device;
