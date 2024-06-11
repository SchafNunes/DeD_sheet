import { sequelize } from "../config/index";
import { Op } from "sequelize";
import jwt from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";
import * as bcrypt from "bcrypt";
import User from "../models/User";

const validate = async (req, res, next) => {
  try {
    let { username } = req.body;
    let usuario = await User.findOne({
      where: { username },
    });

    if (!usuario) {
      return res.status(200).send({
        type: "error",
        message: "Usuario não encontrado",
      });
    }

    console.log(usuario);

    if (!usuario.dataValues.token) {
      return res.status(200).send({
        type: "error",
        message: "Realize login",
      });
    }

    const token = usuario.dataValues.token;
    console.log(`token: ${token}`);

    let decoded;
    try {
      decoded = jwtDecode(token.toString());
      if (!decoded) {
        throw new Error("Token inválido");
      }
      console.log(`decoded: ${JSON.stringify(decoded)}`);
    } catch (err) {
      console.error(err);
      return res.status(200).send({
        type: "error",
        message: "Token inválido",
      });
    }

    if (decoded.exp < Date.now() / 1000) {
      return res.status(200).send({
        type: "error",
        message: "Acesso Recusado, token expirado",
      });
    }

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      type: "error",
      message: "Ocorreu um erro no servidor",
    });
  }
};

export default {
  validate,
};