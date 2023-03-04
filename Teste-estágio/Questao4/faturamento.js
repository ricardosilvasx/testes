// Define o valor de faturamento mensal da distribuidora por estado
const faturamento = {
  'SP': 67836.43,
  'RJ': 36678.66,
  'MG': 29229.88,
  'ES': 27165.48,
  'Outros': 19849.53
};

// Calcula o valor total mensal da distribuidora
const total = Object.values(faturamento).reduce((acc, val) => acc + val);

// Calcula e imprime o percentual de representação de cada estado
Object.entries(faturamento).forEach(([estado, valor]) => {
  const percentual = (valor / total) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
});
