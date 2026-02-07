class Space extends Vista
{
    constructor(tag = "div")
    {
        super(tag);
        this.w.set_styles
        ({
            "height":"3vh"
            ,
            "margin":"0"
            ,
            "pointer-events":"auto"
        })
    }
}
class PayaClase extends Vista
{
    constructor(tag = "div")
    {
        super(tag);
        this.w.set_styles
        ({
            width:`60vw`
            ,
            height:`100%`
            ,
            margin:`0`
            ,
            "pointer-events":"auto"
        })
    }
}
class PayaPuntos extends PayaClase
{
    constructor(tag = "div")
    {
        super(tag);

        this.w.set_attrs
        ({
            _hover:"self"
        })

        this.w.set_styles
        ({
            width:`50vw`
            ,
            height:`auto`
            ,
            margin:`0`
            ,
            "border-radius": "5vw"
            ,
            padding:"1vw"
        })
    }
}
class MemeZipZip extends Vista
{
    constructor(tag = "div")
    {
        super(tag);
        this.w.SetImgContain("public/gif/zipzipzip gif.gif")

        this.w.set_attrs
        ({
            id:"zipzip"
        })
        this.w.set_styles
        ({
            "width":"25vw"
            ,
            "height":"25vh"
            ,
            position:"Fixed"
            ,
            top:"10vh"
            ,
            left:"7vw"
            ,
            "background-size":"100% 100%"
        })
    }   
}
class MemePayaPerro extends Vista
{
    constructor(tag = "div")
    {
        super(tag);
        this.w.SetImgContain("public/gif/party!.gif")
        this.w.set_attrs
        ({
            id:"payaperro"
        })
        this.w.set_styles
        ({
            "width":"25vw"
            ,
            "height":"25vh"
            ,
            position:"Fixed"
            ,
            top:"10vh"
            ,
            left:"7vw"
            ,
            "background-size":"100% 100%"
        })
    }   
}
class Payasometro extends Vista
{
    constructor(tag = "div")
    {
        super(tag);
        
        this.puntos_obtenidos = 0;

        this.vacio = "public/img/payasometro/PAYASOMETRO VACIO.png";
        this.verde = "public/img/payasometro/PAYASOMETRO NIVEL VERDE.png";
        this.amarillo = "public/img/payasometro/PAYASOMETRO NIVEL AMARILLO.png";
        this.naranja = "public/img/payasometro/PAYASOMETRO NIVEL NARANJA.png";
        this.lleno = "public/img/payasometro/PAYASOMETRO NIVEL LLENO.png";
        
        this.w.SetImgContain(this.vacio);

        this.estilo =
        {
            "width":"100vw"
            ,
            "height":"100vh"
            ,
            position:"Fixed"
            ,
            "pointer-events":"none"
            ,
            "background-size":"100% 100%"
        }
        ;
        
        this.w.set_styles
        (
            this.estilo   
        )
    }
    SumarPuntos(puntos)
    {
        this.puntos_obtenidos += puntos;
        this.UpdateVista();
    }
    UpdateVista()
    {
        let p = this.puntos_obtenidos;
        if(p >= 99)
        {
            this.w.SetImgContain(this.lleno);
            this.w.set_styles
            (
                this.estilo   
            )
            return;
        }
        if(p > 75)
        {
            this.w.SetImgContain(this.naranja);
            this.w.set_styles
            (
                this.estilo   
            )
            return;
        }
        if(p > 50)
        {
            this.w.SetImgContain(this.amarillo);
            this.w.set_styles
            (
                this.estilo   
            )
            return;
        }
        if(p > 25)
        {
            this.w.SetImgContain(this.verde);
            this.w.set_styles
            (
                this.estilo   
            )
            return;
        }
        if(p > 0)
        {
            this.w.SetImgContain(this.vacio);
            this.w.set_styles
            (
                this.estilo   
            )
            return;
        }

        /*
        76 >=99 perfecto
        image = lleno
        return
        ______________ 76 puntos_obtenidos
        76>75 naranja
        image = naranja
        return
        _____________
        76>50 amarillo
        image = amarillo
        return
        ________________
        76 > 25 verde
        image = verde
        return
        _______________
        */
    }
    Fin_Juego()
    {
        let p = this.puntos_obtenidos;
        if(p >= 99)
        {
            La_Toma.w.set_styles
            ({
                display:"none"
            })
            document.body.set_childrens
            ([
                new FinalBueno().w
            ])            
            return;
        }
        if(p > 49)
        {
            La_Toma.w.set_styles
            ({
                display:"none"
            })
            document.body.set_childrens
            ([
                new FinalNormal().w
            ])
            return;
        }
        if(p > 0)
        {
            La_Toma.w.set_styles
            ({
                display:"none"
            })
            document.body.set_childrens
            ([
                new FinalMalo().w
            ])
            return;
        }
    }
}
var payasometro = new Payasometro();

class Rotaciones extends Vista
{
    constructor(tag = "div")
    {
        super(tag);

        this.actual = 0;
        this.indice =
        [
            new PayaClase().w.set_childrens
            ([
                `<b>Tú:</b> ¿Hola?`
            ])
            .set_attrs
            ({
                onclick:`rota_dialogos.Ir(1);`
            })
            ,
            new PayaClase().w.set_childrens
            ([
                "<b>Mr. Entrevistador:</b> … 😊"
            ])
            .set_attrs
            ({
                onclick:`rota_dialogos.Ir(2);`
            })
            ,
            new PayaClase().w.set_childrens
            ([
                "<b>Tú:</b> ¿Eres tú el Mister Entrevistador?"
            ])
            .set_attrs
            ({
                onclick:`rota_dialogos.Ir(3);`
            })
            ,
            new PayaClase().w.set_childrens
            ([
                `<b>Mr. Entrevistador:</b> 
                
                Oh no, lo acabo de despedir, soy su jefe
¿Cómo estás? ¿A qué has venido?

                `
            ])
            .set_attrs
            ({
                onclick:`rota_dialogos.Ir(4);`
            })
            ,
            new PayaClase().w.set_childrens
            ([
                new Space().w.set_styles
                ({
                    "height":"15vh"
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `🧐🧐 Seguro se lo merecía, yo estoy aquí para mi licencia de payaso 
                    y estoy preparado para NO cometer esos errores`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(0);
                    rota_dialogos.Ir(5);
                    `
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Bueno yo eh, vine a… eh… ¿Qué? 😳` 
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(1);
                    rota_dialogos.Ir(5);
                    `
                })
            ])
            ,
            new PayaClase().w.set_childrens
            ([
                ` <b>Mr. Entrevistador:</b> 
                … 😊… ☺️ … 🤭

                `
            ])
            .set_attrs
            ({
                onclick:
                `
                rota_dialogos.Ir(6);
                `
            })
            ,
              new PayaClase().w.set_childrens
            ([
                `
                <b>Mr. Entrevistador:</b> 
😂😂😂 
Debiste ver tu cara de payaso 
¡¿ Cómo le crees a un payaso?! 

                `
            ])
            .set_attrs
            ({
                onclick:
                `
                rota_dialogos.Ir(7);
                `
            })
            ,
            new PayaClase().w.set_childrens
            ([
                new Space().w.set_styles
                ({
                    "height":"15vh"
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Es que me tomaste por sorpresa 😅 (¡y me asustaste!)`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(0);
                    rota_dialogos.Ir(8);
                    `
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Un buen payaso le sigue la cuerda a otro payaso`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(10);
                    rota_dialogos.Ir(8);
                    `
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Cómo no creerte con ese traje`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(5);
                    rota_dialogos.Ir(8);
                    `
                })
            ])
            ,
            new PayaClase().w.set_childrens
            ([
                `
                <b>Mr. Entrevistador:</b> 
                ¡Perfecto! 😊… 
Un gusto soy Mister Entrevistador, listo para hacerte tu última paya-entrevista ¿Tú lo estás?
                `
            ])
            .set_attrs
            ({
                onclick:
                `
                rota_dialogos.Ir(9);
                `
            })
            ,
            new PayaClase().w.set_childrens
            ([
                new Space().w.set_styles
                ({
                    "height":"15vh"
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `¡Paya-listo para paya-responder tu paya-preguntas!`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(1);
                    rota_dialogos.Ir(10);
                    `
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `¡Estoy paya-listo! `
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(3);
                    rota_dialogos.Ir(10);
                    `
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Me ves aquí. Intentando conseguir una licencia de payaso… ¿Cómo me preguntas eso? 😂`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(10);
                    rota_dialogos.Ir(10);
                    `
                })
            ])
            ,
            new PayaClase().w.set_childrens
            ([
                `
                <b>Mr. Entrevistador:</b> 
                ¡Muy bien!  (Hace sonar su nariz: ¡Honk!)
Entonces, te pregunto ¿Que debe tener todo payaso en su bolsillo?

                `
            ])
            .set_attrs
            ({
                onclick:
                `
                rota_dialogos.Ir(11);
                `
            })
            ,
            new PayaClase().w.set_childrens
            ([
                new Space().w.set_styles
                ({
                    "height":"15vh"
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Su… ¿pañuelo? (Es lo más lógico) `
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(0);
                    rota_dialogos.Ir(12);
                    document.body.set_childrens
                    ([
                        new MemeZipZip().w
                    ])
                    `
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Su licencia de payaso 🤡`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(5);
                    rota_dialogos.Ir(12);
                    document.body.set_childrens
                    ([
                        new MemeZipZip().w
                    ])
                    `
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Mejor te lo demuestro... Te presento a Payalini Payasini, la nueva sensación en este siglo. `
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(10);
                    rota_dialogos.Ir(12);
                    document.body.set_childrens
                    ([
                        new MemeZipZip().w
                    ])
                    `
                })
                ,

            ])
            ,
            new PayaClase().w.set_childrens
            ([
                `
                <b>Mr. Entrevistador:</b> 
                ¡Buenísimo! 😊  
                Estamos hablando el mismo paya-idioma, ahora que hablamos de público joven ¿Conocerás a este meme?`
            ])
            .set_attrs
            ({
                onclick:
                `
                rota_dialogos.Ir(13);
                `
            })
            ,
            new PayaClase().w.set_childrens
            ([
                new Space().w.set_styles
                ({
                    "height":"15vh"
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `(Pero, ¿qué?)  Un gato verde… ¿no? 😅 `
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(0);
                    rota_dialogos.Ir(14);
                    zipzip.remove();
                    `
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `El gato zip zip zip 👽, clásico…`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(5);
                    rota_dialogos.Ir(14);
                    zipzip.remove();
                    `
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Ese gato la está rompiendo en Marte con sus TikToks desde júpiter`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(10);
                    rota_dialogos.Ir(14);
                    zipzip.remove();
                    `
                })
                ,
            ])
            ,
            new PayaClase().w.set_childrens
            ([
                `
                <b>Mr. Entrevistador:</b> 
                ¡Cool! Ahora, Misterrrrr tendencia.. Dime tus fortalezas y debilidades.
 😊  
                `
            ])
            .set_attrs
            ({
                onclick:
                `
                rota_dialogos.Ir(15);
                `
            })
            ,
            new PayaClase().w.set_childrens
            ([
                new Space().w.set_styles
                ({
                    "height":"15vh"
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Soy proactivo, divertido y genial persona, no tengo debilidades 🤗`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(0);
                    rota_dialogos.Ir(16);
                    `
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Soy chistoso, me encanta tu traje y me quedaría muy bien esa máscara ¿Debilidades? Soy muy honesto.
`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(10);
                    rota_dialogos.Ir(16);
                    `
                })
                ,
                
            ])
            ,
            new PayaClase().w.set_childrens
            ([
                `
                <b>Mr. Entrevistador:</b> 
                😊 Oh jojojo okey, okey, bueno vamos a ver tu paya-experiencia… 😊  
                `
            ])
            .set_attrs
            ({
                onclick:
                `
                rota_dialogos.Ir(17);
                `
            })
            ,
            new PayaClase().w.set_childrens
            ([
                new Space().w.set_styles
                ({
                    "height":"15vh"
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Trabajé en  circos ambulantes ¡Estoy listo para esto!`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(0);
                    rota_dialogos.Ir(18);
                    `
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Mírame y dime si no estoy experimentado… ¡Nací para esto!
`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(3);
                    rota_dialogos.Ir(18);
                    `
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Estoy graduado en “Chistes rápido IV” y salí con honores en “Teoría del meme y aplicaciones”.`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(10);
                    rota_dialogos.Ir(18);
                    `
                })
                ,
            ])
            ,

             new PayaClase().w.set_childrens
            ([
                `
                <b>Mr. Entrevistador:</b> 
                (Hace sonar su nariz: ¡Honk!)Hay talentoooo, entonces, dime ¿Cuál es tu especialidad payasística? 

 
                `
            ])
            .set_attrs
            ({
                onclick:
                `
                rota_dialogos.Ir(19);
                `
            })
            ,
             new PayaClase().w.set_childrens
            ([
                new Space().w.set_styles
                ({
                    "height":"15vh"
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Tengo maestría en globos de animales`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(0);
                    rota_dialogos.Ir(20);
                    document.body.set_childrens
                    ([
                        new MemePayaPerro().w
                    ])
                    `
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Puedo inflar globos con la oreja izquierda (¡Lo juro!) 
`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(10);
                    rota_dialogos.Ir(20);
                    document.body.set_childrens
                    ([
                        new MemePayaPerro().w
                    ])
                    `
                })
               
                ,
                
            ])
            ,
            new PayaClase().w.set_childrens
            ([
                `
                <b>Mr. Entrevistador:</b> 
                😳 Sin palabras. 
                Okey esta pregunta es rápida, no se duerma. Aquí, me puede decir ¿Cuál meme es este? 
  
                `
            ])
            .set_attrs
            ({
                onclick:
                `
                rota_dialogos.Ir(21);
                `
            })
            ,
            new PayaClase().w.set_childrens
            ([
                new Space().w.set_styles
                ({
                    "height":"15vh"
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `No pues, respete, tampoco me diga así, no salí tan mal.`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(10);
                    rota_dialogos.Ir(22);
                    payaperro.remove();
                    `
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `¿Es un perro? Con peluca? (¿De donde saca estas cosas?) 
`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(3);
                    rota_dialogos.Ir(22);
                    payaperro.remove();
                    `
                })
               
                ,
                
            ])
            ,
             new PayaClase().w.set_childrens
            ([
                `
                <b>Mr. Entrevistador:</b> 
                🤭Última pregunta, ahora sí, dígame: ¿Cuál es su meta cuando tenga su licencia de payaso?
  
                `
            ])
            .set_attrs
            ({
                onclick:
                `
                rota_dialogos.Ir(23);
                `
            })
            ,
             new PayaClase().w.set_childrens
            ([
                new Space().w.set_styles
                ({
                    "height":"15vh"
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Bueno... Tener trabajo siendo un chiste para todos je-je-je`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(1);
                    rota_dialogos.Ir(24);
                    `
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Hacer felices a todos (y que me paguen) 
`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(5);
                    rota_dialogos.Ir(24);
                    `
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Trabajar legalmente lo que llevo años haciendo sin licencia `
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(10);
                    rota_dialogos.Ir(24);
                    `
                })
                ,
            ])
            ,
               new PayaClase().w.set_childrens
            ([
                `
                <b>Mr. Entrevistador:</b> 
                ¿Usted no aprende cierto? ¿Cómo le cree a un payaso?  Esa no era la última pregunta 🤔

  
                `
            ])
            .set_attrs
            ({
                onclick:
                `
                rota_dialogos.Ir(25);
                `
            })
            ,
            new PayaClase().w.set_childrens
            ([
                new Space().w.set_styles
                ({
                    "height":"15vh"
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Es que no aprendo… Por eso sigo aquí... Aguantándolo...`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(10);
                    payasometro.Fin_Juego();
                    `
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `¡Oh! Bueno... ¡Venga esa pregunta!
`
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(1);
                    payasometro.Fin_Juego();
                    `
                })
                ,
                new PayaPuntos()
                .w.set_childrens
                ([
                    `Siempre confío en payasos oficiales ,lo siento  `
                ])
                .set_attrs
                ({
                    onclick:
                    `
                    payasometro.SumarPuntos(5);
                    payasometro.Fin_Juego();
                    `
                })
                ,
            ])
            ,
            
        ]
        ;
    }
    Current()
    {
        return this.indice[this.actual];
    }
    Ir(i)
    {
        this.actual = i;
        paya_dialogos.SetDialogo
        (
            this.indice[i]
        );
    }
    GetDialogo(este)
    {
        return this.indice[este]
    }
    FinDeJuego()
    {

    }
}
var rota_dialogos = new Rotaciones();

class PayaDialogo extends Vista
{
    constructor(tag = "div")
    {
        super(tag);
        this.w.SetImgContain("public/img/payasometro/nuevodialogo1.png");
        this.w.set_styles
        ({
            width:"70vw"
            ,
            height:"80vh"
            ,
            position:`fixed`
            ,
            "background-size":"100% 100%"
            ,
            top:"27vh"
            ,
            left:"25vw"
            
            ,
            "pointer-events":"none"
        })
        var dialogo = rota_dialogos.Current();
        this.SetDialogo(dialogo);
    }
    SetDialogo(dialogo)
    {
        this.w.innerHTML = "";
        this.w.set_childrens
        ([
            dialogo
        ])
    }
}
var paya_dialogos = new PayaDialogo();

class PayaEntrevistador extends Vista
{
    constructor(tag = "div")
    {
        super(tag);
        this.w.SetImgContain("public/img/personaje/PERSONAJE.png");
        this.w.set_styles
        ({
            width:"100vw"
            ,
            height:"100vh"
            ,
            position:"fixed"
            ,
            left:"16vw"
            ,
            "background-size":"100vw 100vh"
            ,
            "pointer-events":"none"
        })
    }
}
var paya_entrevistador = new PayaEntrevistador();

class Toma extends Vista
{
    constructor(tag = "div")
    {
        super(tag);
        this.w.SetImgContain("public/img/payasometro/Fondo del juego.png")
        this.w.set_styles
        ({
            "display":"none"
            ,
            "width":"100vw"
            ,
            "height":"100vh"
            ,
            "background-size":"100vw 100vh"
        })
        this.w.set_childrens
        ([
            paya_entrevistador.w
            ,
            payasometro.w
            ,
            paya_dialogos.w
        ])
        on_start.push(this);
    }
    OnStart()
    {
        document.body.set_childrens
        ([
            this.w
        ])
    }
}
var La_Toma = new Toma();