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