class LoopMachine{
    constructor() {
        this.flag = false;
        this.callBacks = [];
    }
    addCallBack(callBack) {
        let index = this.callBacks.indexOf(callBack);
        if (index > -1) return;
        this.callBacks.push(callBack);
    }
    removeCallBack(callBack) {
        let index = this.callBacks.indexOf(callBack);
        if (index > -1) this.callBacks.splice(index, 1);
    }
    run = () => {
        if (!this.flag) return;
        this.callBacks.forEach(cb => cb());
        window.requestAnimationFrame(this.run);
    }
    start() {
        if (this.flag) return;
        this.flag = true;
        this.run();
    }
    stop() {
        this.flag = false;
    }
    
}
const loopMachine = new LoopMachine();

export default loopMachine;
export {LoopMachine}