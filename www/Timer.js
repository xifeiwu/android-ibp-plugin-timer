var TimerPlugin = function() {};  

TimerPlugin.prototype.start = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "TimerPlugin", "start", ["Hi"]);
};
TimerPlugin.prototype.stop = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "TimerPlugin", "stop", []);
};  
  
var timerPlugin = new TimerPlugin();  
module.exports = timerPlugin;
