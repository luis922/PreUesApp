export const ensayos = [
  {
    //test
    name: "ensayo numeros",
    type: "numeros",
    questions: [
      {
        question:
          "\\text{¿Cuál es el valor de: } {(1 - \\frac{1}{2})(1 - \\frac{1}{3})(1 - \\frac{1}{4})(1 - \\frac{1}{5})}",
        subject: "numeros",
        link_resolution: "https://youtube.com/embed/OxgnJ-IgxA0?start=124",
        imgDir: "no",
        answer: [
          {
            label: "{\\frac{1}{5}}",
            right: 1,
          },
          {
            label: "{\\frac{119}{120}}",
            right: 0,
          },
          {
            label: "{0}",
            right: 0,
          },
          {
            label: "{\\frac{599}{120}}",
            right: 0,
          },
        ],
      },
      {
        question: "\\text{¿Cual es el valor de: } {1 - (\\frac{1}{2})^{-3}} \\text{ ?}",
        subject: "numeros",
        link_resolution: "https://youtube.com/embed/OxgnJ-IgxA0?start=383",
        imgDir: "no",
        answer: [
          {
            label: "{-7}",
            right: 1,
          },
          {
            label: "{\\frac{1}{2}}",
            right: 0,
          },
          {
            label: "{\\frac{9}{8}}",
            right: 0,
          },
          {
            label: "{\\frac{1}{8}}",
            right: 0,
          },
        ],
      },
      {
        question: "\\text{Un numero aumentado en su } {30}\\% \\text{ es igual a } {910}.",
        subject: "numeros",
        link_resolution: "https://www.youtube.com/embed/OxgnJ-IgxA0?start=1682",
        imgDir: "no",
        answer: [
          {
            label: "{700}",
            right: 1,
          },
          {
            label: "{637}",
            right: 0,
          },
          {
            label: "{273}",
            right: 0,
          },
          {
            label: "{1.183}",
            right: 0,
          },
        ],
      },
      {
        question: "\\text{¿Cual es el resultado de: } {\\sqrt{2} - \\sqrt{8} + \\sqrt{18}} ",
        subject: "numeros",
        link_resolution: "https://www.youtube.com/embed/OxgnJ-IgxA0?start=1895",
        imgDir: "no",
        answer: [
          {
            label: "2{\\sqrt{2}}",
            right: 1,
          },
          {
            label: "{\\sqrt{2}}",
            right: 0,
          },
          {
            label: "{\\sqrt{12}}",
            right: 0,
          },
          {
            label: "6{\\sqrt{2}}",
            right: 0,
          },
        ],
      },
      {
        question: "\\text{Si } {log_m\\lparen\\frac {8} {125}\\rparen = -3}, \\text{ ¿cuál es el valor de m?}",
        subject: "numeros",
        link_resolution: "https://www.youtube.com/embed/OxgnJ-IgxA0?start=2031",
        imgDir: "no",
        answer: [
          {
            label: "{\\frac {5} {2}}",
            right: 1,
          },
          {
            label: "{\\frac {2} {5}}",
            right: 0,
          },
          {
            label: "{{\\lparen\\frac {8} {125}\\rparen}^{-3}}",
            right: 0,
          },
          {
            label: "-{\\frac {2} {5}}",
            right: 0,
          },
        ],
      },
      {
        question:
          "\\text{¿Cuál de las siguientes cantidades corresponde al } {5}\\% \\text{ del precio de un articulo?}",
        subject: "numeros",
        link_resolution: "https://www.youtube.com/embed/OxgnJ-IgxA0?start=1540",
        imgDir: "no",
        answer: [
          {
            label: "\\text{El precio del articulo divido por } {100}\\text{, y luego multiplicado por }{5}",
            right: 1,
          },
          {
            label: "\\text{Un quinto del precio del articulo.}",
            right: 0,
          },
          {
            label: "\\text{El precio del articulo multiplicado por cinco decimos}",
            right: 0,
          },
          {
            label: "\\text{El precio del articulo divido por } {5}\\text{, y luego multiplicado por } {100}",
            right: 0,
          },
        ],
      },
      {
        question: "\\text{¿Cual es el valor de } {2,32 + 17,4} ?",
        subject: "numeros",
        link_resolution: "https://www.youtube.com/embed/nKR73i6zASg?start=38",
        imgDir: "no",
        answer: [
          {
            label: "{(232 + 1740):100}",
            right: 1,
          },
          {
            label: "{(232 + 174):10}",
            right: 0,
          },
          {
            label: "{(2320 + 174):100}",
            right: 0,
          },
          {
            label: "{(232 + 1740):1000}",
            right: 0,
          },
        ],
      },
      {
        question:
          "\\text{¿Cual de las siguientes expresiones representa el } {22}\\%  \\text { del } {15}\\% \\text{ de P ?}",
        subject: "numeros",
        link_resolution: "https://www.youtube.com/embed/nKR73i6zASg?start=577",
        imgDir: "no",
        answer: [
          {
            label: "{\\frac{33}{1000}P}",
            right: 1,
          },
          {
            label: "{3,3P}",
            right: 0,
          },
          {
            label: "{0,37P}",
            right: 0,
          },
          {
            label: "{\\frac{33}{100}P}",
            right: 0,
          },
        ],
      },
      // {
      //   question:
      //     "\\text{¿Cual de las siguientes opciones presenta una resolución correcta de } {\\frac{27^\\frac{1}{3}}{8}*\\frac{16^\\frac{1}{2}}{9}}?",
      //   subject: "numeros",
      //   link_resolution: "https://www.youtube.com/embed/nKR73i6zASg?start=755",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label:
      //         "{\\frac{27^\\frac{1}{3}}{8}*\\frac{16^\\frac{1}{2}}{9} =\\frac{(27^3)^\\frac{1}{3}}{8}*\\frac{(4^2)\\frac{1}{2}}{9} = \\frac{3}{8}*\\frac{4}{9} = \\frac{12}{72} = \\frac{1}{6}}",
      //       right: 1,
      //     },
      //     {
      //       label:
      //         "{\\frac{27^\\frac{1}{3}}{8}*\\frac{16^\\frac{1}{2}}{9} = (\\frac{27}{8})^\\frac{1}{3}*(\\frac{16}{9})^\\frac{1}{2} = \\frac{3}{2}*\\frac{4}{3} = 2}",
      //       right: 0,
      //     },
      //     {
      //       label:
      //         "{\\frac{27^\\frac{1}{3}}{8}*\\frac{16^\\frac{1}{2}}{9} = (\\frac{27*16}{8*9})^{\\frac{1}{3}*\\frac{1}{2}} = 6^\\frac{1}{6}}",
      //       right: 0,
      //     },
      //     {
      //       label:
      //         "{\\frac{27^\\frac{1}{3}}{8}*\\frac{16^\\frac{1}{2}}{9} = \\frac{27^\\frac{1}{3}*16^\\frac{1}{2}}{8*9} = \\frac{9}{8}*\\frac{8}{9} = 1}",
      //       right: 0,
      //     },
      //   ],
      // },
      {
        question: "\\text{¿Cual es el valor de } {\\sqrt{8}}({\\sqrt{18}}-{\\sqrt{8})}?",
        subject: "numeros",
        link_resolution: "https://www.youtube.com/embed/nKR73i6zASg?start=1154",
        imgDir: "no",
        answer: [
          {
            label: "{4}",
            right: 1,
          },
          {
            label: "{8}",
            right: 0,
          },
          {
            label: "{\\sqrt{80}}",
            right: 0,
          },
          {
            label: "{80}",
            right: 0,
          },
        ],
      },
      // {
      //   question:
      //     "\\text{Por el arriendo de un juego inflable se cobra una cuota fija de \\$120.000 por cuatro horas, más \\$25.000  por cada hora adicional.} \\newline \\text{¿Cuántas horas como máximo puede arrendar una empresa el juego inflable si tiene un presupuesto de \\$240.000 para este efecto?}",
      //   subject: "numeros",
      //   link_resolution: "https://www.youtube.com/embed/2nghljBMp1k?start=6",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label: "{8}",
      //       right: 1,
      //     },
      //     {
      //       label: "{4}",
      //       right: 0,
      //     },
      //     {
      //       label: "{9}",
      //       right: 0,
      //     },
      //     {
      //       label: "{10}",
      //       right: 0,
      //     },
      //   ],
      // },
      // {
      //   question:
      //     "\\text{Considera el número p distinto de cero que es multiplicado dos veces por 1,25 y luego, dos veces por 0,75, tal como se representa a continuación: } \\newline{ p \\cdot 1,25 \\cdot 1,25 \\cdot 0,75 \\cdot 0,75 }\\newline \\text{¿Qué pueden representar dichas multiplicaciones, respecto del número original } {p} ?",
      //   subject: "numeros",
      //   link_resolution: "https://www.youtube.com/embed/2nghljBMp1k?start=71",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label: "\\text{Que hubo dos aumentos del } {25 }\\% \\text{y luego, dos disminuciones del } {25 } \\%",
      //       right: 1,
      //     },
      //     {
      //       label: "\\text{Que no hubo aumento de p ni disminución de p}",
      //       right: 0,
      //     },
      //     {
      //       label: "\\text{Que hubo dos aumentos de} {0,25} \\text{ y luego, dos disminuciones de } {0,75}",
      //       right: 0,
      //     },
      //     {
      //       label: "\\text{Que hubo dos aumentos del } {25} \\% \\text{y luego, dos disminuciones del } {75 } \\%",
      //       right: 0,
      //     },
      //   ],
      // },
      //no pude hacerlo.
      // {
      //   question:
      //     "\\text{El modelo RVA de colores, permite crear cualquier color mediante la mezcla de los distintos tonos de tres olores: rojo, verde y azul.} \\newline \\text{Los valores de la intensidad decada uno de estos colores van desde el 0 al 255 y cada color creado tiene un código de tres números donde el primero representa al rojo, el segundo al verde y el tercero al azul.}{\\newline}\\text{El código de la mezcla de dos colores se obtiene haciendo el promedio de cada uno de los valores de los colores originales tal como se presenta a continuación: } {\\newline \\begin{array}{c:c} \\text{Colores para mezclar} & \\text{Color resultante} \\newline \\hline (a,b,c),(m,n,t) & (\\frac{a + m}{2} \\cdot \\frac{b + n}{2} \\cdot \\frac{c + t}{2}) \\newline \\hline \\end{array} \\newline} \\text{¿Con qué color hay que mezclar el color (160, 60, 120) para obtener el color (170, 80, 60)?}",
      //   subject: "numeros",
      //   link_resolution: "https://www.youtube.com/embed/2nghljBMp1k?start=298",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label: "(180,100,0)",
      //       right: 1,
      //     },
      //     {
      //       label: "(180,100,60)",
      //       right: 0,
      //     },
      //     {
      //       label: "(10,20,60)",
      //       right: 0,
      //     },
      //     {
      //       label: "(165,70,90)",
      //       right: 0,
      //     },
      //   ],
      // },
      // {
      //   question:
      //     "\\text{En la temporada de invierno, la diferencia horaria entre Nueva Zelanda y Chile es de 16 h , desde Chile.} \\newline \\text{Por ejemplo, si en Chile son las 11 de la mañana de un lunes, en Nueva Zelanda son las 3 de la mañana del martes.}\\newline\\text{En la misma temporada la diferencia horaria entre México y Chile es de -1 h , desde Chile. Es decir, cuando en Chile son las 11 de la mañana de un lunes, en México son las 10 de la mañana del mismo día.}\\newline\\text{¿Cuál es la diferencia horaria entre Nueva Zelanda y México, desde México, en la temporada de invierno?}",
      //   subject: "numeros",
      //   link_resolution: "https://www.youtube.com/embed/2nghljBMp1k?start=430",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label: "{17}",
      //       right: 1,
      //     },
      //     {
      //       label: "{-17}",
      //       right: 0,
      //     },
      //     {
      //       label: "{-15}",
      //       right: 0,
      //     },
      //     {
      //       label: "{15}",
      //       right: 0,
      //     },
      //   ],
      // },
      // {
      //   question:
      //     "\\text{Un comerciante compra una cantidad de naranjas a razón de 3 kilogramos por \\$600 y las vende todas a razón de 4 kilogramos por \\$1000.}\\newline\\text{Si obtuvo una ganancia de \\$3000 , ¿cuántos kilogramos de naranjas compró?}",
      //   subject: "numeros",
      //   link_resolution: "https://www.youtube.com/embed/2nghljBMp1k?start=500",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label: "{60}",
      //       right: 1,
      //     },
      //     {
      //       label: "{25}",
      //       right: 0,
      //     },
      //     {
      //       label: "{12}",
      //       right: 0,
      //     },
      //     {
      //       label: "{8}",
      //       right: 0,
      //     },
      //   ],
      // },

      {
        question: "\\text{¿Cuál es el } {40}\\% \\text{ del }{15}\\% \\text{ de 300 ?}",
        subject: "numeros",
        link_resolution: "https://www.youtube.com/embed/2nghljBMp1k?start=611",
        imgDir: "no",
        answer: [
          {
            label: "{18}",
            right: 1,
          },
          {
            label: "{75}",
            right: 0,
          },
          {
            label: "{165}",
            right: 0,
          },
          {
            label: "{180}",
            right: 0,
          },
        ],
      },

      // {
      //   question:
      //     "\\text{Si el precio de un helado es \\$500 , ¿cuál de las siguientes expresiones representa el valor del helado aumentado en su } {120}\\% ?",
      //   subject: "numeros",
      //   link_resolution: "https://www.youtube.com/embed/2nghljBMp1k?start=653",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label: "{2,2 \\cdot 500}",
      //       right: 1,
      //     },
      //     {
      //       label: "{1,2 \\cdot 500}",
      //       right: 0,
      //     },
      //     {
      //       label: "{50 + 20 \\cdot 500}",
      //       right: 0,
      //     },
      //     {
      //       label: "{50 + 120 \\cdot 500}",
      //       right: 0,
      //     },
      //   ],
      // },
      /* {
        question: "\\text{¿Qué porcentaje es 4740 de 15800 ?}",
        subject: "numeros",
        link_resolution: "https://www.youtube.com/embed/2nghljBMp1k?start=814",
        imgDir: "no",
        answer: [
          {
            label: "{30}\\%",
            right: 1,
          },
          {
            label: "{3,\\bar{3}}\\%",
            right: 0,
          },
          {
            label: "{3}\\%",
            right: 0,
          },
          {
            label: "{0,3}\\%",
            right: 0,
          },
        ],
      }, */
    ],
  },
  {
    name: "ensayo algebra",
    type: "algebra",
    questions: [
      {
        question: "\\text{¿Cual es el valor de }{x}\\text{ en la ecuacion }{0,3 + 10x = 0,5}?",
        subject: "algebra",
        link_resolution: "https://www.youtube.com/embed/OxgnJ-IgxA0?start=4092",
        imgDir: "no",
        answer: [
          {
            label: "{0,02}",
            right: 1,
          },
          {
            label: "{8}",
            right: 0,
          },
          {
            label: "{2}",
            right: 0,
          },
          {
            label: "{0,08}",
            right: 0,
          },
        ],
      },
      // {
      //   question:
      //     "\\text{Un bidon tiene ocupada con gasolina la mitad de su capacidad maxima. Al agregar 8L de gasolina se llega a las }{\\frac{5}{6}} \\text{ partes de su capacidad. ¿Cual es la capacidad maxima del bidon?}",
      //   subject: "algebra",
      //   link_resolution: "https://www.youtube.com/embed/OxgnJ-IgxA0?start=4290",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label: "{24 L}",
      //       right: 1,
      //     },
      //     {
      //       label: "{10 L}",
      //       right: 0,
      //     },
      //     {
      //       label: "{12 L}",
      //       right: 0,
      //     },
      //     {
      //       label: "{20 L}",
      //       right: 0,
      //     },
      //   ],
      // },
      {
        question:
          "\\text{Si } {log_2{(-2x + 3p)} = 3} \\text{ y } {log_3{(x +2p)} = 1} \\text{ ¿Cual es el valor de } {x-2p} ?",
        subject: "algebra",
        link_resolution: "https://www.youtube.com/embed/OxgnJ-IgxA0?start=5349",
        imgDir: "no",
        answer: [
          {
            label: "{-5}",
            right: 1,
          },
          {
            label: "{\\frac{-13}{7}}",
            right: 0,
          },
          {
            label: "{\\frac{-27}{7}}",
            right: 0,
          },
          {
            label: "{3}",
            right: 0,
          },
        ],
      },
      {
        question: "\\text{Si }{a * b = 10} \\text{y }{a^2 + b^2 = 29}",
        subject: "algebra",
        link_resolution: "https://www.youtube.com/embed/jZGMcWoN-_M?start=582",
        imgDir: "no",
        answer: [
          {
            label: "{9}",
            right: 1,
          },
          {
            label: "{19}",
            right: 0,
          },
          {
            label: "{29}",
            right: 0,
          },
          {
            label: "{49}",
            right: 0,
          },
        ],
      },
      {
        question:
          "\\text{Para que el doble de } {(a + c)} \\text{ sea igual a } {18}\\text{ , le faltan } {4} \\text{ unidades, se expresa como:}",
        subject: "algebra",
        link_resolution: "https://www.youtube.com/embed/jZGMcWoN-_M?start=1382",
        imgDir: "no",
        answer: [
          {
            label: "{2(a + c) + 4 = 18}",
            right: 1,
          },
          {
            label: "{2(a + c) - 4 = 18}",
            right: 0,
          },
          {
            label: "{2a + c + 4 = 18}",
            right: 0,
          },
          {
            label: "{4 - 2(a + c) = 18}",
            right: 0,
          },
        ],
      },
      {
        question:
          "\\text{La expresión }{(a + 2)^{2} + (a + 1)(a - 3)}\\text{ se factoriza como el producto de dos factores, tal que uno de ellos es }{(a + 1)}.\\newline\\text{¿Cuál de las siguientes expresiones corresponde al otro factor de la expresión?}",
        subject: "algebra",
        link_resolution: "https://www.youtube.com/embed/fhSir6Yd4pQ?start=196",
        imgDir: "no",
        answer: [
          {
            label: "{(2a - 2)}",
            right: 1,
          },
          {
            label: "{a^{2} - a - 2}",
            right: 0,
          },
          {
            label: "{a - 2}",
            right: 0,
          },
          {
            label: "{a^{2} + 3a - 2}",
            right: 0,
          },
        ],
      },
      {
        question: "\\text{¿Cuál de las siguientes expresiones es igual que } {(a + (b + c)) \\cdot (a + (b - c))}?",
        subject: "algebra",
        link_resolution: "https://www.youtube.com/embed/fhSir6Yd4pQ?start=1",
        imgDir: "no",
        answer: [
          {
            label: "{a^{2} + 2ab + b^{2} - c^{2}}",
            right: 1,
          },
          {
            label: "{a^{2} + b^{2} - c^{2}}",
            right: 0,
          },
          {
            label: "{a^{2} + a^{2}b^{2} + b^{2} - c^{2}}",
            right: 0,
          },
          {
            label: "{a^{2} + (b - c)^{2}}",
            right: 0,
          },
        ],
      },
      // {
      //   question:
      //     "\\text{En una tienda de mascotas se dispone de un monto máximo de \\$50000 para pagar la electricidad que se onsume en un mes.}\\newline\\text{La empresa eléctrica que suministra este servicio realiza el cobro, en pesos, mediante la función }{c(x) = 100x + 5000}\\text{ , siendo }{x}\\text{ la cantidad de kWh consumidos en el mes.}\\newline\\text{¿Cuál de los siguientes conjuntos contiene a todos y únicamente los posibles valores del consumo en kWh en el mes que se puede solventar con el montodisponible en esa tienda?}",
      //   subject: "algebra",
      //   link_resolution: "https://www.youtube.com/embed/fhSir6Yd4pQ?start=525",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label: "{\\lbrack 0, 450\\rbrack}",
      //       right: 1,
      //     },
      //     {
      //       label: "{\\lbrack 0, 450\\lbrack}",
      //       right: 0,
      //     },
      //     {
      //       label: "{\\lbrack 0, 550\\lbrack}",
      //       right: 0,
      //     },
      //     {
      //       label: "{\\lbrack 0, 5500\\rbrack}",
      //       right: 0,
      //     },
      //   ],
      // },
      {
        question:
          "\\text{En una frutería cada durazno cuesta \\$480 y cada mango cuesta \\$400 . Una persona gastó \\$6800 en total comprando solo 16 frutas entre duraznos y mangos.}\\newline\\text{¿Cuál de las siguientes ecuaciones permite determinar la cantidad }{x}\\text{ de duraznos que compró la persona?}",
        subject: "algebra",
        link_resolution: "https://www.youtube.com/embed/APzM_Ein_bE?start=2",
        imgDir: "no",
        answer: [
          {
            label: "{480x + 400(16 - x) = 6800}",
            right: 1,
          },
          {
            label: "{480x + 400(x - 16) = 6800}",
            right: 0,
          },
          {
            label: "{480x + 400x = 16}",
            right: 0,
          },
          {
            label: "{(480 + 400)x = 6800 + 16}",
            right: 0,
          },
        ],
      },
      {
        question: "\\text{¿Cuáles son las soluciones de la ecuación } {x^{2} -12x +35 = 0} ?",
        subject: "algebra",
        link_resolution: "https://www.youtube.com/embed/APzM_Ein_bE?start=197",
        imgDir: "no",
        answer: [
          {
            label: "{7 y 5}",
            right: 1,
          },
          {
            label: "{-7 y -5}",
            right: 0,
          },
          {
            label: "{-14 y -10}",
            right: 0,
          },
          {
            label: "{14 y 10}",
            right: 0,
          },
        ],
      },
      // {
      //   question:
      //     "\\text{Ignacio se dedica a vender productos encargados por sus clientes, que importa mediante una aplicación móvil. El precio de venta al que Ignacio vende los productos lo determina según la función }{P(x) = 1,5x + 2500}\\text{ , tal que }{x}\\text{ representa el precio, en pesos, al que compra el producto en la aplicación.}\\newline\\text{¿Cuál de las siguientes afirmaciones es verdadera?}",
      //   subject: "algebra",
      //   link_resolution: "https://www.youtube.com/embed/APzM_Ein_bE?start=496",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label:
      //         "\\text{Ignacio realiza un recargo de un }{50}\\% \\text{del precio del producto importado sin considerar ese recargo en el cargo fijo.}",
      //       right: 1,
      //     },
      //     {
      //       label:
      //         "\\text{Ignacio cobra un costo fijo de } {\\$(1,5 + 2500)} \\text{ a todos los productos que vende.}",
      //       right: 0,
      //     },
      //     {
      //       label:
      //         "\\text{Ignacio cobra un costo fijo de }{\\$1,5 \\cdot 2500)} \\text{ a todos los productos que vende.}",
      //       right: 0,
      //     },
      //     {
      //       label:
      //         "\\text{Ignacio realiza un recargo de }{1,5}\\% \\text{del precio del producto importado sin considerar el cargo fijo.}",
      //       right: 0,
      //     },
      //   ],
      // },
      // {
      //   question:
      //     "\\text{En una distribuidora envasaron 360 L de detergente líquido en bidones de 3 L y de 5 L de capacidad.}\\newline\\text{Si se ocuparon en total 100 bidones, ¿cuál de los siguientes valores es la diferencia entre la cantidad de bidones de distinta capacidad que se usaron?}",
      //   subject: "algebra",
      //   link_resolution: "https://www.youtube.com/embed/APzM_Ein_bE?start=550",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label: "{40}",
      //       right: 1,
      //     },
      //     {
      //       label: "{25}",
      //       right: 0,
      //     },
      //     {
      //       label: "{48}",
      //       right: 0,
      //     },
      //     {
      //       label: "{50}",
      //       right: 0,
      //     },
      //   ],
      // },
      {
        question:
          "\\text{Considera la ecuación }{3x - p = 2x + p + 1}.\\newline\\text{¿Cuál es el menor valor que puede tomar x para que p sea un número entero positivo?}",
        subject: "algebra",
        link_resolution: "https://www.youtube.com/embed/3-qEJz0wATs?start=762",
        imgDir: "no",
        answer: [
          {
            label: "{3}",
            right: 1,
          },
          {
            label: "{0}",
            right: 0,
          },
          {
            label: "{1}",
            right: 0,
          },
          {
            label: "{2}",
            right: 0,
          },
        ],
      },
      {
        question:
          "\\text{Considera el sistema }{\\begin{rcases} ax + by + 1 = 0 \\newline bx + ay + 1 = 0 \\end{rcases}}\\text{, en x e y , con a y b números reales distintos entre sí, distintos de cero y }{a \\mathrlap{/}{=} -b}.\\newline\\text{¿Cuál es la solución del sistema?}",
        subject: "algebra",
        link_resolution: "https://www.youtube.com/embed/3-qEJz0wATs?start=1083",
        imgDir: "no",
        answer: [
          {
            label: "{x = \\frac{-1}{a + b}; y = \\frac{-1}{a + b}}",
            right: 1,
          },
          {
            label: "{x = \\frac{1}{a + b}; y = \\frac{1}{a + b}}",
            right: 0,
          },
          {
            label: "{x = \\frac{-1}{a - b}; y = \\frac{-1}{a - b}}",
            right: 0,
          },
          {
            label: "{x = \\frac{-1}{a + b}; y = \\frac{1}{a + b}}",
            right: 0,
          },
        ],
      },
      /* {
        question:
          "\\text{Considera la ecuación } {(x -3)(x - 4) = 2}.\\newline \\text{¿Cuál de los siguientes argumentos es válido?}",
        subject: "algebra",
        link_resolution: "https://www.youtube.com/embed/3-qEJz0wATs?start=1227",
        imgDir: "no",
        answer: [
          {
            label:
              "\\text{Las soluciones de la ecuación son }{x = 2} y {x = 5} , \\text{porque }{(2 - 3)(2 - 4) = 2} y {(5 - 3)(5 - 4) = 2}.",
            right: 1,
          },
          {
            label:
              "\\text{La ecuación posee dos soluciones, porque } {x = 3} y {x = 4} \\text{ satisfacen la igualdad.}",
            right: 0,
          },
          {
            label:
              "\\text{Las soluciones de la ecuación son ambas positivas, porque el discriminante asociado a la ecuación es positivo.}",
            right: 0,
          },
          {
            label:
              "\\text{Las soluciones son } {x = 2} y {x = 5}\\text{, porque ambos valores satisfacen la ecuación }{x^{2} -7x +12 = 0}.",
            right: 0,
          },
        ],
      }, */
      // {
      //   // 16
      //   question:
      //     "\\text{Una empresa vende crema para las manos en envases con forma de cilindros rectos de 20 cm de altura y de distintos diámetros.}{\\newline}\\text{ Por una promoción se decide aumentar en su }{20}\\%\\text{ la capacidad de cada envase, manteniendo la altura de los envases cilíndricos. }\\newline\\text{¿Cuál de las siguientes funciones permite determinar el volumen de los nuevos envases, en }{cm^{3}}\\text{ , con r el radio del envase sin promoción, en cm?}",
      //   subject: "algebra",
      //   link_resolution: "https://www.youtube.com/embed/GFcXxDORRvo?start=162",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label: "{g(r) = 24 \\cdot r^{2} \\cdot \\pi}",
      //       right: 1,
      //     },
      //     {
      //       label: "{p(r) = 16 \\cdot r^{2} \\cdot \\pi}",
      //       right: 0,
      //     },
      //     {
      //       label: "{f(r) = 28,8 \\cdot r^{2} \\cdot \\pi}",
      //       right: 0,
      //     },
      //     {
      //       label: "{h(r) = 24 \\cdot r^{2} \\cdot \\pi}",
      //       right: 0,
      //     },
      //   ],
      // },
      // {
      //   // 17
      //   question:
      //     "\\text{Para cierta actividad se aconseja beber diariamente al menos 1 L de agua por cada 35 kg de masa corporal.}\\newline\\text{Para una persona de masa corporal P kg que tiene una botella de forma cilíndrica de diámetro 6 cm y altura 20 cm, ¿cuál de las siguientes expresiones permite determinar la cantidad de veces, en un día, que debe consumir el contenido de la botella llena de agua, para cumplir lo que se aconseja?}",
      //   subject: "algebra",
      //   link_resolution: "https://www.youtube.com/embed/GFcXxDORRvo?start=285",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label: "{\\frac{\\frac{P}{35} \\cdot 1000}{\\pi \\cdot 9 \\cdot 20}}",
      //       right: 1,
      //     },
      //     {
      //       label: "{\\frac{P}{\\pi \\cdot 36 \\cdot 20}}",
      //       right: 0,
      //     },
      //     {
      //       label: "{\\frac{P}{\\pi \\cdot 9 \\cdot 20}}",
      //       right: 0,
      //     },
      //     {
      //       label: "{\\frac{P}{35 \\pi \\cdot 9 \\cdot 20}}",
      //       right: 0,
      //     },
      //   ],
      // },
      // {
      //   // 18
      //   question:
      //     "\\text{Dos ciclistas viajan en sentidos opuestos en una misma carretera y en línea recta, uno al encuentro del otro. Se encuentran separados inicialmente por una distancia d , y la rapidez a la que se desplazan son v y w .} \\newline\\text{¿Cuál de las siguientes funciones permite calcular la distancia a la que están los dos ciclistas, antes de encontrarse, en función del tiempo t }?",
      //   subject: "algebra",
      //   link_resolution: "https://www.youtube.com/embed/3-qEJz0wATs?start=1168",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label: "{m(t) = d - (v + w)t}",
      //       right: 1,
      //     },
      //     {
      //       label: "{f(t) = (v -w)t - d}",
      //       right: 0,
      //     },
      //     {
      //       label: "{p(t) = d - (v - w)t}",
      //       right: 0,
      //     },
      //     {
      //       label: "{n(t) = (v -w)t - d}",
      //       right: 0,
      //     },
      //   ],
      // },
    ],
  },
  {
    name: "ensayo probabilidades",
    type: "probabilidades",
    questions: [
      {
        question:
          "\\text{El dinero total que tienen ahorrado tres amigas es  }{\\$210.000}\\text{. Se sabe que Claudia aporto el doble que Maria y que Yasna aporto el doble que Claudia. ¿Cual es el promedio de dinero aportado por Claudia y Yasna?}",
        subject: "probabilidades",
        link_resolution: "https://www.youtube.com/embed/OxgnJ-IgxA0?start=13136",
        imgDir: "no",
        answer: [
          {
            label: "{\\$90.000}",
            right: 1,
          },
          {
            label: "{\\$70.000}",
            right: 0,
          },
          {
            label: "{\\$45.000}",
            right: 0,
          },
          {
            label: "{\\$35.000}",
            right: 0,
          },
        ],
      },
      {
        question:
          "\\text{En la siguiente tabla se muestra la distribucion de las edades, en años, de un grupo de niños.}\\newline {\\begin{array}{c:c} \\text{Edad} & \\text{Frecuencia} \\newline 2 & 5 \\newline 3 & 6 \\newline  4 & 9 \\newline 5 & 3 \\newline  \\end{array}} \\newline\\text{¿Cuál es la mediana de edad de este grupo de niños?}",
        subject: "probabilidades",
        link_resolution: "https://www.youtube.com/embed/OxgnJ-IgxA0?start=13314",
        imgDir: "no",
        answer: [
          {
            label: "\\text{4 años}",
            right: 1,
          },
          {
            label: "\\text{3,5 años}",
            right: 0,
          },
          {
            label: "\\text{7,5 años}",
            right: 0,
          },
          {
            label: "\\text{9 años}",
            right: 0,
          },
        ],
      },
      {
        question:
          "\\text{Al lanzar un dado cargado, numerado del 1 al 6, la probabilidad de que salga un número par es el doble de la probabilidad de que salga un número impar. Si se lanza este dado, ¿cuál es la probabilidad de que salga un número impar?}",
        subject: "probabilidades",
        link_resolution: "https://www.youtube.com/embed/OxgnJ-IgxA0?start=14765",
        imgDir: "no",
        answer: [
          {
            label: "{\\frac{1}{3}}",
            right: 1,
          },
          {
            label: "{\\frac{1}{9}}",
            right: 0,
          },
          {
            label: "{\\frac{2}{3}}",
            right: 0,
          },
          {
            label: "{\\frac{2}{9}}",
            right: 0,
          },
        ],
      },
      {
        question:
          "\\text{En un mazo de cartas de naipes inglés 52 cartas, 13 de ellas son de trébol. Si se extraen del mazo dos cartas al azar, una despues de la otra y sin reposición, ¿cuál es la probabilidad de que ambas sean de trébol?}",
        subject: "probabilidades",
        link_resolution: "https://www.youtube.com/embed/OxgnJ-IgxA0?start=14941",
        imgDir: "no",
        answer: [
          {
            label: "{\\frac{13}{52} \\cdot \\frac{12}{51}}",
            right: 1,
          },
          {
            label: "{\\frac{13}{52} \\cdot \\frac{12}{52}}",
            right: 0,
          },
          {
            label: "{\\frac{13}{52} + \\frac{12}{52}}",
            right: 0,
          },
          {
            label: "{\\frac{13}{52} + \\frac{12}{51}}",
            right: 0,
          },
        ],
      },
      // {
      //   question:
      //     "\\text{A un grupo de personas se le consultó acerca de la cantidad de películas vistas el último mes. En la tabla adjunta se presenta la distribución de los resultados de dicha consulta.}\\newline {\\begin{array}{c:c} \\text{Cantidad de películas vistas el último mes} & \\text{Frecuencia} \\newline  1 & h \\newline  2 & 200 \\newline  3 & t \\newline  4 & 50 \\newline  \\end{array}} \\newline\\text{Si se agregan personas al grupo de tal manera que la frecuencia de todos los datos aumenta en un }{20}\\%\\text{, ¿cuál de las siguientes expresiones representa la cantidad total de personas que hay finalmente en el grupo?}",
      //   subject: "probabilidades",
      //   link_resolution: "https://www.youtube.com/embed/Kdr9QVeILdI?start=358",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label: "{300 + 1,2h + 1,2t}",
      //       right: 1,
      //     },
      //     {
      //       label: "{1,2h + 1,2t}",
      //       right: 0,
      //     },
      //     {
      //       label: "{300}",
      //       right: 0,
      //     },
      //     {
      //       label: "{12}",
      //       right: 0,
      //     },
      //   ],
      // },
      {
        question:
          "\\text{Los resultados de las dos primeras pruebas de matemática de Esteban son un 5,3 y un 5,9.}\\newline\\text{¿Cuál de las siguientes notas es la mínima que debe obtener Esteban en la tercera prueba para que su promedio sea de al menos un 5,9 en las tres pruebas?}",
        subject: "probabilidades",
        link_resolution: "https://www.youtube.com/embed/Kdr9QVeILdI?start=570",
        imgDir: "no",
        answer: [
          {
            label: "{6,5}",
            right: 1,
          },
          {
            label: "{6,2}",
            right: 0,
          },
          {
            label: "{6,1}",
            right: 0,
          },
          {
            label: "{5,9}",
            right: 0,
          },
        ],
      },
      // {
      //   question:
      //     "\\text{Se consultó a un grupo de 50 personas acerca de su sabor favorito de cierto tipo de helado. En la tabla adjunta se registran los resultados obtenidos.}\\newline {\\begin{array}{c:c} \\text{Sabor} & \\text{Frecuencia} \\newline  Vainilla & 9 \\newline  Chocolate & 15 \\newline  Frutilla & 6 \\newline  Manjar & 20 \\newline  \\end{array}}\\newline\\text{Si se elige a una de estas personas al azar, ¿cuál es la probabilidad de que su sabor favorito sea de vainilla o de frutilla?}",
      //   subject: "probabilidades",
      //   link_resolution: "https://www.youtube.com/embed/4-FdwiMge7Y?start=226",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label: "{\\frac{3}{10}}",
      //       right: 1,
      //     },
      //     {
      //       label: "{\\frac{9}{50} \\cdot \\frac{6}{50}}",
      //       right: 0,
      //     },
      //     {
      //       label: "{\\frac{1}{54}}",
      //       right: 0,
      //     },
      //     {
      //       label: "{\\frac{1}{15}}",
      //       right: 0,
      //     },
      //   ],
      // },
      // {
      //   question:
      //     "\\text{Una caja contiene seis tarjetas todas del mismo tipo y en cada una de ellas hay una palabra escrita. Las palabras escritas en cuatro de las tarjetas son: CLASE, SOL, TEMPRANO y LEON.}\\newline\\text{Se sabe que al extraer al azar una tarjeta de la caja la probabilidad de que la palabra escrita en ella tenga menos de tres letras vocales es }{\\frac{2}{3}}.\\newline\\text{¿Cuáles de las siguientes palabras podrían estar escritas en las otras dos tarjetas?}",
      //   subject: "probabilidades",
      //   link_resolution: "https://www.youtube.com/embed/4-FdwiMge7Y?start=275",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label: "\\text{CUADRILATERO y CANTO}",
      //       right: 1,
      //     },
      //     {
      //       label: "\\text{VASO y RED}",
      //       right: 0,
      //     },
      //     {
      //       label: "\\text{CINCO y SEIS}",
      //       right: 0,
      //     },
      //     {
      //       label: "\\text{PARALELOGRAMO y GIGANTESCO}",
      //       right: 0,
      //     },
      //   ],
      // },
      {
        question: "\\text{Si se lanzan tres monedas, ¿cuál es la probabilidad de obtener al menos un sello?}",
        subject: "probabilidades",
        link_resolution: "https://www.youtube.com/embed/4-FdwiMge7Y?start=355",
        imgDir: "no",
        answer: [
          {
            label: "{\\frac{7}{8}}",
            right: 1,
          },
          {
            label: "{\\frac{1}{3}}",
            right: 0,
          },
          {
            label: "{\\frac{1}{8}}",
            right: 0,
          },
          {
            label: "{\\frac{1}{2}}",
            right: 0,
          },
        ],
      },
      {
        question:
          "\\text{Una caja M contiene solo 3 bolitas rojas y 2 verdes, todas del mismo tipo y una caja N contiene solo una bolita roja y 3 bolitas verdes, todas del mismo tipo.}\\newline\\text{ Un experimento aleatorio consiste en lanzar un dado común, si sale un número par se extrae una bolita desde la caja M, en caso contrario se extrae una bolita de la caja N.}\\newline\\text{Si se realiza este experimento, ¿cuál es la probabilidad de extraer una bolita roja?}",
        subject: "probabilidades",
        link_resolution: "https://www.youtube.com/embed/3-qEJz0wATs?start=2875",
        imgDir: "no",
        answer: [
          {
            label: "{\\frac{17}{40}}",
            right: 1,
          },
          {
            label: "{\\frac{17}{20}}",
            right: 0,
          },
          {
            label: "{\\frac{1}{8}}",
            right: 0,
          },
          {
            label: "{\\frac{1}{4}}",
            right: 0,
          },
        ],
      },
      // {
      //   question:
      //     "\\text{Considera las tiendas A , B y C dedicadas a la venta de relojes. Si un cliente compra un reloj en una de estas tres tiendas, la probabilidad de que compre en A es 0,2 ; en B es 0,3 y en C es 0,5. Se sabe que la probabilidad de que cualquier reloj que se venda en las tiendas A, B y C tenga fallas es 0,3; 0,5 y 0,6 , respectivamente.}\\newline\\text{Si Teresa compra un reloj que no tiene fallas, ¿cuál es la probabilidad de que lo haya comprado en la tienda A?}",
      //   subject: "probabilidades",
      //   link_resolution: "https://www.youtube.com/embed/3-qEJz0wATs?start=2931",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label: "{\\frac{0,2 \\cdot 0,7}{0,2 \\cdot 0,7 + 0,3 \\cdot 0,5 + 0,5 \\cdot 0,4}}",
      //       right: 1,
      //     },
      //     {
      //       label: "{0,2 \\cdot 0,7}",
      //       right: 0,
      //     },
      //     {
      //       label: "{0,2 \\cdot 0,3}",
      //       right: 0,
      //     },
      //     {
      //       label: "{\\frac{0,2 \\cdot 0,3}{0,2 \\cdot 0,3 + 0,3 \\cdot 0,5 + 0,5 \\cdot 0,6}}",
      //       right: 0,
      //     },
      //   ],
      // },
      // {
      //   question:
      //     "\\text{Cada uno de los estudiantes de los terceros medios de un colegio lleva una botella individual para hidratarse, ya sea de agua o jugo.}\\newline\\text{Al seleccionar un estudiante de tercero medio de este colegio al azar, se puede determinar la probabilidad de que sea una mujer que lleva agua, si se sabe que:}\\newline\\text{(1) el }{60}\\%\\text{ de los estudiantes son hombres y de estos }{\\frac{5}{6}}\\text{ llevan agua.}\\newline\\text{(2) los }{\\frac{2}{3}}\\text{ de las mujeres llevan jugo.}",
      //   subject: "probabilidades",
      //   link_resolution: "https://www.youtube.com/embed/3-qEJz0wATs?start=3221",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label: "\\text{Ambas juntas, (1) y (2)}",
      //       right: 1,
      //     },
      //     {
      //       label: "\\text{(1) por sí sola}",
      //       right: 0,
      //     },
      //     {
      //       label: "\\text{(2) por sí sola}",
      //       right: 0,
      //     },
      //     {
      //       label: "\\text{Se requiere información adicional}",
      //       right: 0,
      //     },
      //   ],
      // },
      // {
      //   question:
      //     "\\text{De un grupo de 100 personas, 40 de ellas son fumadores. Un }{20}\\%\\text{ de los fumadores no presenta una enfermedad respiratoria. Al seleccionar una persona al azar del grupo total, la probabilidad de que presente una enfermedad respiratoria es 0,35.}\\newline\\text{Al seleccionar una persona al azar del grupo total, ¿cuál es la probabilidad de que no fume dado que no tiene una enfermedad respiratoria?}",
      //   subject: "probabilidades",
      //   link_resolution: "https://www.youtube.com/embed/3-qEJz0wATs?start=3006",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label: "{\\frac{57}{65}}",
      //       right: 1,
      //     },
      //     {
      //       label: "{\\frac{45}{60}}",
      //       right: 0,
      //     },
      //     {
      //       label: "{\\frac{57}{60}}",
      //       right: 0,
      //     },
      //     {
      //       label: "{\\frac{45}{65}}",
      //       right: 0,
      //     },
      //   ],
      // },
      {
        // 15
        question:
          "\\text{Sean A y B  dos sucesos tales que }{P(A) = \\frac{1}{2}, P(A \\cap B) = \\frac{1}{6} y 1 - P(B) = \\frac{2}{3}}\\text{. Entonces, }{P(A \\cup B) =}",
        subject: "probabilidades",
        link_resolution: "https://www.youtube.com/embed/jeAxuYbpmZ4?start=137",
        imgDir: "no",
        answer: [
          {
            label: "{\\frac{2}{3}}",
            right: 1,
          },
          {
            label: "{\\frac{4}{9}}",
            right: 0,
          },
          {
            label: "{\\frac{2}{9}}",
            right: 0,
          },
          {
            label: "{\\frac{5}{12}}",
            right: 0,
          },
        ],
      },
      {
        // 16
        question:
          "\\text{En un curso, todos los alumnos participan de por lo menos una actividad deportiva, que puede ser fútbol, atletismo o ambas. En el grupo de fútbol hay 32 alumnos del curso y en el grupo de atletismo hay 24 alumnos del curso, de los cuales la mitad pertenece además al grupo de fútbol. Al escoger un alumno al azar, ¿cuál es la probabilidad de que petenezca solamente al grupo de fútbol?}",
        subject: "probabilidades",
        link_resolution: "https://www.youtube.com/embed/jeAxuYbpmZ4?start=732",
        imgDir: "no",
        answer: [
          {
            label: "{\\frac{5}{11}}",
            right: 1,
          },
          {
            label: "{\\frac{5}{10}}",
            right: 0,
          },
          {
            label: "{\\frac{4}{7}}",
            right: 0,
          },
          {
            label: "{\\frac{3}{5}}",
            right: 0,
          },
        ],
      },
      // {
      //   // 17
      //   question:
      //     "\\text{En un cajón hay 12 pañuelos azules y una cierta cantidad de pañuelos blancos, todos de idéntica forma y sin la presencia de pañuelos de otros colores. Si la probabilidad de sacar al azar un pañuelo blanco es de }{\\frac{3}{5}}\\text{, ¿cuántos pañuelos hay en total en el cajón?}",
      //   subject: "probabilidades",
      //   link_resolution: "https://www.youtube.com/embed/jeAxuYbpmZ4?start=1412",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label: "{30}",
      //       right: 1,
      //     },
      //     {
      //       label: "{18}",
      //       right: 0,
      //     },
      //     {
      //       label: "{20}",
      //       right: 0,
      //     },
      //     {
      //       label: "{24}",
      //       right: 0,
      //     },
      //   ],
      // },
      {
        // 18
        question:
          "\\text{Si se lanza dos veces un dado común y se suman los resultados, la probabilidad de que dicha suma sea multiplo de 5 es:}",
        subject: "probabilidades",
        link_resolution: "https://www.youtube.com/embed/jeAxuYbpmZ4?start=2437",
        imgDir: "no",
        answer: [
          {
            label: "{\\frac{7}{35}}",
            right: 1,
          },
          {
            label: "{\\frac{2}{9}}",
            right: 0,
          },
          {
            label: "{\\frac{1}{108}}",
            right: 0,
          },
          {
            label: "{\\frac{7}{12}}",
            right: 0,
          },
        ],
      },
    ],
  },
  {
    name: "ensayo geometria",
    type: "geometria",
    questions: [
      {
        question:
          "\\text{Sean } {A(1,1)}, {B(5,3)} \\text{ y } {C} \\text{ los vértices de un triángulo. Se pueden determinar las coordenadas del vértice } {C} \\text{ del triángulo si se sabe que: }  {(1)} \\text{ Ángulo } {BAC = 90°} {(2)} \\text{El triángulo es isósceles y el vértice } {C} \\text{ esta en el cuarto cuadrante.}",
        subject: "geometria",
        link_resolution: "https://www.youtube.com/embed/OxgnJ-IgxA0?start=12325",
        imgDir: "no",
        answer: [
          {
            label: "{Ambas juntas, (1) y (2)}",
            right: 1,
          },
          {
            label: "{(2) por si sola}",
            right: 0,
          },
          {
            label: "{(1) por si sola}",
            right: 0,
          },
          {
            label: "{Se requier informacion adicional}",
            right: 0,
          },
        ],
      },
      {
        question:
          "\\text{Considere los vectores } {\\overrightarrow{u} = (-2,5)}, {\\overrightarrow{v} = (3, -2)}\\text{ y }{\\overrightarrow{c} = (-1,-4)}.\\newline \\text{¿Cual es el vector } {\\overrightarrow{u} + 2\\overrightarrow{v} - \\overrightarrow{c}}?",
        subject: "geometria",
        link_resolution: "https://www.youtube.com/embed/OxgnJ-IgxA0?start=9560",
        imgDir: "no",
        answer: [
          {
            label: "{(5,5)}",
            right: 1,
          },
          {
            label: "{(3,5)}",
            right: 0,
          },
          {
            label: "{(4,9)}",
            right: 0,
          },
          {
            label: "{(2,1)}",
            right: 0,
          },
        ],
      },
      {
        question:
          "\\text{Si el punto (a,b) es la imagen que se obtiene al trasladar el punto R según el vector} (m,n), \\text{¿cuáles son las coordenadas de R ?}",
        subject: "geometria",
        link_resolution: "https://www.youtube.com/embed/OxgnJ-IgxA0?start=9691",
        imgDir: "no",
        answer: [
          {
            label: "{(a - m, b - n)}",
            right: 1,
          },
          {
            label: "{(am, bn)}",
            right: 0,
          },
          {
            label: "{(m - a, n - b)}",
            right: 0,
          },
          {
            label: "{(a + m, b + n)}",
            right: 0,
          },
        ],
      },
      {
        question: "\\text{Con un cordel de largo d se forma un cuadrado. ¿Cuánto mide el area del un cuadrado ?}",
        subject: "geometria",
        link_resolution: "https://www.youtube.com/embed/m4qRM2mtjHA?start=480",
        imgDir: "no",
        answer: [
          {
            label: "{\\frac{d^2}{16}}",
            right: 1,
          },
          {
            label: "{\\frac{d^2}{2}}",
            right: 0,
          },
          {
            label: "{\\frac{d^2}{4}}",
            right: 0,
          },
          {
            label: "{\\frac{d^2}{8}}",
            right: 0,
          },
        ],
      },
      {
        question:
          "\\text{Dos figuras geométricas son homotéticas con razón de homotecia -3.}\\newline\\text{Si la figura original tiene un área de b} {cm^{2} } \\text{, ¿cuál es el área de la imagen homotética?}",
        subject: "geometria",
        link_resolution: "https://www.youtube.com/embed/3-qEJz0wATs?start=2263",
        imgDir: "no",
        answer: [
          {
            label: "{9b cm^{2}}",
            right: 1,
          },
          {
            label: "{\\frac{b}{3} cm^{2}}",
            right: 0,
          },
          {
            label: "{9b^{2} cm^{2}}",
            right: 0,
          },
          {
            label: "{3b cm^{2}}",
            right: 0,
          },
        ],
      },
      {
        question: "\\text{¿Para qué puntos (x, y) en el plano cartesiano se cumple } {\\frac{3x + y}{3} = x + y}?",
        subject: "geometria",
        link_resolution: "https://www.youtube.com/embed/3-qEJz0wATs?start=2348",
        imgDir: "no",
        answer: [
          {
            label: "\\text{Para los puntos de la forma (x, 0)}",
            right: 1,
          },
          {
            label: "\\text{Para los puntos de la forma (x, y)}",
            right: 0,
          },
          {
            label: "\\text{Solo para el punto (0, 0)}",
            right: 0,
          },
          {
            label: "\\text{Para ningún punto}",
            right: 0,
          },
        ],
      },
      {
        question:
          "\\text{¿Cuántos vectores (a, b) con coordenadas enteras y magnitud } {\\sqrt{5}} \\text{ hay en el plano cartesiano ?}",
        subject: "geometria",
        link_resolution: "https://www.youtube.com/embed/3-qEJz0wATs?start=2414",
        imgDir: "no",
        answer: [
          {
            label: "{8}",
            right: 1,
          },
          {
            label: "{2}",
            right: 0,
          },
          {
            label: "{4}",
            right: 0,
          },
          {
            label: "\\text{Infinitos}",
            right: 0,
          },
        ],
      },
      {
        question:
          "\\text{Al trasladar el punto (x, y) según el vector (p, q), se obtiene un punto en el segundo cuadrante.}\\newline\\text{¿Cuál de las siguientes relaciones es verdadera ?}",
        subject: "geometria",
        link_resolution: "https://www.youtube.com/embed/3-qEJz0wATs?start=2382",
        imgDir: "no",
        answer: [
          {
            label: "{x < -p} \\text{ e } {y > -q}",
            right: 1,
          },
          {
            label: "{x > -p} \\text{ e } {y < -q}",
            right: 0,
          },
          {
            label: "{x < p} \\text{ e } {y > q}",
            right: 0,
          },
          {
            label: "{x < -p} \\text{ e } {y < -q}",
            right: 0,
          },
        ],
      },
      // {
      //   question:
      //     "\\text{Se necesita determinar el perímetro del rectángulo ABCD, cuyo largo y ancho miden} {(4x + 1)}\text{cm y }{(x + 2)} \\text{cm, respectivamente.} \\newline \\text{Se sabe que ABCD es semejante a un rectángulo cuyo largo y ancho miden 10cm y 8cm, respectivamente.}\\newline\\text{Para determinar el perímetro del rectángulo ABCD se realiza el siguiente procedimiento, cometiéndose un error:} \\newline \\text{Paso 1: como los rectángulos son semejantes se plantea la expresión: } {\\frac{4x + 1}{8} = \\frac{x + 2}{10}}\\newline \\text{Paso 2: se resuelve la expresión anterior, obteniéndose } {x = \\frac{3}{16}} \\newline \\text{Paso 3: se reemplaza este valor de x en } {(4x + 1)} \\text{cm y } {(x + 2)} \\text{cm, obteniéndose que el largo y el ancho del rectángulo son } {\\frac{7}{4}} \\text{cm y }{\\frac{35}{16}} \\text{cm, respectivamente.}\\newline \\text{Paso 4: se calcula el perímetro del rectángulo obteniéndose } {\\frac{63}{8}}cm.\\newline \\text{¿En cuál de los pasos se cometió el error?}",
      //   subject: "geometria",
      //   link_resolution: "https://www.youtube.com/embed/3-qEJz0wATs?start=1758",
      //   imgDir: "no",
      //   answer: [
      //     {
      //       label: "\\text{En el Paso 1}",
      //       right: 1,
      //     },
      //     {
      //       label: "\\text{En el Paso 2}",
      //       right: 0,
      //     },
      //     {
      //       label: "\\text{En el Paso 3}",
      //       right: 0,
      //     },
      //     {
      //       label: "\\text{En el Paso 4}",
      //       right: 0,
      //     },
      //   ],
      // },
      {
        question:
          "\\text{La razón de semejanza entre las figuras P y Q, en ese orden, es } {\\frac{3}{5}}, \\text{ mientras que la razón de semejanza entre las figuras R y P , en ese orden, es } {\\frac{7}{3}} \\text{.} \\newline \\text{¿Cuál es la razón de semejanza entre las figuras R y Q, en ese orden?}",
        subject: "geometria",
        link_resolution: "https://www.youtube.com/embed/3-qEJz0wATs?start=1813",
        imgDir: "no",
        answer: [
          {
            label: "{\\frac{7}{5}}",
            right: 1,
          },
          {
            label: "{\\frac{44}{15}}",
            right: 0,
          },
          {
            label: "{\\frac{35}{9}}",
            right: 0,
          },
          {
            label: "{\\frac{26}{15}}",
            right: 0,
          },
        ],
      },
      {
        question:
          "\\text{A un punto P del plano cartesiano se le aplica una reflexión respecto al origen de este obteniéndose el punto Q, luego el punto Q se traslada según el vector } {\\overrightarrow{v} = (-2, 3)} \\text{ obteniéndose el punto R.} \\newline \\text{Si R tiene coordenadas} {(5, 4)} , \\text{¿cuáles son las coordenadas del punto P ?}",
        subject: "geometria",
        link_resolution: "https://www.youtube.com/embed/GFcXxDORRvo?start=560",
        imgDir: "no",
        answer: [
          {
            label: "{(-7,-1)}",
            right: 1,
          },
          {
            label: "{(3,7)}",
            right: 0,
          },
          {
            label: "{(7,-1)}",
            right: 0,
          },
          {
            label: "{(-3,-7)}",
            right: 0,
          },
        ],
      },
      /* {
        question:
          "\\text{Dentro de un sistema de coordenadas cartesianas se tienen los puntos A(2,3), B(5,8) y C(7,2).}\\newline\\text{¿Cuál es el área del triángulo ABC?}",
        subject: "geometria",
        link_resolution: "placeholder1",
        imgDir: "no",
        answer: [
          {
            label: "\\text{10 unidades cuadradas}",
            right: 0,
          },
          {
            label: "\\text{12 unidades cuadradas}",
            right: 1,
          },
          {
            label: "\\text{15 unidades cuadradas}",
            right: 0,
          },
          {
            label: "\\text{18 unidades cuadradas}",
            right: 0,
          },
        ],
      },
      {
        question:
          "\\text{¿Cuáles son las coordenadas del punto medio del segmento de línea que une los puntos (2,5) y (-4,1)?}",
        subject: "geometria",
        link_resolution: "placeholder2",
        imgDir: "no",
        answer: [
          {
            label: "(-1, 3)",
            right: 1,
          },
          {
            label: "(3, -1)",
            right: 0,
          },
          {
            label: "(1, -3)",
            right: 0,
          },
          {
            label: "(-3, 1)",
            right: 0,
          },
        ],
      },
      {
        question: "\\text{¿Cuál es la pendiente de la línea que pasa por los puntos (2,3) y (6,9)?}",
        subject: "geometria",
        link_resolution: "placeholder3",
        imgDir: "no",
        answer: [
          {
            label: "2",
            right: 1,
          },
          {
            label: "3",
            right: 0,
          },
          {
            label: "4",
            right: 0,
          },
          {
            label: "5",
            right: 0,
          },
        ],
      },
      {
        question: "\\text{Si un triángulo tiene una base de 8 unidades y una altura de 6 unidades, ¿cuál es su área?}",
        subject: "geometria",
        link_resolution: "placeholder4",
        imgDir: "no",
        answer: [
          {
            label: "\\text{24 unidades cuadradas}",
            right: 1,
          },
          {
            label: "\\text{12 unidades cuadradas}",
            right: 0,
          },
          {
            label: "\\text{18 unidades cuadradas}",
            right: 0,
          },
          {
            label: "\\text{30 unidades cuadradas}",
            right: 0,
          },
        ],
      }, */
    ],
  },
];
