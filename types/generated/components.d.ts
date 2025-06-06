import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsContacto extends Struct.ComponentSchema {
  collectionName: 'components_components_contactos';
  info: {
    description: '';
    displayName: 'Contacto';
    icon: 'headphone';
  };
  attributes: {
    copy: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Nos dedicamos a conectar la identidad de las marcas con las personas,  generarando cambios por medio de sus productos que contribuyen mejorar la vida de sus usuarios.'>;
    formulario: Schema.Attribute.Component<'components.formulario', false> &
      Schema.Attribute.Required;
    titular: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Tierra fertil para todos tus <span>proyectos</span>'>;
  };
}

export interface ComponentsFormulario extends Struct.ComponentSchema {
  collectionName: 'components_components_formularios';
  info: {
    description: '';
    displayName: 'Formulario';
    icon: 'layer';
  };
  attributes: {
    formId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'b45ec825-dd54-4818-88ea-02d0a9e2072b'>;
  };
}

export interface ProyectoContenido extends Struct.ComponentSchema {
  collectionName: 'components_proyecto_contenidos';
  info: {
    description: '';
    displayName: 'Contenido';
    icon: 'file';
  };
  attributes: {
    texto: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface ProyectoImagenAnchoCompleto extends Struct.ComponentSchema {
  collectionName: 'components_proyecto_imagen_ancho_completos';
  info: {
    description: '';
    displayName: 'Imagen ancho completo';
    icon: 'picture';
  };
  attributes: {
    aspectHeight: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    aspectWidth: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    medio: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface ProyectoImagenDosColumnas extends Struct.ComponentSchema {
  collectionName: 'components_proyecto_imagen_dos_columnas';
  info: {
    description: '';
    displayName: 'Imagen dos columnas';
    icon: 'landscape';
  };
  attributes: {
    aspectHeight: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    aspectWidth: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    medio1: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    medio2: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface ProyectoLocalVideo extends Struct.ComponentSchema {
  collectionName: 'components_proyecto_local_videos';
  info: {
    description: '';
    displayName: 'Local Video';
    icon: 'archive';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    medio: Schema.Attribute.Media<'files' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface ProyectoMedios extends Struct.ComponentSchema {
  collectionName: 'components_proyecto_medios';
  info: {
    description: '';
    displayName: 'Medios';
    icon: 'picture';
  };
  attributes: {
    aspectHeight: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    aspectWidth: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    medios: Schema.Attribute.Media<'images' | 'files' | 'videos', true> &
      Schema.Attribute.Required;
  };
}

export interface ProyectoVideo extends Struct.ComponentSchema {
  collectionName: 'components_proyecto_videos';
  info: {
    description: '';
    displayName: 'Video';
    icon: 'play';
  };
  attributes: {
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.contacto': ComponentsContacto;
      'components.formulario': ComponentsFormulario;
      'proyecto.contenido': ProyectoContenido;
      'proyecto.imagen-ancho-completo': ProyectoImagenAnchoCompleto;
      'proyecto.imagen-dos-columnas': ProyectoImagenDosColumnas;
      'proyecto.local-video': ProyectoLocalVideo;
      'proyecto.medios': ProyectoMedios;
      'proyecto.video': ProyectoVideo;
    }
  }
}
