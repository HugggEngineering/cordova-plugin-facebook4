var exec = require('cordova/exec')

exports.getLoginStatus = function getLoginStatus (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'getLoginStatus', [])
}

exports.showDialog = function showDialog (options, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'showDialog', [options])
}

exports.login = function login (permissions, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'login', permissions)
}

exports.checkHasCorrectPermissions = function checkHasCorrectPermissions (permissions, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'checkHasCorrectPermissions', permissions)
}

exports.logEvent = function logEvent (name, params, valueToSum, s, f) {
  // Prevent NSNulls getting into iOS, messes up our [command.argument count]
  if (!params && !valueToSum) {
    exec(s, f, 'FacebookConnectPlugin', 'logEvent', [name])
  } else if (params && !valueToSum) {
    exec(s, f, 'FacebookConnectPlugin', 'logEvent', [name, params])
  } else if (params && valueToSum) {
    exec(s, f, 'FacebookConnectPlugin', 'logEvent', [name, params, valueToSum])
  } else {
    f('Invalid arguments')
  }
}

exports.logPurchase = function logPurchase (value, currency, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'logPurchase', [value, currency])
}

exports.logCompletedTutorial = function logCompletedTutorial (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'logCompletedTutorial')
}

/**
 * details is a map of
 * {
 *   content_id: string,
 *   content_type: string,
 *   num_items: int,
 *   payment_info_available: 1 or 0,
 *   currency: string,
 * }
 */
exports.logInitiatedCheckout = function logInitiatedCheckout (value, details, s, f) {
  details = details || {};
  exec(s, f, 'FacebookConnectPlugin', 'logInitiatedCheckout', [value, details])
}

exports.logCompletedRegistrationEvent = function logPurchase (name, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'logCompletedRegistrationEvent', [name])
}

exports.logAddedPaymentInfo = function logPurchase (name, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'logAddedPaymentInfo', [name])
}

exports.getAccessToken = function getAccessToken (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'getAccessToken', [])
}

exports.logout = function logout (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'logout', [])
}

exports.api = function api (graphPath, permissions, s, f) {
  permissions = permissions || []
  exec(s, f, 'FacebookConnectPlugin', 'graphApi', [graphPath, permissions])
}

exports.appInvite = function appLinks (options, s, f) {
  options = options || {}
  exec(s, f, 'FacebookConnectPlugin', 'appInvite', [options])
}

exports.getDeferredApplink = function (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'getDeferredApplink', [])
}

exports.activateApp = function (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'activateApp', [])
}

exports.getDeferredApplink = function (s, f) {
    exec(s, f, 'FacebookConnectPlugin', 'getDeferredApplink', [])
}
