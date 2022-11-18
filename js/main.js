$(document).ready(function() {
    //Slider
    if (window.location.href.indexOf('index') > -1) { //UTILIZAMOS ESTA CONDICION EN .BXSLIDER Y POSTS PARA PODER UTILIZAR LOS TEMAS  o un js separado
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
        });
    }

    //parte de articulos
    //posts esto es un json + el moment cdn
    if (window.location.href.indexOf('index') > -1) {
        var posts = [{
                title: 'pueva de titulo 1',
                //Ya aplicado el plugin moment.js
                date: 'Publicado el ' + moment().format("MMMM dddd YYYY"),
                content: 'estoy aprendiendo js en la major parte  con json y entre otars cosas'
            },
            {
                title: 'pueva de titulo 2',
                date: moment().format("MMMM dddd YYYY"),
                content: 'estoy aprendiendo js en la major parte  con json y entre otars cosas'
            }, {
                title: 'pueva de titulo 3',
                date: moment().format("MMMM dddd YYYY"),
                content: 'estoy aprendiendo js en la major parte  con json y entre otars cosas'
            }, {
                title: 'pueva de titulo 4',
                date: moment().format("MMMM dddd YYYY"),
                content: 'estoy aprendiendo js en la major parte  con json y entre otars cosas'
            }
        ];


        //Recorremos el JSON
        posts.forEach((item, index) => {
            var post = `
            <article class="post">
            <h1>${item.title}</h1>
            <span class="date">${item.date}</span>
            <p> ${item.content} </p>
            <a href="#" class="button-more">Leer mas</a>
            </article>
        `;
            //lo aniadimos en nuestro posts ala pagina automaticamente
            $("#posts").append(post);
        });
    }

    //capturamos el evento para poder cambiar de tema
    //selector de tema
    var theme = $("#theme");
    $("#to-green").click(function() {
        //al dar click cambie el href
        theme.attr("href", "css/green.css")
    });

    $("#to-red").click(function() {
        theme.attr("href", "css/red.css")
    });

    $("#to-blue").click(function() {
        theme.attr("href", "css/blue.css")
    });

    //al dar click en ir ariba  suba suavemente
    $(".subir").click(function(e) {
        e.preventDefault();
        //subira hasta el tope y como parametro es el 0 y segundo parametro 600 tiempo de rapides
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    /*********** VALIDACION DE LOGIN falso   ************/
    $("#login form").submit(function() {
        var form_name = $("#form_name").val(); //obtenemo
        //guardamos en el localStore
        //ya temenos el valor en el localStore
        localStorage.setItem("form_name", form_name);

    });
    //recoge el valor del LocalStore y lo conpara con null
    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != "undefined") {
        var about_p = $("#about p");

        about_p.html("<br><strong> bienvenido," + form_name + "</strong>");
        about_p.append("<a href='#' id='logout'>Cerrar sesion</a>");
        //como es diferente a null  esconde el login
        $("#login").hide();

        //al dar click en cerrar nos va a borra las variables guardadas en el localstoreg y actualizar la pagina
        $("#logout").click(function() {
            localStorage.clear();
            //actuliza
            location.reload();
        });
    }

    /**************************ACORDION  *************/
    //solo caundo estemos en el about.html
    if (window.location.href.indexOf('about') > -1) {
        $('#acordion').accordion();
    }

    /*****************  RELOJ DE RELOJ.HTML  *******************************/
    if (window.location.href.indexOf('reloj') > -1) {
        // setInterval nos permite ejecuta un bucle cada sierto tiempo q se le indique por tiempos 
        setInterval(function() {
            var reloj = moment().format("MMMM  YYYY, h:mm:ss a ");
            $("#reloj").html(reloj);
        }, 100);

    }


});