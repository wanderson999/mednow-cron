import fetch from "node-fetch";

async function executar() {
  console.log("⏱️ Cron executou:", new Date().toISOString());

  try {
    const resposta = await fetch("https://mednow-one.vercel.app/api/scheduler/alarme");
    const json = await resposta.json();
    console.log("Resposta:", json);
  } catch (e) {
    console.log("❌ Erro ao chamar API:", e);
  }
}

executar();
