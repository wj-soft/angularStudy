# 간단한 사용방법 (지도불러오기와 마커)

1.설치
`npm install @agm/core --save`

* docs : https://angular-maps.com/api-docs/agm-core/modules/AgmCoreModule.html

2.app.module.ts 모듈 import

```import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'google API KEY'
    })
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

* GET API : https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
 

3.template에서 사용

```
<agm-map [latitude]="51.678418" [longitude]="7.809007">
<agm-marker [latitude]="51.678418" [longitude]="7.809007"></agm-marker>
</agm-map>
```

* marker은 생략가능
* agm-map의 height CSS 속성은 반드시 지정하여야 함