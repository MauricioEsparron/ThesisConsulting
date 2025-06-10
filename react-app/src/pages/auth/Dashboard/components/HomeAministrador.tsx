// import "../../../../css/HomeAdministrador.css";

const HomeAdministrador: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-10 space-y-10">
        {/* Encabezado */}
        <h2 className="text-4xl font-extrabold text-blue-600 text-center">
          Bienvenido al Panel de Administración
        </h2>

        <h3 className="text-lg text-gray-600 text-center mt-50">
          Este es el inicio del administrador. Desde aquí puedes gestionar el
          sistema, visualizar estadísticas y más.
        </h3>

        {/* Acciones principales */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md">
            📊 Ver Reportes
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-200 shadow-md">
            ➕ Agregar Usuario
          </button>
        </div>

        {/* Placeholder para componentes futuros */}
        <div className="border-2 border-dashed border-gray-300 p-10 rounded-xl text-center text-gray-400 text-lg">
          Aquí irán gráficos, tablas u otros componentes interactivos.
        </div>
      </div>
    </div>
  );
};

export default HomeAdministrador;
