const nodemailer = require("nodemailer");
require("dotenv").config();

const user = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});

const sendConfirmationEmail = (name, email, confirmationCode) => {
  console.log("OK!");
  transport
    .sendMail({
      from: transport.auth,
      to: email,
      subject: "Confirme sua conta | agendaí",
      html: `<div>
            <h1>Confirmação de E-mail</h1>
          <h2>Olá, ${name}</h2>
          <p>Obrigado por se registrar no agendaí! Você pode confirmar seu e-mail clicando aqui:</p>
          <a href=http://localhost:3000/confirm/${confirmationCode}>Confirmar e-mail</a>
          </div>`,
    })
    .catch((err) => console.log(err));
};

const sendResetPasswordEmail = (name, email, confirmationCode) => {
  console.log("OK!");
  transport
    .sendMail({
      from: transport.auth,
      to: email,
      subject: "Atualizar Senha | agendaí",
      html: `<div>
          <h1>Atualizar Senha</h1>
          <h2>Olá, ${name}</h2>
          <p>Recebemos sua solicitação para atualizar sua senha.</p>
          <a href=http://localhost:3000/reset-password/${confirmationCode}>Clique aqui para atualizar senha</a>
          </div>`,
    })
    .catch((err) => console.log(err));
};

module.exports = { sendConfirmationEmail, sendResetPasswordEmail };
