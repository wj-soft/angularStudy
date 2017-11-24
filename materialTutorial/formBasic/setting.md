# 기본설정

1. angular 루트폴더에서 npm을 이용하여 material을 설치
```
$ npm install --save @angular/material @angular/cdk
$ npm install --save @angular/animations
```

2. style.css에 원하는 테마를 import함
```
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```
https://material.angular.io/guide/theming 

3. npm을 이용하여 HammerJS 설치 (mat-slide-toggle, mat-slider, matTooltip 사용을 위한 모듈)
```
$ npm install --save hammerjs
```

4. main.ts에 HammerJS를 import
```
import 'hammerjs';
```

5. index.html에 icon/font사용을 위한 링크 추가
```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

