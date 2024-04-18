import { Component, EventEmitter, OnInit, Output, Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CallForTender } from 'src/app/models/callfortender';


@Pipe({
  name: 'search',
})
export class SearchComponent implements  PipeTransform{
  
  transform(callForTenders: CallForTender[], searchQuery: string): CallForTender[] {
    if (!searchQuery) {
      console.log(searchQuery)
      return callForTenders;
    }

    searchQuery = searchQuery.toLowerCase();
    return callForTenders.filter((callForTender: CallForTender) => {
      return (
        callForTender.name.toLowerCase().includes(searchQuery) ||
        callForTender.description.toLowerCase().includes(searchQuery) ||
        callForTender.quantity.toString().includes(searchQuery)
      );
      return console.log(callForTenders)
    });
  }
}

