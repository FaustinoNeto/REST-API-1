const User = require('../Models/Categoria');
const yup = require('yup');

class CategoriaController {
  show(req, res) {
    var users = ["Ação", "Aventura", "Romance"]
    return res.status(200).json({
      error: false,
      users
    })
  }

  async store(req, res) {

    /**
     * Validação através do YUP schema
     * Início
     */
    let schema = yup.object().shape({
      nameC: yup.string().required(),
      tipoC: yup.string().email().required(),
      id: yup.string().required()
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({
        error: true,
        message: "Dados inválidos!"
      })
    }

     /**
     * Validação através do YUP schema
     * fim
     */

    /**
     * Validação no banco de dados
     * Verifica se a categoria existe
     */

    let categoriaExist = await Categoria.findOne({ id: req.body.id });
    if(categoriaExist) {
      return res.status(400).json({
        error: true,
        message: "Esta categoria já existe!"
      })
    }

     /**
      * Desestrutuação dos dados da requisição
      */
    const { nameC, tipoC, id } = req.body;

    /**
      * criação da constante data
      */
    

    const dataC = { nameC, tipoC, id };


    /**
      * Inserção no banco de dados 
      */

    await Categoria.create(dataC, (err) => {
      if(err) return res.status(400).json({
          error: true,
          message: "Erro ao tentar inserir categoria no MongoDB"
        })

        return res.status(200).json({
          error: false,
          message: "Categoria Cadastrada com sucesso"
        })
    })
  }
}

module.exports = new CategoriaController();