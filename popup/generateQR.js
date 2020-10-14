function reportExecuteScriptError(error) {
  console.error(`Failed to execute beastify content script: ${error.message}`);
}

browser.tabs.executeScript({file: "/content_scripts/generate.js"})
.catch(reportExecuteScriptError);

let url = window.location.href;

browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
    let tab = tabs[0]; // Safe to assume there will only be one result
    let qr = "https://api.qrserver.com/v1/create-qr-code/?data="+tab.url;

    var qrImage = document.getElementById("qrImage");
    qrImage.src = qr;
}, console.error)
