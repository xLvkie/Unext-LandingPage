import React, { useState } from 'react';
import { 
  GraduationCap, 
  Building2, 
  Award, 
  Sparkles, 
  Search, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  FileCheck,
  UserCheck,
  Briefcase
} from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Función de redirección hacia la selección de roles 
  const handleIngresar = () => {
    window.location.href = '/login'; // link de conexión, PENDIENTE
  };

  return (
    <div className="min-h-screen bg-[#E4F0FF] text-[#0F172A] font-sans antialiased selection:bg-[#C3A7FF] selection:text-[#1E1B4B]">
      
      {/* =========================================================================
          1. HEADER / BARRA DE NAVEGACIÓN SUPERIOR
         ========================================================================= */}
      <header className="sticky top-0 z-50 bg-[#FFFDFF]/90 backdrop-blur-md border-b border-[#8EB9FC]/30 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo y Nombre */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-11 h-11 rounded-xl bg-[#274DEA] flex items-center justify-center text-white shadow-md shadow-[#274DEA]/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-[#274DEA]">UNEXT</span>
              <span className="text-[10px] tracking-wider text-[#64748B] font-semibold uppercase -mt-1">By Nextworks</span>
            </div>
          </div>

          {/* Enlaces a Secciones (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#vision" className="text-sm font-medium text-[#475569] hover:text-[#274DEA] transition-colors">Visión</a>
            <a href="#metas" className="text-sm font-medium text-[#475569] hover:text-[#274DEA] transition-colors">Metas</a>
            <a href="#como-funciona" className="text-sm font-medium text-[#475569] hover:text-[#274DEA] transition-colors">Cómo Funciona</a>
            <a href="#beneficios" className="text-sm font-medium text-[#475569] hover:text-[#274DEA] transition-colors">Beneficios</a>
          </nav>

          {/* Botón Único de Acceso / Ingresar */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleIngresar}
              className="px-6 py-2.5 rounded-lg bg-[#274DEA] hover:bg-[#1E3BB8] text-white text-sm font-semibold shadow-md shadow-[#274DEA]/25 hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span>Acceder a Unext</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Botón Hamburguesa Móvil */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#475569] hover:bg-[#E4F0FF]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFFDFF] border-b border-[#8EB9FC]/40 px-4 pt-2 pb-6 space-y-3">
            <a href="#vision" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-[#475569]">Visión</a>
            <a href="#metas" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-[#475569]">Metas</a>
            <a href="#como-funciona" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-[#475569]">Cómo Funciona</a>
            <a href="#beneficios" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-[#475569]">Beneficios</a>
            <button
              onClick={handleIngresar}
              className="w-full mt-2 py-3 rounded-lg bg-[#274DEA] text-white text-sm font-semibold flex items-center justify-center gap-2"
            >
              <span>Acceder a Unext</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </header>


      {/* =========================================================================
          2. HERO SECTION CON SLOGAN Y FONDO DE ANIMACIÓN
         ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
        {/* CONTENEDOR DE ANIMACIÓN DE FONDO (FALTA POR IMPLEMENTAR) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
          <div className="absolute inset-0 bg-linear-to-b from-[#8EB9FC]/20 via-transparent to-[#E4F0FF]"></div>
          <div className="w-full h-full bg-[radial-gradient(#274DEA_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          {/* NOTA TÉCNICA: Aquí se sustituira este contenedor por <Lottie animationData={empleoAnim} /> o un elemento <video /> (FALTA POR IMPLEMENTAR) */}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Badge institucional */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDFF] border border-[#8EB9FC] text-[#274DEA] text-xs font-semibold shadow-sm mb-8 animate-fade-in">
            <ShieldCheck className="w-4 h-4 text-[#059669]" />
            <span>Red Interuniversitaria de Empleabilidad Certificada</span>
          </div>

          {/* Slogan Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-tight mb-6">
            Conectamos el talento universitario con <br className="hidden sm:block" />
            <span className="text-[#274DEA]">oportunidades reales y validadas</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[#475569] mb-10 leading-relaxed">
            La plataforma en común donde universidades acreditan tus conocimientos académicos reales para que postules a empleos y prácticas sin intermediarios ni información inflada.
          </p>

          {/* Acciones principales de Hero */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleIngresar}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#274DEA] hover:bg-[#1E3BB8] text-white font-bold text-base shadow-lg shadow-[#274DEA]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <span>Comenzar Ahora</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#como-funciona"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FFFDFF] hover:bg-white text-[#274DEA] border border-[#8EB9FC] font-semibold text-base shadow-sm hover:shadow transition-all text-center"
            >
              Descubrir cómo funciona
            </a>
          </div>

          {/* Tarjeta inferior representativa de Matching con IA */}
          <div className="mt-14 max-w-xl mx-auto p-4 rounded-2xl bg-[#FFFDFF]/80 backdrop-blur-sm border border-[#8EB9FC]/40 shadow-sm flex items-center justify-between text-left gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#C3A7FF]/30 flex items-center justify-center text-[#5B21B6]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1E1B4B]">Algoritmo de Matching Semántico IA</p>
                <p className="text-[11px] text-[#64748B]">Mide compatibilidad entre vacantes y cursos acreditados</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#059669]/30 text-[#059669] text-xs font-semibold">
              100% Verificado
            </span>
          </div>
        </div>
      </section>


      {/* =========================================================================
          3. SECCIÓN: VISIÓN
         ========================================================================= */}
      <section id="vision" className="py-20 bg-[#FFFDFF] border-y border-[#8EB9FC]/25">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-wider uppercase text-[#274DEA]">Nuestra Razón de Ser</span>
            <h2 className="text-3xl font-bold text-[#0F172A] mt-2">Visión del Producto</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#0F172A] leading-snug">
                Crear el primer ecosistema interuniversitario que garantiza la veracidad del talento joven.
              </h3>
              <p className="text-[#475569] leading-relaxed">
                A diferencia de portales abiertos como LinkedIn o Computrabajo donde cualquiera puede declarar habilidades sin respaldo, en Unext integramos a las instituciones de educación superior como garantes oficiales.
              </p>
              <p className="text-[#475569] leading-relaxed">
                Aspiramos a que cada estudiante obtenga prácticas y empleos que respondan fielmente a sus competencias, otorgando a los reclutadores certezas técnicas transparentes desde el primer contacto.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#E4F0FF]/60 border border-[#8EB9FC]/40 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0F172A]">Respaldo Institucional</h4>
                  <p className="text-xs text-[#64748B] mt-1">Las facultades avalan notas, ciclos en curso y méritos académicos.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#274DEA] text-white flex items-center justify-center shrink-0 mt-1">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0F172A]">Bolsa Centralizada</h4>
                  <p className="text-xs text-[#64748B] mt-1">Todas las universidades en una sola red abierta a empresas de primer nivel.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#C3A7FF] text-[#1E1B4B] flex items-center justify-center shrink-0 mt-1">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0F172A]">Postulación Transparente</h4>
                  <p className="text-xs text-[#64748B] mt-1">Control de postulación única para evitar saturación de candidaturas fantasma.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          4. SECCIÓN: METAS
         ========================================================================= */}
      <section id="metas" className="py-20 bg-[#E4F0FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#274DEA]">Objetivos Estratégicos</span>
            <h2 className="text-3xl font-bold text-[#0F172A] mt-2">Nuestras Metas para el Talento Universitario</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FFFDFF] p-8 rounded-2xl border border-[#8EB9FC]/40 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#274DEA]/10 text-[#274DEA] flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">Red Interuniversitaria Única</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Englobar a las facultades e institutos del país bajo una infraestructura común, suprimiendo bolsas de trabajo aisladas y fragmentadas.
              </p>
            </div>

            <div className="bg-[#FFFDFF] p-8 rounded-2xl border border-[#8EB9FC]/40 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#059669]/10 text-[#059669] flex items-center justify-center mb-6">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">Cero Habilidades Falsas</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Erradicar los perfiles autodeclarados no verificables; cada conocimiento técnico clave cuenta con el sustento del plan de estudios aprobado.
              </p>
            </div>

            <div className="bg-[#FFFDFF] p-8 rounded-2xl border border-[#8EB9FC]/40 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#C3A7FF]/30 text-[#5B21B6] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">Inserción Ágil con IA</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Conectar a los estudiantes con convocatorias idóneas a su ciclo y especialidad mediante análisis semántico asistido y chat directo.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          5. SECCIÓN: CÓMO FUNCIONA (CARDS POR CADA SEGMENTO)
         ========================================================================= */}
      <section id="como-funciona" className="py-24 bg-[#FFFDFF] border-y border-[#8EB9FC]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold tracking-wider uppercase text-[#274DEA]">Paso a Paso</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">¿Cómo funciona Unext?</h2>
            <p className="text-base text-[#475569] mt-3">Diseñado específicamente para los tres protagonistas de la empleabilidad universitaria.</p>
          </div>

          {/* 5.1 POSTULANTES (ESTUDIANTES / EGRESADOS) */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#274DEA] text-white flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F172A]">Para Postulantes</h3>
                <p className="text-xs text-[#64748B]">Estudiantes universitarios y recién egresados</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#E4F0FF]/40 border border-[#8EB9FC]/40 p-6 rounded-2xl">
                <span className="text-3xl font-extrabold text-[#274DEA]/40 mb-4 block">01</span>
                <h4 className="text-base font-bold text-[#0F172A] mb-2">Inicia Sesión Institucional</h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Ingresa con tu correo universitario oficial (@universidad.edu) vía SSO para sincronizar tu pertenencia académica de inmediato.
                </p>
              </div>
              <div className="bg-[#E4F0FF]/40 border border-[#8EB9FC]/40 p-6 rounded-2xl">
                <span className="text-3xl font-extrabold text-[#274DEA]/40 mb-4 block">02</span>
                <h4 className="text-base font-bold text-[#0F172A] mb-2">Genera tu CV Acreditado</h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Tus materias aprobadas, ciclo actual y reconocimientos de tercio/quinto superior son avalados directamente por tu institución.
                </p>
              </div>
              <div className="bg-[#E4F0FF]/40 border border-[#8EB9FC]/40 p-6 rounded-2xl">
                <span className="text-3xl font-extrabold text-[#274DEA]/40 mb-4 block">03</span>
                <h4 className="text-base font-bold text-[#0F172A] mb-2">Postula en 1 Clic</h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Filtra por ciclo y modalidad. Recibe porcentaje de compatibilidad de IA y mantén contacto directo con reclutadores vía chat.
                </p>
              </div>
            </div>
          </div>

          {/* 5.2 RECLUTADORES / EMPRESAS */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#0284C7] text-white flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F172A]">Para Reclutadores</h3>
                <p className="text-xs text-[#64748B]">Empresas y organizaciones en búsqueda de talento junior</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#E4F0FF]/40 border border-[#8EB9FC]/40 p-6 rounded-2xl">
                <span className="text-3xl font-extrabold text-[#0284C7]/40 mb-4 block">01</span>
                <h4 className="text-base font-bold text-[#0F172A] mb-2">Registro de Empresa</h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Autentica la cuenta corporativa de tu organización para iniciar la captación en todas las universidades aliadas en simultáneo.
                </p>
              </div>
              <div className="bg-[#E4F0FF]/40 border border-[#8EB9FC]/40 p-6 rounded-2xl">
                <span className="text-3xl font-extrabold text-[#0284C7]/40 mb-4 block">02</span>
                <h4 className="text-base font-bold text-[#0F172A] mb-2">Publica Vacantes Paramétricas</h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Establece requisitos estrictos: ciclo mínimo, carreras afines y tipo de prácticas para filtrar de forma automática postulantes aptos.
                </p>
              </div>
              <div className="bg-[#E4F0FF]/40 border border-[#8EB9FC]/40 p-6 rounded-2xl">
                <span className="text-3xl font-extrabold text-[#0284C7]/40 mb-4 block">03</span>
                <h4 className="text-base font-bold text-[#0F172A] mb-2">Evalúa con Certeza</h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Revisa candidatos con sellos de verificación universitaria, analiza compatibilidad con IA y agenda entrevistas de forma integrada.
                </p>
              </div>
            </div>
          </div>

          {/* 5.3 INSTITUCIÓN EDUCATIVA / UNIVERSIDAD */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#059669] text-white flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F172A]">Para Instituciones Educativas</h3>
                <p className="text-xs text-[#64748B]">Oficinas de empleabilidad, direcciones de carrera y coordinaciones</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#ECFDF5]/50 border border-[#059669]/30 p-6 rounded-2xl">
                <span className="text-3xl font-extrabold text-[#059669]/40 mb-4 block">01</span>
                <h4 className="text-base font-bold text-[#0F172A] mb-2">Panel de Supervisión</h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Accede a la consola de administración donde se centraliza la demanda laboral y los requerimientos de prácticas del alumnado.
                </p>
              </div>
              <div className="bg-[#ECFDF5]/50 border border-[#059669]/30 p-6 rounded-2xl">
                <span className="text-3xl font-extrabold text-[#059669]/40 mb-4 block">02</span>
                <h4 className="text-base font-bold text-[#0F172A] mb-2">Convalida Conocimientos</h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Valida en un clic asignaturas aprobadas, méritos académicos y horas reglamentarias para reflejarlas en el perfil oficial del estudiante.
                </p>
              </div>
              <div className="bg-[#ECFDF5]/50 border border-[#059669]/30 p-6 rounded-2xl">
                <span className="text-3xl font-extrabold text-[#059669]/40 mb-4 block">03</span>
                <h4 className="text-base font-bold text-[#0F172A] mb-2">Supervisa Convenios</h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Formaliza convenios marco con empresas y monitorea métricas de inserción y colocación laboral de los egresados en tiempo real.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          6. SECCIÓN: BENEFICIOS
         ========================================================================= */}
      <section id="beneficios" className="py-20 bg-[#E4F0FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#274DEA]">Ventajas Competitivas</span>
            <h2 className="text-3xl font-bold text-[#0F172A] mt-2">¿Por qué elegir Unext?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FFFDFF] p-6 rounded-xl border border-[#8EB9FC]/40 shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-[#059669]/10 text-[#059669] flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#0F172A] mb-2">Información Fidedigna</h4>
              <p className="text-xs text-[#64748B]">Fin a los CVs con experiencia falsa gracias al sello de la universidad.</p>
            </div>

            <div className="bg-[#FFFDFF] p-6 rounded-xl border border-[#8EB9FC]/40 shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-[#274DEA]/10 text-[#274DEA] flex items-center justify-center mx-auto mb-4">
                <Search className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#0F172A] mb-2">Bolsa Compartida</h4>
              <p className="text-xs text-[#64748B]">Oportunidades de múltiples universidades en un solo portal.</p>
            </div>

            <div className="bg-[#FFFDFF] p-6 rounded-xl border border-[#8EB9FC]/40 shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-[#C3A7FF]/40 text-[#5B21B6] flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#0F172A] mb-2">Matching con IA</h4>
              <p className="text-xs text-[#64748B]">Afinidad automática entre vacantes y el progreso de carrera.</p>
            </div>

            <div className="bg-[#FFFDFF] p-6 rounded-xl border border-[#8EB9FC]/40 shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-[#0284C7]/10 text-[#0284C7] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#0F172A] mb-2">Postulación Única</h4>
              <p className="text-xs text-[#64748B]">Procesos transparentes y sin spam para postulantes y empresas.</p>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          7. SECCIÓN CALL TO ACTION: "UNIRSE" (BOTÓN GIGANTE)
         ========================================================================= */}
      <section id="unirse" className="py-24 bg-linear-to-b from-[#FFFDFF] to-[#E4F0FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-4 py-1 rounded-full bg-[#274DEA]/10 text-[#274DEA] text-xs font-bold uppercase tracking-wider">
            Sé parte del cambio
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] mt-4 mb-6 tracking-tight">
            ¿Listo para transformar la empleabilidad universitaria?
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto mb-10 leading-relaxed">
            Tanto si eres estudiante en busca de prácticas, una empresa buscando talento verificado o una universidad que respalda a sus alumnos, Unext es tu plataforma.
          </p>

          {/* Botón Gigante Central */}
          <button
            onClick={handleIngresar}
            className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-[#274DEA] hover:bg-[#1E3BB8] text-white font-extrabold text-xl shadow-xl shadow-[#274DEA]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 mx-auto"
          >
            <span>Unirse a Unext Ahora</span>
            <ArrowRight className="w-6 h-6" />
          </button>
          
          <p className="text-xs text-[#64748B] mt-4">
            Acceso seguro mediante autenticación institucional y corporativa SSO
          </p>
        </div>
      </section>


      {/* =========================================================================
          8. FOOTER
         ========================================================================= */}
      <footer className="bg-[#FFFDFF] border-t border-[#8EB9FC]/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#274DEA] flex items-center justify-center text-white">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold text-[#274DEA]">UNEXT</span>
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Plataforma de intermediación y bolsa de trabajo interuniversitaria con acreditación de competencias en origen.
              </p>
            </div>

            <div>
              <h5 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-4">Plataforma</h5>
              <ul className="space-y-2 text-xs text-[#475569]">
                <li><a href="#vision" className="hover:text-[#274DEA]">Visión</a></li>
                <li><a href="#metas" className="hover:text-[#274DEA]">Metas del Producto</a></li>
                <li><a href="#como-funciona" className="hover:text-[#274DEA]">Flujo de Convalidación</a></li>
                <li><a href="#beneficios" className="hover:text-[#274DEA]">Beneficios Compartidos</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-4">Accesos</h5>
              <ul className="space-y-2 text-xs text-[#475569]">
                <li><button onClick={handleIngresar} className="hover:text-[#274DEA]">Portal de Estudiantes</button></li>
                <li><button onClick={handleIngresar} className="hover:text-[#274DEA]">Portal de Empresas</button></li>
                <li><button onClick={handleIngresar} className="hover:text-[#274DEA]">Consola Universitaria</button></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-4">Seguridad y Soporte</h5>
              <p className="text-xs text-[#64748B] mb-2">Desarrollado bajo estándares académicos y de confidencialidad de datos.</p>
              <span className="inline-block px-2.5 py-1 rounded bg-[#E4F0FF] text-[#274DEA] text-[11px] font-semibold">
                Nextworks © {new Date().getFullYear()}
              </span>
            </div>

          </div>

          <div className="border-t border-[#8EB9FC]/20 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B]">
            <p>© {new Date().getFullYear()} Unext Inc. Todos los derechos reservados.</p>
            <div className="flex gap-4 mt-2 sm:mt-0">
              <a href="#" className="hover:text-[#274DEA]">Términos de Servicio</a>
              <a href="#" className="hover:text-[#274DEA]">Política de Privacidad</a>
              <a href="#" className="hover:text-[#274DEA]">Convenios Institucionales</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}