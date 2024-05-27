import { sequelize } from "../config/index";
import { Op } from "sequelize";
import  jwt  from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import Usuario from "../models/User";


const validate = async (req, res, next) => {
  let { username } = req.body;
  let dataBase =  await Usuario.findOne({
    where: { username: username },
  });

  if (!dataBase){
    return res.status(200).send({
      type: "error",
      message: "Usuario invalido",
    })
  }

  if(!dataBase.dataValues.token){
    return res.status(200).send({
      type: "error",
      message: "Acesso Recusado faça login antes",
    })
  }

  let tokenBroked = await jwt.decode(dataBase.dataValues.token)
  
  if(tokenBroked.exp < Date.now()/1000) {
    return res.status(200).send({
      type: "error",
      message: "Acesso Recusado, token expirado",
    })
  }
  next()
}

export default {
  validate
}