class LongPress {
    private timeOutEvent!: number;
    touchEnd = () => {
        clearTimeout(this.timeOutEvent);
        if (this.timeOutEvent !== 0) {
            return
        }
        return false;
    };
    touchStart = (fn?: Function) => {
        this.timeOutEvent = setTimeout(() => {
            this.timeOutEvent = 0;
            if (fn) {
                fn()
            }
        }, 500);
        return false;
    };
    touchMove = () => {
        clearTimeout(this.timeOutEvent);
        this.timeOutEvent = 0;
    };
}
export default new LongPress();






