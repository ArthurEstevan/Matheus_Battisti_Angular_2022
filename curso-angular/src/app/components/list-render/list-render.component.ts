import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

// Primeiro sempre importamos nosso serviço antes de usalo
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  // Visto que na ultima aula aprendemos como criar uma lista
  // aqui apenas tranasformamos ela de acordo com nossa interface
  // deixando o código mais limpo e facil de entender
  animals: Animal[] = []
  animalDetails!: number;

  // Segundo declaramos ele em nosso construtor assim tendo acesso a Classe
  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getAnimals();
  }

  // apenas criando uma função para mostrar idade que foi implementada nova
  showAge(param: Animal): void {
    this.animalDetails = param.age;
  }

  // apenas criando uma função para remover um animal da minha lista
  // usando a função remove do meu service eu atualizo minha lista de animais
  removeAnimal(param: Animal): void {
    this.animals = this.listService.remove(this.animals, param);
  }

  getAnimals(): void {
    // subscribe diz que o evento será concretizado 
    // de uma forma que ele espera esse vento para realizar algo
    // dentro dele eu posso fazer alterações nas minhas variaveis

    // subscribe chama o returno do meu Observable no meu service
    // então por meio de uma função eu atribuo valor a minha lista de animais
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
