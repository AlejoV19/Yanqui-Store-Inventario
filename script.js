
/*
=== CÓMO AGREGAR IMÁGENES A LOS PRODUCTOS ===

Para agregar una imagen a un producto, simplemente agrega la propiedad 'image' con la URL:

Ejemplo:
{ id: 1, name: "Termos - Adidas", price: 450.00, stock: 3, category: "Accesorios", brand: "Adidas", code: "TER001", image: "https://ejemplo.com/imagen.jpg" },

Si no se especifica 'image', se usará un placeholder automático basado en la categoría.

*/

// Datos de productos predefinidos
const productsData = [
    { id: 1, name: "Termos - Adidas", price: 450.00, stock: 3, category: "Accesorios", brand: "Adidas", code: "TER001", image: "https://images-cdn.ubuy.co.in/652238c61f4aaf70f949e88c-adidas-steel-metal-bottle-1l-new.jpg" },
    { id: 2, name: "Gorra negra Adidas", price: 450.00, stock: 1, category: "Accesorios", brand: "Adidas", code: "GOR001", image: "https://m.media-amazon.com/images/I/51qDZR-8eIL._SY350_.jpg" },
    { id: 3, name: "Gorra Yankees", price: 550.00, stock: 1, category: "Accesorios", brand: "Yankees", code: "GOR002", image: "https://m.media-amazon.com/images/I/51+8OFrgCHL._AC_SL1000_.jpg" },
    { id: 4, name: "Lonchera de Mario Bros.", price: 400.00, stock: 1, category: "Accesorios", brand: "Nintendo", code: "LON001", image: "https://chenson.com.mx/cdn/shop/files/bc842d63-b1c2-455e-944e-160d473a3553_800x.jpg?v=1717198841" },
    { id: 5, name: "Lonchera de Jessica Simpson", price: 500.00, stock: 1, category: "Accesorios", brand: "Jessica Simpson", code: "LON002", image: "https://m.media-amazon.com/images/I/71vkCxDsidL._UF894,1000_QL80_.jpg" },
    { id: 6, name: "Calzoncillo Calvin / Paq. 3", price: 650.00, stock: 1, category: "Ropa Interior", brand: "Calvin Klein", code: "CAL001", image: "https://resources.claroshop.com/medios-plazavip/mkt/65a85b8422b0d_c2265c42-2511-4d56-905c-df708a14e311png.jpg" },
    { id: 7, name: "Calzoncillo Nautica / Paq. 4", price: 580.00, stock: 1, category: "Ropa Interior", brand: "Nautica", code: "CAL002", image: "https://nautica.com.pa/cdn/shop/files/39Y6040401_02531__1_f98d0981-a48a-42d5-aa1f-63447dbeeaaa.jpg?v=1712076793"},
    { id: 8, name: "Calzoncillo Nike / Paq. 3", price: 700.00, stock: 1, category: "Ropa Interior", brand: "Nike", code: "CAL003", image:"https://i.ebayimg.com/thumbs/images/g/uy4AAOSwIHhnh-rl/s-l1200.jpg" },
    { id: 9, name: "Mochila de Bluey con ruedita", price: 900.00, stock: 1, category: "Accesorios", brand: "Bluey", code: "MOC001", image:"https://m.media-amazon.com/images/I/71NpvGkVc4L._UY1000_.jpg" },
    { id: 10, name: "Bote Adidas negro", price: 320.00, stock: 1, category: "Accesorios", brand: "Adidas", code: "BOT001", image:"" },
    { id: 11, name: "Bote beige", price: 320.00, stock: 1, category: "Accesorios", brand: "Genérico", code: "BOT002", image:"https://hydrapeak.com/cdn/shop/files/HP-32oz-Nomad-StoneFRONT_15d636e2-35a2-419d-b341-5855d071d7d3.png?v=1715430069&width=533" },
    { id: 12, name: "Bote morado", price: 320.00, stock: 1, category: "Accesorios", brand: "Genérico", code: "BOT003", image:"" },
    { id: 13, name: "Bote rosado", price: 320.00, stock: 1, category: "Accesorios", brand: "Genérico", code: "BOT004", image:"" },
    { id: 14, name: "Tenis Puma - blanco - Talla 8", price: 2300.00, stock: 1, category: "Calzado", brand: "Puma", code: "TEN001", image:"" },
    { id: 15, name: "Tenis Puma - Rosado - Talla 9", price: 2300.00, stock: 1, category: "Calzado", brand: "Puma", code: "TEN002", image:"" },
    { id: 16, name: "Tenis Reebok - Talla 9", price: 2500.00, stock: 1, category: "Calzado", brand: "Reebok", code: "TEN003", image:"" },
    { id: 17, name: "Vestido Rayado Rojo", price: 1200.00, stock: 1, category: "Ropa Mujer", brand: "Genérico", code: "VES001", image:"" },
    { id: 18, name: "Vestido Fusia con blanco", price: 1100.00, stock: 1, category: "Ropa Mujer", brand: "Genérico", code: "VES002", image:"" },
    { id: 19, name: "Falda de flores", price: 980.00, stock: 1, category: "Ropa Mujer", brand: "Genérico", code: "FAL001", image:"" },
    { id: 20, name: "Camisas rayadas azules", price: 750.00, stock: 2, category: "Ropa Hombre", brand: "Genérico", code: "CAM001", image:"" },
    { id: 21, name: "Camisa de moños azul con blanco", price: 850.00, stock: 1, category: "Ropa Hombre", brand: "Genérico", code: "CAM002", image:"" },
    { id: 22, name: "Camisa de tigre amarilla", price: 720.00, stock: 1, category: "Ropa Hombre", brand: "Genérico", code: "CAM003", image:"" },
    { id: 23, name: "Desinfectantes", price: 220.00, stock: 4, category: "Cuidado Personal", brand: "Genérico", code: "DES001", image:"" },
    { id: 24, name: "Vaselina", price: 180.00, stock: 1, category: "Cuidado Personal", brand: "Genérico", code: "VAS001", image:"" },
    { id: 25, name: "Loreal Vitalive", price: 650.00, stock: 1, category: "Cuidado Personal", brand: "L'Oreal", code: "LOR001", image:"" },
    { id: 26, name: "Retinol colageno Loreal", price: 900.00, stock: 1, category: "Cuidado Personal", brand: "L'Oreal", code: "LOR002", image:"" },
    { id: 27, name: "Delfanti Milano", price: 520.00, stock: 1, category: "Cuidado Personal", brand: "Delfanti", code: "DEL001", image:"" },
    { id: 28, name: "Progenix", price: 780.00, stock: 1, category: "Cuidado Personal", brand: "Progenix", code: "PRO001", image:"" },
    { id: 29, name: "Colageno retinol suero", price: 1050.00, stock: 1, category: "Cuidado Personal", brand: "Genérico", code: "COL001", image:"" },
    { id: 30, name: "Vitamina C", price: 420.00, stock: 1, category: "Cuidado Personal", brand: "Genérico", code: "VIT001" },
    { id: 31, name: "Goli complete Multi-Gommies", price: 580.00, stock: 1, category: "Cuidado Personal", brand: "Goli", code: "GOL001" },
    { id: 32, name: "Colageno Gommies", price: 650.00, stock: 1, category: "Cuidado Personal", brand: "Goli", code: "GOL002" },
    { id: 33, name: "Ashawanda-Gommies", price: 700.00, stock: 1, category: "Cuidado Personal", brand: "Goli", code: "GOL003", image: "https://healthysociety.mx/cdn/shop/files/10128c6a-86fe-49df-81e1-e216e3619e23.6ca064b1072c1af78b5c439d423f5b23.png?v=1748723052" },
    { id: 34, name: "Gorra GAP negra", price: 540.00, stock: 1, category: "Accesorios", brand: "GAP", code: "GOR003" },
    { id: 35, name: "Gorra GAP blanca", price: 540.00, stock: 1, category: "Accesorios", brand: "GAP", code: "GOR004" },
    { id: 36, name: "Gorra Gap - P", price: 480.00, stock: 1, category: "Accesorios", brand: "GAP", code: "GOR005" },
    { id: 37, name: "Camisa mujer Fusia talla L", price: 920.00, stock: 1, category: "Ropa Mujer", brand: "Genérico", code: "CAM004" },
    { id: 38, name: "Camisa mujer Vino talla M", price: 920.00, stock: 1, category: "Ropa Mujer", brand: "Genérico", code: "CAM005" },
    { id: 39, name: "Camisa Amarilla de mujer Talla L", price: 870.00, stock: 1, category: "Ropa Mujer", brand: "Genérico", code: "CAM006" },
    { id: 40, name: "Camisa de mujer beige talla XL", price: 950.00, stock: 1, category: "Ropa Mujer", brand: "Genérico", code: "CAM007" },
    { id: 41, name: "Camisa Polo naranja Talla M", price: 1100.00, stock: 1, category: "Ropa Hombre", brand: "Genérico", code: "CAM008" },
    { id: 42, name: "Camisa Polo gris Talla - L", price: 1100.00, stock: 1, category: "Ropa Hombre", brand: "Genérico", code: "CAM009" },
    { id: 43, name: "Camisa polo beige Talla - L", price: 1100.00, stock: 1, category: "Ropa Hombre", brand: "Genérico", code: "CAM010" },
    { id: 44, name: "Sandalia negra 7", price: 1000.00, stock: 1, category: "Calzado", brand: "Genérico", code: "SAN001" },
    { id: 45, name: "Sandalia verde 7", price: 1000.00, stock: 1, category: "Calzado", brand: "Genérico", code: "SAN002" },
    { id: 46, name: "Sandalia blanca 7", price: 1000.00, stock: 1, category: "Calzado", brand: "Genérico", code: "SAN003" },
    { id: 47, name: "Sandalia gris 8", price: 1000.00, stock: 1, category: "Calzado", brand: "Genérico", code: "SAN004" },
    { id: 48, name: "Sandalia fusia 8", price: 1000.00, stock: 1, category: "Calzado", brand: "Genérico", code: "SAN005" },
    { id: 49, name: "Sandalia Rosa vieja 8", price: 1000.00, stock: 1, category: "Calzado", brand: "Genérico", code: "SAN006" },
    { id: 50, name: "Camisa beige Talla - M", price: 720.00, stock: 1, category: "Ropa Hombre", brand: "Genérico", code: "CAM011" },
    { id: 51, name: "Camisa Burgendi Talla - M", price: 720.00, stock: 1, category: "Ropa Hombre", brand: "Genérico", code: "CAM012" },
    { id: 52, name: "Camisa azul con gris Talla -L", price: 720.00, stock: 1, category: "Ropa Hombre", brand: "Genérico", code: "CAM013" },
    { id: 53, name: "Lonchera Nike morada", price: 580.00, stock: 1, category: "Accesorios", brand: "Nike", code: "LON003" },
    { id: 54, name: "Old Navy Mickey", price: 520.00, stock: 2, category: "Ropa Hombre", brand: "Old Navy", code: "OLD001" },
    { id: 55, name: "Old Navy - Rallado", price: 570.00, stock: 1, category: "Ropa Hombre", brand: "Old Navy", code: "OLD002" },
    { id: 56, name: "Camisas Old Navy de mujer", price: 650.00, stock: 5, category: "Ropa Mujer", brand: "Old Navy", code: "OLD003" }
];



// Variables globales
let filteredProducts = [];
let soldProducts = [];
let currentSearchTerm = '';
let currentCategory = '';
let currentSort = 'id';

// Elementos del DOM
const searchSection = document.getElementById('searchSection');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryFilter = document.getElementById('categoryFilter');
const sortBy = document.getElementById('sortBy');
const productsGrid = document.getElementById('productsGrid');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const clearFilters = document.getElementById('clearFilters');
const soldProductsSection = document.getElementById('soldProductsSection');
const soldProductsGrid = document.getElementById('soldProductsGrid');
const noSoldProducts = document.getElementById('noSoldProducts');

// Event listeners
searchInput.addEventListener('input', debounce(handleSearch, 300));
searchBtn.addEventListener('click', handleSearch);
categoryFilter.addEventListener('change', handleCategoryFilter);
sortBy.addEventListener('change', handleSort);
clearFilters.addEventListener('click', clearAllFilters);

// Función debounce para optimizar la búsqueda
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}




// Función para inicializar la aplicación
function initializeApp() {
    // Inicializar la interfaz
    initializeInterface();
    
    // Cargar productos vendidos guardados
    loadSoldProducts();
    
    filteredProducts = [...productsData];
    displayProducts();
    updateResultsCount();
    displaySoldProducts();
    
    // Configurar el botón de regresar al principio
    window.addEventListener('scroll', toggleBackToTopButton);
}

// Función para inicializar la interfaz
function initializeInterface() {
    // Llenar el filtro de categorías
    const categories = [...new Set(productsData.map(product => product.category))];
    categoryFilter.innerHTML = '<option value="">Todas las categorías</option>';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// Función para manejar la búsqueda
function handleSearch() {
    currentSearchTerm = searchInput.value.toLowerCase().trim();
    
    // Si la búsqueda está vacía, mostrar todos los productos
    if (!currentSearchTerm) {
        filteredProducts = [...productsData];
        applyFilters();
        return;
    }
    
    // Aplicar filtros con la búsqueda
    applyFilters();
    
    // Mostrar mensaje si no hay resultados
    if (filteredProducts.length === 0) {
        showNoResultsMessage();
    }
}

// Función para mostrar mensaje cuando no hay resultados
function showNoResultsMessage() {
    productsGrid.innerHTML = `
        <div class="no-results">
            <div class="no-results-content">
                <div class="no-results-icon">🔍</div>
                <h3>No se encontraron productos</h3>
                <p>No hay productos que coincidan con "${currentSearchTerm}"</p>
                <p>Intenta con otros términos de búsqueda o ajusta los filtros</p>
            </div>
        </div>
    `;
    productsGrid.style.display = 'block';
}

// Función para manejar el filtro de categoría
function handleCategoryFilter() {
    currentCategory = categoryFilter.value;
    applyFilters();
}

// Función para manejar el ordenamiento
function handleSort() {
    currentSort = sortBy.value;
    applyFilters();
}

// Función para aplicar todos los filtros
function applyFilters() {
    filteredProducts = productsData.filter(product => {
        // Filtro de búsqueda
        const matchesSearch = !currentSearchTerm || 
            product.name.toLowerCase().includes(currentSearchTerm) ||
            product.code.toLowerCase().includes(currentSearchTerm) ||
            product.brand.toLowerCase().includes(currentSearchTerm) ||
            product.category.toLowerCase().includes(currentSearchTerm);
        
        // Filtro de categoría
        const matchesCategory = !currentCategory || product.category === currentCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    // Ordenar los resultados
    sortProducts();
    
    // Mostrar resultados
    displayProducts();
    updateResultsCount();
}

// Función para ordenar productos
function sortProducts() {
    filteredProducts.sort((a, b) => {
        switch (currentSort) {
            case 'id':
                return a.id - b.id; // ID ascendente
            case 'name':
                return a.name.localeCompare(b.name);
            case 'price':
                return b.price - a.price; // Precio descendente
            case 'stock':
                // Primero por stock (descendente), luego por nombre (ascendente)
                if (b.stock !== a.stock) {
                    return b.stock - a.stock;
                }
                return a.name.localeCompare(b.name);
            default:
                // Ordenamiento por defecto: ID ascendente
                return a.id - b.id;
        }
    });
}


// Función para generar URL de imagen del producto
function getProductImageUrl(product) {
    // Si el producto tiene una imagen definida, usarla
    if (product.image) {
        return product.image;
    }
    
    // Si no, usar placeholder
    const categoryStyles = {
        'Accesorios': { color: '4CAF50', style: 'accessories' },
        'Ropa Interior': { color: 'FF9800', style: 'underwear' },
        'Calzado': { color: '9C27B0', style: 'shoes' },
        'Ropa Mujer': { color: 'E91E63', style: 'womens-clothing' },
        'Ropa Hombre': { color: '2196F3', style: 'mens-clothing' },
        'Cuidado Personal': { color: '00BCD4', style: 'beauty' }
    };
    
    const style = categoryStyles[product.category] || { color: '607D8B', style: 'product' };
    const imageText = product.name.replace(/[^a-zA-Z0-9\s]/g, '').substring(0, 20);
    
    return `https://via.placeholder.com/300x200/${style.color}/ffffff?text=${encodeURIComponent(imageText)}`;
}



// Función para mostrar productos
function displayProducts() {
    if (filteredProducts.length === 0) {
        // Solo mostrar el mensaje de "no hay resultados" si no hay término de búsqueda
        if (!currentSearchTerm) {
            productsGrid.style.display = 'none';
            noResults.style.display = 'block';
        }
        return;
    }
    
    productsGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image-container">
                <img src="${getProductImageUrl(product)}" alt="${product.name}" class="product-image" 
                     onerror="this.src='https://dummyimage.com/600x400/fff/000.png&text=No+disponible'">
            </div>
            
            <div class="product-header">
                <h3 class="product-name">${product.name}</h3>
                <span class="product-code">${product.code || 'N/A'}</span>
            </div>
            
            <div class="product-details">
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    ${product.brand ? `<span class="product-brand">${product.brand}</span>` : ''}
                </div>
                
                <div class="product-pricing">
                    <span class="product-price">L. ${product.price.toFixed(2)}</span>
                    <span class="product-stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}">
                        ${product.stock > 0 ? `${product.stock} disponibles` : 'Sin stock'}
                    </span>
                </div>
                
                <div class="product-actions">
                    <button class="sell-btn" onclick="markAsSold(${product.id})" ${product.stock <= 0 ? 'disabled' : ''}>
                        ${product.stock > 0 ? '🛒 Marcar como Vendido' : '❌ Sin Stock'}
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Función para actualizar el contador de resultados
function updateResultsCount() {
    const count = filteredProducts.length;
    resultsCount.textContent = `${count} producto${count !== 1 ? 's' : ''} encontrado${count !== 1 ? 's' : ''}`;
}

// Función para limpiar todos los filtros
function clearAllFilters() {
    searchInput.value = '';
    categoryFilter.value = '';
    // No cambiar el sortBy, mantener el ordenamiento actual
    
    currentSearchTerm = '';
    currentCategory = '';
    // No cambiar currentSort, mantener el ordenamiento actual
    
    applyFilters();
}

// Función para limpiar historial de productos vendidos
function clearSoldHistory() {
    if (soldProducts.length === 0) {
        showNotification('📦 No hay productos vendidos para limpiar');
        return;
    }
    
    if (confirm('¿Estás seguro de que quieres limpiar todo el historial de productos vendidos? Esta acción no se puede deshacer.')) {
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
        
        // Actualizar interfaz
        applyFilters();
        displaySoldProducts();
        
        showNotification('🗑️ Historial de productos vendidos limpiado');
    }
}

// Función para marcar un producto como vendido
function markAsSold(productId) {
    const product = productsData.find(p => p.id === productId);
    if (product && product.stock > 0) {
        // Reducir stock
        product.stock--;
        
        // Agregar a productos vendidos
        const soldProduct = {
            ...product,
            soldDate: new Date().toLocaleDateString('es-ES'),
            soldTime: new Date().toLocaleTimeString('es-ES')
        };
        soldProducts.push(soldProduct);
        
        // Guardar en localStorage
        saveSoldProducts();
        
        // Actualizar la interfaz
        applyFilters();
        displaySoldProducts();
        
        // Mostrar notificación
        showNotification(`✅ ${product.name} marcado como vendido y guardado`);
    }
}

// Función para revertir un producto vendido
function revertSoldProduct(productId) {
    const soldProductIndex = soldProducts.findIndex(p => p.id === productId);
    if (soldProductIndex !== -1) {
        const soldProduct = soldProducts[soldProductIndex];
        
        // Encontrar el producto original y restaurar stock
        const originalProduct = productsData.find(p => p.id === productId);
        if (originalProduct) {
            originalProduct.stock++;
        }
        
        // Remover de productos vendidos
        soldProducts.splice(soldProductIndex, 1);
        
        // Guardar cambios en localStorage
        saveSoldProducts();
        
        // Actualizar la interfaz
        applyFilters();
        displaySoldProducts();
        
        // Mostrar notificación
        showNotification(`🔄 ${soldProduct.name} restaurado al inventario y guardado`);
    }
}

// Función para mostrar productos vendidos
function displaySoldProducts() {
    if (soldProducts.length === 0) {
        soldProductsSection.style.display = 'none';
        return;
    }
    
    soldProductsSection.style.display = 'block';
    soldProductsGrid.style.display = 'grid';
    noSoldProducts.style.display = 'none';
    
    soldProductsGrid.innerHTML = soldProducts.map(product => `
        <div class="sold-product-card">
            <div class="sold-product-image-container">
                <img src="${getProductImageUrl(product)}" alt="${product.name}" class="sold-product-image" 
                     onerror="this.src='https://dummyimage.com/600x400/fff/000.png&text=no+disponible'">
            </div>
            
            <div class="sold-product-header">
                <h3 class="sold-product-name">${product.name}</h3>
                <span class="sold-product-code">${product.code || 'N/A'}</span>
            </div>
            
            <div class="sold-product-details">
                <div class="sold-product-info">
                    <span class="sold-product-category">${product.category}</span>
                    ${product.brand ? `<span class="sold-product-brand">${product.brand}</span>` : ''}
                </div>
                
                <div class="sold-product-pricing">
                    <span class="sold-product-price">L. ${product.price.toFixed(2)}</span>
                    <span class="sold-product-date">Vendido: ${product.soldDate} ${product.soldTime}</span>
                </div>
                
                <div class="sold-product-actions">
                    <button class="revert-btn" onclick="revertSoldProduct(${product.id})">
                        🔄 Revertir Venta
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Función para regresar al principio de la página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Función para mostrar/ocultar el botón según el scroll
function toggleBackToTopButton() {
    const backToTopBtn = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
}

// Función para mostrar notificaciones
function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Agregar al body
    document.body.appendChild(notification);
    
    // Mostrar
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Ocultar después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Función para guardar productos vendidos en localStorage
function saveSoldProducts() {
    try {
        localStorage.setItem('soldProducts', JSON.stringify(soldProducts));
        console.log('Productos vendidos guardados en localStorage');
    } catch (error) {
        console.error('Error al guardar productos vendidos:', error);
        showNotification('⚠️ Error al guardar los cambios');
    }
}

// Función para cargar productos vendidos desde localStorage
function loadSoldProducts() {
    try {
        const savedSoldProducts = localStorage.getItem('soldProducts');
        if (savedSoldProducts) {
            soldProducts = JSON.parse(savedSoldProducts);
            
            // Restaurar el stock de los productos vendidos
            soldProducts.forEach(soldProduct => {
                const originalProduct = productsData.find(p => p.id === soldProduct.id);
                if (originalProduct) {
                    // Asegurar que el stock sea 0 para productos vendidos
                    originalProduct.stock = 0;
                }
            });
            
            console.log(`${soldProducts.length} productos vendidos cargados desde localStorage`);
        }
    } catch (error) {
        console.error('Error al cargar productos vendidos:', error);
        soldProducts = [];
        showNotification('⚠️ Error al cargar productos vendidos guardados');
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log('Aplicación de búsqueda de productos cargada');
    // Inicializar la aplicación con los datos predefinidos
    initializeApp();
});


