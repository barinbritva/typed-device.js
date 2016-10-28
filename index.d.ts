// Type definitions for device.js v0.2.7
// Project: https://github.com/matthewhudson/device.js
// Definitions by: Barin Britva <https://github.com/barinbritva>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace device.js {
    export interface Device {
        mobile: () => boolean;
        tablet: () => boolean;
        desktop: () => boolean;
        ios: () => boolean;
        ipad: () => boolean;
        iphone: () => boolean;
        ipod: () => boolean;
        android: () => boolean;
        androidPhone: () => boolean;
        androidTablet: () => boolean;
        blackberry: () => boolean;
        blackberryPhone: () => boolean;
        blackberryTablet: () => boolean;
        windows: () => boolean;
        windowsPhone: () => boolean;
        windowsTablet: () => boolean;
        fxos: () => boolean;
        fxosPhone: () => boolean;
        fxosTablet: () => boolean;
        meego: () => boolean;
        television: () => boolean;

        landscape: () => boolean;
        portrait: () => boolean;

        noConflict: () => Device;
    }
}

declare module 'device.js' {
      import Device = device.js.Device;

      function device(userAgent?: string, classContainer?: Element): Device;

      export = device;
}
