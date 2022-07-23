// noinspection JSUnusedGlobalSymbols

(() => {
    window.JSTools = window.JSTools || {};
    const M = {pos: [0, 0], down: [false, false, false]};
    addEventListener("mousedown", ev => M.down[ev.button] = true);
    addEventListener("mouseup", ev => M.down[ev.button] = false);
    addEventListener("mousemove", ev => M.pos = [ev.clientX, ev.clientY]);
    addEventListener("blur", () => M.down = [false, false, false]);
    window.JSTools.mouse = new class {
        get x() {
            return M.pos[0];
        };

        get y() {
            return M.pos[1];
        };

        isPressing(key = 0) {
            return M.down[key];
        };

        waitPress(key = 0) {
            return new Promise(resolve => {
                const l = () => {
                    if (M.down[key]) {
                        removeEventListener("mouseup", l);
                        resolve();
                    }
                };
                addEventListener("mouseup", l);
            });
        };

        waitAny() {
            return new Promise(resolve => {
                const l = ev => {
                    removeEventListener("mouseup", l);
                    resolve({key: ev.key, code: ev.code});
                };
                addEventListener("mouseup", l);
            });
        };
    };
})();