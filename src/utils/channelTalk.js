// ChannelTalk script integration

export const initChannelTalk = () => {
  (function() {
    var w = window;
    if (w.ChannelIO) {
      return w.console.error("ChannelIO script included twice.");
    }
    var ch = function() {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function(args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
      var x = document.getElementsByTagName("script")[0];
      if (x.parentNode) {
        x.parentNode.insertBefore(s, x);
      }
    }
    if (document.readyState === "complete") {
      l();
    } else {
      w.addEventListener("DOMContentLoaded", l);
      w.addEventListener("load", l);
    }
  })();

  window.ChannelIO('boot', {
    "pluginKey": "baf12804-e98a-42d4-ab9a-34adb2e5592e"
  });
};

export const updateChannelTalkUser = (userData) => {
  if (window.ChannelIO) {
    window.ChannelIO('updateUser', {
      ...userData
    });
  }
};

export default {
  initChannelTalk,
  updateChannelTalkUser
}; 