import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-crypto-detail',
  templateUrl: './crypto-detail.component.html',
  styleUrls: ['./crypto-detail.component.css']
})
export class CryptoDetailComponent implements OnInit {
  cryptoData : any;
  cryptoId !: string;
  days : number = 30;
  currency : string = "INR";

  constructor(private api : ApiService, private activatedRoute : ActivatedRoute, private currencyService : CurrencyService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val=>{
      this.cryptoId = val['id'];
    });
    this.getcryptoData();
    this.currencyService.getCurrency()
    .subscribe(val=>{
      this.currency = val;
      this.getcryptoData();
    })
  }

  getcryptoData(){
    this.api.getCurrencyById(this.cryptoId)
    .subscribe(res=>{
      this.cryptoData = res;
      console.log(this.cryptoData);
    })
  }

}
