# Chrome browser extension to partialy solve issue #141129

## Reasons

Chrome browser tries a lot to be fastest of them all and use less resources. Regular users are happy but developers encounter some unusual behavior. For example there is [issue #141129](https://bugs.chromium.org/p/chromium/issues/detail?id=141129) where it is not possible to retrieve past request response body in Chrome DevTools if that request was issued before last (top window) navigation. This extension partialy solves this issue by doing response body retrieval in Chrome DevTools immediately after request finishes.

## Usage

* Clone this repository
* Go to Chrome Extensions page by entering chrome://extensions in a new tab. Alternatively, click on the Extensions menu puzzle button and select Manage Extensions at the bottom of the menu. Or, click the Chrome menu, hover over More Tools, then select Extensions.
* Enable Developer Mode by clicking the toggle switch next to Developer mode.
* Click the Load unpacked button and select repository directory.
* In DevTools there will be new tab "#141129". In it select checkboxes next to request types of which response bodies you want to preserve.

Now you should see more preserved response bodies in Network tab

## Imperfections

* If navigation occurs short time after last request completion that last request response body can be lost
* If response body initiates navigation in window.onload  or document.onload or with meta tag http-equiv="refresh"/content that response body can be lost
* If response status code is in Redirection messages (300 – 399) range response body can be lost
* Depending on Chrome version _can be lost_ should be read as _will be lost_