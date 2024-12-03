// migrations/20241203053407_create_database_schema.js


exports.up = async function(knex) {
    await knex.schema
      .createTable('usuario', (table) => {
        table.increments('idusuario').primary();
        table.string('nombre', 100).notNullable();
        table.string('apellido', 100).notNullable();
        table.string('correo', 150).notNullable().unique();
        table.string('celular', 15);    
        table.string('rol', 50).notNullable();
        table.string('password', 255).notNullable();
      })
      .createTable('alumno', (table) => {
        table.increments('idalumno').primary();
        table.string('carrera', 100).notNullable();
        table.boolean('sociedad_cientifica').defaultTo(false);
        table.date('fecha_ingreso').notNullable();
        table
          .integer('usuario_idusuario')
          .unsigned()
          .notNullable()
          .references('idusuario')
          .inTable('usuario')
          .onDelete('CASCADE');
        table.boolean('centro_estudiantes').defaultTo(false);
      })
      .createTable('graduados', (table) => {
        table.increments('idgraduados').primary();
        table.date('fecha_graduacion').notNullable();
        table
          .integer('alumno_idalumno')
          .unsigned()
          .notNullable()
          .references('idalumno')
          .inTable('alumno')
          .onDelete('CASCADE');
      })
      .createTable('foros', (table) => {
        table.increments('idforo').primary();
        table.string('nombre', 200).notNullable();
        table.string('autor', 100).notNullable();
        table.text('descripcion');
        table.date('fecha_inicio').notNullable();
      })
      .createTable('inscripciones_foros', (table) => {
        table.increments('idinscripciones_foros').primary();
        table.date('fecha_inscripcion').notNullable();
        table
          .integer('alumno_idalumno')
          .unsigned()
          .notNullable()
          .references('idalumno')
          .inTable('alumno')
          .onDelete('CASCADE');
        table
          .integer('foros_idforo')
          .unsigned()
          .notNullable()
          .references('idforo')
          .inTable('foros')
          .onDelete('CASCADE');
      })
      .createTable('administrativo', (table) => {
        table.increments('idadministrativo').primary();
        table.string('cargo', 100).notNullable();
        table.string('oficina', 100);
        table
          .integer('usuario_idusuario')
          .unsigned()
          .notNullable()
          .references('idusuario')
          .inTable('usuario')
          .onDelete('CASCADE');
      })
      .createTable('pasantias', (table) => {
        table.increments('idpasantia').primary();
        table.string('empresa', 200).notNullable();
        table.text('descripcion');
        table.date('fecha_inicio').notNullable();
        table.date('fecha_final');
      })
      .createTable('inscripciones_pasantias', (table) => {
        table.increments('idinscripciones_pasantias').primary();
        table.date('fecha_postulacion').notNullable();
        table.string('estado', 50).notNullable();
        table
          .integer('alumno_idalumno')
          .unsigned()
          .notNullable()
          .references('idalumno')
          .inTable('alumno')
          .onDelete('CASCADE');
        table
          .integer('pasantias_idpasantia')
          .unsigned()
          .notNullable()
          .references('idpasantia')
          .inTable('pasantias')
          .onDelete('CASCADE');
      });
  };
  
  exports.down =  async function(knex) {
    await knex.schema
      .dropTableIfExists('inscripciones_pasantias')
      .dropTableIfExists('pasantias')
      .dropTableIfExists('administrativo')
      .dropTableIfExists('inscripciones_foros')
      .dropTableIfExists('foros')
      .dropTableIfExists('graduados')
      .dropTableIfExists('alumno')
      .dropTableIfExists('usuario');
  };
  