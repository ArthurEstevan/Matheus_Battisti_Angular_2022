import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

// Para fazer uma requisão HTTP precisamos 
// primeiro usar as Classes que nos dão acesso as requisições
import { HttpClient, HttpHeaders } from '@angular/common/http'

// Faz com que nossa requisição corra da melhor maneira possivel
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ListService {

  // Depois podemos declar nossa url da API
  private apiURL = 'http://localhost:3000/animals'

  constructor(private http: HttpClient) { }

  // essa função exclui um animal da minha lista de animais
  // posso chamar esse service em qualquer lugar que eu queira
  // ou seja o service facilita em lógicas usadas com frequencia como CRUDS e etc...
  remove( id: number ) {

    // primeiro eu filtro minha lista de animais
    // usando um foreach
    // onde o animal.name for diferente de a.name vai excluir
    // sempre será diferente isso que faz a lógica ter sentindo

    // não estou observando nada então posso apena chamar o delete na minha url do banco de dados
    return this.http.delete<Animal>(`${this.apiURL}/${id}`)
  }

  // Observable<Animal[]> vai observar se ocorre tudo certo na requisição
  getAll(): Observable<Animal[]> {
    // get<Animal[]> porque é um padrão do Angular para 
    // funcionar corretamente as requisições do Angular
    return this.http.get<Animal[]>(this.apiURL);
  }

  // Observable<Animal> vai observar se ocorre tudo certo na requisição
  // Passamos um id como parâmetro porque agora queremos achar apenas um animal
  getItem(id: number): Observable<Animal> {
    // vamos retornar para minha classe item detail um animal só
    // assim la conseguiremos atribuir valor
    return this.http.get<Animal>(`${this.apiURL}/${id}`)
  }
}
