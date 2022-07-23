(() => {
    window.JSTools = window.JSTools || {};
    /**
     * @param {HTMLCanvasElement} canvas
     * @param {number | function(): number} width
     * @param {number | function(): number} height
     */
    window.JSTools.handleCanvasResize = (canvas, width = window.innerWidth, height = window.innerHeight) => {
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