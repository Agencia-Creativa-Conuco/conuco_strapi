import type { Struct, Schema } from '@strapi/strapi';

export interface ProyectoVideo extends Struct.ComponentSchema {
  collectionName: 'components_proyecto_videos';
  info: {
    displayName: 'Video';
    icon: 'play';
    description: '';
  };
  attributes: {
    url: Schema.Attribute.String;
    medio: Schema.Attribute.Media<'files' | 'videos'>;
  };
}

export interface ProyectoImagenDosColumnas extends Struct.ComponentSchema {
  collectionName: 'components_proyecto_imagen_dos_columnas';
  info: {
    displayName: 'Imagen dos columnas';
    icon: 'landscape';
  };
  attributes: {
    medio1: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    medio2: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ProyectoImagenAnchoCompleto extends Struct.ComponentSchema {
  collectionName: 'components_proyecto_imagen_ancho_completos';
  info: {
    displayName: 'Imagen ancho completo';
    icon: 'picture';
  };
  attributes: {
    medio: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ProyectoContenido extends Struct.ComponentSchema {
  collectionName: 'components_proyecto_contenidos';
  info: {
    displayName: 'Contenido';
    icon: 'file';
    description: '';
  };
  attributes: {
    texto: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface ComponentsFormulario extends Struct.ComponentSchema {
  collectionName: 'components_components_formularios';
  info: {
    displayName: 'Formulario';
    icon: 'layer';
    description: '';
  };
  attributes: {
    formId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'b45ec825-dd54-4818-88ea-02d0a9e2072b'>;
  };
}

export interface ComponentsContacto extends Struct.ComponentSchema {
  collectionName: 'components_components_contactos';
  info: {
    displayName: 'Contacto';
    icon: 'headphone';
    description: '';
  };
  attributes: {
    titular: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Tierra fertil para todos tus <span>proyectos</span>'>;
    copy: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Nos dedicamos a conectar la identidad de las marcas con las personas,  generarando cambios por medio de sus productos que contribuyen mejorar la vida de sus usuarios.'>;
    formulario: Schema.Attribute.Component<'components.formulario', false> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'proyecto.video': ProyectoVideo;
      'proyecto.imagen-dos-columnas': ProyectoImagenDosColumnas;
      'proyecto.imagen-ancho-completo': ProyectoImagenAnchoCompleto;
      'proyecto.contenido': ProyectoContenido;
      'components.formulario': ComponentsFormulario;
      'components.contacto': ComponentsContacto;
    }
  }
}
