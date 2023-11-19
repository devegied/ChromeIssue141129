chrome.devtools.panels.create("#141129", "icon128.png", "panel.html", (panel) => {
  let _window;
  panel.onShown.addListener((panelWindow)=>{
    if(_window==null){
      _window = panelWindow;
      chrome.devtools.network.onRequestFinished.addListener((req)=>{
        if(_window.srbidt.has("all") || _window.srbidt.has(req._resourceType))
          req.getContent((content, encoding) => {
            if(content);//response body should be retrieved at this time
          });
      });
    }
  });
});