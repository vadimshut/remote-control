# RSSchool NodeJS websocket task template

## Attantion

- ws server run on main port 5000 or alternative port 6000.
- Information about main ports you can find in .env file and information regarding alternative ports in \src\utils\constants.ts file

> Static http server and base task packages.

## Installation

1. Clone/download repo
2. `npm install`

## Usage

**Development**

`npm run start:dev`

- App served @ `http://localhost:5000` with nodemon

**Production**

`npm run start`

- App served @ `http://localhost:5000` without nodemon

---

**All commands**

| Command            | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `npm run dev`      | App served @ `http://localhost:5000` with nodemon    |
| `npm run start`    | App served @ `http://localhost:5000` without nodemon |
| `npm run prettier` | App run prettierformat                               |
| `npm run lint`     | App check with EsLint                                |
| `npm run lint:fix` | App check AND FIX with EsLint                        |

**Note**: replace `npm` with `yarn` in `package.json` if you use yarn.
