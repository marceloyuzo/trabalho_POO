package br.com.criandoapi.projeto.controller;

import br.com.criandoapi.projeto.DAO.IPedido;
import br.com.criandoapi.projeto.entity.Pedido;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pedidos")
public class PedidoController {
    
    @Autowired
    private IPedido dao;
    
    @GetMapping
    public List<Pedido> listaPedidos () {
        return (List<Pedido>) dao.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Pedido> getPedidoById(@PathVariable Integer id) {
        Optional<Pedido> pedidoOptional = dao.findById(id);
        if (pedidoOptional.isPresent()) {
            return ResponseEntity.ok().body(pedidoOptional.get());
        } else {
        return ResponseEntity.notFound().build();
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Pedido> atualizarPedido(@PathVariable Integer id, @Valid @RequestBody Pedido pedidoAtualizado) {
        Optional<Pedido> optionalPedidoExistente = dao.findById(id);
        
        if (optionalPedidoExistente.isPresent()) {
            Pedido pedidoExistente = optionalPedidoExistente.get();
            
            pedidoExistente.setValorTotal(pedidoAtualizado.getValorTotal());
            pedidoExistente.setPrevisaoEntrega(pedidoAtualizado.getPrevisaoEntrega());
            pedidoExistente.setDataCriado(pedidoAtualizado.getDataCriado());
            pedidoExistente.setValorFrete(pedidoAtualizado.getValorFrete());
            pedidoExistente.setFormaPagamento(pedidoAtualizado.getFormaPagamento());
            pedidoExistente.setEstado(pedidoAtualizado.getEstado());
            pedidoExistente.setIdUsuario(pedidoAtualizado.getIdUsuario());
            pedidoExistente.setIdProduto(pedidoAtualizado.getIdProduto());
            
            Pedido pedidoAtualizadoNoBanco = dao.save(pedidoExistente);
            return ResponseEntity.ok(pedidoAtualizadoNoBanco);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping
    public ResponseEntity<Pedido> criarPedido (@Valid @RequestBody Pedido pedido) {
        Pedido pedidoNovo = dao.save(pedido);
        return ResponseEntity.status(201).body(pedidoNovo);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> excluirPedido (@PathVariable Integer id) {
        dao.deleteById(id);
        return ResponseEntity.status(204).build();
    }
    
}
