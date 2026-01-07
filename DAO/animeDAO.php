<?php
require_once __DIR__ . '/conexao.php';

class AnimeDAO {

    public function listarCategorias() {
        $conn = Conexao::conectar();

        $sql = "
            SELECT 
                nome,
                imagem_url
            FROM anime
        ";

        $stmt = $conn->prepare($sql);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}