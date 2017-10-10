import {Observable} from 'rxjs';

const text$ = Observable.of('bloup');

text$.subscribe((val=> console.log(val)));

const blank$ = Observable.create((observer)=> {
observer.next(1);
observer.next(2);
observer.next(3);
observer.complete();
});
blank$.subscribe((val)=>console.log(val));

const button = document.querySelector('button');
const click$ = Observable.fromEvent(button, 'click');
click$.subscribe((event)=> console.log('click'));

const tableau$ = Observable.from(['ga', 'zo', 'bu', 'meu']).filter((item)=>item.length <= 2);
tableau$.subscribe((item)=> console.log(item));