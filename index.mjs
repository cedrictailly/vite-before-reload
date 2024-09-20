
export default function vitebeforereload() {
  return {
    name: "vite-before-reload",
    handleHotUpdate() {
      process.emit("vite-before-reload");
    },
  };
}
