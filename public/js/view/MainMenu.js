class PayaButton extends Vista
{
    constructor(tag = "button")
    {
        super(tag);
        this.w.SetImgContain("public/img/DefaultButton.png");

        this.w.set_styles
        ({
            "width":"25vw"
            ,
            "height":"15vh"
        })
    }
}
class MainMenu extends Vista
{
    constructor(tag = "div")
    {
        super(tag);
        this.w.SetImgContain("public/img/FONDO DEL MENU.png");

        this.titulo = new Vista();
        this.titulo.w.set_styles
        ({
            "width":"70%"
            ,
            "height":"60%"
        })
        this.titulo.w.SetImgContain("public/img/Logo del juego.png");

        this.paya_button_play = new PayaButton();
        this.paya_content_play = new Vista();
        this.paya_button_salir = new PayaButton();
        this.paya_content_salir = new Vista();

        this.w.set_styles
        ({
            "width":"100vw"
            ,
            "height":"100vh"
            ,
            "background-size":"100vw 100vh"
        })

        this.estilo_comun = 
        {
            "width":"100%"
            ,
            "height":"100%"
        }

        this.paya_content_play.w.set_styles(this.estilo_comun);
        this.paya_content_salir.w.set_styles(this.estilo_comun);

        this.paya_content_play.w.SetImgContain("public/img/PLAY.png");
        this.paya_content_salir.w.SetImgContain("public/img/SALIR.png");

        this.paya_button_play.w.set_childrens
        ([
            this.paya_content_play.w
        ])
        .set_attrs
        ({
            onclick:`
            intro.w.remove_styles
            ({
                "display":""
            })
                ;
            main_menu.w.set_styles
            ({
                "display":"none"
            })
            `
        })

        this.paya_button_salir.w.set_childrens
        ([
            this.paya_content_salir.w
        ])

        this.paya_button_salir.w.set_attrs
        ({
            onclick:
            `
            window.close();
            `
        })

        this.w.set_childrens
        ([
            this.titulo.w
            ,
            new Vista().w.set_childrens
            ([
                this.paya_button_play.w
                ,
                this.paya_button_salir.w
            ])
            .set_attrs
            ({
                _orientation:"horizontal_center"
            })
            .set_styles
            ({
                "widht":"100%"
            })
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
var main_menu = new MainMenu();