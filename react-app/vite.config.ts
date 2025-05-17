import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Asegura que Vite esté disponible en todas las interfaces de red
    port: 3000, // 5173 Fija el puerto para evitar cambios automáticos
    strictPort: true, // No permite cambios de puerto
    allowedHosts: [".ngrok-free.app"], // Permite conexiones desde Ngrok
  },
});
