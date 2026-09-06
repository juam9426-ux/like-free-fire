"URL_DA_API_AQUI?id=" + encodeURIComponent(id)
export default async function handler(req, res) {
  const id = req.query.id;

  if (!id) {
    return res.status(400).json({
      status: "ERROR",
      message: "Informe o ID da conta."
    });
  }

  try {
    // A API Key ficará protegida na Vercel.
    // NÃO coloque a chave diretamente neste arquivo.
    const apiKey = process.env.FF_SHOP_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        status: "ERROR",
        message: "API Key não configurada no servidor."
      });
    }

    // IMPORTANTE:
    // Aqui precisamos usar o endpoint exato fornecido pela FF Shop.
    // Não invente/modifique a URL.
    const resposta = await fetch(
      "URL_DA_API_AQUI?id=" + encodeURIComponent(id), "URL_DA_API_AQUI?id=" + encodeURIComponent(id)
      {
        headers: {
          "Authorization": "Bearer " + apiKey,
          "Content-Type": "application/json"
        }
      }
    );

    const dados = await resposta.json();

    return res.status(resposta.status).json(dados);

  } catch (erro) {
    return res.status(500).json({
      status: "ERROR",
      message: "Erro ao consultar a API."
    });
  }
}
