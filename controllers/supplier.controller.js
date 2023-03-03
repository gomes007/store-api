import supplierService from "../services/supplier.service.js";

async function createSupplier(req, res, next) {
  try {
    let suplier = req.body;
    if (
      !suplier.name ||
      !suplier.cnpj ||
      !suplier.phone ||
      !suplier.email ||
      !suplier.address
    ) {
      throw new Error("all fields are required");
    }
    res.send(await supplierService.createSupplier(suplier));
    logger.info(`POST /suplier - ${JSON.stringify(suplier)}`);
  } catch (err) {
    next(err);
  }
}

async function getSuppliers(req, res, next) {
  try {
    res.send(await supplierService.getSuppliers());
    logger.info(`GET /suplier`);
  } catch (err) {
    next(err);
  }
}

async function getSupplier(req, res, next) {
  try {
    res.send(await supplierService.getSupplier(req.params.id));
    logger.info(`GET /suplier/${req.params.id}`);
  } catch (err) {
    next(err);
  }
}


async function deleteSupplier(req, res, next) {
  try {
    res.send(await supplierService.deleteSupplier(req.params.id));
    logger.info(`DELETE /suplier/${req.params.id}`);
  } catch (err) {
    next(err);
  }
}

async function updateSupplier(req, res, next) {
  try {
    let suplier = req.body;
    if (
      !suplier.name ||
      !suplier.cnpj ||
      !suplier.phone ||
      !suplier.email ||
      !suplier.address
    ) {
      throw new Error("all fields are required");
    }
    suplier.suplier_id = req.params.id;
    res.send(await supplierService.updateSupplier(suplier));
    logger.info(`PUT /suplier - ${JSON.stringify(suplier)}`);
  } catch (err) {
    next(err);
  }
}



export default {
  createSupplier,
  getSuppliers,
  getSupplier,
  deleteSupplier,
  updateSupplier,
};
