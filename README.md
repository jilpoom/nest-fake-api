# Nest-Fake-API BoilerPlate

[Nest.js Documentation](https://docs.nestjs.com/recipes/prisma)을 참고하여, 구성한 nest.js 보일러 플레이트

## 개발 환경

### 프레임워크

- Nest.js

### 데이터베이스

- SQLite

### ORM

- Prisma

## 프로젝트 실행 및 주요 Script

### 개발 환경 실행

```bash
# prisma migrate
npm run migrate:prisma <name>

# test
npm run test

# develop
npm run start:dev

# production
npm run start:prod
```

## 프로젝트 주요 변경점

| No. | 변경사항                              | 날짜         | 브랜치          | 
|-----|-----------------------------------|------------|--------------|
| 1   | Swagger UI 추가                     | 2024-05-08 | master       |
| 2   | Prettier, Eslint 설정 변경            | 2024-05-08 | master       |
| 3   | Prisma Migrate Scripts 작성         | 2024-05-08 | master       |
| 4   | `src` 디렉토리 구조 변경                  | 2024-05-08 | master       |
| 5   | `posts`, `users` 모듈화 및 Swagger 태깅 | 2024-05-09 | master       |
| 6   | `posts` 테스트 코드 작성                 | 2024-05-09 | master       |
| 7   | `auth` 모듈 생성                      | 2024-05-10 | feature/auth |
| 8   | JWT Access Token 부여               | 2024-05-10 | feature/auth |