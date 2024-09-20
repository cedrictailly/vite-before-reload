
export default function vitebeforereload() {
  return {
    name: "vite-before-reload",
    handleHotUpdate(ctx) {
      process.emit("vite-before-reload", ctx);
    },
  };
}
