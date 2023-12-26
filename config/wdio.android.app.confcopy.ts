import { join } from 'path';
import config from './wdio.shared.local.appium.conf';

// ============
// Specs
// ============
config.specs = [
    './tests/scenarios/**/app*.ts',
],
// config.specs = [
//     './tests/scenarios/Homepage/Branch/app*.ts',
// ],
config.maxInstances = 2,
// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        'appium:platformName': 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:orientation': 'PORTRAIT',
        'appium:udid': 'emulator-5556',
        'appium:app': join(process.cwd(), './apps/UAT/app.apk'),
        'appium:deviceName': 'Emulator 2'
    },
    {
        'appium:platformName': 'Android',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        'appium:udid': 'emulator-5554',
        'appium:app': join(process.cwd(), './apps/UAT/app.apk'),
        'appium:deviceName': 'Emulator 1'
    }
];

exports.config = config;
