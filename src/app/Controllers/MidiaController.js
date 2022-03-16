const Midia = require('../Models/Midia');
const yup = require('yup');

class MidiaController {
  show(req, res) {
    var midias = ["Allandin", "Amor de mãe", "Final feliz"]
    return res.status(200).json({
      error: false,
      midias
    })
  }

  async store(req, res) {

    /**
     * Validação através do YUP schema
     * Início
     */
    let schema = yup.object().shape({
      nameM: yup.string().required(),
      tipoM: yup.string().required(),
      ano: yup.string().required(),
      genero: yup.string().required(),
      avaliacao: yup.number().required(),
      idcategoria: yup.number().required()
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({
        error: true,
        message: "Dados inválidos!!"
      })
    }

     /**
     * Validação através do YUP schema
     * fim
     */

    /**
     * Validação no banco de dados
     * Verifica se a mídia existe
     */

    let userExist = await User.findOne({ nameM: req.body.nameM });
    if(userExist) {
      return res.status(400).json({
        error: true,
        message: "Esta mídia já existe!"
      })
    }

     /**
      * Desestrutuação dos dados da requisição
      */
    const { nameM, tipoM, ano, genero, avaliacao, idcategoria } = req.body;

    /**
      * criação da constante data
      */
    

    const dataM = { nameM, tipoM, ano, genero, avaliacao, idcategoria };


    /**
      * Inserção no banco de dados 
      */

    await Midia.create(dataM, (err) => {
      if(err) return res.status(400).json({
          error: true,
          message: "Erro ao tentar inserir mídia no MongoDB"
        })

        return res.status(200).json({
          error: false,
          message: "Mídia Cadastrada com sucesso"
        })
    })
  }
}

module.exports = new MidiaController();