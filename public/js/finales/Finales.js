var estilo_const = 
{
    "width":"100vw"
    ,
    "height":"100vh"
    ,
    position:"Fixed"
    ,
    "background-size":"100% 100%"
}
;
var confirmar = 
`
var b = confirm('¿Desea volver a jugar?');
if(b)
{
    window.location.reload();
}
else
{

}
`
;
class FinalMalo extends Vista
{
    constructor(tag = "div")
    {
        super(tag);
        this.w.SetImgContain("public/gif/FINAL MALO GIF.gif")
        audio_player.src = 'public/musica/FINAL MALO.mp3';
        audio_player.play();
   
        this.w.set_styles
        (
            estilo_const
        )
        this.w.set_attrs
        ({
            onclick:confirmar
        })
    }
}
//var final_malo = new FinalMalo();
class FinalNormal extends Vista
{
    constructor(tag = "div")
    {
        super(tag);
        this.w.SetImgContain("public/gif/FINAL MEDIO MALO.gif");
        audio_player.src = "public/musica/FINAL NORMAL.mp3"
        audio_player.play();

        this.w.set_styles
        (
            estilo_const
        )
        this.w.set_attrs
        ({
            onclick:confirmar
        })
    }
}
//var final_normal = new FinalNormal();
class FinalBueno extends Vista
{
    constructor(tag = "div")
    {
        super(tag);
        this.w.SetImgContain("public/gif/FINAL BUENO GIF.gif");
        audio_player.src = "public/musica/FINAL BUENO.mp3"
        audio_player.play();

        this.w.set_styles
        (
            estilo_const
        )
        this.w.set_attrs
        ({
            onclick:confirmar
        })
    }
}
//var final_bueno = new FinalBueno();