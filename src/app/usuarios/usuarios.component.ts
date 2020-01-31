import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  lista: any = [];
  limit = 10;
  start = 0;
  nome = '';
  usuario = '';
  senha = '';

  constructor( 
    private provider: ApiServiceService,
    private router: Router
    ) { }

  ngOnInit() {
    this.lista = [];  
    this.start = 0;
    this.carregar();
  }


  carregar() {
    return new Promise(resolve => {
      const dados = {
        requisicao : 'listar',
        limit : this.limit,
        start: this.start
      };
      this.provider.Api(dados, 'apiUsuarios.php').subscribe(data => {
        for(const dado of data['result']){
          this.lista.push(dado);
        }
        resolve(true);
      });
    });
  }

  cadastrar() {
    return new Promise(resolve => {
      const dados = {
        requisicao : 'add',
        nome: this.nome,
        usuario: this.usuario,
        senha: this.senha
      };
      this.provider.Api(dados, 'apiUsuarios.php')
      .subscribe(data => {

        if(data['success']){
         alert('Salvo com sucesso!!');
        //  location='usuarios';
        this.router.navigate(['/usuarios']);
        }else{
         alert('Erro ao Salvar!!');
        }

      });
    });

}


}
