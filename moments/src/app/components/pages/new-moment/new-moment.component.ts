import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moments';
import { MomentsService } from 'src/app/services/moments.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent {
  btnText: string = 'Compartilhar';

  constructor(
    private momentService: MomentsService, 
    private messageService: MessagesService, 
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment) {
    const formData = new FormData();
    formData.append('title', moment.title)
    formData.append('description', moment.description)

    if (moment.image) {
      formData.append('image', moment.image)
    }

    // to do

    // enviar para o service []
    await this.momentService.createMoment(formData).subscribe()
    this.messageService.add("Momento adicionado com sucesso!")
    // exibir msg
    // redirect

    this.router.navigate(['/'])
    console.log("Ok");
  }
}
