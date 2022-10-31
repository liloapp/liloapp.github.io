////////////// SE CARGA EN TODAS LAS PAGINAS  ///////////

console.log("HOLA, soy la linea uno de la consola :)")

// funcion para actualizar obj o arrys guardados en el LocalStorage
function actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage){
    localStorage.setItem(nombreVarLocalStorage, obtParaLocalStorage)
}

// Este modal se usa para todas las comunicaciones flotantes
modalGenerico = document.querySelector("#modal-generico")
modalGenericoContenido = document.querySelector("#modal-generico-contenido")

// para cerrar las ventanas modal
function noEliminar(){
    modalGenerico.close()
}

try{
//escucha el menu para viewport pequeños
document.querySelector('.menu-btn').addEventListener('click',() =>{
    document.querySelector('.nav-menu').classList.toggle('show');
})
}catch(err){
    console.log('estan pagina no se usa .menu-btn')
}

//////////// CHEQUEOS DE LOCAL STORAGE ///////////////////////

//CHEA SI E EXISTE USERS
console.log("-Controlando si existe users en el LocalStorage-")
if(localStorage.getItem('users')){
    var users = JSON.parse(localStorage.getItem('users'))
    console.log("-Users SI existe :), cargando el array users con el array users-" + users)
}else{
    users = []
    console.log("-Users NO existe :(, creando el array users y guardándolo en el localStorage")
    obtParaLocalStorage = JSON.stringify(users)
    nombreVarLocalStorage = "users" 
    actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage) 
}

//CHEQUEA SI EXISTE LOGIN
console.log("-Controlando si existe login en el LocalStorage-")
if(localStorage.getItem('login')){
    datossesionGuardado = JSON.parse(localStorage.getItem('login'))
    
    console.log("-login SI existe :), cargando el obj datossesionGuardado con el obj login-" + datossesionGuardado)

}else{
    console.log("-login NO existe :(, creando el obj datossesionGuardado y guardándolo en el localStorage")
    datossesionGuardado = {
        username: '',
        password: ''
    }

    obtParaLocalStorage = JSON.stringify(datossesionGuardado)
    nombreVarLocalStorage = "login" 
    actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage) 

    alert('Para ingresar tenés que inicar sesión. Si todavia no tenés usuarios registrate.')
    window.location = "index.html"  

}

/// CHEQUEA SI EXISTE TABLEROSHTML    
console.log("-Controlando si existe tableroHtml en el LocalStorage-")
if(localStorage.getItem('tablerosHtml')){

    tableroStorage = localStorage.getItem('tablerosHtml')
                
    console.log("-tablerosHtml SI existe :), cargando el obj tableroStorage con el obj tableroStorage-" + tableroStorage)
    // clickTabs()

    if(document.getElementById('tableros')){
    document.getElementById('tableros').innerHTML = tableroStorage
    console.log("-Cargado tableroHtml en Html Tableros :), hecho!-")
    }else{
        console.log("-En este html no se carga tablerosHtml :| -")
    }
    // mostrarTableros()
}else{

    // mostrarTableros()
    // obtParaLocalStorage = document.getElementById("tableros").innerHTML
    // nombreVarLocalStorage = 'tablerosHtml' 
    // actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

    console.log("-tablerosHtml NO existe, creando el obj tablerosHtml y guardándolo en el localStorage, hecho! -")

}



if(localStorage.getItem('tablerosObj')){
    tablerosGuardados = JSON.parse(localStorage.getItem('tablerosObj'))

}else{

    tablerosGuardados = []
    obtParaLocalStorage = JSON.stringify(tablerosGuardados)
    nombreVarLocalStorage = 'tablerosObj' 
    actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage) 
}



// CHEQUEA SI EXISTE TAREAS
console.log("-Controlando si existe tareas en el LocalStorage-")
if(localStorage.getItem('tareas')){

    var tareas = JSON.parse(localStorage.getItem('tareas'))
    console.log('-Tareas SI existe :)-')

       /// acá iria lo que necesite hacer con tareas. por el momento no la estoy llamando. porque estoy usando tareas html y las tareas se están guardando en el string de tablerosHtml

}else{

    tareas = []
    var obtParaLocalStorage = JSON.stringify(tareas)
    var nombreVarLocalStorage = "tareas" 
    actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage) 

    console.log('-Tareas NO existe :(, creando array tareas y guardando en LocalStorage, Hecho! :)-')
}

objTareaNueva = {
    id: '',
    user: '',
    prioridad: '',
    tablero: '',
    descripcion:  '',
    titulo:'',
    estado:'',
    // password:'',
    // color: '',
    // tipoUser:''   
}
console.log("-Creando obj objTareaNuevae. hecho! :)-")


//////// FIN CHEQUEOS LOCAL STORAGE ////////////

// se carga en todas los html menos en index 
const modalPerfil = 
`<div class = "card">
<h5>TU PERFIL</h5>
<div>
    <div>
        <label><strong>ID User</strong></label>
        <div id="userIdPerfil"></div>
    </div>
    <div>
        <label><strong>Tipo de Usuario</strong></label>
        <div id="userTipoPerfil"></div>
    </div>
    <div>
        <label><strong>Apellido</strong></label>
        <div id="userApellidoPerfil"></div>
    </div>
    <div>
        <label><strong>Nombre</strong></label>
        <div id="userNombrePerfil"></div>
    </div>
    <div>
        <label><strong>E-mail</strong></label>
        <div id="userEmailPerfil"></div>
    </div>
    <div>
        <label><strong>Telefono</strong></label>
        <div id="userTelefonoPerfil"></div>
    </div>
    <div>
        <label><strong>Pass</strong></label>
        <div id="userClavePerfil"></div>
    </div>
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">cerrar</button>
    <button type="button" class="btn btn-secondary"onclick = "cerrarSesion()" ><i class="fa-solid fa-right-from-bracket"></i></button>
</div>
</div>`


function abrilModalPerfil(){
    modalGenericoContenido.innerHTML = modalPerfil 
    modalGenerico.showModal()
    mostrarperfil()   
}


function mostrarperfil(){
    //obtener todos los datos del usuario sacandolos de 
    console.log(users)
    console.log("-"+document.getElementById('userSesion').textContent+"-")
    users.map( usuario => {
        if( usuario.username === document.getElementById('userSesion').textContent  ){
            document.getElementById("userIdPerfil").innerHTML = usuario.id
            document.getElementById("userTipoPerfil").innerHTML = usuario.tipoUser
            document.getElementById("userApellidoPerfil").innerHTML = usuario.apellido
    document.getElementById("userNombrePerfil").innerHTML = usuario.nombre
    document.getElementById("userEmailPerfil").innerHTML = usuario.mail
    document.getElementById("userTelefonoPerfil").innerHTML = usuario.telefono
    document.getElementById("userClavePerfil").innerHTML = usuario.password
        }
    })
}

////////////////// MODAL GRACIAS ////////////////

    const ventanaGracias = ` <div class="card">
    <h4>GRACIAS!!</h4>
    <p>
    Este site fue contruido gracias al aporte de los siguientes canales y personas que comparten sus conocimientos. 
    </p>

    </div>
    <div class="link-canales">
    <div>
    <a href="https://www.buenosaires.gob.ar/educacion/codocodo/el-programa" target="_blank" >Codo a codo 4.0</a>
    </div>
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

    <div class="modal-footer">
    <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">Cerrar</button>
    </div>
    `

try{

    btnAbrirModalGracias = document.querySelector("#btn-abrir-modal-gracias")
    btnAbrirModalGracias.addEventListener("click",()=>{
        modalGenericoContenido.innerHTML = ventanaGracias
        modalGenerico.showModal()
    })

}catch(error){
    console.log('no se escucha el modal gracias')
}

//////////// FIN  MODAL GRACIAS ///////////////////////

//////// INDEX LOGIN ///////////////////
    // try{
        if(document.getElementById("username")){
        formLoginUsername = document.getElementById("username")
        formLoginPassword = document.getElementById("password")

        formLoginUsername.value = datossesionGuardado.username
        formLoginPassword.value = datossesionGuardado.password
        }
    // }catch(error){
    //     console.log('En esta pagina no hay form login' + error)
    // }

    //var button = document.getElementById("entrar")
    //var formLogin = document.getElementById("login")

    var usuarioSesion, passwordSesion , datalogin
    function entrarSesion(){
        console.log('-Chequeando si login coincide con usuario guardado-')
        users.map(usuario =>{
        if(usuario.username === formLoginUsername.value && usuario.password === formLoginPassword.value ){      
            usuarioSesion = usuario.username
            passwordSesion = usuario.password 
        }
        })

        if(username.value === usuarioSesion && password.value === passwordSesion){
            
            console.log('-Coincide, entrando a html tableros :) -')
            datossesionGuardado = {
            username: formLoginUsername.value,
                password: formLoginPassword.value
            }
            var obtParaLocalStorage = JSON.stringify(datossesionGuardado)
            var nombreVarLocalStorage = "login" 
            actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage) 
           
            window.location = "index-tableros.html";

        }else{

         console.log('-No Coincide :(, limpiando form logi y avisando x alert-')
            alert("Los datos son incorrectos")
            formLoginUsername.value = ""
            formLoginPassword.value = ""
        }
    }
    
    document.getElementById('userSesion').textContent = datossesionGuardado.username

    function sinSecionActiva(){
        alert('Para trabajar en lilo tenés que iniciar una sesión. si no tenes usuarios registrate en la pagina de Bienvenida con el form Registrate.')
        window.location.href = "index.html"
        
    }


    function cerrarSesion(){
        
        datossesionGuardado = {
            username: '',
            password: ''
        }
        obtParaLocalStorage = JSON.stringify(datossesionGuardado)
        nombreVarLocalStorage = "login" 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage) 
        
        console.log('-Cerrando sesión de usuarioSesion :(. Limpiando obj datossesionGuardado, hecho!')
        window.location = "index.html";
    }


try{ 
 
 //ESTO ES UN FORMULARIO PARA REGISTRAR UN USUARIO, GUARDAR  SUS DATOS EN EL LOCALSTORAGE Y ENTRAR AL HTML INDEX-TABLEROS

function creaUser(){ 
   
    formCrearUser = document.getElementsByName("formCrearUser")
     buttonCrearUser = document.getElementById("crear")
     userApellido = document.getElementById('userApellido')
     userNombre = document.getElementById('userNombre')
     userEmail = document.getElementById('userEmail')
     userTelefono = document.getElementById('userTelefono')
     userClave = document.getElementById('userClave')
     userRClave = document.getElementById('userRClave')

    //validaciones de campos del form registro de usuarios.
    if(userApellido.value == 0 ){
        alert("El campo Apellido es obligatorio")
    }else if (userNombre.value == 0){
        alert("El campo Nombre es obligatorio")
    }else if (userEmail.value == 0){
        alert("El campo Email es obligatorio")
    }else if (userTelefono.value == 0){
        alert("El campo Teléfono es obligatorio")
    }else if(userClave.value == 0){
        alert("El campo Clave es obligatorio")
    }else if (userClave.value != userRClave.value ){
        alert("las claves deben coincidir")
    }else{

    dataUserNuevo = {
    id: Date.now(),
    apellido: userApellido.value,
    nombre: userNombre.value,
    mail: userEmail.value,
    telefono: userTelefono.value,
    username: userEmail.value,
    password: userClave.value,
    color: '#77aaff',
    tipoUser: 'ADMINISTRADXR'
    }

    users.push(dataUserNuevo)

    var obtParaLocalStorage = JSON.stringify(users)
    var nombreVarLocalStorage = "users" 
    actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

    datossesionGuardado = {
        username: dataUserNuevo.username,
        password: dataUserNuevo.password
    }
    var obtParaLocalStorage = JSON.stringify(datossesionGuardado)
    var nombreVarLocalStorage = "login" 
    actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

    
    alert("Los datos fueron guardados con éxito, ya puedés ingresar a Lilo, bienvenido!!"+
    "\nGuardá tus tus datos de ingreso:\nUsuario: "+
    userEmail.value+",\nPassword:"+userClave.value)

    //limpia el form
    userApellido.value = ''
    userNombre.value = ''
    userEmail.value = ''
    userTelefono.value = ''
    userEmail.value = ''
    userClave.value = ''
    noEliminar() // cierra el modal

    window.location = "index-tableros.html";
    }
}

const modalRegistrarUsuario = ` 
<div class="modal-content">
        <div class="modal-header">
            <h3>Crea tu Usuario</h3>
            <spam>Completar todos los campos.</spam>
        </div>
        <form name = "formCrearUser" id="crearUser">
            <div class="form-group">
                <label for="userApellido" class="col-form-label">Apellido:</label>
                <input type="text"  class="form-control"  name="userApellido" placeholder="Escribe tu Apellido" id="userApellido">
            </div>
            <div class="form-group">
                <label for="userNombre" class="col-form-label">Nombres:</label>
                <input type="text" class="form-control"  name="userNombre" placeholder="Escribe tu/s Nombres" id="userNombre">
            </div>
            <div class="form-group">
                <label for="userEmail" class="col-form-label">E-mail:</label>
                <input type="email" class="form-control" name="userEmail" placeholder="Escribe tu E-mail" id="userEmail">
            </div>
            <div class="form-group">
                <label for="userTelefono" class="col-form-label">Telefono:</label>
                <input type="text" max="10" min="10" class="form-control"  name="userTelefono" placeholder="Escribe tu telefono" id="userTelefono">
            </div>
            <div class="form-group">
                <label for="userClave" class="col-form-label">Clave:</label>
                <input type="password" class="form-control" name="userClave" placeholder="Escribe tu clave" id="userClave">
            </div>
            <div class="form-group">
                <label for="userRClave" class="col-form-label">Repetir Clave:</label>
                <input type="password" class="form-control"  name="userRClave" placeholder="Escribe tu clave" id="userRClave">
            </div>
        </form>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">Cerrar</button>
        <button type="button"  onclick = "creaUser()" class="btn btn-primary">Crear Usuario</button>
    </div>
    </div>
`

const modalOlvidasteClave = `<div >
<div class="mb-3">
    <h3 class="col-form-label">
    SERVICIO INHABILITADO TEMPORALMENTE
    </h3>
    <div class="col-form-label" >
        Por el momento esta web no está conectado a un servicio de mail. Si no recuedas tu datos te invitamos a que generes un nuevo usuario.  
    </div> 
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">Cerrar</button>
</div>   
</div>`


const modalQueEs = `<div class="card">
<p>Lilo facilita el seguimiento de las tareas que realizan un equipo de trabajo.</p>
<p>Está basado en el método de Kanban, en donde las tareas se agrupan en tres grandes estados: Que hacer, Haciendo y Hecho; permitiendo al equipo visualizar gráficamente el flujo de trabajo de un proyecto, viendo cuales son las tareas pendientes, las que se están realizando y las que ya han sido concluidas; el sistema busca optimizar el rendimiento del tu tiempo y el de tu equipo.</p>
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">Cerrar</button>
</div>
</div>
`

// abre modalRegistrarUsuario
if(document.querySelector("#btn-abrir-modal-RegistroUsuario")){
const btnAbrirModalRU = document.querySelector("#btn-abrir-modal-RegistroUsuario")
btnAbrirModalRU.addEventListener("click",()=>{
    modalGenericoContenido.innerHTML = modalRegistrarUsuario
    modalGenerico.showModal()
})
}

// abre modal Olvide clave 
if(document.querySelector("#btn-abrir-modal-OlvidasteUsuario")){
const btnAbrirModalOU = document.querySelector("#btn-abrir-modal-OlvidasteUsuario")
btnAbrirModalOU.addEventListener("click",()=>{
    modalGenericoContenido.innerHTML = modalOlvidasteClave
    modalGenerico.showModal()
})
}
// abre modal que es lilo
if(document.querySelector("#btn-abrir-modal-QueEs")){
const btnAbrirModalQE = document.querySelector("#btn-abrir-modal-QueEs")
btnAbrirModalQE.addEventListener("click",()=>{
    modalGenericoContenido.innerHTML = modalQueEs
    modalGenerico.showModal()
})
}

}catch (error){
        console.log ("No se Obtubieron datos de usuario del localStorage. No se cargó el fomr Login" + error)
}


////////// FIN LOGIN ////////////

/////////// TABLEROS ////////////

moldaPanelTablero = `<div><p>
    Estás en el panel de Tableros y Tareas. Acá podés cargar, ver y editar los tableros y tareas que tengas con tu equipo de trabajo. Para agregar tableros usás el formulario tableros y para agregar y editar tareas usas el formulario tareas. Cuando tengas tus tareas agregadas a tus tableros moverlas a los estadios que le correspondan. Podés elegir color para los tableros.
</p>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">cerrar</button>
</div>
</div>`



function abrilModalPanelTableros(){ 
    modalGenericoContenido.innerHTML =   moldaPanelTablero
    modalGenerico.showModal()
}

if(document.querySelector('#btn-abrir-modal-formTableros')){
    abrirModalFormTablero = document.querySelector('#btn-abrir-modal-formTableros')
    abrirModalFormTablero.addEventListener("click",()=>{
        document.querySelector('.form-tableros').classList.toggle('show');
    })
}

if(document.querySelector('#btn-abrir-modal-formTareas')){
    abrirModalFormTablero = document.querySelector('#btn-abrir-modal-formTareas')
    abrirModalFormTablero.addEventListener("click",()=>{
        document.querySelector('.form-tareas').classList.toggle('show');
    })
}


if(document.querySelector('#btn-abrir-modal-formUsers')){
    abrirModalFormTablero = document.querySelector('#btn-abrir-modal-formUsers')
    abrirModalFormTablero.addEventListener("click",()=>{
        document.querySelector('.form-user').classList.toggle('show');
    })
}


// try{
/// CREAR TABLEROS //////

if(document.querySelector('.tabs_head')){
    mostrarTableros()
    var tabIdActivo, contentIdActivo 
    // clickTabs()    
}
 



const dataTableroNuevo = {
    id: '',
    color: '',
    titulo: ''   
}

let editandoTableros = false

// FORMULARIO TABLEROS
var formAgregarTablero = document.querySelector('#formAgregarTablero')
var formTableroNombre = document.getElementById('formTableroNombre')
var formTableroColor = document.getElementById('formTableroColor')  

// var btnFormAgregarTablero = document.querySelector('#btnAddTablero')

/// FORMULARIO TAREAS
var $form = document.getElementById("formAgregarTarea") 
const formTareaNombreTablero = document.getElementById("formTareaNombreTablero")
const formTareaTipoPrioridad = document.getElementById("formTareaTipoPrioridad")
const formTareaUsuario = document.getElementById("formTareaUsuario")
const formTareaDescripcion = document.getElementById("formTareaDescripcion")
const $btnAdd = document.getElementById("btnAddTarea")


let tableroRepetido = false

function addTablero(){ //cuando se acciona boton agregar o editar tablero

         //chequear que no haya dos tableros del mismo nombre. 
         tablerosGuardados.map ( tablero => {
            if(tablero.titulo === formTableroNombre.value.toUpperCase()){   
                tableroRepetido = true 
            }
        })

    if(formTableroNombre.value === ''){
        modalTableroNombrar = `<div class ="card2" ><p>No te olvides de ponerle un nombre al Tablero Nuevo!.</p>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">cerrar</button>
            </div>
            </div>`
            modalGenericoContenido.innerHTML =   modalTableroNombrar
            modalGenerico.showModal()
        return  

    }else if(tableroRepetido){

        modalTableroAgregado = `<div class ="card2" ><p> Ya existe un Tablero con ese nombre.</p>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">cerrar</button>
        </div>
        </div>`
        modalGenericoContenido.innerHTML =   modalTableroAgregado
        modalGenerico.showModal()

        tableroRepetido = false

    }else if(editandoTableros){
        editarTablero()
      
        //manda al formulario agregar tareas/nombre de tableros, el nombre nuevo del tablero que se acaba de editar
        document.querySelector('#formTareaNombreTablero').value =  dataTableroNuevo.titulo
        
        modalTableroEditada = `<div class ="card2" ><p> Tablero Editada!.</p>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">cerrar</button>
            </div>
            </div>`
            modalGenericoContenido.innerHTML =   modalTableroEditada
            modalGenerico.showModal()

        // btnFormAgregarTablero.textContent = "Agregar"
        // clickTabs()

        editandoTableros = false
    }else{
       

        //CREAR UN TABLERO

        // CARGAR EL OBJ CON LOS DATOS DEL FORM
         dataTableroNuevo.id= Date.now(),
         dataTableroNuevo.titulo = formTableroNombre.value.toUpperCase(),
         dataTableroNuevo.color = formTableroColor.value

        //SE COPIA EN EL ARREGLO TABLEROS GUARDADOS UNA COPIA DEL OBJ DATATABLERONUEVO
        agregarTablero()
         // En el formulario de tareas agrego el titulo del tablero recien creado al div titulo de tablero
         document.querySelector('#formTareaNombreTablero').value = dataTableroNuevo.titulo
       
  

         modalTableroAgregado = `<div class ="card2" ><p> Tablero Agregado!.</p>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">cerrar</button>
            </div>
            </div>`
            modalGenericoContenido.innerHTML =   modalTableroAgregado
            modalGenerico.showModal()

        // clickTabs()
            console.log(tabIdActivo)

        // document.querySelector(tabIdActivo).classList.add('is-active');
        // document.querySelector(contentIdActivo).classList.add('is-active');
    
      
        document.querySelector('.form-tableros').classList.toggle('show');
        // limpiarObjTablero()
    }

}
    
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
        
        contents[index].style.background = esto

        //para obtener el nombre del tablero    
        // console.log(tabs[index].textContent)
        document.querySelector('#formTareaNombreTablero').value = tabs[index].textContent
        tabIdActivo = tabs[index].id
        console.log(tabIdActivo)
        contentIdActivo =  contents[index].id
        console.log(contentIdActivo)

        var obtParaLocalStorage = document.getElementById("tableros").innerHTML
        var nombreVarLocalStorage = 'tablerosHtml' 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)
        });
        });            
    }

        //esta función no se está usando por el momento.
    function agregarTablero(){
        tablerosGuardados.push({...dataTableroNuevo})
        var obtParaLocalStorage = JSON.stringify(tablerosGuardados)
        var nombreVarLocalStorage = "tablerosObj" 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

        mostrarTableros()
        // clickTabs()
        formAgregarTablero.reset()
        limpiarObjTablero()
        
        // limpiarHTMLTableros()


    }

    function limpiarObjTablero(){
        dataTableroNuevo.id = ''
        dataTableroNuevo.titulo = ''
        dataTableroNuevo.color = ''
    }


function  mostrarTableros(){
    limpiarHTMLTableros()
    var elementoTabsBody = document.querySelector('#tabs_body_id') 
    var elemetoTabsHead = document.querySelector('#tabs_head_id')

        tablerosGuardados.forEach( tablero =>{
            const { id, titulo, color  } = tablero

            console.log(color)

            //se crea el elemento Titulo del tablero y agrego: clase tabs_toggle, agrego id, color y titulo
         var elementoNewTabsHead = document.createElement("li")
         
         elementoNewTabsHead.style.background = color
         elementoNewTabsHead.classList.add('tabs_toggle')
         elementoNewTabsHead.textContent = titulo
         elementoNewTabsHead.id = 't-'+id

         //al titulo agrego dos botones, editar y elminar
         const btnEditar = document.createElement('button')
         btnEditar.onclick = () => cargarTablero(tablero)
         btnEditar.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
         btnEditar.classList.add('btn-editar')
         elementoNewTabsHead.appendChild(btnEditar)
         
         const btnEliminar = document.createElement('button')
         btnEliminar.onclick = () => eliminarTablero(id)
         btnEliminar.innerHTML = `<i class="fa-solid fa-xmark"></i>`
         btnEliminar.classList.add('btn-editar')
         elementoNewTabsHead.appendChild(btnEliminar)
     
         //creo el elemento cuerpo de tablero
         var elementNewTabsBody = document.createElement("div")
         elementoTabsBody.style.background = color
         elementNewTabsBody.classList.add('tabs_content')
         elementNewTabsBody.id = 'c-'+id

         var tableroVacio = `
         <div id='list1-${titulo}' class="board-list" > 
         <div class="list-title">QUE HACER</div>
         </div>
         <div id='list2-${titulo}' class="board-list">  
         <div class="list-title">HACIENDO</div> 
         </div>
         <div id='list3-${titulo}' class="board-list"> 
         <div class="list-title">HECHO</div></div>`

         elementNewTabsBody.innerHTML = tableroVacio
     
         elemetoTabsHead.appendChild(elementoNewTabsHead)
         elementoTabsBody.appendChild(elementNewTabsBody)

         
        })

         tareas.forEach( tarea =>{
             const {id, user, prioridad, tablero, descripcion, titulo, estado} = tarea

            let colorUser
             users.map( usuario => {
                if( usuario.mail === user){
                    // console.log(usuario.color)
                        colorUser =  usuario.color
                }
            })
         
             // console.log($divElements)
             const $div = document.createElement("div")
            
            $div.classList.add("card")
            $div.style.background = colorUser
            $div.id = "c"+id
            $div.draggable = true

            $div.innerHTML =
            `<div id="priodidad"><i class="fa-solid fa-star"></i> <strong>${prioridad}</strong></div> 
            <div id="user"><i class="fa-solid fa-user"></i> ${user}</div>
            <div id="tarea"><i class="fa-solid fa-thumbtack"></i> ${descripcion}</div>`  

            //al titulo agrego dos botones, editar y elminar
            const btnEditarTarea = document.createElement('button')
            btnEditarTarea.onclick = () => cargarTarea(tarea)
            btnEditarTarea.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
            btnEditarTarea.classList.add('btn-editar')
            $div.appendChild(btnEditarTarea)
            
            const btnEliminarTarea = document.createElement('button')
            btnEliminarTarea.onclick = () => eliminarTarea(id)
            btnEliminarTarea.innerHTML = `<i class="fa-solid fa-xmark"></i>`
            btnEliminarTarea.classList.add('btn-editar')
            $div.appendChild(btnEliminarTarea)

            
            if(estado){
                const $divElements = document.getElementById(estado)
                $divElements.appendChild($div, $divElements.firstChild) 
            }

    

             
    })

  
 
 clickTabs()


}

function limpiarHTMLTableros() {
    
    const tabsTitulos = document.querySelector('.tabs_head')
    if(tabsTitulos.firstChild){
    while(tabsTitulos.firstChild){
        tabsTitulos.removeChild(tabsTitulos.firstChild)
    }
    }

    const tabsBody = document.querySelector('.tabs_body')
    if(tabsBody.firstChild){
    while(tabsBody.firstChild){
        tabsBody.removeChild(tabsBody.firstChild)
    }
    }
}

function cargarTablero(tablero){

    console.log(tablero)
    const {id, titulo, color} = tablero
    
    formTableroNombre.value = titulo
    formTableroColor.value = color

 
    
    dataTableroNuevo.id = id
    editandoTableros = true

    // clickTabs()
}

function editarTablero(){

        // dataTableroNuevo.id = idTableroEditado
        dataTableroNuevo.titulo = formTableroNombre.value.toUpperCase()
        dataTableroNuevo.color = formTableroColor.value


        tablerosGuardados.map ( tablero => {
            if(tablero.id === dataTableroNuevo.id){    

                tareas.map( tarea => {
                    console.log(tarea.tablero)
                    if(tarea.tablero === tablero.titulo){
                        // tarea.id = objTareaNueva.id
                        // tarea.user = objTareaNueva.user
                        // tarea.prioridad = objTareaNueva.prioridad
                        tarea.tablero = dataTableroNuevo.titulo
                        console.log("el tablero de esta tarea cambio de nombre")
                        // tarea.descripcion = objTareaNueva.descripcion
                        // tarea.titulo = objTareaNueva.titulo
                        lista = tarea.estado.split('-')[0]

                        console.log(lista)
                         tarea.estado =  tarea.estado.split('-')[0]+'-'+dataTableroNuevo.titulo  //objTareaNueva.estado
                    }
                })

                tablero.id = dataTableroNuevo.id
                tablero.titulo = dataTableroNuevo.titulo
                tablero.color = dataTableroNuevo.color

                console.log(tareas)

               
            }
        })

        var obtParaLocalStorage = JSON.stringify(tablerosGuardados)
        var nombreVarLocalStorage = "tablerosObj" 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

        var obtParaLocalStorage = JSON.stringify(tareas)
        var nombreVarLocalStorage = "tareas" 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

        mostrarTableros()
        // clickTabs()
        formAgregarTablero.reset()
        editandoTableros = true

}

    function eliminarTablero(id){
        console.log(id)
        document.querySelector("#modal-generico-contenido").innerHTML = `
        <div class="card">
        <p>¿Estás seguro que querés eliminar este Tablero? recordá que se elminaran las tareas que tengas cargadas en el.</p>
        </div>
        <div class="modal-footer">
        <button type="button" onclick="siEliminarTablero(${id})">Eliminar</button>
        <button type="button" class= "cerrar-modal-generico"  onclick="noEliminarTablero()">NO</button>
        </div>`
        document.querySelector("#modal-generico").showModal()
        
    }
    
    function noEliminarTablero(){
        modalGenerico.close()
    }
    

    function siEliminarTablero(id){
       
        tablerosGuardados.map ( tablero => {
            if(tablero.id === id){    

                tareas = tareas.filter(tarea => tarea.tablero !== tablero.titulo)

              
            }
        })

        tablerosGuardados = tablerosGuardados.filter(tablero => tablero.id !== id)




        modalGenerico.close()
        // console.log(tablero)
        var obtParaLocalStorage = JSON.stringify(tablerosGuardados)
        var nombreVarLocalStorage = "tablerosObj" 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)
        
        var obtParaLocalStorage = JSON.stringify(tareas)
        var nombreVarLocalStorage = "tareas" 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)


        limpiarHTMLTableros()
        mostrarTableros()
        // clickTabs()

}

   

/////////// FIN TABLEROS //////////////

//////////// TAREAS /////////////


     let listaTareas = [];
     let editandoTarea = false

    var usuariosGuardados = JSON.parse(localStorage.getItem('users'))

// try{
    // carga los usuarios registrados guardados en el local storage en el form de AGREGAR tareas
    if(document.getElementById("formTareaUsuario")){
    for (let userOpcion of usuariosGuardados){
        var option = document.createElement("option")
        option.value = userOpcion.username
        option.innerHTML = `${userOpcion.username}` 
        // console.log(option)
        document.getElementById("formTareaUsuario").appendChild(option)
        }
    }
    

    function addTarea() {

        const $divElements = document.getElementById("list1-"+formTareaNombreTablero.value)
        if(formTareaUsuario.value === '' && formTareaDescripcion.value.trim() === ''){ 
            alert("Para agregar una Tarea tenés que completar todos los campos")
        }else if($divElements === null){
            alert("No has elegido un tablero. Para elegirlo hace click en el nombre del tablero.")

        }else if(editandoTarea){
            editarTarea()


            modalTareaEditada = `<div class ="card2" ><p> Tarea Editada!.</p>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">cerrar</button>
            </div>
            </div>`
            modalGenericoContenido.innerHTML =   modalTareaEditada
            modalGenerico.showModal()

            editandoTarea = false

        }else{

            objTareaNueva.id = Date.now()
            objTareaNueva.user = formTareaUsuario.value
            objTareaNueva.prioridad = formTareaTipoPrioridad.value
            objTareaNueva.tablero = formTareaNombreTablero.value
            objTareaNueva.descripcion = formTareaDescripcion.value
            objTareaNueva.titulo = 'sin titulo'
            objTareaNueva.estado = 'list1-'+formTareaNombreTablero.value

            agregarTarea()

            modalTareaAgregado = `<div class ="card2" ><p> Tarea Agregado!.</p>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">cerrar</button>
            </div>
            </div>`
            modalGenericoContenido.innerHTML =   modalTareaAgregado
            modalGenerico.showModal()

        }
    
            document.querySelector('.form-tareas').classList.toggle('show');
    }


function  agregarTarea(){
    tareas.push({...objTareaNueva})
    
    var obtParaLocalStorage = JSON.stringify(tareas)
    var nombreVarLocalStorage = "tareas" 
    actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage) 
    
    mostrarTableros()
    $form.reset()
    // clickTabs()
    limpiarObjTarea()
    // limpiarHTMLTableros()

}

function limpiarObjTarea() {
    objTareaNueva.id = ''
    objTareaNueva.user = ''
    objTareaNueva.prioridad= ''
    objTareaNueva.tablero = ''
    objTareaNueva.descripcion =  ''
    objTareaNueva.titulo =''
    objTareaNueva.estado =''
    // password:'',
    // color: '',
    // tipoUser:''   
}





function cargarTarea(tarea){

    // console.log()
    const {id, user, prioridad,tablero,descripcion,titulo,estado } = tarea
                
        document.getElementById("tituloformTarea").textContent = 'EDITAR TAREA'
        formTareaTipoPrioridad.value = prioridad
        formTareaUsuario.value = user
        formTareaDescripcion.value = descripcion

        objTareaNueva.id = id
        editandoTarea = true
    
        // clickTabs()

        document.querySelector('.form-tareas').classList.toggle('show');


}


function  editarTarea(){

    objTareaNueva.user = formTareaUsuario.value
    objTareaNueva.prioridad= formTareaTipoPrioridad.value
    objTareaNueva.tablero = formTareaNombreTablero.value
    objTareaNueva.descripcion =  formTareaDescripcion.value
    objTareaNueva.titulo =''
    // objTareaNueva.estado =''

    tareas.map( tarea => {
        if(tarea.id === objTareaNueva.id){
            tarea.id = objTareaNueva.id
            tarea.user = objTareaNueva.user
            tarea.prioridad = objTareaNueva.prioridad
            tarea.tablero = objTareaNueva.tablero
            tarea.descripcion = objTareaNueva.descripcion
            tarea.titulo = objTareaNueva.titulo
            // tarea.estado = objTareaNueva.estado
        }
    })

    var obtParaLocalStorage = JSON.stringify(tareas)
    var nombreVarLocalStorage = "tareas" 
    actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

    mostrarTableros()
    $form.reset()
    editandoTableros = true
    // clickTabs()

}


function eliminarTarea(id){
    console.log(id)
    document.querySelector("#modal-generico-contenido").innerHTML = `
    <div class="card">
    <p>¿Estás seguro que querés eliminar esta tarea?.</p>
    </div>
    <div class="modal-footer">
    <button type="button" onclick="siEliminarTarea(${id})">Eliminar</button>
    <button type="button" class= "cerrar-modal-generico"  onclick="noEliminarTarea()">NO</button>
    </div>`
    document.querySelector("#modal-generico").showModal()
    
}

function noEliminarTarea(){
    modalGenerico.close()
}


function siEliminarTarea(id){
   
    tareas = tareas.filter(tarea => tarea.id !== id)

    modalGenerico.close()
    // console.log(tablero)    
    var obtParaLocalStorage = JSON.stringify(tareas)
    var nombreVarLocalStorage = "tareas" 
    actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)

    limpiarHTMLTableros()
    mostrarTableros()
    // clickTabs()

}

    let tareaMoviendo
    let estadoNuevo
    document.ondragstart = function(event) {
        event.dataTransfer.setData("Text", event.target.id);
        console.log(event.target.id) // esto me dice el nombre de la colmuna
        tareaMoviendo = event.target.id
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

        console.log(event.target.id) // esto me dice el nombre de la colmuna
        estadoNuevo = event.target.id
        console.log(event.target.parentElement.id)
        console.log(event.target.parentElement)
        console.log(event)
        console.log(event.target.children)
    

        actualizarestadodeTarea()


        var tableros = document.getElementById("tableros").innerHTML

                localStorage.setItem('tablerosHtml', tableros)
                // console.log(tableros)
        // para guardar en el localstorage lo que el usuario está trabajando.
        }
    }

    function  actualizarestadodeTarea(){

         tareas.map ( tarea => {
             if('c'+tarea.id === tareaMoviendo){
                tarea.estado = estadoNuevo
                console.log('c'+tarea.id)
             }
         })
         var obtParaLocalStorage = JSON.stringify(tareas)
         var nombreVarLocalStorage = "tareas" 
         actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)  

    }


////////////  FIN TAREAS /////////////

///////// USUARIOS ////////////////////

modalUsuarioAgregado = `<div class ="card2" ><p> Usuario agregado!.</p>
<div class="modal-footer">
<button type="button" class="btn btn-secondary"  onclick = "noEliminar()">cerrar</button>
</div>
</div>`

modalPanleUsuarios = `<div ><p> Estás en el panel de usuarios. Acá podés cargar, ver y editar los miembros que participen de los tableros. Para agregar y editar es necesario que completes todos los campos. El color que elijas será para que lo identifiques más facilmente en los tableros.
                    </p>
                    <div class="modal-footer">
    <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">cerrar</button>
</div>
</div>`


modalUsuarioEditado = `<div class='card2'><p> Usuario editado!.</p>
<div class="modal-footer">
<button type="button" class="btn btn-secondary"  onclick = "noEliminar()">cerrar</button>
</div>
</div>`

function abrilModalPanelUsuarios(){ 
    modalGenericoContenido.innerHTML =   modalPanleUsuarios
    modalGenerico.showModal()
}

   

    let editando = false;

    if(document.getElementById("frmUsers")){

    var $formUsers = document.getElementById("frmUsers")
    // const $btnSave = document.getElementById("btnSave")

    
    const $btnAdd = document.getElementById("btnAddUser")

    const $usersApi = document.getElementById('importarUsuarios')


    var usuariosGuardados = JSON.parse(localStorage.getItem('users'))

    
    // try{
        
        if(document.querySelector(".listaUsers")){
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
                modalGenericoContenido.innerHTML =   modalUsuarioEditado
                modalGenerico.showModal()

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

                modalGenericoContenido.innerHTML =   modalUsuarioAgregado
                modalGenerico.showModal()
            }

            document.querySelector('.form-user').classList.toggle('show');

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
    
    pruebadeArreglo = []
    dataUserFetch = {
        id: '',
        apellido: '',
        nombre: '',
        mail: '',
        telefono: '',
        username: '',
        password: '',
        color: '',
        tipoUser: ''
    }

    $usersApi.addEventListener("click", () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(usersApi =>     
        usersApi.forEach( usuario => {
            const{id, name,username, email } = usuario  

            dataUserNuevo.id = id
            dataUserNuevo.apellido = username 
            dataUserNuevo.nombre = name
            dataUserNuevo.mail = email
            dataUserNuevo.telefono = "99"
            dataUserNuevo.username = email
            dataUserNuevo.password = '1234'
            dataUserNuevo.color = '#77aaff'
            dataUserNuevo.tipoUser = 'MIEMBRX'
                    users.push({...dataUserNuevo})
                    var obtParaLocalStorage = JSON.stringify(users)
        var nombreVarLocalStorage = "users" 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)
        mostrarUsers()
        limpiarObjUser()
            }))
        .catch((error) => {console.log(error)})
        
        alert('Usuarios Importados. los datos fueron importados desde: https://jsonplaceholder.typicode.com/users' )
        })
    function avisarEliminarUsuarios(){


        modal = `
        <div>
        <div class="card">
        <p> ¿Estás seguro que querés eliminar todos los usuarios cargados en Lilo?</p>
        </div>
        <div class="modal-footer">
        <button type="button" class=""  onclick = "noEliminar()">Cerrar</button>
        <button type="button" class=""  onclick = "eliminarUsuarios()">Eliminar</button>
        </div>
        </div>`
        modalGenericoContenido.innerHTML =   modal
        modalGenerico.showModal()
    }

    function eliminarUsuarios(){
        users = []
        limpiarHTML()
        mostrarUsers()
        var obtParaLocalStorage = JSON.stringify(users)
        var nombreVarLocalStorage = "users" 
        actualizarLocalStorage(nombreVarLocalStorage,obtParaLocalStorage)
        modalGenerico.close()
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
  if($divElements.firstChild){
    while($divElements.firstChild){
        $divElements.removeChild($divElements.firstChild)
    }
}
}

}
}





function usuariosAyuda(){ 
    modalGenericoContenido.innerHTML = `
    <div class="tarjeta-help">
                            <h4>USUARIOS:</h4>
                        <p>
                             En la pantalla USUARIOS verás y cargarás todas las personas que quieras, pueden ser miembros, ejecutan tareas relacionadas con el trabajo; o Administradores, puede ser miembros que tienen tareas asignadas y también pueden hacer cambios en tareas de otros miembros. Todos los integrantes que agregues podrán participar de todos los tableros. Por lo cual podría haber miembros que participen en varios tableros. Es importante que asignes colores a cada usuario, te permitirá identificarlos mejor dentro de diferentes espacios de trabajo.
                        </p>
                        <br>
                        <h4>Miembrxs y Administradores</h4>
                <p>
                    Para agregar Usuarios completá todos los campos del formulario AGREGAR USUARIO, y por último hacés click en Agregar. Solo los Usuarios Administradores pueden cargar usuarios de tipo Administrador.
                </p>
                <p>
                    Para editar los datos del usuario hacés click en el botón Editar de cada usuario, la información se cargará en el formulario de AGREGAR USUARIO. Luego de hacer los cambios, confirmás la edición haciendo click en el botón  Actualizar.
                </p>
                <p>
                    Solo los usuarios Administradores: pueden eliminar Usuario. Hacés click en la X de cada usuario. 
                </p>
                </div>
                <div class="modal-footer">
        <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">cerrar</button>
    </div>`
    modalGenerico.showModal()
}

function tablerosAyuda(){ 
    modalGenericoContenido.innerHTML = `
    <div class="tarjeta-help">
                        <h4>TABLEROS:</h4>
                        <p>
                            En la pantalla TABLEROS verás y cargarás las tareas del equipo. Estas tareas se agrupan en tres columnas, el concepto de esta disposición es facilitarte gráficamente el progreso de tus actividades y las de tu equipo. Separándolas en tres estados bien marcados: las pendientes, las que estás o están realizando y las que han concluido. Podés editar los nombres de los estados si quisieras. También podés asignar un color al tablero y de ese modo diferenciarlo de otros tableros que tengas cargado. 
                        </p>
                        <br>
                        <h4>Como Agregar, Editar/Actualizar y Eliminar.</h4>
                <p>
                    Para agregar un tablero completá los campos del formulario Agregar Tablero y dás click en el botón Agregar. El tablero se cargará en tu espacio de trabajo. 
                </p>
                <p>
                    Para editar el nombre y el color del tablero hacés click en el botón Editar. Los datos se cargarán en el formulario de tableros. Luego de hacer los cambios, confirmás la edición haciendo click en el botón Actualizar.
                </p>
                <p>
                    Para eliminar un tablero hacés click en la X ubicado al lado del nombre del tablero. Todas las tareas que estén cargadas en el tablero también se eliminarán.
                </p>
                    </div>
                    <div class="modal-footer">
        <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">cerrar</button>
    </div>
    `
    modalGenerico.showModal()
}

function tareasAyuda(){ 
    modalGenericoContenido.innerHTML =`
    <div class="tarjeta-help">
                        <h4>TAREAS:</h4>
                        <p>
                           Son las actividades que realiza cada integrante. Cargas una a una. Por defecto se cargarán en la columna de la izquierda. Cada tarea estará identificada por su prioridad y el o la responsable de la misma, en el espacio de descripción podés escribir la cantidad de caracteres que quieras, te recomendamos que uses frases cortas que te permitan concentrar lo esencial de la actividad. La tarea se pintará del color que represente al usuario. Si la tarea cambia de manos también cambiará de color. Para cambiar el estado de la tarea simplemente la moves al que le corresponda. Podés hacer todos los movimientos que desees
                        </p>
                        <br>
                        <h4>
                            Como Agregar, Editar/Actualizar y Eliminar.
                        </h4>
                        <p>
                            Para agregar tareas primero seleccioná un tablero (para seleccionar un tablero hacés click sobre el nombre del tablero). Luego completás todos los campos del formulario AGREGAR TAREA, y por último hacés click en Agregar.
                        </p>
                        <p>
                            Para editar tareas hacés click en el botón Editar de cada tarea, la información de la tarea se cargará en el formulario de tareas. Luego de hacer los cambios, confirmás la edición haciendo click en el botón Actualizar.
                        </p>
                        <p>
                            Para eliminar una tarea hacés click en la X de cada tarea.     
                        </p>
                        </div>
                        <div class="modal-footer">
        <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">cerrar</button>
    </div>`
    modalGenerico.showModal()
}

function lilo(){ 
    modalGenericoContenido.innerHTML =`
    <div class="tarjeta-help">
                        <h4>LILO</h4>
                        <p>
                            El objetivo de Lilo es facilitar el seguimiento de las tareas que realizan los miembros de un equipo y dinamizar el flujo de trabajo.
                        </p>
                        <p>
                            El sistema está basado en el método de Kanban, en donde las tareas se agrupan en tres grandes estados: Que hacer, Haciendo, Hecho; permitiendo la visualización gráfica del proceso del proyecto, viendo cuales son las tareas pendientes, las que se están realizándose y las que ya han sido concluidas; el sistema busca optimizar el rendimiento del tiempo.
                        </p>
                    </div>
                    <div class="tarjeta-help">
                            <h4>COMO FUNCIONA:</h4>
                        <p>
                            Luego de crear una cuenta en la web, el usuario será designado como Administrador de la cuenta y podrá hacer todo tipo de movimientos y cambios. Luego deberá cargar el proyecto en el sistema especificamendo usuarios ( que podrán ser miembrxs o Administradores), tableros de trabajo y tareas ha realizar. 
                        </p>
                        </div>
                        <div class="modal-footer">
        <button type="button" class="btn btn-secondary"  onclick = "noEliminar()">cerrar</button>
    </div>`
    modalGenerico.showModal()
}


