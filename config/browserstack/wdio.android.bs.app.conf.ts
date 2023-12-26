import { config } from '../wdio.shared.conf';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config();

// ============
// Specs
// ============
config.specs = [
    './tests/scenarios/**/app*.ts',
    // './tests/scenarios/**/*'
];
config.maxInstances = 5,
config.exclude = [
    // Exclude this one because the test can only be executed on emulators/simulators
    // './tests/specs/**/app.biometric.login.spec.js',
];

// =============================
// Browserstack specific config
// =============================
// User configuration
config.user = process.env.BROWSERSTACK_USER || 'rizkyiff_qNoBbu';
config.key = process.env.BROWSERSTACK_ACCESS_KEY || 'uwypyGhxQcdKE1hrAupr';
// Use browserstack service
config.services = ['browserstack'];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // Set your BrowserStack config
        'browserstack.debug': true,
        'browserstack.networkLogs': true,
        // Set URL of the application under test
        app: process.env.BROWSERSTACK_APP_ID || 'bs://a47b10d6f7d2bd60d4e4dd1a08115efd4c7cce58',
        // Specify device and os_version for testing
        device: 'Samsung Galaxy S22',
        os_version: '12.0',
        // gpsLocation: '-7.79372, 110.39063',
        // 'browserstack.gpsLocation': -7.793719188685232+110.39062992220187,
        'browserstack.gpsLocation': '-7.419935380051763, 111.02221710659248',
        // Set other BrowserStack capabilities
        project: 'Browserstack Device 1',
    }
    // {
    //     // Set your BrowserStack config
    //     'browserstack.debug': true,
    //     'browserstack.networkLogs': true,
    //     // Set URL of the application under test
    //     app: process.env.BROWSERSTACK_APP_ID || 'bs://45557f2d4ffd4cd03b1cd846e5e3cc702a049bad',
    //     // Specify device and os_version for testing
    //     device: 'Samsung Galaxy S22',
    //     os_version: '12.0',
    //     // Set other BrowserStack capabilities
    //     project: 'Browserstack Device 2',
    //     // build: 'android',
    //     // name: 'device 2'
    // }
];

exports.config = config;
