class AudioPlayer extends Vista
{
    constructor(tag = "audio")
    {
        super(tag);
        this.w.set_attrs
        ({
            id:"audio_player"
        })
        this.w.set_attrs
        ({
            loop:""
        })
        this.source = new Vista("source");
        this.source.w.set_attrs
        ({
            id:"audio_source"
            ,
            src:"public/musica/Musica Payasistica Fondo.mp3"
            ,
            type:"audio/mpeg"
        })
        this.w.set_childrens
        ([
            this.source.w
            ,
            "Tu navegador no puede reproducir este audio."
        ])
    }
}
class StartGameView extends Vista
{
    constructor(tag = "div")
    {
        super(tag);
        this.w.set_styles
        ({
            width:"100vw"
            ,
            height:"100vh"
            ,
            "background-color":"rgba(0,0,0,0.5)"
            ,
            "color":"white"
            ,
            "position":"absolute"
        })
        .set_childrens
        ([
            "Click to Start Game"
        ])
        this.ap = new AudioPlayer();
        this.w.set_attrs
        ({
            onclick:
            `
                ${this.ap.w.id}.play();
                ${this.w.id}.set_styles
                ({
                    display:"none"
                })
            `
        })
        this.w.set_childrens
        ([
            this.ap.w
        ])
    }
}