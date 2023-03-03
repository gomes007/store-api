import Sequelize from 'sequelize';

const sequelize = new Sequelize('store', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});


// try {
//   await sequelize.authenticate();
//   console.log('Conexão estabelecida com o banco de dados.');
//   await sequelize.sync({ alter: true });
//   console.log('Estrutura do banco de dados sincronizada.');
// } catch (error) {
//   console.error('Erro ao conectar ao banco de dados:', error);
// }

// sincroniza o modelo com o banco de dados (use force lugar alter para criar uma nova tabela)
sequelize.sync({ alter: true }).then(() => {
  console.log('Estrutura do banco de dados sincronizadas.');
}).catch((error) => {
  console.log('Erro ao sincronizar a estrutura do banco de dados.', error);
});

export default sequelize;




