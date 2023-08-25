package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final ProductoRepository repoA;
	private final CategoriaRepository repoB;

	@Autowired
	public DatabaseLoader(
		ProductoRepository repoA,
		CategoriaRepository repoB
		) {
		this.repoA=repoA;
		this.repoB=repoB;
	}

	@Override
	public void run(String... strings) throws Exception {
		Categoria gas=new Categoria("Gaseosa");
		Categoria hogar=new Categoria("Casa");
		this.repoB.save(gas);
		this.repoB.save(hogar);

		Producto coca=new Producto("CocaCola", gas);
		Producto puerta=new Producto("Puerta", hogar);
		this.repoA.save(coca);
		this.repoA.save(puerta);

	}
}