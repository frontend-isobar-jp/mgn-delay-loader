# mgn-delay-loader ( Don't Need jQuery )


Implement delay load function for images that trigger scrolling.
- Target browser : IE9+

___

# Install

```
npm i mgn-delay-loader -S
```

## Or Download raw data
[↓ download "mgn-delay-loader.js"](https://raw.githubusercontent.com/frontend-isobar-jp/mgn-delay-loader/master/src/mgn-delay-loader.js)

___

# Import

```
import mgnDelayLoader from 'mgn-delay-loader';
```

___

# Constructor

```
new mgnDelayLoader(element [, option]);
```
|Argument|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|element|String|-(Required)|Specify target element.<br>ex) ".j-delayloader img"|
|option|Object|-|ex)<br> option = {<br> transitionSpeed: 400,<br> delaySpeed: 400,<br> threshold: 200,<br> bg: "url(img/loading.gif)"<br>}|

|option|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|transitionSpeed|Number|200|Specify images display speed.|
|delaySpeed|Number|200|Specify delay time when image is displayed.|
|threshold|Number|200|Specify image display threshold.|
|bg|String|"#EEE"|Specify the boundary value to forcefully close the global navigation.|

___

# Demo

[https://frontend-isobar-jp.github.io/mgn-delay-loader/](https://frontend-isobar-jp.github.io/mgn-delay-loader/)

```
import mgnDelayLoader from 'mgn-delay-loader';

new mgnDelayLoader(
    ".j-delayloader img",
    {
        transitionSpeed: 1000,
        delaySpeed: 200,
        threshold: 100,
        bg: "#666"
    }
);
```
