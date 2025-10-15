// Funcionalidad específica para la página de ventas

// Variables globales para la página de ventas
let filteredSales = [];
let currentDateFrom = '';
let currentDateTo = '';
let currentSalesCategory = '';
let currentSalesSort = 'date';

// Elementos del DOM
const totalSalesAmount = document.getElementById('totalSalesAmount');
const totalItemsSold = document.getElementById('totalItemsSold');
const averagePrice = document.getElementById('averagePrice');
const categoriesCount = document.getElementById('categoriesCount');
const salesList = document.getElementById('salesList');
const noSales = document.getElementById('noSales');
const categoryStats = document.getElementById('categoryStats');
const dateFrom = document.getElementById('dateFrom');
const dateTo = document.getElementById('dateTo');
const applyDateFilter = document.getElementById('applyDateFilter');
const salesCategoryFilter = document.getElementById('salesCategoryFilter');
const salesSortBy = document.getElementById('salesSortBy');
const clearAllSales = document.getElementById('clearAllSales');
const exportSales = document.getElementById('exportSales');

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializeSalesPage();
    setupEventListeners();
    loadAndDisplaySales();
});

// Función para inicializar la página de ventas
function initializeSalesPage() {
    // Cargar productos vendidos desde localStorage
    loadSoldProducts();
    
    // Configurar fechas por defecto (último mes)
    const today = new Date();
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    
    dateTo.value = today.toISOString().split('T')[0];
    dateFrom.value = lastMonth.toISOString().split('T')[0];
    
    // Llenar filtro de categorías
    populateCategoryFilter();
    
    // Aplicar filtros iniciales
    applyFilters();
}

// Función para configurar event listeners
function setupEventListeners() {
    applyDateFilter.addEventListener('click', applyFilters);
    salesCategoryFilter.addEventListener('change', applyFilters);
    salesSortBy.addEventListener('change', applyFilters);
    clearAllSales.addEventListener('click', clearAllSalesData);
    exportSales.addEventListener('click', exportSalesReport);
}

// Función para llenar el filtro de categorías
function populateCategoryFilter() {
    const categories = [...new Set(soldProducts.map(product => product.category))];
    categories.sort();
    
    salesCategoryFilter.innerHTML = '<option value="">Todas las categorías</option>';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        salesCategoryFilter.appendChild(option);
    });
}

// Función para aplicar filtros
function applyFilters() {
    currentDateFrom = dateFrom.value;
    currentDateTo = dateTo.value;
    currentSalesCategory = salesCategoryFilter.value;
    currentSalesSort = salesSortBy.value;
    
    // Filtrar productos vendidos
    filteredSales = soldProducts.filter(product => {
        // Filtro por fecha
        if (currentDateFrom && product.soldDate) {
            const productDate = new Date(product.soldDate.split('/').reverse().join('-'));
            const fromDate = new Date(currentDateFrom);
            if (productDate < fromDate) return false;
        }
        
        if (currentDateTo && product.soldDate) {
            const productDate = new Date(product.soldDate.split('/').reverse().join('-'));
            const toDate = new Date(currentDateTo);
            if (productDate > toDate) return false;
        }
        
        // Filtro por categoría
        if (currentSalesCategory && product.category !== currentSalesCategory) {
            return false;
        }
        
        return true;
    });
    
    // Ordenar productos
    sortSales();
    
    // Actualizar la interfaz
    updateSalesSummary();
    displaySalesList();
    updateCategoryStats();
}

// Función para ordenar las ventas
function sortSales() {
    filteredSales.sort((a, b) => {
        switch (currentSalesSort) {
            case 'date':
                return new Date(b.soldDate.split('/').reverse().join('-')) - 
                       new Date(a.soldDate.split('/').reverse().join('-'));
            case 'name':
                return a.name.localeCompare(b.name);
            case 'price':
                return b.price - a.price;
            case 'category':
                return a.category.localeCompare(b.category);
            default:
                return 0;
        }
    });
}

// Función para actualizar el resumen de ventas
function updateSalesSummary() {
    const totalAmount = filteredSales.reduce((sum, product) => sum + product.price, 0);
    const totalItems = filteredSales.length;
    const avgPrice = totalItems > 0 ? totalAmount / totalItems : 0;
    const uniqueCategories = new Set(filteredSales.map(product => product.category)).size;
    
    totalSalesAmount.textContent = `L. ${totalAmount.toLocaleString('es-ES', { minimumFractionDigits: 2 })}`;
    totalItemsSold.textContent = totalItems;
    averagePrice.textContent = `L. ${avgPrice.toLocaleString('es-ES', { minimumFractionDigits: 2 })}`;
    categoriesCount.textContent = uniqueCategories;
}

// Función para mostrar la lista de ventas
function displaySalesList() {
    if (filteredSales.length === 0) {
        salesList.style.display = 'none';
        noSales.style.display = 'block';
        return;
    }
    
    salesList.style.display = 'block';
    noSales.style.display = 'none';
    
    salesList.innerHTML = filteredSales.map(product => `
        <div class="sale-item">
            <div class="sale-image-container">
                <img src="${getProductImageUrl(product)}" alt="${product.name}" class="sale-image" 
                     onerror="this.src='https://dummyimage.com/600x400/fff/000.png&text=no+disponible'">
            </div>
            <div class="sale-info">
                <h4 class="sale-product-name">${product.name}</h4>
                <div class="sale-details">
                    <span class="sale-category">${product.category}</span>
                    <span class="sale-brand">${product.brand}</span>
                    <span class="sale-code">${product.code}</span>
                </div>
            </div>
            <div class="sale-price-info">
                <div class="sale-price">L. ${product.price.toLocaleString('es-ES', { minimumFractionDigits: 2 })}</div>
                <div class="sale-date">${product.soldDate} ${product.soldTime}</div>
            </div>
        </div>
    `).join('');
}

// Función para actualizar estadísticas por categoría
function updateCategoryStats() {
    const categoryData = {};
    
    filteredSales.forEach(product => {
        if (!categoryData[product.category]) {
            categoryData[product.category] = {
                count: 0,
                total: 0
            };
        }
        categoryData[product.category].count++;
        categoryData[product.category].total += product.price;
    });
    
    const sortedCategories = Object.entries(categoryData)
        .sort(([,a], [,b]) => b.total - a.total);
    
    categoryStats.innerHTML = sortedCategories.map(([category, data]) => `
        <div class="category-stat">
            <div class="category-name">${category}</div>
            <div class="category-values">
                <div class="category-count">${data.count} productos</div>
                <div class="category-total">L. ${data.total.toLocaleString('es-ES', { minimumFractionDigits: 2 })}</div>
            </div>
        </div>
    `).join('');
}

// Función para limpiar todas las ventas
function clearAllSalesData() {
    if (soldProducts.length === 0) {
        showNotification('📦 No hay ventas para limpiar');
        return;
    }
    
    if (confirm('¿Estás seguro de que quieres eliminar TODAS las ventas? Esta acción no se puede deshacer.')) {
        // Restaurar stock de todos los productos vendidos
        soldProducts.forEach(soldProduct => {
            const originalProduct = productsData.find(p => p.id === soldProduct.id);
            if (originalProduct) {
                originalProduct.stock++;
            }
        });
        
        // Limpiar array de productos vendidos
        soldProducts = [];
        
        // Guardar cambios
        saveSoldProducts();
        
        // Actualizar la interfaz
        loadAndDisplaySales();
        
        showNotification('🗑️ Todas las ventas han sido eliminadas');
    }
}

// Función para exportar reporte de ventas
function exportSalesReport() {
    if (filteredSales.length === 0) {
        showNotification('📊 No hay datos para exportar');
        return;
    }
    
    // Crear contenido del reporte
    const reportData = {
        fechaGeneracion: new Date().toLocaleString('es-ES'),
        resumen: {
            totalVendido: filteredSales.reduce((sum, product) => sum + product.price, 0),
            totalProductos: filteredSales.length,
            precioPromedio: filteredSales.length > 0 ? 
                filteredSales.reduce((sum, product) => sum + product.price, 0) / filteredSales.length : 0,
            categorias: new Set(filteredSales.map(product => product.category)).size
        },
        ventas: filteredSales.map(product => ({
            nombre: product.name,
            categoria: product.category,
            marca: product.brand,
            codigo: product.code,
            precio: product.price,
            fechaVenta: product.soldDate,
            horaVenta: product.soldTime
        })),
        resumenPorCategoria: {}
    };
    
    // Calcular resumen por categoría
    const categoryData = {};
    filteredSales.forEach(product => {
        if (!categoryData[product.category]) {
            categoryData[product.category] = { count: 0, total: 0 };
        }
        categoryData[product.category].count++;
        categoryData[product.category].total += product.price;
    });
    reportData.resumenPorCategoria = categoryData;
    
    // Crear y descargar archivo JSON
    const dataStr = JSON.stringify(reportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `reporte-ventas-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showNotification('📊 Reporte exportado exitosamente');
}

// Función para cargar y mostrar ventas
function loadAndDisplaySales() {
    // Cargar productos vendidos desde localStorage
    loadSoldProducts();
    
    // Aplicar filtros actuales
    applyFilters();
}

// Función para mostrar notificaciones (reutilizada del script principal)
function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        font-weight: 600;
        max-width: 300px;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    // Agregar estilos de animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remover notificación después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}
