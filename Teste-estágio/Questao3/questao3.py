import json

# Ler os dados do arquivo JSON
with open('dadoss.json') as f:
    faturamento = json.load(f)

# Inicializar variáveis
menor_faturamento = float('inf')
maior_faturamento = 0
total_faturado = 0
dias_com_faturamento_acima_da_media = 0

# Calcular o menor e maior faturamento
for dia in faturamento:
    if dia['valor'] > maior_faturamento:
        maior_faturamento = dia['valor']
    if dia['valor'] < menor_faturamento:
        menor_faturamento = dia['valor']

# Calcular a média mensal
dias_uteis = len([dia for dia in faturamento if dia['valor'] > 0])
media_mensal = sum([dia['valor'] for dia in faturamento if dia['valor'] > 0]) / dias_uteis

# Calcular o número de dias com faturamento acima da média mensal
for dia in faturamento:
    if dia['valor'] > media_mensal:
        dias_com_faturamento_acima_da_media += 1

# Imprimir os resultados
print(f"Menor faturamento: R${menor_faturamento:.2f}")
print(f"Maior faturamento: R${maior_faturamento:.2f}")
print(f"Dias com faturamento acima da média: {dias_com_faturamento_acima_da_media}")
