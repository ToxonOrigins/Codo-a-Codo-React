export const validateProduct = (product) => {
    const errors = {};

    if (!product.nombre.trim()) {
        errors.nombre = "El nombre es obligatorio";
    }

    if (!product.precio || product.precio <= 0) {
        errors.precio = "El precio debe ser mayor que 0";
    }

    if (!product.children.trim()) {
        errors.children = "La descripción es obligatoria";
    }

    if (!product.category.trim()) {
        errors.category = "La categoria es obligatoria";
    }

    if (!product.file) {
        errors.file = "Debes seleccionar una imagen";
    }
    return errors;
}