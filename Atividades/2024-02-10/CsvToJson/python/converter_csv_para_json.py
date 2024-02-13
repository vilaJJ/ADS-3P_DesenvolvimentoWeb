'''
Instituto Federal do Tocantins - Campus Araguaína
10 de fevereiro de 2024, sábado.
Alunos: Beatriz Coelho dos Santos, Juan Felipe Alves Flores, Vínicius Rodrigues Zerbini
Professor: Iury Gomes de Oliveira
Curso: Análise e Desenvolvimento de Sistemas
Disciplina: Desenvolvimento Web
Período: 3º

OBS: Realize a execução do arquivo Python com o terminal dentro da pasta CsvToJson/python, para que o diretório relativo funcione corretamente.
'''

import csv
import json

# Classe com métodos de conversão
class ConverterCsvParaJson:
    # Construtor
    def __init__(self) -> None:
        pass

    # Método de conversão de CSV para JSON
    def realizarConversao(self, diretorioCsv, diretorioJson):
        # Armazena os dados convertidos
        data = []

        # Abertura do arquivo CSV em modo 'Leitura'
        with open(diretorioCsv, 'r', encoding='utf-8') as arquivoCsv:
            # Leitura do arquivo CSV
            leitorCsv = csv.DictReader(arquivoCsv)

            # Incrementa as informações do CSV no array 'data'
            for item in leitorCsv:
                data.append(item)
        
        # Abertura do arquivo JSON em modo 'Escrita'
        with open(diretorioJson, 'w', encoding='utf-8') as arquivoJson:
            # Escreve os dados do CSV no JSON
            json.dump(data, arquivoJson, indent=4, ensure_ascii=False)
        
        print("Conversão CSV -> JSON realizada com sucesso!")

# Instância da classe de conversão
conversor = ConverterCsvParaJson()

# Diretório dos arquivos CSV e JSON
diretorioCsv = '../csv/artes.csv'
diretorioJson = '../json/artes.json'

# Realiza a chamada do método de conversão
conversor.realizarConversao(diretorioCsv, diretorioJson)