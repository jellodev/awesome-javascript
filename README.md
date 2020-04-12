# awesome-javascript
Create JS practice environment - Naver D2
- Jest 를 이용해서 js test 환경 만들기 
- test 코드는 _test_ folder 안에 있음 / 관련 library 는 lib folder 
- 연습용 코드는 git user get 으로 진행 됨 
- git access token 발행 필요 (github setting 에서 생성 가능)

## Getting Started
### Prerequisites

Required | Description
-- | -- 
[Git] (http://git-scm.com/) | We follow the [GitHub Flow] (https://guides.github.com/introduction/flow/)
[Node.js] (nodejs.org) | latest version 
[Yarn] (http://yarnpkg.com/lang/en/) | latest version 

### Install Node, Yarn 
The project manages the version of node through 'nvm'

## Yarn CLIs

### Install project 

```
$ nvm use
$ yarn install 
```

### Test

```
bash 
$ yarn test
```

### Test for github.test.js
You should generate your personal access token on github
guide
1. click your profile image (left-up side)
2. you can see 'personal settings' page 
3. click 'Developer settings' > 'Personal access tokens' 
4. set your auth. 
5. done! copy and use your token. 
  
```
bash
$ ACCESS_TOKEN=this_is_your_TOKEN yarn test
```
