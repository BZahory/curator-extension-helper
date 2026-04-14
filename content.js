(function () {
  function isVercelProtectionPage() {
    return (
      document.title === "Authentication Required" &&
      document.body.classList.contains("password-enabled") &&
      document.querySelector('input[name="_vercel_password"]') !== null &&
      document.querySelector("form.password") !== null
    );
  }

  if (!isVercelProtectionPage()) return;
  if (document.querySelector('[class*="error"]')) return;

  chrome.storage.local.get(["password"], function (result) {
    if (!result.password) return;

    var input = document.querySelector('input[name="_vercel_password"]');
    var form = document.querySelector("form.password");
    if (!input || !form) return;

    input.value = result.password;
    form.requestSubmit();
  });
})();
