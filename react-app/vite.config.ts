import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Asegura que Vite esté disponible en todas las interfaces de red
    port: 3001, // 5173 Fija el puerto para evitar cambios automáticos
    strictPort: true, // No permite cambios de puerto
    allowedHosts: [".ngrok-free.app"], // Permite conexiones desde Ngrok
  },
});
