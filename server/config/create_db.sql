-- Tabla Usuario
CREATE TABLE usuario (
    idusuario SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    correo VARCHAR(150) NOT NULL UNIQUE,
    celular VARCHAR(15),
    rol VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Tabla Alumno
CREATE TABLE alumno (
    idalumno SERIAL PRIMARY KEY,
    carrera VARCHAR(100) NOT NULL,
    sociedad_cientifica BOOLEAN DEFAULT FALSE,
    fecha_ingreso DATE NOT NULL,
    usuario_idusuario INT NOT NULL,
    centro_estudiantes BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (usuario_idusuario) REFERENCES usuario(idusuario)
);

-- Tabla Graduados
CREATE TABLE graduados (
    idgraduados SERIAL PRIMARY KEY,
    fecha_graduacion DATE NOT NULL,
    alumno_idalumno INT NOT NULL,
    FOREIGN KEY (alumno_idalumno) REFERENCES alumno(idalumno)
);

-- Tabla Foros
CREATE TABLE foros (
    idforo SERIAL PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    descripcion TEXT,
    fecha_inicio DATE NOT NULL
);

-- Tabla InscripcionesForos
CREATE TABLE inscripciones_foros (
    idinscripciones_foros SERIAL PRIMARY KEY,
    fecha_inscripcion DATE NOT NULL,
    alumno_idalumno INT NOT NULL,
    foros_idforo INT NOT NULL,
    FOREIGN KEY (alumno_idalumno) REFERENCES alumno(idalumno),
    FOREIGN KEY (foros_idforo) REFERENCES foros(idforo)
);

-- Tabla Administrativo
CREATE TABLE administrativo (
    idadministrativo SERIAL PRIMARY KEY,
    cargo VARCHAR(100) NOT NULL,
    oficina VARCHAR(100),
    usuario_idusuario INT NOT NULL,
    FOREIGN KEY (usuario_idusuario) REFERENCES usuario(idusuario)
);

-- Tabla Pasantias
CREATE TABLE pasantias (
    idpasantia SERIAL PRIMARY KEY,
    empresa VARCHAR(200) NOT NULL,
    descripcion TEXT,
    fecha_inicio DATE NOT NULL,
    fecha_final DATE
);
-- Tabla InscripcionesPasantias
CREATE TABLE inscripciones_pasantias (
    idinscripciones_pasantias SERIAL PRIMARY KEY,
    fecha_postulacion DATE NOT NULL,
    estado VARCHAR(50) NOT NULL,
    alumno_idalumno INT NOT NULL,
    pasantias_idpasantia INT NOT NULL,
    FOREIGN KEY (alumno_idalumno) REFERENCES alumno(idalumno),
    FOREIGN KEY (pasantias_idpasantia) REFERENCES pasantias(idpasantia)
);