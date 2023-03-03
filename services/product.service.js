import ProductRepository from "../repositories/product.repository.js";
import SupplierRepository from "../repositories/supplier.repository.js";
import SalesRepository from "../repositories/sale.repository.js";

async function createProduct(product) {
    if (await SupplierRepository.getSupplier(product.supplier_id)) {
        return await ProductRepository.insertProduct(product);
    }
    throw new Error("O supplier_id informado não existe.");
}

async function getProducts() {
    return await ProductRepository.getProducts();
}

async function getProduct(id) {
    return await ProductRepository.getProduct(id);
}

async function deleteProduct(id) {
    if (await SalesRepository.getSalesByProductId(id)) {
        throw new Error("O produto não pode ser excluído pois está vinculado a uma venda.");
    }
    await ProductRepository.deleteProduct(id);
}

async function updateProduct(product) {
    if (await SupplierRepository.getSupplier(product.supplier_id)) {        
        return await ProductRepository.updateProduct(product);
    }
    throw new Error("O supplier_id informado não existe.");
}

export default {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}