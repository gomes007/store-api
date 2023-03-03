import Sale from "../model/sale.model.js";
import Product from "../model/product.model.js";
import Client from "../model/client.model.js";

async function insertSale(sale) {
  try {
    return await Sale.create(sale);
  } catch (err) {
    throw err;
  }
}

async function getSalesByProductId(productId) {
  try {
    return await Sale.findAll({
      where: {
        id: productId,
      },
      include: [
        {
          model: Product,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}


async function getSalesBySupplierId(supplierId) {
  try {
    return await Sale.findAll({
      where: {
        supplierId: supplierId,
      },
      include: [
        {
          model: Product,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getSales() {
  try {
    return await Sale.findAll({
      include: [
        {
          model: Product,
        },
        {
          model: Client,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getSale(id) {
  try {
    return await Sale.findByPk(id, {
      include: [
        {
          model: Product,
        },
        {
          model: Client,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function updateSale(id, sale) {
  try {
    const saleFound = await Sale.findByPk(id);

    if (!saleFound) {
      return null;
    }

    return await saleFound.update(sale);
  } catch (err) {
    throw err;
  }
}

async function deleteSale(id) {
  try {
    const saleFound = await Sale.findByPk(id);

    if (!saleFound) {
      return null;
    }

    return await saleFound.destroy();
  } catch (err) {
    throw err;
  }
}

export default {
  insertSale,
  getSales,
  getSale,
  updateSale,
  deleteSale,
  getSalesByProductId,
  getSalesBySupplierId,
};
