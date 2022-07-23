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