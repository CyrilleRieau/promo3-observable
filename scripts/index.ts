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

const tableau$ = Observable.from(['ga', 'zo', 'bu', 'meu']);
//.take(2);
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
//.filter((item)=>item.length <= 2)
//.find((item)=>item==='ga');
tableau$.subscribe((item)=> console.log(item));

const input = document.querySelector('input');
// const inputext$ = Observable.fromEvent(input, 'keyup')
// .map((event) => event.target.value)
// .map((value) => value.toUpperCase())
// .debounceTime(300);
// inputext$.subscribe((value) => console.log(value));

const keypress$ = Observable.fromEvent(input, 'keyup')
.map((event:KeyboardEvent) => event.keyCode)
.bufferTime(3000);
const combo = [37, 39, 38, 40, 65, 65, 66, 66];
keypress$.subscribe(
//  (value)=>console.log(value);
(value) => {if ((value.length === combo.length) && (value.every((element, index)=> element === combo[index]))) {
    alert('Bravo');
} else {
     console.log('Fail');
 }
});
