package br.com.criandoapi.projeto.DAO;

import br.com.criandoapi.projeto.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUsuario extends JpaRepository<Usuario, Integer> {
    
}
