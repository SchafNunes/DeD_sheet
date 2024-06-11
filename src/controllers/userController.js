import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import User from "../models/User";

const getAll = async (req, res) => {
  try {
    const users = await User.findAll(); 
    return res.status(200).send({
      type: "success", 
      message: "Usuarios consultados com sucesso",
      data: users,
    });
  } catch (err) {
    return res.status(500).send({
      type: "error",
      message: "Erro ao buscar usuarios",
      data: err,
    });
  }
};

const create = async (req, res) => {
  try {
    let { password, username } = req.body;
    let passwordHash = await bcrypt.hash(password, 10);
    let createUser = {
      username: username,
      passwordHash: passwordHash,
    };
    console.log(`A senha informada foi password: ${password}, e o hash criado foi password: ${passwordHash}`);

    let response = await User.create(createUser);
    return res.status(200).send({
      type: "success",
      message: "Registrado com sucesso",
      data: response,
    });
  } catch (error) {
    return res.status(500).send({
      type: "error",
      message: "Erro ao registrar usuário",
      data: error,
    });
  }
};

const login = async (req, res) => {
  try {
    let { password, username } = req.body;

    let usuario = await User.findOne({
      where: { username: username },
    });

    if (!usuario) {
      return res.status(200).send({
        type: "error", 
        message: "Usuario não encontrado",
      });
    }

    if (await bcrypt.compare(password, usuario.dataValues.passwordHash.toString())) {
      let token = jwt.sign({ username }, process.env.PRIVATE_KEY, { expiresIn: '5m' }); // Corrigir expiresIn para 5 minutos

      usuario.set({
        token: token,
      });

      await usuario.save();

      return res.status(200).send({
        type: "success", 
        message: "Login efetuado com sucesso",
        token: usuario.token,
      });
    } else {
      return res.status(200).send({
        type: "error",
        message: "Senha inválida",
      });
    }
  } catch (error) {
    return res.status(500).send({
      type: "error",
      message: error.message,
    });
  }
};

export default {
  getAll,
  create,
  login,
};