// Upco WEB — helpers compartidos. Cargar como <script src="../shared.js"></script> ANTES del
// bloque type="text/babel".
//
// OJO: este Supabase es el MISMO proyecto de Upco InsurGest (pxcvckqahkjlizgotvqw). No es un
// descuido: la máquina de prospección (tablas prospectos/prospecto_plantillas/prospeccion_ajustes
// + enviar_lote_prospectos() por cron) vive ahí desde la Sesión 47 de InsurGest y ya sirve
// campañas para varios productos Upco a la vez (segmento agencias_seguros e InsurGest mismo).
// Darle a Upco Web un proyecto de Supabase propio solo para este panel habría significado
// repetir es_admin(), Vault, el cron y la llave de Resend de la campaña sin ninguna necesidad
// real de aislar datos — este panel no toca nada de clientes/pólizas, solo prospectos.
const SUPABASE_URL="https://pxcvckqahkjlizgotvqw.supabase.co";
const SUPABASE_ANON_KEY="sb_publishable_F2WhknXrY8MLjI5ftd0H6w_-XXjej6I";
const sb=window.supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY);

const ESTADOS_MX=["Aguascalientes","Baja California","Baja California Sur","Campeche","Chiapas","Chihuahua","Ciudad de México","Coahuila","Colima","Durango","Estado de México","Guanajuato","Guerrero","Hidalgo","Jalisco","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas"];

const NIVELES_EDUCATIVOS={
  preescolar:"Preescolar / Jardín de niños",
  primaria:"Primaria",
  secundaria:"Secundaria",
  media_superior:"Media superior (prepa / bachillerato)",
  superior:"Superior (universidad)",
  otro:"Otro"
};

const CATEGORIAS_ACADEMIAS={
  deporte:"Deporte",
  arte:"Arte",
  idiomas:"Idiomas",
  oficios:"Oficios"
};

// Un solo lugar para las diferencias de copy/columnas entre segmentos — el panel de admin
// (upco-web/admin) los usa para no repetir "si segmento==='escuelas' ... else ..." por toda
// la interfaz. Agregar un segmento nuevo es agregar una entrada aquí.
const SEGMENTOS_ADMIN={
  escuelas:{
    etiqueta:"Escuelas",
    etiquetaSingular:"escuela",
    campoExtra:"nivel_educativo",
    etiquetasExtra:NIVELES_EDUCATIVOS,
    tituloDesglose:"Por nivel educativo",
    demo:"https://web.upco.app/demos/escuelas/"
  },
  academias:{
    etiqueta:"Academias",
    etiquetaSingular:"academia",
    campoExtra:"categoria",
    etiquetasExtra:CATEGORIAS_ACADEMIAS,
    tituloDesglose:"Por categoría",
    demo:"https://web.upco.app/demos/academias/"
  }
};

const fecha=d=>d?new Date(d).toLocaleDateString("es-MX",{day:"numeric",month:"short",year:"numeric"}):"—";
