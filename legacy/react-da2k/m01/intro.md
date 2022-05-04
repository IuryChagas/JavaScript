# Introdução resumo

### Como utilizar um servidor simples para servir o HTML.
	'node > npm install http-server > http-server ' <-- no diretório do qual quer servir

### Como criar um elemento com React
	'add scripts no html:
		https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js
		https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js'
	 
	```html
	<!DOCTYPE html>
	<html lang="en">
	 <head>
	     <meta charset="UTF-8">
	         <title></title>
		  </head>
		   <body>
		     <h1>Hello World</h1>
		         <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
		 	
			 <script>
	                   var h1 = React.createElement('h1', null, 'Hello h1 React')
			   console.log(h1)
			 </script>
		    </body>...
	```

### Como Renderizar esse elemento no DOM:

	```html
	<!DOCTYPE html>
	<html lang="en">
	 <head>
	     <meta charset="UTF-8">
	         <title></title>
		  </head>
		   <body>
		     <h1>Hello World</h1>
		       <div id="app"></div>

		         <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
			   <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js"></script>

		           <script>
			     var h1 = React.createElement('h1', null, 'Hello h1 React')
		             ReactDOM.render(h1, document.getElementById('app'))
		             console.log(h1)
		         </script>
		   </body>
	 </html>

### __Elementos React !== Elementos DOM!__
