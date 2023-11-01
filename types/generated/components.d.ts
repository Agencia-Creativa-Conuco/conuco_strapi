import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsContacto extends Schema.Component {
  collectionName: 'components_components_contactos';
  info: {
    displayName: 'Contacto';
    icon: 'headphone';
    description: '';
  };
  attributes: {
    titular: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Tierra fertil para todos tus <span>proyectos</span>'>;
    copy: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Nos dedicamos a conectar la identidad de las marcas con las personas,  generarando cambios por medio de sus productos que contribuyen mejorar la vida de sus usuarios.'>;
    formulario: Attribute.Component<'components.formulario'> &
      Attribute.Required;
  };
}

export interface ComponentsFormulario extends Schema.Component {
  collectionName: 'components_components_formularios';
  info: {
    displayName: 'Formulario';
    icon: 'layer';
    description: '';
  };
  attributes: {
    formId: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'b45ec825-dd54-4818-88ea-02d0a9e2072b'>;
  };
}

export interface ProyectoContenido extends Schema.Component {
  collectionName: 'components_proyecto_contenidos';
  info: {
    displayName: 'Contenido';
    icon: 'file';
    description: '';
  };
  attributes: {
    texto: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface ProyectoImagenAnchoCompleto extends Schema.Component {
  collectionName: 'components_proyecto_imagen_ancho_completos';
  info: {
    displayName: 'Imagen ancho completo';
    icon: 'picture';
  };
  attributes: {
    medio: Attribute.Media & Attribute.Required;
  };
}

export interface ProyectoImagenDosColumnas extends Schema.Component {
  collectionName: 'components_proyecto_imagen_dos_columnas';
  info: {
    displayName: 'Imagen dos columnas';
    icon: 'landscape';
  };
  attributes: {
    medio1: Attribute.Media & Attribute.Required;
    medio2: Attribute.Media & Attribute.Required;
  };
}

export interface ProyectoVideo extends Schema.Component {
  collectionName: 'components_proyecto_videos';
  info: {
    displayName: 'Video';
    icon: 'play';
    description: '';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.contacto': ComponentsContacto;
      'components.formulario': ComponentsFormulario;
      'proyecto.contenido': ProyectoContenido;
      'proyecto.imagen-ancho-completo': ProyectoImagenAnchoCompleto;
      'proyecto.imagen-dos-columnas': ProyectoImagenDosColumnas;
      'proyecto.video': ProyectoVideo;
    }
  }
}
