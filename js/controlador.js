//Definición del json que contiene la base utilisada para este proyecto

var database = {
    "categorias": [
      {
        "categoria": "Clothes",
        "productos": [ 
            {
                "prodcuto" : 'Pants',
                "marcas" : [ {
                    "marca" : 'Gino',
                    "cantidad" : [140,233,485,100 ]
                },
                {
                    "marca" : 'Pepe',
                    "cantidad" : [256,478,120,200 ]
                },
                {
                    "marca" : 'Pacer',
                    "cantidad" : [354,100,842,354 ]
                } ]   
            },
            {
                "prodcuto" : 'Shirts',
                "marcas" : [ {
                    "marca" : 'Van Husen',
                    "cantidad" : [135,544,200,452 ]
                },
                {
                    "marca" : 'Polo',
                    "cantidad" : [325,120,480,500 ]
                },
                {
                    "marca" : 'Pacer',
                    "cantidad" : [100,250,300,450 ]
                } ]   
            },
            {
                "prodcuto" : 'Socks',
                "marcas" : [ {
                    "marca" : 'Red point',
                    "cantidad" : [100,200,300,400 ]
                },
                {
                    "marca" : 'Pacer',
                    "cantidad" : [100,250,80,150 ]
                },
                {
                    "marca" : 'The Calceta',
                    "cantidad" : [458,150,300,250 ]
                } ]   
            }
        ]
      },
      {
        "categoria": "Food",
        "productos": [ 
            {
                "prodcuto" : 'Beans',
                "marcas" : [ {
                    "marca" : 'Mini beans',
                    "cantidad" : [150,300,250,147 ]
                },
                {
                    "marca" : 'Progreso',
                    "cantidad" : [255,302,850,125 ]
                },
                {
                    "marca" : 'Yucanon',
                    "cantidad" : [350,120,230,400 ]
                } ]   
            },
            {
                "prodcuto" : 'Pizza',
                "marcas" : [ {
                    "marca" : 'Pizza hut',
                    "cantidad" : [100,250,300,400 ]
                },
                {
                    "marca" : 'Little Ceasars',
                    "cantidad" : [500,300,300,400 ]
                },
                {
                    "marca" : 'Papa Jhon',
                    "cantidad" : [780,200,350,400 ]
                } ]   
            },
            {
                "prodcuto" : 'Hamburgers',
                "marcas" : [ {
                    "marca" : 'BK',
                    "cantidad" : [100,200,300,400 ]
                },
                {
                    "marca" : 'Bigos',
                    "cantidad" : [100,200,200,400 ]
                },
                {
                    "marca" : 'McDonald',
                    "cantidad" : [350,200,150,400 ]
                } ]   
            }
        ]
      },
      {
        "categoria": "Cars",
        "productos": [ 
            {
                "prodcuto" : 'Pick up',
                "marcas" : [ {
                    "marca" : 'Hilux',
                    "cantidad" : [100,75,300,80 ]
                },
                {
                    "marca" : 'Amarok',
                    "cantidad" : [100,95,300,400 ]
                },
                {
                    "marca" : 'L200',
                    "cantidad" : [100,600,300,400 ]
                } ]   
            },
            {
                "prodcuto" : 'Turismos',
                "marcas" : [ {
                    "marca" : 'Corolla',
                    "cantidad" : [156,200,325,400 ]
                },
                {
                    "marca" : 'Elantra',
                    "cantidad" : [100,350,300,401 ]
                },
                {
                    "marca" : 'Civic',
                    "cantidad" : [100,540,300,320 ]
                } ]   
            },
            {
                "prodcuto" : 'Camionetas',
                "marcas" : [ {
                    "marca" : 'CRV',
                    "cantidad" : [300,150,300,400 ]
                },
                {
                    "marca" : 'Prado',
                    "cantidad" : [100,200,300,400 ]
                },
                {
                    "marca" : 'Montero',
                    "cantidad" : [50,200,250,172 ]
                } ]   
            }
        ]
      }
    ]
  };



//Configuración inicial del gráfico
  var options = {
	animationEnabled: true,
	title: {
		text: "Product sales per month"
	},
	axisY: {
		title: "Sales",
		suffix: "",
		includeZero: false
	},
	axisX: {
		title: ""
	},
	data: [{
		type: "column",
		yValueFormatString: "#,##0.0#"%"",
		dataPoints: [
			{ label: "January", y: 100 },	
			{ label: "Febraury", y: 50 },	
			{ label: "March", y: 300 },
			{ label: "April", y: 100 }
			
		]
	}]
};


  //Inicialización de select lists
  $( document ).ready(function() {
    console.log( database.categorias.length );
    for (i = 0; i < database.categorias.length; i++) {
        $('#cateogorias').append('<option value="' + i + '">' + database.categorias[i].categoria + '</option>');
        $('#productos').append('<option value="' + i + '">' + database.categorias[0].productos[i].prodcuto + '</option>');
        $('#marcas').append('<option value="' + i + '">' + database.categorias[0].productos[0].marcas[i].marca + '</option>');
    }

    datosChart();

    //Cambios en categoria
      $('#cateogorias').change(function() {
        $("#chartContainer").html('');
        $('#productos').html('');
        $('#marcas').html('');
        var idCategoria = this.value;
        for (i = 0; i < database.categorias[idCategoria].productos.length; i++) {
            $('#productos').append('<option value="' + i + '">' + database.categorias[idCategoria].productos[i].prodcuto + '</option>');
        }
        for (i = 0; i < database.categorias[$('#cateogorias').val()].productos[$('#productos').val()].marcas.length; i++) {
            $('#marcas').append('<option value="' + i + '">' + database.categorias[idCategoria].productos[$('#productos').val()].marcas[i].marca + '</option>');
        }
        datosChart();
      });
      
      //Cambios en producto
      $('#productos').change(function() {
        $('#marcas').html('');
        var idProducto = this.value;
        for (i = 0; i < database.categorias[$('#cateogorias').val()].productos[idProducto].marcas.length; i++) {
            $('#marcas').append('<option value="' + i + '">' + database.categorias[$('#cateogorias').val()].productos[idProducto].marcas[i].marca + '</option>');
        }
        datosChart();
      });
      
      $('#marcas').change(function(){
        datosChart();
      });
});


//Función para cambiar datos del gráfico y desplegarlo
function datosChart (){
    for (i = 0; i < 4; i++) {
        options.data[0].dataPoints[i].y = database.categorias[$('#cateogorias').val()].productos[$('#productos').val()].marcas[$('#marcas').val()].cantidad[i];
    }
    options.axisX.title = $('#productos option:selected').text() + ' ' + $('#marcas option:selected').text();
    $("#chartContainer").CanvasJSChart(options);
}