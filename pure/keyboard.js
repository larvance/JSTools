// noinspection JSUnusedGlobalSymbols

(() => {
    window.JSTools = window.JSTools || {};
    /*** @type {Object<string, boolean>} */
    let keys = {};
    /*** @type {Object<string, boolean>} */
    let codes = {};
    addEventListener("keydown", ev => {
        keys[ev.key] = true;
        codes[ev.code] = true;
    });
    addEventListener("keyup", ev => {
        delete keys[ev.key];
        delete codes[ev.code];
    });
    addEventListener("blur", () => {
        keys = {};
        codes = {};
    });
    window.JSTools.keyboard = new class {
        get isShiftDown() {
            return keys["Shift"];
        };

        get isCtrlDown() {
            return keys["Control"];
        };

        get isAltDown() {
            return keys["Alt"];
        };

        get isMetaDown() {
            return keys["Meta"];
        };

        get isSpaceDown() {
            return keys[" "];
        };

        get isEnterDown() {
            return keys["Enter"];
        };

        get isBackspaceDown() {
            return keys["Backspace"];
        };

        get isTabDown() {
            return keys["Tab"];
        };

        get isDeleteDown() {
            return keys["Delete"];
        };

        get isLeftArrowDown() {
            return keys["ArrowLeft"];
        };

        get isUpArrowDown() {
            return keys["ArrowUp"];
        };

        get isRightArrowDown() {
            return keys["ArrowRight"];
        };

        get isDownArrowDown() {
            return keys["ArrowDown"];
        };

        get isHomeDown() {
            return keys["Home"];
        };

        get isEndDown() {
            return keys["End"];
        };

        get isPageUpDown() {
            return keys["PageUp"];
        };

        get isPageDownDown() {
            return keys["PageDown"];
        };

        get isInsertDown() {
            return keys["Insert"];
        };

        get isF1Down() {
            return keys["F1"];
        };

        get isF2Down() {
            return keys["F2"];
        };

        get isF3Down() {
            return keys["F3"];
        };

        get isF4Down() {
            return keys["F4"];
        };

        get isF5Down() {
            return keys["F5"];
        };

        get isF6Down() {
            return keys["F6"];
        };

        get isF7Down() {
            return keys["F7"];
        };

        get isF8Down() {
            return keys["F8"];
        };

        get isF9Down() {
            return keys["F9"];
        };

        get isF10Down() {
            return keys["F10"];
        };

        get isF11Down() {
            return keys["F11"];
        };

        get isF12Down() {
            return keys["F12"];
        };

        /**
         * @param {string} key
         * @return {boolean}
         */
        isPressing(key) {
            return keys[key] || codes[key];
        };

        /**
         * @param {string} key
         * @return {boolean}
         */
        isPressingName(key) {
            return keys[key];
        };

        /**
         * @param {string} code
         * @return {boolean}
         */
        isPressingCode(code) {
            return codes[code];
        };

        /**
         * @param {string} key
         * @return {Promise<void>}
         */
        waitPress(key) {
            return new Promise(resolve => {
                const l = () => {
                    if (keys[key] || codes[key]) {
                        removeEventListener("keydown", l);
                        resolve();
                    }
                };
                addEventListener("keydown", l);
            });
        };

        /*** @return {Promise<{key: string, code: string}>} */
        waitAny() {
            return new Promise(resolve => {
                const l = ev => {
                    removeEventListener("keyup", l);
                    resolve({key: ev.key, code: ev.code});
                };
                addEventListener("keyup", l);
            });
        };
    };
})();