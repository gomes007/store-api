import Client from "../model/client.model.js";


async function insertClient(client) {
  try {
    return await Client.create(client);
  } catch (error) {
    throw error;
  }
}

async function getClients() {
  try {
    return await Client.findAll();
  } catch (error) {
    throw error;
  }
}


async function getClientBySaleId(id) {
  try {
    return await Client.findAll({
      where: {
        sale_id: id
      }
    });
  } catch (error) {
    throw error;
  }
}

async function getClient(id) {
  try {
    return await Client.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function deleteClient(id) {
  try {
    return await Client.destroy({ where: { id: id } });
  } catch (error) {
    throw error;
  }
}

async function updateClient(client) {
  try {
    await Client.update(client, { where: { id: client.client_id } });
    return await getClient(client.client_id);
  } catch (error) {
    throw error;
  }
}




export default {
  insertClient,
  getClients,
  getClient,
  deleteClient,
  updateClient,
  getClientBySaleId
};
