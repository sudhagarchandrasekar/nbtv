
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-appavailability.AppAvailability",
          "file": "plugins/cordova-plugin-appavailability/www/AppAvailability.js",
          "pluginId": "cordova-plugin-appavailability",
        "clobbers": [
          "appAvailability"
        ]
        },
      {
          "id": "mx.ferreyra.callnumber.CallNumber",
          "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
          "pluginId": "mx.ferreyra.callnumber",
        "clobbers": [
          "call"
        ]
        },
      {
          "id": "cordova-plugin-email-composer.EmailComposer",
          "file": "plugins/cordova-plugin-email-composer/www/email_composer.js",
          "pluginId": "cordova-plugin-email-composer",
        "clobbers": [
          "cordova.plugins.email"
        ]
        },
      {
          "id": "cordova-plugin-screen-orientation.screenorientation",
          "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
          "pluginId": "cordova-plugin-screen-orientation",
        "clobbers": [
          "cordova.plugins.screenorientation"
        ]
        },
      {
          "id": "cordova-plugin-streaming-media.StreamingMedia",
          "file": "plugins/cordova-plugin-streaming-media/www/StreamingMedia.js",
          "pluginId": "cordova-plugin-streaming-media",
        "clobbers": [
          "streamingMedia"
        ]
        },
      {
          "id": "es6-promise-plugin.Promise",
          "file": "plugins/es6-promise-plugin/www/promise.js",
          "pluginId": "es6-promise-plugin",
        "runs": true
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "mx.ferreyra.callnumber": "0.0.2",
      "cordova-plugin-appavailability": "0.4.2",
      "cordova-plugin-email-composer": "0.10.0",
      "cordova-plugin-screen-orientation": "3.0.2",
      "cordova-plugin-streaming-media": "2.3.0",
      "es6-promise-plugin": "4.2.2"
    };
    // BOTTOM OF METADATA
    });
    