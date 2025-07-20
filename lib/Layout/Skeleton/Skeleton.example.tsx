import { Skeleton } from './Skeleton';

/**
 * Ejemplos de uso del componente Skeleton
 */
export const SkeletonExamples = () => {
  return (
    <div className="space-y-8 p-6">
      {/* Ejemplo básico */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Ejemplo Básico</h3>
        <div className="space-y-2">
          <Skeleton variant="text" size="full" />
          <Skeleton variant="text" size="lg" />
          <Skeleton variant="text" size="md" />
        </div>
      </div>

      {/* Ejemplo de perfil de usuario */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Perfil de Usuario</h3>
        <div className="flex items-center space-x-4">
          <Skeleton variant="avatar" size="lg" />
          <div className="space-y-2 flex-1">
            <Skeleton variant="title" size="lg" />
            <Skeleton variant="text" size="full" />
            <Skeleton variant="text" size="md" />
          </div>
        </div>
      </div>

      {/* Ejemplo de elementos circulares */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Elementos Circulares</h3>
        <div className="flex items-center space-x-4">
          <Skeleton variant="circular" size="sm" />
          <Skeleton variant="circular" size="md" />
          <Skeleton variant="circular" size="lg" />
          <Skeleton variant="circular" size="xl" />
        </div>
      </div>

      {/* Comparación Avatar vs Circular */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Avatar vs Circular</h3>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <Skeleton variant="avatar" />
            <p className="text-sm mt-2">Avatar (h-12 w-12)</p>
          </div>
          <div className="text-center">
            <Skeleton variant="circular" size="md" />
            <p className="text-sm mt-2">Circular (aspect-square)</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Avatar tiene tamaño fijo 48x48px, Circular mantiene proporción 1:1 con el tamaño especificado
        </p>
      </div>

      {/* Ejemplo de tarjeta de producto */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Tarjeta de Producto</h3>
        <div className="border rounded-lg p-4 space-y-4">
          <Skeleton variant="image" size="full" />
          <div className="space-y-2">
            <Skeleton variant="title" size="full" />
            <Skeleton variant="text" size="full" />
            <Skeleton variant="text" size="lg" />
          </div>
          <div className="flex space-x-2">
            <Skeleton variant="button" size="md" />
            <Skeleton variant="button" size="md" />
          </div>
        </div>
      </div>

      {/* Ejemplo de tarjeta simple */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Tarjeta Simple</h3>
        <div className="space-y-2">
          <Skeleton variant="card" />
          <Skeleton variant="card" />
          <Skeleton variant="card" />
        </div>
      </div>

      {/* Ejemplo de lista */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Lista de Elementos</h3>
        <div className="space-y-3">
          <Skeleton variant="list" size="full" />
          <Skeleton variant="list" size="full" />
          <Skeleton variant="list" size="full" />
          <Skeleton variant="list" size="full" />
        </div>
      </div>

      {/* Ejemplo con múltiples elementos */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Múltiples Elementos</h3>
        <Skeleton variant="text" size="full" count={5} />
      </div>

      {/* Ejemplo de formulario */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Formulario</h3>
        <div className="space-y-4 max-w-md">
          <div>
            <Skeleton variant="text" size="sm" className="mb-2" />
            <Skeleton variant="button" size="full" />
          </div>
          <div>
            <Skeleton variant="text" size="sm" className="mb-2" />
            <Skeleton variant="button" size="full" />
          </div>
          <div>
            <Skeleton variant="text" size="sm" className="mb-2" />
            <Skeleton variant="button" size="full" />
          </div>
          <Skeleton variant="button" size="md" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonExamples; 