package br.com.criandoapi.projeto.DAO;

import br.com.criandoapi.projeto.entity.Pedido;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPedido extends JpaRepository<Pedido, Integer> {

    public Pedido save(Optional<Pedido> pedidoExistente);
    
}
