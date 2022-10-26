// funcion para actualizar la web tomando datos de localstorage
function actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage){
    localStorage.setItem(nombreVarLocalStorage, obtParaLocalStorage)
}


try{
    //accion encomendada al icono menu que solo se ve en viewport chicos. 
document.querySelector('.menu-btn').addEventListener('click',() =>{
    document.querySelector('.nav-menu').classList.toggle('show');
})
}catch (error){
    console.log('No se cargó el menu de navegacion para pantallas pequeñas')
}




//////////// LOGIN ///////////////////////

const formLogin = document.getElementById("login")
const username = document.getElementById("username")
const password = document.getElementById("password")
const button = document.getElementById("entrar")
    
    //chequea si hay usuarios Registrados guardados en el localstorage 
    var users = JSON.parse(localStorage.getItem("users"))
    if(users === null){
        users = []
        console.log("NO hay Usuarios Registrados guardados en el LocalStorage")
    }else{
        // console.log(users)
        console.log("HAY Usuarios Registrados guardados en el LocalStorage")
    }


try{ 
    //OBTENGO DATOS del login guardados en el  LocalStorage y los ubican en los input deo form login
    var datossesion = JSON.parse(localStorage.getItem('login'))
    if(datossesion != null){
        username.value = datossesion.username
        password.value = datossesion.password
    }else{
        username.value = ""
        password.value = ""
    }


    //form para simular login y para guardar los datos del usuario en el locastorage
    button.addEventListener('click', (e) => {
        e.preventDefault()
        const datalogin = {
            username: username.value,
            password: password.value
        }
        // esto es una comparación entre lo guardado y el formulario.
        if(username.value == datossesion.username & password.value == datossesion.password){
            // var obtParaLocalStorage = JSON.stringify(datalogin)
            // var nombreVarLocalStorage = "login" 
            // actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)
            window.location = "index-tableros.html";
        } else {
            alert("Los datos sin incorrectos")
            formLogin.reset() //limpia el form login
        }
    })


    var formCrearUser = document.getElementsByName("formCrearUser")
    var buttonCrearUser = document.getElementById("crear")
 

 //formulario para REGISTRAR DATOS DE USUARIO. GUARDA LOS DATOS VALIDA Y ENTRA A AL INDEX TABLERO

     buttonCrearUser.addEventListener('click', (e) => {
         //validaciones de campos del form registro de usuarios.
         if(formCrearUser.userApellido.value == 0 ){
             alert("El campo Apellido es obligatorio")
         }else if (formCrearUser.userNombre.value == 0){
             alert("El campo Nombre es obligatorio")
         }else if (formCrearUser.userEmail.value == 0){
             alert("El campo Email es obligatorio")
         }else if (formCrearUser.userTelefono.value == 0){
             alert("El campo Teléfono es obligatorio")
         }else if(formCrearUser.userClave.value == 0){
             alert("El campo Clave es obligatorio")
         }else if (formCrearUser.userClave.value != formCrearUser.userRClave.value ){
             alert("las claves deben coincidir")
         }else{

         e.preventDefault()
         const dataUserNNuevo = {
            id: Date.now(),
            apellido: formCrearUser.userApellido.value,
            nombre: formCrearUser.userNombre.value,
            mail: formCrearUser.userEmail.value,
            telefono: formCrearUser.userTelefono.value,
            username: formCrearUser.userEmail.value,
            password: formCrearUser.userClave.value,
            color: '#77aaff',
            tipoUser: 'MIEMBRX'
             
         }

         users.push(dataUserNuevo)

         var obtParaLocalStorage = JSON.stringify(users)
         var nombreVarLocalStorage = "users" 
         actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

         const datalogin = {
             username: dataUserNuevo.username,
             password: dataUserNuevo.password
         }
         var obtParaLocalStorage = JSON.stringify(datalogin)
         var nombreVarLocalStorage = "login" 
         actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

         
         alert("Los datos fueron guardados con éxito, ya puedés ingresar a Lilo, bienvenido!!"+
         "\nGuardá tus tus datos de ingreso:\nUsuario: "+
         formCrearUser.userEmail.value+",\nPassword:"+formCrearUser.userClave.value)

         formCrearUser.reset() // limpia el form
         window.location = "index-tableros.html";
         
         // console.log(users)
         }
     })

}catch (error){
        console.log ("No se Obtubieron datos de usuario del localStorage. No se cargó el fomr Login")
}

////////// FIN LOGIN ////////////

try{
    //boton para cerrar el modal
    const btnCerrarModalGenerico = document.querySelector(".cerrar-modal-generico")
    btnCerrarModalGenerico.addEventListener("click",()=>{
        modalGenerico.close()
    })
} catch (error){
    console.log("no se escucha el modal")
}

/////////// TABLEROS ////////////

//obtiene las tareas y los tableros guardados
let tableroStorage = localStorage.getItem('tablerosHtml')

try{ 
    //cheque si hay tableros html no objetos guardados en el localstorage
    if(tableroStorage === null){
        console.log("no hay tableros guardados")
    }else{
        document.getElementById('tableros').innerHTML = tableroStorage

    }
}catch(error){
    console.log('En esta página no se cargan los tableros')
}

try {
/// CREAR TABLEROS //////

clickTabs()

///PARA NAVEGAR ENTRE LAS DIFERENTES PESTANIAS
function  clickTabs(){
    //hay que volver a cargar el array de elementos con las mismas clases
    let tabs = document.querySelectorAll('.tabs_toggle'),
    contents = document.querySelectorAll('.tabs_content');

    tabs.forEach((tab, index) => { 
    tab.addEventListener('click',  () => { 
    contents.forEach( (content) => {
        content.classList.remove( 'is-active'); 
    }); 
    tabs.forEach((tab) => {
        tab.classList.remove('is-active');
    });
    contents[index].classList.add('is-active'); 
    tabs[index].classList.add('is-active');
    var esto = tabs[index].style.background
    console.log(esto)
     contents[index].style.background = esto

    //para obtener el nombre del tablero
    document.querySelector('#tableroNombre').textContent = tabs[index].id
    // console.log(nombreTablero)
    
    var obtParaLocalStorage = document.getElementById("tableros").innerHTML
    var nombreVarLocalStorage = 'tablerosHtml' 
    actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)
});
});            
}

const tablerosGuardados = []
const dataTableroNuevo = {
    id: '',
    color: '',
    titulo: ''   
}


var formAgregarTablero = document.querySelector('#formAgregarTablero')
var elementoTabsBody = document.querySelector('#tabs_body_id') 
var elemetoTabsHead = document.querySelector('#tabs_head_id')
var btnFormAgregarTablero = document.querySelector('#btnAddTablero')

    // ESCUCHA EL BOTON TABLERO
    btnFormAgregarTablero.addEventListener('click', ()=>{
        if(formAgregarTablero.formTableroNombre.value === ''){
            alert('Tienes que ponerle un nombre al Tablero Nuevo')
        }else{
            //CREAR UN TABLERO
            var nombreTablero = formAgregarTablero.formTableroNombre.value.trim()

            dataTableroNuevo.id= Date.now(),
            dataTableroNuevo.titulo = formAgregarTablero.formTableroNombre.value.toUpperCase(),
            dataTableroNuevo.color = formAgregarTablero.formTableroColor.value.toUpperCase()

            agregarTablero()

            //se crea el elemento el titulo del tablero
            var elementoNewTabsHead = document.createElement("li")
            elementoNewTabsHead.style.background = dataTableroNuevo.color //formAgregarTablero.formTableroColor.value
            elementoNewTabsHead.classList.add('tabs_toggle')

            


            elementoNewTabsHead.innerHTML = `${formAgregarTablero.formTableroNombre.value}<button class="delete" onclick="removeTablero(event)">X</button>`
            elementoNewTabsHead.id = `${nombreTablero}`
            console.log(elementoNewTabsHead)
            elemetoTabsHead.appendChild(elementoNewTabsHead)
            console.log(elemetoTabsHead)
            var elementNewTabsBody = document.createElement("div")

            var tableroVacio = `<div id='boardlists' class="tabs_content">
            <div  class="board-list" > 
            <div class="list-title">QUE HACER</div>
            <div id='list1-${formAgregarTablero.formTableroNombre.value.trim()}'> <!--en este div se cargan las tareas nuevas -->
            </div>
            </div>
            <div id='list2-${formAgregarTablero.formTableroNombre.value.trim()}' class="board-list">  
            <div class="list-title">HACIENDO</div> 
            </div>
            <div id='list3-${formAgregarTablero.formTableroNombre.value.trim()}' class="board-list"> 
            <div class="list-title">HECHO</div></div></div>`

            elementNewTabsBody.innerHTML = tableroVacio
            elementoTabsBody.appendChild(elementNewTabsBody)
            formAgregarTablero.reset()

            var obtParaLocalStorage = document.getElementById("tableros").innerHTML
            var nombreVarLocalStorage = 'tablerosHtml' 
            actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

            clickTabs()

        }
    })

    function agregarTablero(){
        tablerosGuardados.push({...dataTableroNuevo})
        var obtParaLocalStorage = JSON.stringify(tablerosGuardados)
        var nombreVarLocalStorage = "tablerosObj" 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)
    }



}catch(error){
console.log('no se actualizaó tableros' + error)
}

    function removeTablero(event) {

        console.log(event.target.parentElement.id)
   
        document.querySelector("#modal-generico").innerHTML = 
        `<div>
        <p>¿Estás seguro que querés eliminar el tablero?</p>
        <button type="button" id="siEliminarTablero">Eliminar</button>
        <button type="button" id="noEliminaTablero">NO</button>
        </div>`
        document.querySelector("#modal-generico").showModal()
        document.querySelector("#siEliminarTablero").addEventListener('click',()=>{
            
            ///ACA ESTAS ELIMINANDO SOLO EL TITULO DEL TABLERO, TE FALTA ELMINAR EL CUERPO
            event.target.parentElement.remove()
            document.querySelector('.is-active').remove()
            modalGenerico.close()

            //actualiza el objeto tableros que está en el localstorage
            var obtParaLocalStorage = document.getElementById("tableros").innerHTML
            var nombreVarLocalStorage = 'tablerosHtml' 
            actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

            clickTabs()
        })
        document.querySelector("#noEliminaTablero").addEventListener('click',()=>{
            modalGenerico.close()
        })
    }

/////////// FIN TABLEROS //////////////

//////////// TAREAS /////////////


    // let listaTareas = [];
    // const objTarea = {
    //     id: '', 
    //     prioridad: '',
    //     usuario: '',
    //     descripcionTarea: '' 
    // } no se si voy a llegar a utiliar esto.

    var usuariosGuardados = JSON.parse(localStorage.getItem('users'))

try{
    // carga los usuarios registrados guardados en el local storage en el form de AGREGAR tareas
    for (let userOpcion of usuariosGuardados){
        var option = document.createElement("option")
        option.value = userOpcion.username
        option.innerHTML = `${userOpcion.username}` 
        // console.log(option)
        document.getElementById("formAgregarTareaUsuario").appendChild(option)
        }
    // carga los usuarios registrados guardados en el local storage en el form de EDITAR tareas
    for (let userOpcion of usuariosGuardados){
        var option = document.createElement("option")
        option.value = userOpcion.username
        option.innerHTML = `${userOpcion.username}` 
        // console.log(option)
        document.getElementById("formEditarUsuario").appendChild(option)
        }
} catch(error){
    console.log('en html usuarios no se carga')
}

// PARA AGREGAR TAREAS NUEVAS
try{
    const $form = document.getElementById("formAgregarTarea")
    
    const $btnAdd = document.getElementById("btnAddTarea")
    // console.log(nombreTablero)
    $btnAdd.addEventListener("click", (event) => {
        // const tableroNombre = document.getElementById('tableroNombre').value
        // console.log(nombreTablero)
        var nombreTablero =  document.querySelector('#tableroNombre').textContent
        const $divElements = document.getElementById("list1-"+nombreTablero)
        if($form.formAgregarTareaUsuario.value === '' && $form.formAgregarTareaDescripcion.value.trim() === ''){ 
            alert("Para agregar una Tarea tenés que completar todos los campos")
        }else if($divElements === null){
            alert("No has elegido un tablero. Para elegirlo hace click en el nombre del tablero.")
        }else{

            let colorUser
            var users = JSON.parse(localStorage.getItem("users"))
            // console.log($form.formAgregarTareaUsuario.value)

            users.map( usuario => {
                if( usuario.mail === $form.formAgregarTareaUsuario.value){
                    console.log(usuario.color)
                        colorUser =  usuario.color
                }
            })
            
            // console.log($divElements)
            const $div = document.createElement("div")
            $div.classList.add("card")
            $div.style.background = colorUser
            $div.id = "c"+Date.now()
            $div.draggable = true
            $div.innerHTML =
                `<div id="priodidad"><i class="fa-regular fa-clipboard"></i>-<strong>${$form.formAgregarTareaTipoPrioridad.value}</strong></div> 
                <div id="user"><i class="fa-solid fa-user"></i>-${$form.formAgregarTareaUsuario.value}</div>
                <div id="tarea"><i class="fa-solid fa-thumbtack">-</i>${$form.formAgregarTareaDescripcion.value.trim()}</div>
                <button type="button" class="delete" onclick= "editarTarea(event)">Editar</button>
            <button class="delete" onclick="removeElement(event)">X</button>`    
            $divElements.appendChild($div, $divElements.firstChild)
            document.getElementById("tituloformTarea").textContent = 'AGREGAR TAREA'
            $form.reset()

            var obtParaLocalStorage = document.getElementById("tableros").innerHTML
            var nombreVarLocalStorage = 'tablerosHtml' 
            actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)
            console.log('guardado tableros en localStorage')
        }
    
})

}catch (error){
console.log('no se cargaron eventos del formulario de tareas nuevas' + error)
}


    //FUNCION PARA AVISAR QUE SE ESTá POR ELMINAR TAREAS Y FUNCION PARA ELIMINAR TAREAS

    function removeElement(event) {
    
        document.querySelector("#modal-generico").innerHTML = 
        `<div>
        <p>¿Estás seguro que querés eliminar la tarea?</p>
        <button type="button" id="siEliminar">Eliminar</button>
        <button type="button" id="noEliminar">NO</button>
        </div>`
        document.querySelector("#modal-generico").showModal()
        document.querySelector("#siEliminar").addEventListener('click',()=>{
            event.target.parentElement.remove()
            modalGenerico.close()
            //actualiza el objeto tableros que está en el localstorage
            var obtParaLocalStorage = document.getElementById("tableros").innerHTML
            var nombreVarLocalStorage = 'tablerosHtml' 
            actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)
        })
        document.querySelector("#noEliminar").addEventListener('click',()=>{
            modalGenerico.close()
        })
    }

    try {
        // Función para editar tareas cargadas en los tableros.
        function editarTarea(event){
        // const editarTarea = document.querySelector('#editarTarea').addEventListener("click", (event) =>{
            console.log(event.target.parentElement.querySelector("#tarea").textContent)
            var datoPrioridad = event.target.parentElement.querySelector("#priodidad").textContent
            var datoUsuario = event.target.parentElement.querySelector("#user").textContent
            var datoTarea = event.target.parentElement.querySelector("#tarea").textContent.trim()
            //No se porque el valor viene con lo que parece el placeholder. averiguar por qué
            
            // const datosTarea = event.target.parentElement.querySelectorAll("div")
            document.getElementById("formAgregarTareaTipoPrioridad").value = datoPrioridad
            document.getElementById("formAgregarTareaUsuario").value = datoUsuario
            document.getElementById("formAgregarTareaDescripcion").value = datoTarea
            document.getElementById("tituloformTarea").textContent = 'EDITAR TAREA'
            // document.querySelector("#modal-formEditarTarea").showModal()

            event.target.parentElement.remove()

            // document.querySelector("#btnEdit").addEventListener('click',()=>{

            // datoPrioridad = document.getElementById("formEditarTipoPrioridad").value 
            // datoUsuario = document.getElementById("formEditarUsuario").value
            // datoTarea = document.getElementById("descripcionEditar").value 
            
            // document.querySelector("#modal-formEditarTarea").close()

            //})
            var obtParaLocalStorage = document.getElementById("tableros").innerHTML
            var nombreVarLocalStorage = 'tablerosHtml' 
            actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)


        }
    }catch(error){
        console.log('no se escucha editar tarea')
    }
        // const btnCerrarModalGenerico = document.querySelector(".cerrar-modal-generico")
        // btnCerrarModalGenerico.addEventListener("click",()=>{
        //     modalGenerico.close()
        // })
        // console.log(event)
    // }




    //Para trabajar con el localstorage. esto deberia cargar lo que se guardó en el localStorage. no funciona hay que seguir intentando.
    // const sesion =  document.getElementById('boardlists').innerHTML = JSON.parse(localStorage.getItem("list2"))
    
    /////// PARA MOVER LAS TAREAS DENTRO DE LAS COLUMNAS //////////

    // esto me sirve para mover las tarjetas entre las columnas
    /* Events fired on the drag target */
    document.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    };
    
    document.ondragend = function(event) {
    };
    
    /* Events fired on the drop target */
    document.ondragover = function(event) {
        event.preventDefault();
    };
    
    document.ondrop = function(event) {

        event.preventDefault();
        if ( event.target.className == "board-list" ) {
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
        var tableros = document.getElementById("tableros").innerHTML
                localStorage.setItem('tablerosHtml', tableros)
                // console.log(tableros)
        // para guardar en el localstorage lo que el usuario está trabajando.
        }
    }

////////////  FIN TAREAS /////////////

///////// USUARIOS ////////////////////

    //chequea si hay usuarios Registrados guardados en el localstorage 
    var users = JSON.parse(localStorage.getItem("users"))
    if(users === null){
        users = []
        console.log("NO hay Usuarios Registrados guardados en el LocalStorage")
    }else{
        console.log("HAY Usuarios Registrados guardados en el LocalStorage")
    }

    let editando = false;
    var $formUsers = document.getElementById("frmUsers")
    // const $btnSave = document.getElementById("btnSave")
    const $btnAdd = document.getElementById("btnAddUser")

    const $users = document.getElementById('menuUsers')


    var usuariosGuardados = JSON.parse(localStorage.getItem('users'))

    try{
        mostrarUsers()
        const dataUserNuevo = {
            id: '',
            apellido: '',
            nombre: '',
            mail:  '',
            telefono:'',
            username:'',
            password:'',
            color: '',
            tipoUser:''   
        }


        // PARA CREAR MIEMBROS EN PANTALLA USUARIOS       
        $btnAdd.addEventListener("click", () => {
            if($formUsers.formUserNewNombre.value === "" || $formUsers.formUserNewApellido.value === "" || $formUsers.formUserNewEmail.value === "" ||
                $formUsers.formUserNewTelefono.value === "" || $formUsers.formUserNewColor.value === "" || $formUsers.formUserNewTipoUsuario.value === "" 
                ){
                alert("Complete los campos")
                return
            }
            if(editando){
                editarUser()
                editando = false

            }else{
            
                dataUserNuevo.id= Date.now(),
                dataUserNuevo.apellido= $formUsers.formUserNewApellido.value.toUpperCase(),
                dataUserNuevo.nombre= $formUsers.formUserNewNombre.value.toUpperCase(),
                dataUserNuevo.mail= $formUsers.formUserNewEmail.value,
                dataUserNuevo.telefono = $formUsers.formUserNewTelefono.value,
                dataUserNuevo.username = $formUsers.formUserNewEmail.value,
                dataUserNuevo.password =  'falta',
                dataUserNuevo.color = $formUsers.formUserNewColor.value,
                dataUserNuevo.tipoUser =  $formUsers.formUserNewTipoUsuario.value    

                agregarUser()
            }
        })

    function agregarUser(){
        users.push({...dataUserNuevo})
        var obtParaLocalStorage = JSON.stringify(users)
        var nombreVarLocalStorage = "users" 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

        mostrarUsers()
        $formUsers.reset()
        limpiarObjUser()
        
    }

    function limpiarObjUser(){
        dataUserNuevo.id = ''
        dataUserNuevo.apellido = ''
        dataUserNuevo.nombre = ''
        dataUserNuevo.mail = ''
        dataUserNuevo.telefono = ''
        dataUserNuevo.username = ''
        dataUserNuevo.password = ''
        dataUserNuevo.color = ''
        dataUserNuevo.tipoUser = ''
    }
       
    function mostrarUsers(){
        limpiarHTML()
        const $divElements = document.querySelector(".listaUsers")
        users.forEach( usuario =>{
            const {id, apellido, nombre, mail, telefono, username, tipoUser, color } = usuario
            const $div = document.createElement("div")
            $div.classList.add("card")
            $div.draggable = true
            $div.innerHTML = 
            `<div>${tipoUser}</div><div><i class="fa-solid fa-fingerprint"></i>${id}</div>
            <div class="cardUserName" style="background:${color};"><i class="fa-solid fa-person-half-dress"></i>-<strong>${nombre}-${apellido}</strong></div>
            <div><i class="fa-solid fa-envelope"></i>-${mail}</div>
            <div><i class="fa-solid fa-user"></i>-${username}</div>
            <div><i class="fa-solid fa-phone"></i>-${telefono}</div>`

            const btnEditar = document.createElement('button')
            btnEditar.onclick = () => cargarUser(usuario)
            btnEditar.textContent = 'Editar'
            btnEditar.classList.add('btn-editar')
            $div.append(btnEditar)

            const btnEliminar = document.createElement('button')
            btnEliminar.onclick = () => eliminarUser(id)
            btnEliminar.textContent = 'Eliminar'
            btnEliminar.classList.add('btn-editar')
            $div.append(btnEliminar)
 
            $divElements.appendChild($div)
        })
    }
    
    function cargarUser(usuario){
        const {id, apellido, nombre, mail, telefono, username, tipoUser, color } = usuario

        $formUsers.formUserNewNombre.value = nombre
        $formUsers.formUserNewApellido.value = apellido
        $formUsers.formUserNewEmail.value = mail
        $formUsers.formUserNewTelefono.value = telefono
        $formUsers.formUserNewColor.value = color
        $formUsers.formUserNewTipoUsuario.value = tipoUser

        dataUserNuevo.id = id

        $btnAdd.textContent = "Actualizar"
        editando = true
    }
    
    function  editarUser(){

        dataUserNuevo.nombre = $formUsers.formUserNewNombre.value.toUpperCase()
        dataUserNuevo.apellido = $formUsers.formUserNewApellido.value.toUpperCase()
        dataUserNuevo.mail = $formUsers.formUserNewEmail.value 
        dataUserNuevo.telefono =  $formUsers.formUserNewTelefono.value 
        dataUserNuevo.color = $formUsers.formUserNewColor.value 
        dataUserNuevo.tipoUser = $formUsers.formUserNewTipoUsuario.value 

        users.map( usuario => {
            if(usuario.id === dataUserNuevo.id){

                usuario.id = dataUserNuevo.id
                usuario.tipoUser = dataUserNuevo.tipoUser
                usuario.apellido = dataUserNuevo.apellido
                usuario.nombre = dataUserNuevo.nombre
                usuario.mail = dataUserNuevo.mail
                usuario.telefono = dataUserNuevo.telefono
                usuario.username = dataUserNuevo.mail
                usuario.color = dataUserNuevo.color
            }
        })

        var obtParaLocalStorage = JSON.stringify(users)
        var nombreVarLocalStorage = "users" 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)


        // limpiarHTML()
        mostrarUsers()
        $formUsers.reset()
        
        $btnAdd.textContent = "Agregar"
        editando = true
    }

function eliminarUser(id){

    document.querySelector("#modal-generico-contenido").innerHTML = `<div><p>¿Estás seguro que querés eliminar este Usuario?</p><button type="button" onclick="siEliminar(${id})">Eliminar</button><button type="button" class= "cerrar-modal-generico"  onclick="noEliminar()">NO</button></div>`
    document.querySelector("#modal-generico").showModal()
}

function noEliminar(){

    modalGenerico.close()

}

// noEliminar

function siEliminar(id){
        users = users.filter(usuario => usuario.id !== id)
        modalGenerico.close()
        console.log(users)
        var obtParaLocalStorage = JSON.stringify(users)
        var nombreVarLocalStorage = "users" 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

        limpiarHTML()
        mostrarUsers()

}





function limpiarHTML() {
    const $divElements = document.querySelector(".listaUsers")
    while( $divElements.firstChild){
        $divElements.removeChild($divElements.firstChild)
    }
    
}
               



        // $btnSave.addEventListener("click", (event) =>{
        //     parameters = parameters.filter(el => el != null)
        //     const $jsonDiv = document.getElementById("jsonDiv")
        //     $jsonDiv.innerHTML = `JSON: ${JSON.stringify(parameters)}`
        //     $divElements.innerHTML = ""
        //     parameters = []
        // })


    }catch (error){
        console.log('no se cargaron eventos del formularios de usuario')
    }



/////////// FIN USUARIOS ///////////


// el modal
const modalGenerico = document.querySelector("#modal-generico")
const modalGenericoContenido = document.querySelector("#modal-generico-contenido")


////////////////// AGRADECIMIENTOS ////////////////

    const ventanaGracias = ` <h2>AGRADECIMIENTOS</h2>
    <p>
    Este site fue contruido gracias al aporte de los siguientes canales y personas que comparten su conocimiento 
    </p>
    <div>
    <a href="https://www.youtube.com/c/AsperosGeek" target="_blank" >Asperos Geek</a>
    </div>
    <div>
    <a href="https://www.youtube.com/user/jmarco2000" target="_blank" >Javier Marco</a>
    </div>
    <div>
    <a href="https://www.youtube.com/channel/UC019ue15AkWD0Nc0S5e1gcw"  target="_blank">Programando el Destino</a>
    </div>
    <div>
    <a href="https://bobtomlin-70659.medium.com"  target="_blank">Rob Tomlin</a>
    </div>
    <div>
    <a href="https://www.youtube.com/c/EnhanceCoding"  target="_blank">Enhance Coding</a>
    </div>
    <div>
    <a href="https://www.youtube.com/c/FaztTech"  target="_blank">Fazt</a>
    </div>
    <div>
    <a href="https://www.youtube.com/c/DorianDesings"  target="_blank">Dorian Desings </a>
    </div>
    <div>
    <a href="https://www.youtube.com/channel/UCfag1vW28FRLAp0JC6vkF8Q"  target="_blank">dev.xcheko51x
    </a>
    </div>
    <div>
    <a href="https://www.youtube.com/c/FalconMasters"  target="_blank">FalconMasters</a>
    </div>
    <div>
    <a href="https://www.youtube.com/c/midudev"  target="_blank">midudev</a>
    </div>
    <div>

    <a href="https://www.youtube.com/c/MozartGarcía"  target="_blank">Mozart García
    </a>
    </div>

    <div>

    </div>
    `

    try{

        btnAbrirModal = document.querySelector("#btn-abrir-modal-gracias")
        btnAbrirModal.addEventListener("click",()=>{
            modalGenericoContenido.innerHTML = ventanaGracias
            modalGenerico.showModal()
        })

    }catch(error){
        console.log('no se escucha el modal gracias')
    }

////////////////// FIN  AGRADECIMIENTOS ////////////////

var modalCalendar = document.querySelector("#modal-calendar")
try{
    var btnAbrirModal = document.querySelector("#btn-abrir-modal-calendario")
    btnAbrirModal.addEventListener("click",()=>{
        // modalGenericoContenido.innerHTML = ventanaCalendario
        modalCalendar.showModal()
    })

   

// Ejemplo
// const btnAbrirModalAyuda = document.querySelector("#btn-abrir-modal-ayuda")
// btnAbrirModalAyuda.addEventListener("click",()=>{
//     modalGenericoContenido.innerHTML = ventanaAyuda
//     modalGenerico.showModal()
// })
} catch (error){
    console.log("esto se deberia cargr en html tablero / usuarios / configuracion / ayuda")
}

//////////////// CALENDARIO///////////////////

    try{
        const date = new Date();

        const renderCalendar = () => {
        date.setDate(1);
        
        const monthDays = document.querySelector(".days");
        
        const lastDay = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDate();
        
        const prevLastDay = new Date(
            date.getFullYear(),
            date.getMonth(),
            0
        ).getDate();
        
        const firstDayIndex = date.getDay();
        
        const lastDayIndex = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDay();
        
        const nextDays = 7 - lastDayIndex - 1;
        
        const months = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ];
        
        document.querySelector(".date h1").innerHTML = months[date.getMonth()];
        
        document.querySelector(".date p").innerHTML = new Date().toDateString();
        
        let days = "";
        
        for (let x = firstDayIndex; x > 0; x--) {
            days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
        }
        
        for (let i = 1; i <= lastDay; i++) {
            if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
            ) {
            days += `<div class="today">${i}</div>`;
            } else {
            days += `<div>${i}</div>`;
            }
        }
        
        for (let j = 1; j <= nextDays; j++) {
            days += `<div class="next-date">${j}</div>`;
            monthDays.innerHTML = days;
        }
        };
        
        document.querySelector(".prev").addEventListener("click", () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
        });
        
        document.querySelector(".next").addEventListener("click", () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
        });
        
        renderCalendar();

        } catch (error){
        console.log('No e cargó el calendario')
    }
/////////// FIN  CALENDARIO///////////////////

/////////////////////////RESTOS DE CODIGO QUE NO SE USA////////////////////////

// try{
// //boton para llamar al modal
// const btnAbrirModalGenerico = document.querySelector("#abrir-modal-generico")
// btnAbrirModalGenerico.addEventListener("click",()=>{
  
//     modalGenerico.showModal()
// })
// } catch (error){
//     console.log("este modal es de la pagina de bienvenida")
// }





         
// este codigo esta bueno pero no me funcióno.         
// const newLocal = 'tareaNueva';
// // drag and drop tareas entre columnas

// const tarea = document.getElementById(newLocal);

// const columnaHaciendo = document.getElementById('haciendoColumna');

// columnaHaciendo.addEventListener('drageneter', e => {
//     console.log('drga enter');
// });
// columnaHaciendo.addEventListener('dragleave', e => {
//     console.log('drag leave');
// });

// columnaHaciendo.addEventListener('dragover', e => {
//     e.preventDefault();
//     console.log('drag over');
// });

// columnaHaciendo.addEventListener('drop', e => {
    
//     columnaHaciendo.parentNode.appendChild(tarea);
//     console.log('drop');
// });
 

