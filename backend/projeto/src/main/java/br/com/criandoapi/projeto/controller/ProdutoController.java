package br.com.criandoapi.projeto.controller;

import br.com.criandoapi.projeto.DAO.IProduto;
import br.com.criandoapi.projeto.entity.Produto;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {
    
    @Autowired
    private IProduto dao;
    
    @GetMapping
    public List<Produto> listaProdutos () {
        return (List<Produto>) dao.findAll();
    }
    
    @GetMapping("/categoria/{categoria}")
    public List<Produto> listaProdutosPorCategoria(@PathVariable String categoria) {
        return dao.findByCategoria(categoria);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> getProdutoById(@PathVariable Integer id) {
        Optional<Produto> produtoOptional = dao.findById(id);
        if (produtoOptional.isPresent()) {
            return ResponseEntity.ok().body(produtoOptional.get());
        } else {
        return ResponseEntity.notFound().build();
        }
    }
}
