// import React, { Component } from "react";
import { Link } from "react-router-dom";


// import delivery from "./images/delivery.jpeg";
import delivery1 from "./images/details-delivery-1.jpeg";
import delivery2 from "./images/details-delivery-2.jpeg";
import delivery3 from "./images/details-delivery-3.jpeg";
import furniture from "./images/furniture.jpeg";
import furniture1 from "./images/details-furniture-1.jpeg";
import furniture2 from "./images/details-furniture-2.jpeg";
import furniture3 from "./images/details-furniture-3.jpeg";
import camera from "./images/camera.jpeg";
import cam1 from "./images/details-cam-1.jpeg";
import cam2 from "./images/details-cam-2.jpeg";
import cam3 from "./images/details-cam-3.jpeg";
import logoSodimac from "./images/logo_sodimac.png";
import logoPromart from "./images/logo_promart.png";
import logoMaestro from "./images/logo_maestro.png";
import logoOechsle from "./images/logo_oechsle.png";
import logoPlazavea from "./images/logo_plazavea.png";
import logoFalabella from "./images/logo_falabella.png";

import { FaWhatsapp } from "react-icons/fa";
import { FaCubes } from "react-icons/fa";

const data= [
  
  // Featured Room
  {
    sys: {
      id: "14"
    },
    fields: {
      slug: "carpinteria",
      name: "",
      district: "Huancayo y distritos",
      type: "Carpinteria",
      speciality: "Armado de Muebles",
      experience: 7,
      home: true,
      workshop: false,
      contact:
        <a
          className="btn-primary-slider"
          // href="https://wa.me/51980895124?text=Armado%20de%20Muebles:%20Hola,%20quiero%20información."
          // href="https://wa.me/51980895124?text=¡Buen%20día!%20Vengo%20de%20la%20web.%20Quiero%20información%20sobre%20el%20servicio%20de%20armado%20de%20muebles."
          href="https://bit.ly/3WhUj1y"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textAlign: "center", width: "100%" }}
        >
          <FaWhatsapp
            style={{
              fontSize: "1.4rem",
              verticalAlign: "bottom",/*text-bottom */
              marginRight: "5px"
            }}
          />
          Contactar
        </a>
      ,
      proyects:
      <Link
          className="btn-primary-slider"
          to="/proyectos"
          style={{ textAlign: "center", width: "100%" }}
      >
        <FaCubes
          style={{
            fontSize: "1.4rem",
            verticalAlign: "bottom",/*text-bottom */
            marginRight: "5px"
          }}
        />
        Proyectos
      </Link>
      ,
      featured: true,
      titleDescription: "Armado de Muebles",
      description: 
        "Armado y desarmado de muebles prefabricados, RTA, de melanina; comprados en las diferentes tiendas por departamento y afines. Contamos con movilidad propia y técnicos según zona, lo que asegura la llegada puntual al domicilio del cliente, y así garantizar el cumplimiento del servicio ofrecido. Nuestro personal cuenta con su identificación respectiva, brindando de esta manera mayor seguridad y confianza a nuestros clientes. Llámanos y un técnico especialista llegara a tu casa.",
      titleDescription02: "Servicio Express / Atención Inmediata",
      description02: "Por lo general contamos con la posibilidad de realizar el armado de tu mueble el mismo día, si deseas conocer la disponibilidad de alguno de nuestros técnicos en el momento que estás leyendo esto, por favor, consúltanos mediante una llamada telefónica o un mensaje directo haciendo clic en el botón: CONTACTAR (WhatsApp) o, también por Messenger o WhatsApp, haciendo clic en el botón (¿Necesitas ayuda?) ubicado en la parte baja del lado derecho de tu pantalla.",
      extras: [
        "Técnicos especializados y confiables.",
        "Buenos armados, grandes experiencias.",
        "Dejamos el producto, como te lo imaginaste.",
        "Suministro de piezas de melamina.",
        "Suministro de accesorios en general."
      ],
      images: [
        {
          fields: {
            file: {
              url: furniture //img13
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture1
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture2
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture3
            }
          }
        }
      ],
      imagesS: [
        {
          fields: {
            file: {
              url: logoPromart
            }
          }
        },
        {
          fields: {
            file: {
              url: logoSodimac
            }
          }
        },
        {
          fields: {
            file: {
              url: logoMaestro
            }
          }
        },
        {
          fields: {
            file: {
              url: logoOechsle
            }
          }
        },
        {
          fields: {
            file: {
              url: logoPlazavea
            }
          }
        },
        {
          fields: {
            file: {
              url: logoFalabella
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "15"
    },
    fields: {
      slug: "seguridad",
      name: "",
      district: "Huancayo",
      type: "Seguridad",
      speciality: "Cámaras de Vigilancia",
      experience: 6,
      home: true,
      workshop: false,
      contact:
        <a
          className="btn-primary-slider"
          href="https://wa.me/51980895124?text=Instalación%20de%20Cámaras:%20Hola,%20quiero%20información."
          target="_blank"
          rel="noopener noreferrer"
          style={{ textAlign: "center", width: "100%" }}
        >
          <FaWhatsapp
            style={{
              fontSize: "1.4rem",
              verticalAlign: "text-bottom",
              marginRight: "5px"
            }}
          />
          Contactar
        </a>
      ,
      featured: true,
      titleDescription: "Instalación de Cámaras de Vigilancia",
      description:
        "Estamos preparados para desarrollar su proyecto de seguridad y vigilancia electrónica sin importar el tamaño de su hogar, comercio, institución o la complejidad de sus necesidades. Le brindamos la posibilidad al cliente de contar con un amplio espectro de soluciones. Cada solución posee características y particularidades específicas, las cuales es importante tomar en consideración, para ello contamos con la asesoría de ingenieros y técnicos especializados que lo ayudaran a tomar la decisión adecuada en la implementación de su proyecto.",
      titleDescription02: "",
      description02: "",
      extras: [
        "Acceso remoto desde internet",
        "Bajo costo de mantenimiento",
        "Asesoría y soporte técnico integral",
        "Soluciones de acuerdo a sus necesidades",
        "Capacitación en el sistema de vigilancia"
      ],
      images: [
        {
          fields: {
            file: {
              url: camera //img15
            }
          }
        },
        {
          fields: {
            file: {
              url: cam1
            }
          }
        },
        {
          fields: {
            file: {
              url: cam2
            }
          }
        },
        {
          fields: {
            file: {
              url: cam3
            }
          }
        }
      ],
      imagesS: []
    }
  },
  {
    sys: {
      id: "16"
    },
    fields: {
      slug: "transporte",
      name: "",
      district: "Huancayo, Tambo, Chilca",
      type: "Transporte",
      speciality: "Mensajeria y Paqueteria",
      experience: 6,
      home: true,
      workshop: false,
      contact:
        <a
          className="btn-primary-slider"
          href="https://wa.me/51980895124?text=Mensajería%20y%20paquetería:%20Hola,%20quiero%20información."
          target="_blank"
          rel="noopener noreferrer"
          style={{ textAlign: "center", width: "100%" }}
        >
          <FaWhatsapp
            style={{
              fontSize: "1.4rem",
              verticalAlign: "text-bottom",
              marginRight: "5px"
            }}
          />
          Contactar
        </a>
      ,
      featured: true,
      titleDescription: "Servicio de mensajería y paquetería",
      description:
        "A través de esta web puedes pedir cualquier producto (posible de ser transportado en bicicleta o moto lineal), y recibirlo en cuestión de minutos en el lugar que decidas en la ciudad de Huancayo. Solucionamos tus pedidos y traslado de artículos o productos, documentos, comida, ropa, libros, pedidos de restaurantes que no cuentan con Delivery propio, etc. de una manera rápida, segura y confiable. Estamos conectados tecnológicamente y a nuestra plataforma web, en todo momento, y estaremos donde tú nos requieras; estamos dispuestos a brindarte el mejor servicio y cumplir con la entrega de tu pedido eficientemente. ¡No te compliques! Y recupera el tiempo perdido.",
      titleDescription02: "",
      description02: "",
      extras: [
        "Atención express",
        "Tu solución de transporte a un Click",
        "Nuestros precios son muy competitivos",
        "Te llevamos a domicilio lo que quieras",
        "Nos adaptamos a la necesidad de cada cliente"
      ],
      images: [
        {
          fields: {
            file: {
              url: delivery1 //img14
            }
          }
        },
        {
          fields: {
            file: {
              url: delivery1
            }
          }
        },
        {
          fields: {
            file: {
              url: delivery2
            }
          }
        },
        {
          fields: {
            file: {
              url: delivery3
            }
          }
        }
      ],
      imagesS: []
    }
  },

  // Rooms
  /*
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "single economy",
      slug: "single-economy",
      type: "single",
      price: 100,
      size: 200,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "single basic",
      slug: "single-basic",
      type: "single",
      price: 150,
      size: 250,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "single standard",
      slug: "single-standard",
      type: "single",
      price: 250,
      size: 300,
      capacity: 1,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img3
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "single deluxe",
      slug: "single-deluxe",
      type: "single",
      price: 300,
      size: 400,
      capacity: 1,
      pets: true,
      breakfast: true,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img4
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "double economy",
      slug: "double-economy",
      type: "double",
      price: 200,
      size: 300,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img5
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "double basic",
      slug: "double-basic",
      type: "double",
      price: 250,
      size: 350,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img6
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
      name: "double standard",
      slug: "double-standard",
      type: "double",
      price: 300,
      size: 400,
      capacity: 2,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "8"
    },
    fields: {
      name: "double deluxe",
      slug: "double-deluxe",
      type: "double",
      price: 400,
      size: 500,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img8
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "9"
    },
    fields: {
      name: "family economy",
      slug: "family-economy",
      type: "family",
      price: 300,
      size: 500,
      capacity: 3,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img9
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "10"
    },
    fields: {
      name: "family basic",
      slug: "family-basic",
      type: "family",
      price: 350,
      size: 550,
      capacity: 4,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img10
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "11"
    },
    fields: {
      name: "family standard",
      slug: "family-standard",
      type: "family",
      price: 400,
      size: 600,
      capacity: 5,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img11
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "12"
    },
    fields: {
      name: "family deluxe",
      slug: "family-deluxe",
      type: "family",
      price: 500,
      size: 700,
      capacity: 6,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img12
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "13"
    },
    fields: {
      name: "presidential",
      slug: "presidential-room",
      type: "presidential",
      price: 600,
      size: 1000,
      capacity: 10,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: room1
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
    
  }
  */
];
export default data;