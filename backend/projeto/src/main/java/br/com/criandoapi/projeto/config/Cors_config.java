package br.com.criandoapi.projeto.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class Cors_config {
    
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true); // Permitir credenciais
        // Listar origens permitidas explicitamente
        config.addAllowedOrigin("http://localhost:8080/usuarios");
        config.addAllowedOrigin("http://localhost:8080/produtos");
        config.addAllowedOrigin("http://127.0.0.1:5500");
        config.addAllowedOrigin("http://127.0.0.1:5500/index.html");
        config.addAllowedOrigin("http://127.0.0.1:5500/cadastroUsuarios.html");
        // Adicionar cabeçalhos e métodos permitidos conforme necessário
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
