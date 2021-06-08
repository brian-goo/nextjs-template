dev:
	@if [ ! -d node_modules ]; then yarn; fi
	APP_ENV=dev \
	npx next dev

build-dev:
	npx next build 
	npx next export	