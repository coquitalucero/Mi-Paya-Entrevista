/**
 * 
 * @param {Object} attrs 
 */
Element.prototype.set_attrs = function(attrs)
{
    Object.entries(attrs).forEach
    (
        (n) =>
        {
            this.setAttribute(n[0], n[1]);
        }
    )
    return this;
}
/**
 * 
 * @param {Object} styles 
 */
Element.prototype.set_styles = function(styles)
{
    Object.entries(styles).forEach
    (
        (n) =>
        {
            this.style.setProperty(n[0],n[1]);        
        }
    )
    return this;
}
Element.prototype.remove_styles = function(styles)
{
    Object.entries(styles).forEach
    (
        (n) =>
        {
            this.style.removeProperty(n[0]);
        }
    )
}
/**
 * 
 * @param {Array} styles 
 */
Element.prototype.set_childrens = function(childrens)
{
    childrens.forEach
    (
        (n) =>
        {
            var b = typeof n == "string";
            if(b)
            {
                this.innerHTML += n;
            }
            else
            {
                this.append(n);
            }            
        }
    )
    return this;
}
Element.prototype.SetImg = function(src) 
{
    this.set_styles
    ({
        background:`url('${src}') center center no-repeat`
    })
    return this;
}
Element.prototype.SetImgContain = function(src)
{
    this.set_styles
    ({
        background:`url('${src}') center center / contain no-repeat`
    })
    return this;
}
Element.prototype.SetBackImgContain = function(src) 
{
    this.set_styles
    ({
        'background-image':`url('${src}')`
        ,
        'background-size':'contain'
        ,
        'background-repeat':'no-repeat'
        ,
        'background-position':'center'
    })
    return this;
}
Element.prototype.SetImgDefault = function(src)
{
    this.set_styles
    ({
        background:`url('${src}')`
        ,
        'background-position':'0% 83%'
    })
    return this;
}
var pnow = 0;
Object.prototype.ID = function() 
{
	return pnow++;
}
class Vista
{
    constructor(tag = "div")
    {
        /**
         * @type { Element }
         */
        this.w = document.createElement(tag);
        this.w.set_attrs
        (
            {
                id: this.constructor.name + "_" + this.ID()
                ,
                _view: this.constructor.name
                ,
                _orientation: "vertical_center"
                ,
                onclick: "/*onclick*/"
                ,
                onchange: "/*onchange*/"
                ,
                _onloading: 'true'
            }
        )
        this.w.set_styles
        (
            {
                "--h": "auto"
                ,
                "--w": "auto"
                ,
                "--h_phone": "auto"
                ,
                "--w_phone": "auto"
                ,
                '--box_shadow': '2vw'
                ,
                '--box_shadow_color': 'black'
                ,
                '--border_radius':'0px'
                ,
                '--border_radius_phone':'0px'
                ,
                '--font_size':'2vw'
                ,
                '--padding':'0px'
                ,
                '--padding_phone':'0px'
                ,
                '--margin':'auto'
                ,
                '--margin_phone':'auto'
            }
        )
    }
}
class Botonsito extends Vista
{
    constructor(tag = "button")
    {
        var w = super(tag);
        w.set_styles
        ({
            "color":"red"
        })
        return w;
    }
}
window.addEventListener('load', function() {
	OnStart();
});
/**
 * @type {StartGameView}
 */
var start_game_view;
var on_start = [];
function OnStart ()
{
    start_game_view = new StartGameView()

    document.body.set_childrens
    ([
        start_game_view.w
    ])

    on_start.forEach
    (
        n =>{
            n.OnStart();
        }
    )

    /*
    var w = new Vista("div");
    var boton = new Botonsito();

    w
    .set_attrs
    ({
        "_orientation":"horizontal_center"
    })
    .set_styles
    ({
        "color":"blue"
    })
    .set_childrens
    ([
        "SOY UN DIV"
    ])

    boton
    .set_childrens
    ([
        "soy un botonsito"
    ])
    */
}