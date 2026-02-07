class Intro extends Vista
{
    constructor (tag = "div")
    {
        super(tag);
        this.pathimg = "public/img/Historia.png";
        this.w.SetImgContain
        (
            this.pathimg
        )

        this.w.set_attrs
        ({
            onclick:
            `
                La_Toma.w.remove_styles
                ({
                    "display":""
                })

                intro.w.set_styles
                ({
                    "display":"none"
                })
            `
        })

        this.w.set_styles
        ({
            "width":"100vw"
            ,
            "height":"100vh"
            ,
            "background-size":"100vw 100vh"
            ,
            display : "none"
            ,
        })
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
var intro = new Intro();