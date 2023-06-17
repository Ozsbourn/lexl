1. Install dependencies (for cmd or powershell > 7.0):
```
	cd api && npm install
	
	cd client && npm install
```

If you use PS that consist version under 7.0 then u can use this form of commandlets or execute it separately: 
```
	(cd api) -and (npm install)
	
	(cd client) -and (npm install)
```
Or if you use yarn package manager just type ```yarn``` instead ```npm install```


2. Create database on MySQL using script.sql (In any test user data password is ```test```, but u can create another one)


3. Up the both of the backs by using:
```
	npm run dev
```
Or if you use yarn package manager u can use ```yarn run dev``` or just ```yarn dev```