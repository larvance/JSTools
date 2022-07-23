// noinspection JSUnusedGlobalSymbols

(() => {
    window.JSTools = window.JSTools || {};
    window.JSTools.chunkArray = (array, size) => new Array(Math.ceil(array.length / size)).fill(0).map((_, i) => array.slice(i * size, (i + 1) * size));
    window.JSTools.shuffleArray = array => new Array(array.length).fill(0).map((_, i) => {
        const j = Math.floor(Math.random() * (i + 1));
        JSTools.swap(array, i, j);
        return array;
    });
    window.JSTools.randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    window.JSTools.randomFloat = (min, max) => Math.random() * (max - min) + min;
    window.JSTools.randomBoolean = () => Math.random() < 0.5;
    window.JSTools.arrayRandom = array => array[Math.floor(Math.random() * array.length)];
    window.JSTools.randomHex = () => JSTools.randomInt(0x000000, 0xFFFFFF);
    window.JSTools.randomHexColor = () => `#${JSTools.randomHex().toString(16)}`;
    window.JSTools.clearObject = obj => {
        for (const key in obj) if (obj.hasOwnProperty(key)) delete obj[key];
    };
    window.JSTools.clearArray = array => {
        while (array.length) array.pop();
    };
    window.JSTools.flattenArray = array => array.reduce((a, b) => a.concat(Array.isArray(b) ? JSTools.flattenArray(b) : b), []);
    window.JSTools.isArray = array => Array.isArray(array);
    window.JSTools.isObject = obj => typeof obj === "object" && obj !== null && !Array.isArray(obj);
    window.JSTools.isFunction = func => typeof func === "function";
    window.JSTools.isString = str => typeof str === "string";
    window.JSTools.isNumber = num => typeof num === "number";
    window.JSTools.isBoolean = bool => typeof bool === "boolean";
    window.JSTools.isUndefined = undef => typeof undef === "undefined";
    window.JSTools.isNull = null_ => null_ === null;
    window.JSTools.isNaN = num => isNaN(num);
    window.JSTools.isFinite = num => isFinite(num);
    window.JSTools.isInfinite = num => isFinite(num) && !isFinite(Math.abs(num));
    window.JSTools.isInteger = num => isFinite(num) && Math.floor(num) === num;
    window.JSTools.isSafeInteger = num => isFinite(num) && Math.floor(num) === num && Math.abs(num) <= Number.MAX_SAFE_INTEGER;
    window.JSTools.isFloat = num => isFinite(num) && Math.floor(num) !== num;
    window.JSTools.isEven = num => JSTools.isInteger(num) && num % 2 === 0;
    window.JSTools.isOdd = num => JSTools.isInteger(num) && num % 2 !== 0;
    window.JSTools.isPrime = num => {
        if (JSTools.isInteger(num) && num > 1) {
            for (let i = 2; i < num; i++) if (num % i === 0) return false;
            return true;
        }
        return false;
    };
    window.JSTools.isPalindrome = str => {
        if (JSTools.isString(str)) {
            const len = str.length;
            for (let i = 0; i < len / 2; i++) if (str[i] !== str[len - i - 1]) return false;
            return true;
        }
        return false;
    };
    window.JSTools.isAnagram = (str1, str2) => {
        if (JSTools.isString(str1) && JSTools.isString(str2)) {
            const len = str1.length;
            if (len === str2.length) {
                const arr = new Array(26).fill(0);
                for (let i = 0; i < len; i++) arr[str1.charCodeAt(i) - 97]++;
                for (let i = 0; i < len; i++) arr[str2.charCodeAt(i) - 97]--;
                for (let i = 0; i < 26; i++) if (arr[i] !== 0) return false;
                return true;
            }
        }
        return false;
    };
    window.JSTools.isPalindromePermutation = str => {
        if (JSTools.isString(str)) {
            const len = str.length;
            const arr = new Array(26).fill(0);
            for (let i = 0; i < len; i++) arr[str.charCodeAt(i) - 97]++;
            for (let i = 0; i < 26; i++) if (arr[i] % 2 !== 0) return false;
            return true;
        }
        return false;
    };
    window.JSTools.isOneEditAway = (str1, str2) => {
        if (JSTools.isString(str1) && JSTools.isString(str2)) {
            const len1 = str1.length;
            const len2 = str2.length;
            if (Math.abs(len1 - len2) <= 1) {
                let count = 0;
                for (let i = 0; i < len1; i++) if (str1[i] !== str2[i]) count++;
                return count <= 1;
            }
        }
        return false;
    };
    window.JSTools.stringCompression = str => {
        if (JSTools.isString(str)) {
            const len = str.length;
            let count = 1;
            let result = "";
            for (let i = 0; i < len; i++) {
                if (str[i] === str[i + 1]) count++;
                else {
                    result += str[i] + count.toString();
                    count = 1;
                }
            }
            return result.length < len ? result : str;
        }
        return "";
    };
    window.JSTools.stringDifference = (str1, str2) => {
        if (JSTools.isString(str1) && JSTools.isString(str2)) {
            const len1 = str1.length;
            let count = 0;
            for (let i = 0; i < len1; i++) if (str1[i] !== str2[i]) count++;
            return count;
        }
        return 0;
    };
    window.JSTools.stringRotation = (str1, str2) => {
        if (JSTools.isString(str1) && JSTools.isString(str2)) {
            const len1 = str1.length;
            const len2 = str2.length;
            if (len1 === len2) {
                let count = 0;
                for (let i = 0; i < len1; i++) if (str1[i] !== str2[(i + len2 - len1) % len2]) count++;
                return count === 0;
            }
        }
        return false;
    };
    window.JSTools.compareStrings = (...strings) => strings.sort((a, b) => a.localeCompare(b));
    window.JSTools.permute = (arr, start, end) => {
        if (start >= end) return false;
        for (let i = start; i <= end; i++) {
            JSTools.swap(arr, start, i);
            JSTools.permute(arr, start + 1, end);
            JSTools.swap(arr, start, i);
        }
        return true;
    };
    window.JSTools.swap = (obj, i, j) => {
        const temp = obj[i];
        obj[i] = obj[j];
        obj[j] = temp;
    };
})();
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
(() => {
    window.JSTools = window.JSTools || {};
    /**
     * @param {HTMLCanvasElement} canvas
     * @param {number | function(): number} width
     * @param {number | function(): number} height
     */
    window.JSTools.handleCanvasResize = (canvas, width = () => window.innerWidth, height = () => window.innerHeight) => {
        const resize = () => {
            canvas.width = typeof width === "function" ? width() : width;
            canvas.height = typeof height === "function" ? height() : height;
        };
        addEventListener("resize", resize);
        resize();
    };
    /**
     * @param {function(): void} callback
     * @return {{id: number}}
     */
    window.JSTools.loopAnimation = callback => {
        const l = {id: 0};
        const loop = () => {
            l.id = requestAnimationFrame(loop);
            callback();
        };
        loop();
        return l;
    };
    window.JSTools.stopAnimation = id => cancelAnimationFrame(id.id);
    window.JSTools.clearCanvas = canvas => canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    window.JSTools.fillCanvas = (canvas, color) => {
        const ctx = canvas.getContext("2d");
        const l = ctx.fillStyle;
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = l;
    };
})();
(() => {
    window.JSTools = window.JSTools || {};
    window.JSTools.log = (a, b) => {
        if (JSTools.isNumber(a) && JSTools.isNumber(b)) {
            if (b === 0) return 0;
            if (b === 1) return 1;
            if (b === 2) return Math.log2(a);
            if (b === 10) return Math.log10(a);
            return Math.log(a) / Math.log(b);
        }
    };
    window.JSTools.parseTime = timestamp => {
        return {
            days: Math.trunc(timestamp / 86400000),
            hours: Math.trunc(timestamp / 3600000) % 24,
            minutes: Math.trunc(timestamp / 60000) % 60,
            seconds: Math.trunc(timestamp / 1000) % 60,
            milliseconds: Math.trunc(timestamp) % 1000,
            nanoseconds: Math.trunc(timestamp * 1e6) % 1000
        }
    };
    window.JSTools.radians = angle => angle * Math.PI / 180;
    window.JSTools.degrees = angle => angle * 180 / Math.PI;
    window.JSTools.direction2 = radians => ({x: Math.cos(radians), y: Math.sin(radians)});
    window.JSTools.distance2 = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);
    window.JSTools.distance3 = (x1, y1, z1, x2, y2, z2) => Math.hypot(x2 - x1, y2 - y1, z2 - z1);
    window.JSTools.lookAt2 = (x1, y1, x2, y2) => Math.atan2(y2 - y1, x2 - x1);
})();