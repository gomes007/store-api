import supplierRepository from '../repositories/supplier.repository.js';

async function createSupplier(suplier){
    return await supplierRepository.insertSupplier(suplier);
}

async function getSuppliers(){
    return await supplierRepository.getSuppliers();
}

async function getSupplier(id){
    return await supplierRepository.getSupplier(id);
}

async function deleteSupplier(id){
    return await supplierRepository.deleteSupplier(id);
}

async function updateSupplier(id, suplier){
    return await supplierRepository.updateSupplier(id, suplier);
}

export default {
    createSupplier,
    getSuppliers,
    getSupplier,
    deleteSupplier,
    updateSupplier,
 };