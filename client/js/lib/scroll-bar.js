export class ScrollBar {
    constructor(body, html, scrollBar, scrollBarSlider) {
        this.body = body;
        this.html = html;
        this.scrollBar = scrollBar;
        this.scrollBarSlider = scrollBarSlider;
    }

    get documentHeight() {
        return Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
    }

    get percentageOfPageToScrollBarPixels() {

    }

    get scrollBarHeight() {
        return scrollBar.offsetHeight;
    }
}
