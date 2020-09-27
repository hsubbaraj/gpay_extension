chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.action === "fillFields") {
        $("#cc-name").val("Hari Subbaraj")
        $("#cc-number").val("1235674423")
    }
});
