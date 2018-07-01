import phantom, { PhantomJS } from 'phantom';
import { Observable, Observer } from 'rxjs';

stackOverflowLogin().subscribe((content: any) => {
  // tslint:disable-next-line:no-console
  console.log(content);
});

export function stackOverflowLogin(): Observable<any> {
  return Observable.create((observer: Observer<any>) => {
    phantom.create(['--load-images=no']).then((instance: PhantomJS) => {
      instance.createPage().then((page: phantom.WebPage) => {
        page.open('https://stackoverflow.com/users/login?ssrc=head').then((content: string) => {
          observer.next(content);
        });
      });
    });
  });
}
