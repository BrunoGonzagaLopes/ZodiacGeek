<?php
require_once __DIR__ . '/conexao.php';

class FlyersDAO {

    public function listarAtivos() {
        $conn = Conexao::conectar();

        $sql = "
            SELECT 
                descricao,
                imagem_url
            FROM flyes
            WHERE ativo = 1
        ";

        $stmt = $conn->prepare($sql);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}