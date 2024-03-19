package br.com.criandoapi.projeto.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name= "usuario")
public class Usuario {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idUsuario")
    private Integer idUsuario;
    
    @NotBlank(message = "O cpf é obrigatório!")
    @Column(name = "cpf", length = 11)
    private String cpf;
    
    @NotBlank(message = "O nome é obrigatório!")
    @Column(name = "nome", length = 100, nullable = false)
    private String nome;
    
    @NotBlank(message = "O endereco é obrigatório!")
    @Column(name = "endereco", length = 100, nullable = false)
    private String endereco;
    
    @NotBlank(message = "O telefone é obrigatório!")
    @Column(name = "telefone", length = 20, nullable = false)
    private String telefone;
    
    @NotBlank(message = "O email é obrigatório!")
    @Column(name = "email", length = 320, nullable = false)
    private String email;
    
    @NotBlank(message = "O senha é obrigatório!")
    @Column(name = "senha", length = 255, nullable = false)
    private String senha;
    

    
    
    public Integer getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Integer idUsuario) {
        this.idUsuario = idUsuario;
    }
    
    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    
    
}
