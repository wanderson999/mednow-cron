// =============================================
// ARQUIVO: index.js
// FINALIDADE: Chamador do Scheduler do MedNow
// Roda via GitHub Actions a cada 1 minuto
// =============================================

import fetch from "node-fetch";

const URL = "https://mednow-one.vercel.app/api/scheduler/alarme";

async function executar() {
  console.log("⏱️ Executando cron...");

  try {
    const resposta = await fetch(URL);

    const texto = await resposta.text();
    console.log("📨 Resposta:", texto);

  } catch (erro) {
    console.error("❌ Erro ao chamar scheduler:", erro);
  }
}

executar();
