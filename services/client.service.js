import clientRepository from "../repositories/client.repository.js";

async function createClient(client){
    return await clientRepository.insertClient(client);
}

async function getClients(){
    return await clientRepository.getClients();
}

async function getClient(id){
    return await clientRepository.getClient(id);
}

async function getClientBySaleId(id){
    return await clientRepository.getClientBySaleId(id);
}

async function deleteClient(id){
    return await clientRepository.deleteClient(id);
}

async function updateClient(id, client){
    return await clientRepository.updateClient(id, client);
}

export default {
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient,
 };
