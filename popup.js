document.addEventListener("DOMContentLoaded", function () {
  var passwordInput = document.getElementById("passwordInput");
  var urlPattern = document.getElementById("urlPattern");
  var saveBtn = document.getElementById("saveBtn");
  var status = document.getElementById("status");

  var manifest = chrome.runtime.getManifest();
  var globs = manifest.content_scripts && manifest.content_scripts[0] && manifest.content_scripts[0].include_globs;
  urlPattern.value = globs ? globs[0].replace(/^\*:\/\//, "").replace(/\/\*$/, "") : "N/A";

  chrome.storage.local.get(["password"], function (result) {
    if (result.password) {
      passwordInput.value = result.password;
    }
  });

  saveBtn.addEventListener("click", function () {
    var password = passwordInput.value;
chrome.storage.local.set({ password: password }, function () {
      status.textContent = "Saved!";
      status.style.opacity = "1";
      setTimeout(function () {
        status.style.opacity = "0";
      }, 1500);
    });
  });
});
