package br.com.criandoapi.projeto.DAO;

import br.com.criandoapi.projeto.entity.Produto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProduto extends JpaRepository<Produto, Integer>{
    List<Produto> findByCategoria(String categoria);
    
}
