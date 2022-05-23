chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  $("head").prepend(
    `<style>
        .flex-container {
          display: flex;
        }
      </style> `
  );
  $("body").prepend(
    `<div class="flex-container" flex>
    <div><p>amount:${request.amount}</p></div>
    </div>`
  )
  sendResponse({ fromcontent: "This message is from content.js" });
});
