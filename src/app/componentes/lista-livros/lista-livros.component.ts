import { Component, OnInit } from '@angular/core';
import { GeneroLiterario, Livro } from '../livro/livro';
import { livros } from '../../mock-livros';
import { GeneroLiterarioComponent } from '../genero-literario/genero-literario.component';

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit{
  generos: GeneroLiterario[] = [];
  livrosPorGenero: Map<string, Livro[]> = new Map();
  ngOnInit() {
      this.livrosPorGenero = new Map();
      livros.forEach((livro) => {
        const generoId = livro.genero.id
        if(!this.livrosPorGenero.has(generoId)){
          this.livrosPorGenero.set(generoId, [])
        }
        this.livrosPorGenero.get(generoId)?.push(livro)
      })
      this.generos = [
        {
        id: 'romance',
        value: "Nostalgia",
        livros: this.livrosPorGenero.get("romance")?? []
        },
        {
        id: 'tecnicos',
        value: "Ação",
        livros: this.livrosPorGenero.get("tecnicos")?? []
        },
        {
        id: 'ficcao-cientifica',
        value: "Terror/Suspense",
        livros: this.livrosPorGenero.get("ficcao-cientifica")?? []
        },
        {
        id: 'fantasia',
        value: "Fantasia",
        livros: this.livrosPorGenero.get("fantasia")?? []
        },
        {
        id: 'misterio',
        value: "Lançamentos",
        livros: this.livrosPorGenero.get("misterio")?? []
        },
      ]
      console.log(this.livrosPorGenero)
  }

}
