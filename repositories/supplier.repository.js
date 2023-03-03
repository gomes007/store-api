import Supplier from "../model/supplier.model.js";



async function insertSupplier(supplier) {
  try {
    return await Supplier.create(supplier);
  } catch (error) {
    throw error;
  }
}

async function getSuppliers() {
  try {
    return await Supplier.findAll();
  } catch (error) {
    throw error;
  }
}

async function getSupplier(id) {
  try {
    return await Supplier.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function deleteSupplier(id) {
  try {
    return await Supplier.destroy({ where: { id: id } });
  } catch (error) {
    throw error;
  }
}

async function updateSupplier(supplier) {
  try {
    await Supplier.update(supplier, { where: { id: supplier.supplier_id } });
    return await getSupplier(supplier.supplier_id);
  } catch (error) {
    throw error;
  }
}




export default {
  insertSupplier,
  getSuppliers,
  getSupplier,
  deleteSupplier,
  updateSupplier,
};
