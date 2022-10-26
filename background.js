/**Create menu right click menu option */
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "my_extension",
    title: "MY_EXTENSION",
    contexts: ["selection"],
  });
});

/**Listening to the right click and choosing our menu point MY_EXTENSION */
chrome.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "my_extension":
      chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        files: ["./styles.css"],
      });
      chrome.scripting.executeScript({ target: { tabId: tab.id }, func: myExtension });
      break;
  }
});

/**Calling main action on right click*/
async function myExtension() {
  document.body.style.cursor = "progress";
  const selObj = window.getSelection();
  const selectedText = selObj.toString();
  const prompt = selectedText + "\n\nwrite a poem based on this:";
  const choices = await getResponse(prompt)
    .then((response) => response?.choices || [])
    .catch((error) => console.log(error));
  const openAIresponse = choices[0]?.text;
  document.body.style.cursor = "auto";
  /**Copying answer to the clipboard */
  navigator.clipboard.writeText(openAIresponse);
  showModal(openAIresponse);
}