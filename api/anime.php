<?php
require_once __DIR__ . '/../DAO/animeDAO.php';

header('Content-Type: application/json; charset=utf-8');

try {
    $dao = new AnimeDAO();
    $dados = $dao->listarCategorias();

    echo json_encode($dados);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode([
        'erro' => 'Erro ao buscar'
    ]);
}