import { post } from "axios";
import { toast } from "react-toastify";
export default async function sendMail(e) {
  e.preventDefault();

  let url = "https://apigspacemail.herokuapp.com";
  const name = document.getElementById("nameMail").value;
  const replyTo = document.getElementById("email").value;
  const text = document.getElementById("textMail").value;
  const urlSend = `${url}/send`;
  let config = {
    headers: {
      Authorization: "Send mailer",
    },
  };

  let data = {
    replyTo: replyTo,
    text: text,
  };

  await post(urlSend, data, config)
    .then((response) => {
      toast.success("Envio feito");
      console.log(response.data);
      window.location.reload();
    })
    .catch((error) => {
      alert(error);
    });
}
