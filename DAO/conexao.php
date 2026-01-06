<?php
class Conexao {
    public static function conectar(): PDO {
        try {
            $conexao = new PDO(
                "mysql:host=127.0.0.1;dbname=zodiacGeek_projeto;charset=utf8",
                "root",
                "root",
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
                ]
            );
            return $conexao;
        } catch (\Throwable $th) {
            print("Erro na conexão com o banco de dados");
            exit;
        }
    
    }
}

