(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{243:function(a,s,e){"use strict";e.r(s);var n=e(2),t=Object(n.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"introduccion-a-los-paradigmas-de-computacion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduccion-a-los-paradigmas-de-computacion"}},[a._v("#")]),a._v(" Introducción a los paradigmas de computación")]),a._v(" "),e("p",[a._v("Al principio los lenguajes de programación se basaron en el "),e("strong",[a._v("modelo de computación Von Neumann")]),a._v(", que propuso que el programa se almacenara en la máquina antes de ejecutarse y a su vez:")]),a._v(" "),e("ol",[e("li",[a._v("La ejecución secuencial de instrucciones.")]),a._v(" "),e("li",[a._v("El uso de variables para la representación de las posiciones de memoria.")]),a._v(" "),e("li",[a._v("El uso de la asignación para cambiar el valor de las variables.")])]),a._v(" "),e("p",[a._v("Estos lenguajes se conocen como "),e("strong",[a._v("imperativos")]),a._v(", porque sus instrucciones representan órdenes. También se les ha denominado "),e("strong",[a._v("procedurales")]),a._v(", aunque no tengan nada que ver con el concepto de abstracción de procedimiento.")]),a._v(" "),e("p",[a._v("No es requisito que la "),e("strong",[a._v("computación")]),a._v(" sea una secuencia de instrucciones donde cada una opere sobre un dato (esto se conoce como "),e("strong",[a._v("cuello de botella de Von Neumann")]),a._v("), sino que puede ser "),e("strong",[a._v("paralela")]),a._v(", actuar sobre diferentes datos simultáneamente, o "),e("strong",[a._v("no determinista")]),a._v(" e independiente del orden. Por estas distintas formas de describir la computación se considera a los lenguajes imperativos un paradigma o patrón ("),e("strong",[a._v("paradigma imperativo")]),a._v(").")]),a._v(" "),e("p",[a._v("Dos paradigmas diferentes al anterior, basados en abstracciones matemáticas, son el "),e("strong",[a._v("funcional")]),a._v(" que usa la noción de función según plantea en el "),e("strong",[a._v("lambda cálculo")]),a._v(", y el "),e("strong",[a._v("paradigma lógico")]),a._v(" que se basa en la lógica simbólica. Permiten que tareas muy complejas se describan precisa y concisamente, facilitando la verificación de lo programas.")]),a._v(" "),e("p",[a._v("En algunas bibliografías se denomina "),e("strong",[a._v("programación declarativa")]),a._v(" al grupo formado por la  programación funcional y la lógica, por la gran diferencia con el resto de lenguajes. En estos, las propiedades se declaran y no se especifica la secuencia de ejecución.")]),a._v(" "),e("p",[a._v("Un cuarto paradigma es el de la "),e("strong",[a._v("programación orientada objetos")]),a._v(" (POO), que facilita la reutilización de programas y su ampliación, siendo más "),e("em",[a._v("natural")]),a._v(" la elaboración de código que se quiere ejecutar. Sin embargo de alguna manera este paradigma es también imperativo pues se basa en una ejecución secuencial sobre un conjunto cambiante de posiciones de memoria. La diferencia es que los programas están formados por pequeñas piezas de código, cuyas interacciones están controladas y se cambian fácilmente. En la práctica este tipo de programación tiene dificultad en predecir con precisión el comportamiento y determinar la corrección de programas. Actualmente es un estándar ampliamente utilizado.")]),a._v(" "),e("p",[a._v("A modo de entender los paradigmas nombrados, vamos a calcular el máximo común divisor (MCD) en cada uno de ellos para ver sus similitudes y diferencias. Recuerda que los lenguajes de hoy en día se pueden clasificar en diferentes paradigmas.")]),a._v(" "),e("h2",{attrs:{id:"programacion-orientada-a-objetos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#programacion-orientada-a-objetos"}},[a._v("#")]),a._v(" Programación Orientada a Objetos")]),a._v(" "),e("p",[a._v("Este paradigma se basa en la idea de que un objeto se puede describir como una colección de posiciones de memoria junto con todas las operaciones que pueden cambiar los valores de dichas posiciones. Los objetos se agrupan en clases que representan a todos los que tienen las mismas propiedades. Las clases se definen mediante declaraciones parecidas a las de los tipos estructurados en C o Pascal. Tras la declaración de una clase, se pueden crear objetos concretos a partir de la misma, mediante la instanciación de la clase.")]),a._v(" "),e("p",[a._v("Para implementar el ejercicio de MCD lo haremos en Java:")]),a._v(" "),e("div",{staticClass:"language-Java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IntWithGcd")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IntWithGcd")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" val"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" value "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" val"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("intVal")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" gcd "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" v"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" dividendo "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" divisor "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" v"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("divisor "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" auxDivisor "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" divisor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" resto "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" dividendo "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),a._v(" divisor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" cociente "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" dividendo"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("auxDivisor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("dividendo "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" divisor "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"="')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" cociente "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"  R: "')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" resto"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            divisor "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" resto"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            dividendo "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" auxDivisor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" dividendo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("En este ejemplo se define una nueva clase mediante:")]),a._v(" "),e("ol",[e("li",[a._v("Un constructor. Estos asignan memoria y aportan valores iniciales para los datos del objeto.")]),a._v(" "),e("li",[a._v("Un método de acceso a este valor (inVal).")]),a._v(" "),e("li",[a._v("El método gcd.")]),a._v(" "),e("li",[a._v("El entero "),e("em",[a._v("value")]),a._v(".")])]),a._v(" "),e("div",{staticClass:"language-Java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Main")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Máximo común divisor entre 8 y 18!"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IntWithGcd")]),a._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        x "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IntWithGcd")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" y "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("gcd")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("18")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"El resultado es: "')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" y"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("La clase IntWithGcd se utiliza definiendo un nombre de variablepara contener un objeto de la clase: IntWithGcd x;\nAl principio la variable x no contiene la referencia a un objeto, por lo que hay que instanciarla con la sentencia:")]),a._v(" "),e("div",{staticClass:"language-Java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[a._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IntWithGcd")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("A continuación se llama al método gcd mediante:")]),a._v(" "),e("div",{staticClass:"language-Java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" y "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("gcd")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("18")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("Y tras la ejecución de esta sentencia, la variable y contendrá el valor 2, que es el máximo común divisor de 18 y 8.")]),a._v(" "),e("h2",{attrs:{id:"programacion-funcional"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#programacion-funcional"}},[a._v("#")]),a._v(" Programación funcional")]),a._v(" "),e("p",[a._v("La computación en el paradigma funcional se fundamenta en la evaluación de funciones o en la aplicación de funciones a valores conocidos, por lo que también se denominan lenguajes aplicativos. El mecanismo básico es la evaluación de funciones, con las siguientes características:")]),a._v(" "),e("ul",[e("li",[a._v("La transferencia de valores como parámetros de las funciones que se evalúan.")]),a._v(" "),e("li",[a._v("La generación de resultados en forma de valores devueltos por las funciones.")])]),a._v(" "),e("p",[a._v("Este proceso no involucra de ningún modo a la asignación de una variable a una posición de memoria, aspecto que le aleja de la programación orientada a objetos. Tampoco las operaciones repetitivas se presentan por ciclos (que requieren de "),e("strong",[a._v("variables de control")]),a._v(" para su terminación), sino mediante las "),e("strong",[a._v("funciones recursivas")]),a._v(", un mecanismo muy potente.")]),a._v(" "),e("p",[a._v("Que un lenguaje de programación prescinda de las variables y ciclos, ofrece ventajas relacionadas con la verificación de lo programas. Volviendo al ejemplo de MCD haremos dicha función en Haskell:")]),a._v(" "),e("div",{staticClass:"language-Haskell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-haskell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("gcd")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("u")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("v")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("v")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("u")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("otherwise")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("gcd")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("v")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("mod")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("u")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token hvariable"}},[a._v("v")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("ul",[e("li",[a._v("En la primer línea se define la cabecera de la función "),e("em",[a._v("gcd")]),a._v(" y sus dos "),e("strong",[a._v("parámetros formales")]),a._v(" "),e("em",[a._v("u")]),a._v(" y "),e("em",[a._v("v")]),a._v(".")]),a._v(" "),e("li",[a._v("En la segunda se comprueba si "),e("em",[a._v("v")]),a._v(" es igual a 0, en cuyo caso devuelve el valor de "),e("em",[a._v("u")]),a._v(".")]),a._v(" "),e("li",[a._v("En la tercera se establece la recursión, llamando a "),e("em",[a._v("gcd")]),a._v(" nuevamente con los parámetros "),e("em",[a._v("v")]),a._v(" y el resto de dividir "),e("em",[a._v("u")]),a._v(" entre "),e("em",[a._v("v")]),a._v(".")])]),a._v(" "),e("h2",{attrs:{id:"programacion-logica"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#programacion-logica"}},[a._v("#")]),a._v(" Programación lógica")]),a._v(" "),e("p",[a._v("En un lenguaje de programación lógica, un programa está formado por un conjunto de sentencias que describen lo que es "),e("em",[a._v("verdad")]),a._v(" o "),e("em",[a._v("conocido")]),a._v(" con respecto a un problema, en vez de indicar la secuencia de pasos que llevan al resultado. No necesita de abstracciones de control condicionales ni de ciclos ya que el control lo aporta el modelo de inferencia lógica que subyace.")]),a._v(" "),e("p",[a._v("La definición de MCD es la siguiente:")]),a._v(" "),e("ul",[e("li",[a._v("El "),e("em",[a._v("gcd")]),a._v(" de "),e("em",[a._v("u")]),a._v(" y "),e("em",[a._v("v")]),a._v(" es "),e("em",[a._v("u")]),a._v(" si "),e("em",[a._v("v")]),a._v(" es 0.")]),a._v(" "),e("li",[a._v("El "),e("em",[a._v("gcd")]),a._v(" de "),e("em",[a._v("u")]),a._v(" y "),e("em",[a._v("v")]),a._v(" es el "),e("em",[a._v("gcd")]),a._v(" de "),e("em",[a._v("v")]),a._v(" y de "),e("em",[a._v("u mod v")]),a._v(", si "),e("em",[a._v("v")]),a._v(" no es 0.")])]),a._v(" "),e("p",[a._v('Y esto puede programarse en Prolog, con el predicado (que podrá ser verdad o falso) gcd(U,V,X), que se entiende como "es verdad que el gcd de U y V es X":')]),a._v(" "),e("div",{staticClass:"language-Prolog extra-class"},[e("pre",{pre:!0,attrs:{class:"language-prolog"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("gcd")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("U")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("U")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("gcd")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("U")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("V")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("U")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":-")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("not")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("V")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("Y")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("is")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("U")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("mod")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("V")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("gcd")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("V")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("Y")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("X")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v("\n")])])]),e("p",[a._v("Así, para calcular el MCD entre 18 y 8, se deberá escribir la consulta PROLOG:")]),a._v(" "),e("div",{staticClass:"language-Prolog extra-class"},[e("pre",{pre:!0,attrs:{class:"language-prolog"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?-")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("gcd")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("18")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("X")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v("\n")])])]),e("p",[a._v("que busca un valor que, asignado a X, haga cierta esa pregunta.")]),a._v(" "),e("p",[a._v("En Prolog un programa es un conjunto de sentencias, denominadas "),e("strong",[a._v("cláusulas")]),a._v(' de la forma: a :- b,c,d. que es una afirmación que se entiende como "'),e("em",[a._v("a")]),a._v(" es cierto, o resoluble, si "),e("em",[a._v("b")]),a._v(", a continuación "),e("em",[a._v("c")]),a._v(" y finalmente "),e("em",[a._v("d")]),a._v(' son ciertos o resolubles en este orden". A diferencia de las funciones de la programación funcional, Prolog requiere de variables para representar los valores de las funciones, aunque no representan posiciones de memoria. En Prolog las variables se distinguen sintácticamente de otros elementos del lenguaje (por ejemplo, empezando por mayúsculas).')])])}),[],!1,null,null,null);s.default=t.exports}}]);