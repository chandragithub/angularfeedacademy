import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // Properties...
  //url: string     = 'https://angularfeed.com/server/mailer.php';
  url: string = 'https://us-central1-angularfeedinc.cloudfunctions.net/httpEmail';
  params: URLSearchParams = new URLSearchParams();
  name: string    = '';
  email: string   = '';
  message: string = '';
  title: string   = 'AngularFeed - Contact Us';

  // Constructor bind with Http.
  constructor(private http: Http, private titleService: Title) { 
    this.titleService.setTitle(this.title);
  }

  ngOnInit() {}

  // sendMail(form: NgForm) {
  //   let postVars = {
  //     name: form.value.name,
  //     email: form.value.email,
  //     message: form.value.message
  //   }
  //   this.http.post(this.url, postVars)
  //     .subscribe(
  //       response => {
  //         this.name = '';
  //         this.email = '';
  //         this.message = '';
  //       }
  //     )
  // }

  sendMail(form: NgForm) {

    this.params.set('to', 'chandrashekher@hotmail.com');
    this.params.set('from', 'you@yoursupercoolapp.com');
    this.params.set('subject', 'test-email');
    this.params.set('content', 'Hello World');

    return this.http.post(this.url, this.params)
      .subscribe(res => {
        console.log('-->',res)
      })
  }
}
