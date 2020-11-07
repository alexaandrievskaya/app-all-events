import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-sample-item',
  templateUrl: './sample-item.component.html',
  styleUrls: ['./sample-item.component.scss']
})
export class SampleItemComponent implements OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  /* ngOnChanges вызывается до метода ngOnInit при начальной установке свойств, которые связаны механизмом
  привязки, а также при любой их переустановке или изменении их значений.
  Данный метод в качестве параметра принимает обьект класса SimpleChanges, который содержит
  предыдущие и текущие значения свойства */
  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  /* ngOnInit вызывается 1 раз после установки свойств компонента, которые участвуют в привязке.
  Выполняет инициализацию компонента */
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  /* ngDoCheck вызывается при каждой проверке изменений свойств компонента сразу после методов
  ngOnChanges и ngOnInit */
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  /* ngAfterContentInit вызывается 1 раз после метода ngDoCheck после вставки содержимого в представление компонента
  кода html. Срабатывает после того как Angular внедрит внешнее содержимое в представление компонента
  Используется только при работе с компонентами */
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  /* Вызывается фреймворком Angular при проверке изменений содержимого, которое добавляется в представлении компонента
  Вызывается после метода ngAfterContentInit и после каждого последующего вызова ngDoCheck
  Используется только при работе с компонентами */
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  /* Срабатывает только после инициализации представления компонента и дочерних компонентов.
  Вызывается только 1 раз сразу после первогов ызова метода ngAfterContentChecked
  Используется только при работе с компонентами */
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  /* Срабатывает только после того как Angular првоерит представление компонента и все дочерние компоненты
  Вызывается после первого вызова метода ngAfterViewInit и после каждого ngAfterViewChecked
  Используется только при работе с компонентами */
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  /* Метод, выполняющий очистку, вызывается сразу после уничтожения экземпляра директивы или компонента */
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  public testHandler(): void {
    console.log('!!! Сработал тестовый метод !!!');
  }

}
