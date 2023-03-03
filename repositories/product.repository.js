import Product from "../model/product.model.js";



async function insertProduct(product) {
  try {
    return await Product.create(product);
  } catch (error) {
    throw error;
  }
}

async function getProducts() {
  try {
    return await Product.findAll();
  } catch (error) {
    throw error;
  }
}

async function getProduct(id) {
  try {
    return await Product.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function deleteProduct(id) {
  try {
    return await Product.destroy({ where: { id: id } });
  } catch (error) {
    throw error;
  }
}

async function updateProduct(product) {
  try {
    await Product.update(product, { where: { id: product.product_id } });
    return await getProduct(product.product_id);
  } catch (error) {
    throw error;
  }
}




export default {
  insertProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
