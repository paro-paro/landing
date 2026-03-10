import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Coffee } from "lucide-react";
import { ReadMore } from "@/components/read-more";
import { locales } from "@/i18n/config";
import { FarmerSchema } from "@/components/structured-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ethichub.com";

// Originator data - in a real app this would come from a CMS or database
const originadores: Record<
  string,
  {
    name: string;
    country: string;
    flag: string;
    region: string;
    since: string;
    image: string;
    description: string;
    descriptionEs?: string;
    descriptionEn?: string;
    specialties: string[];
  }
> = {
  "um-coffee": {
    name: "Um Coffee",
    country: "Brasil",
    flag: "🇧🇷",
    region: "Minas Gerais y Espirito Santo",
    since: "2021",
    image: "/umcoffee.jpg",
    description:
      "Boram vive en São Paulo, Brasil. Es productor de café, tostador, barista y Q-Grader.\n\nActualmente produce café con su padre en dos propiedades en dos de las mejores regiones cafeteras de Brasil. Al sur de Minas Gerais y Espirito Santo Caparaó.\n\nSiendo el actual campeón Barista de Brasil, Boram tiene una profunda conexión con la mayoría de las regiones cafetaleras de Brasil, con acceso y relaciones con muchos pequeños productores.\n\nSiendo también productor, tiene conocimiento local de las muchas dificultades financieras a las que se enfrentan los pequeños productores al competir con los grandes productores y las cooperativas locales.\n\nBoram está especializado en la producción y desarrollo de nuevos varietales en Brasil, con 38 variedades diferentes producidas en Fazenda Um. También desarrollando proyectos de poscosecha de alta calidad para que los productores aumenten la calidad y conozcan los procesos de fermentación.",
    descriptionEs:
      "Boram vive en São Paulo, Brasil. Es productor de café, tostador, barista y Q-Grader.\n\nActualmente produce café con su padre en dos propiedades en dos de las mejores regiones cafeteras de Brasil. Al sur de Minas Gerais y Espirito Santo Caparaó.\n\nSiendo el actual campeón Barista de Brasil, Boram tiene una profunda conexión con la mayoría de las regiones cafetaleras de Brasil, con acceso y relaciones con muchos pequeños productores.\n\nSiendo también productor, tiene conocimiento local de las muchas dificultades financieras a las que se enfrentan los pequeños productores al competir con los grandes productores y las cooperativas locales.\n\nBoram está especializado en la producción y desarrollo de nuevos varietales en Brasil, con 38 variedades diferentes producidas en Fazenda Um. También desarrollando proyectos de poscosecha de alta calidad para que los productores aumenten la calidad y conozcan los procesos de fermentación.",
    descriptionEn:
      "Boram lives in São Paulo, Brazil. He is a coffee producer, roaster, barista, and Q-Grader.\n\nCurrently, he produces coffee with his father in two properties in two of the best coffee regions in Brazil. South of Minas Gerais and Espirito Santo Caparaó.\n\nBeing the current Barista champion of Brazil, Boram has a deep connection with most of the coffee regions of Brazil, with access and relationships with many small producers.\n\nBeing also a producer, he has local knowledge of the many financial difficulties small producers face competing with large producers and local cooperatives.\n\nBoram is specialized in producing and developing new varietals in Brazil, with 38 different varieties being produced in Fazenda Um. Also developing high-quality post-harvest projects for producers to increase quality and learn about fermentation processes.",
    specialties: ["Café arábica", "Procesamiento natural", "Microlotes"],
  },
  "alcala-tradewise": {
    name: "Alcalá - Tradewise Green Coffee Import & Export",
    country: "Colombia",
    flag: "🇨🇴",
    region: "Alcalá, Valle del Cauca",
    since: "2022",
    image: "/cori.jpg",
    description:
      "En el año 1998, un grupo de técnicos y profesionales de la región norte del Departamento del Valle del Cauca en Colombia se reunieron para realizar proyectos que beneficiaran al sector agrario de la región, especialmente al pequeño productor, bajo las premisas del mercado justo, la preservación ambiental y las buenas prácticas agropecuarias.\n\nSu principal objetivo era ingresar los productos frutícolas de la región al mercado europeo, por lo que posteriormente se crearon las fundaciones Agro solidarias de Cartago y de Cataluña en España. El desarrollo del modelo propuesto llevó a que uno de los fundadores del mismo, el comerciante en café Señor Fernando Yusti, impulsara la exportación de este producto, no solo a Europa sino también a Estados Unidos y Asia. En este momento, contamos con una infraestructura logística y un equipo de trabajo que recoge nuestras experiencias en la firma Tradewise Green Coffee S.A.S en Colombia y su interacción actual es con pequeños productores de café del norte vallecaucano del municipio de Alcalá.\n\nLa empresa está ubicada en el municipio de Cartago, en el norte del valle, donde manejamos un almacenaje de hasta de 40 mil kilos de café de las diferentes regiones de nuestro país, lo cual incluye la selección y control manual, encargándonos de manejar café con los más altos estándares de calidad.",
    descriptionEs:
      "En el año 1998, un grupo de técnicos y profesionales de la región norte del Departamento del Valle del Cauca en Colombia se reunieron para realizar proyectos que beneficiaran al sector agrario de la región, especialmente al pequeño productor, bajo las premisas del mercado justo, la preservación ambiental y las buenas prácticas agropecuarias.\n\nSu principal objetivo era ingresar los productos frutícolas de la región al mercado europeo, por lo que posteriormente se crearon las fundaciones Agro solidarias de Cartago y de Cataluña en España. El desarrollo del modelo propuesto llevó a que uno de los fundadores del mismo, el comerciante en café Señor Fernando Yusti, impulsara la exportación de este producto, no solo a Europa sino también a Estados Unidos y Asia. En este momento, contamos con una infraestructura logística y un equipo de trabajo que recoge nuestras experiencias en la firma Tradewise Green Coffee S.A.S en Colombia y su interacción actual es con pequeños productores de café del norte vallecaucano del municipio de Alcalá.\n\nLa empresa está ubicada en el municipio de Cartago, en el norte del valle, donde manejamos un almacenaje de hasta de 40 mil kilos de café de las diferentes regiones de nuestro país, lo cual incluye la selección y control manual, encargándonos de manejar café con los más altos estándares de calidad.",
    descriptionEn:
      "We are a group of technicians and professionals from the northern region of the Department of Valle del Cauca in Colombia who met in 1998 to carry out projects that would benefit the region's agricultural sector, especially small producers, under the premises of a fair market, environmental preservation and good agricultural practices.\n\nOur main objective was to introduce the local fruits to European markets, so the Agro solidarity Foundations of Cartago and Catalonia in Spain were created. Out of this project's experience, one of the founders, coffee merchant Mr. Fernando Yusti, also promoted the export of this product, not only to Europe but also to the United States and Asia. At this time, we have a logistics infrastructure and an experienced work team in the Tradewise Green Coffee S.A.S firm in Colombia and its current interaction is with small coffee producers from the north of Valle del Cauca in the municipality of Alcalá.\n\nThe company is located in the northern municipality of Cartago, in the valley, where we are able to storage of up to 40 thousand kilos of coffee from different regions of our country, including selection and manual control, taking care of handling coffee with the highest quality standards.",
    specialties: ["Café de altura", "Variedades exóticas", "Comercio directo"],
  },
  "costal-campesino": {
    name: "Costal Campesino",
    country: "Colombia",
    flag: "🇨🇴",
    region: "Colombia",
    since: "2022",
    image: "/costal.jpg",
    description:
      "Café Costal Campesino es un proyecto que se enfoca en la producción y comercialización de café colombiano de especialidad, el cual es cultivado, cosechado y desarrollado completamente por víctimas y exmiembros de la guerrilla del Conflicto Colombiano (firmantes del Acuerdo de Paz de 2016 con las FARC-EP). Hemos establecido una alianza comercial con ellos en colaboración con la Misión de Verificación de las Naciones Unidas en Colombia.\n\nCreemos que un café de especialidad no solo se define por su calidad, sino también por ser cultivado de manera justa y sostenible. Es por eso que, junto con la Misión de Verificación de las Naciones Unidas, el Fondo Fiduciario Multidonante de las Naciones Unidas para la Sostenibilidad de la Paz y el Programa de las Naciones Unidas para el Desarrollo, hemos creado una alianza estratégica para promover la producción y el consumo sostenible de café de especialidad de Colombia en Europa.\n\nEsta alianza nos permite brindar apoyo y oportunidades a las comunidades rurales que han sido afectadas por décadas de conflicto. Trabajamos de cerca con los agricultores, ofreciéndoles capacitación, asistencia técnica y acceso a mercados justos. Además, promovemos prácticas agrícolas sostenibles y responsables con el medio ambiente.",
    descriptionEs:
      "Café Costal Campesino es un proyecto que se enfoca en la producción y comercialización de café colombiano de especialidad, el cual es cultivado, cosechado y desarrollado completamente por víctimas y exmiembros de la guerrilla del Conflicto Colombiano (firmantes del Acuerdo de Paz de 2016 con las FARC-EP). Hemos establecido una alianza comercial con ellos en colaboración con la Misión de Verificación de las Naciones Unidas en Colombia.\n\nCreemos que un café de especialidad no solo se define por su calidad, sino también por ser cultivado de manera justa y sostenible. Es por eso que, junto con la Misión de Verificación de las Naciones Unidas, el Fondo Fiduciario Multidonante de las Naciones Unidas para la Sostenibilidad de la Paz y el Programa de las Naciones Unidas para el Desarrollo, hemos creado una alianza estratégica para promover la producción y el consumo sostenible de café de especialidad de Colombia en Europa.\n\nEsta alianza nos permite brindar apoyo y oportunidades a las comunidades rurales que han sido afectadas por décadas de conflicto. Trabajamos de cerca con los agricultores, ofreciéndoles capacitación, asistencia técnica y acceso a mercados justos. Además, promovemos prácticas agrícolas sostenibles y responsables con el medio ambiente.",
    descriptionEn:
      "Café Costal Campesino is a project that focuses on the production and trading of Colombian specialty coffee, which is grown, harvested and developed entirely by victims and former members of the guerrilla from the Colombian Conflict (signatories of the 2016 Peace Agreement with the FARC-EP). We have established a commercial alliance with them in collaboration with the United Nations Verification Mission in Colombia.\n\nWe believe that a specialty coffee is not only defined by its quality, but also by being grown fairly and sustainably. That is why, together with the United Nations Verification Mission, the United Nations Multi-donor Trust Fund for the Sustainability of Peace and the United Nations Development Programme, we have created a strategic alliance to promote the production and the sustainable consumption of Colombian specialty coffee in Europe.\n\nThis partnership allows us to provide support and opportunities to rural communities that have been affected by decades of conflict. We work closely with farmers, offering them training, technical assistance and access to fair markets. In addition, we promote sustainable and environmentally responsible agricultural practices.",
    specialties: ["Café orgánico", "Cooperativas familiares", "Sostenibilidad"],
  },
  fabedi: {
    name: "Fabedi",
    country: "Colombia",
    flag: "🇨🇴",
    region: "Colombia",
    since: "2022",
    image: "/fabedi.jpg",
    description:
      "Fabedi es una empresa familiar productora, comercializadora y exportadora de cafés especiales ubicada en el municipio de Garzón Huila Colombia, que tiene como objetivo principal conectar al mundo a través del comercio de productos del café que tengan legado, historia e inclusión, teniendo como ADN la innovación y la sustentabilidad.\n\nNosotros, como productores, trabajamos con 160 aliados productores de nuestra región: 9 cooperativas, 20 asociaciones, 4 asociaciones de mujeres cafeteras, 2 asociaciones indígenas y una asociación de sordomudos. Contamos además con dos asociaciones que tienen sus propias plantas de beneficiado, las cuales procesan entre 5.000 hasta 7.000 kilos diarios de café en cereza.\n\nSe cultivan variedades arábicas como castillo cenicafe 1, Colombia y caturra y varietales como bourbon rosado, geisha, catuay, java, entre otros.",
    descriptionEs:
      "Fabedi es una empresa familiar productora, comercializadora y exportadora de cafés especiales ubicada en el municipio de Garzón Huila Colombia, que tiene como objetivo principal conectar al mundo a través del comercio de productos del café que tengan legado, historia e inclusión, teniendo como ADN la innovación y la sustentabilidad.\n\nNosotros, como productores, trabajamos con 160 aliados productores de nuestra región: 9 cooperativas, 20 asociaciones, 4 asociaciones de mujeres cafeteras, 2 asociaciones indígenas y una asociación de sordomudos. Contamos además con dos asociaciones que tienen sus propias plantas de beneficiado, las cuales procesan entre 5.000 hasta 7.000 kilos diarios de café en cereza.\n\nSe cultivan variedades arábicas como castillo cenicafe 1, Colombia y caturra y varietales como bourbon rosado, geisha, catuay, java, entre otros.",
    descriptionEn:
      "Fabedi is a family business that produces, markets and exports specialty coffees located in the municipality of Garzón Huila Colombia, whose main objective is to connect the world through the trade of coffee products that have a legacy, history and inclusion, having as its DNA the innovation and sustainability.\n\nWe, as producers, work with 160 producer allies in our region: 9 cooperatives, 20 associations, 4 associations of women coffee growers, 2 indigenous associations and an association of deaf-mutes. We also have two associations that have their own processing plants, which process between 5,000 and 7,000 kilos of cherry coffee per day.\n\nArabic varieties such as Castillo Cenicafe 1, Colombia and Caturra and varietals such as rosé bourbon, geisha, catuay, java, among others, are cultivated.",
    specialties: [
      "Café de especialidad",
      "Capacitación agrícola",
      "Exportación directa",
    ],
  },
  codicafe: {
    name: "CODICAFE",
    country: "Honduras",
    flag: "🇭🇳",
    region: "Honduras",
    since: "2023",
    image: "/dicafe.jpg",
    description:
      "Productor de café de tradición familiar, Domingo es la 4ª generación de la familia Rosales Amaya que gestiona la FINCA MONTES DE AGUA HN desde inicios del siglo XX. Adicionalmente Domingo es Catador Nacional en Honduras y Catador Certificado de SCENTONE AROMA MASTER.\n\nDesarrollador de competencias regionales de cafés de especialidad, con categoría internacional en el departamento de Santa Bárbara, y presidente de la Cooperativa Cafetalera Diseñadores de Cafés Especiales, CODICAFE.\n\nToda la experiencia vivida en finca, la tradición cafetalera y la preparación en control de calidad en finca, lo ha llevado a lograr asesorar y apoyar a pequeños productores de café desde 2014, en el mantenimiento de sus fincas, planes de fertilización, manejo de poda y tejido, nuevas plantaciones de variedades exóticas, procesos de beneficiado y variedades ideales para cada finca, control de fermentación, secado y almacenamiento del grano.\n\nDomingo trabaja especialmente con las nuevas generaciones e hijos de agricultores en el control de calidad y mejora de los procesos. Ha colaborado con más de 200 productores de café en 6 departamentos del país de 3 regiones cafetaleras de Honduras.",
    descriptionEs:
      "Productor de café de tradición familiar, Domingo es la 4ª generación de la familia Rosales Amaya que gestiona la FINCA MONTES DE AGUA HN desde inicios del siglo XX. Adicionalmente Domingo es Catador Nacional en Honduras y Catador Certificado de SCENTONE AROMA MASTER.\n\nDesarrollador de competencias regionales de cafés de especialidad, con categoría internacional en el departamento de Santa Bárbara, y presidente de la Cooperativa Cafetalera Diseñadores de Cafés Especiales, CODICAFE.\n\nToda la experiencia vivida en finca, la tradición cafetalera y la preparación en control de calidad en finca, lo ha llevado a lograr asesorar y apoyar a pequeños productores de café desde 2014, en el mantenimiento de sus fincas, planes de fertilización, manejo de poda y tejido, nuevas plantaciones de variedades exóticas, procesos de beneficiado y variedades ideales para cada finca, control de fermentación, secado y almacenamiento del grano.\n\nDomingo trabaja especialmente con las nuevas generaciones e hijos de agricultores en el control de calidad y mejora de los procesos. Ha colaborado con más de 200 productores de café en 6 departamentos del país de 3 regiones cafetaleras de Honduras.",
    descriptionEn:
      "A coffee producer with a family tradition, Domingo is the 4th generation of the Rosales Amaya family that has managed FINCA MONTES DE AGUA HN since the beginning of the 20th century. Additionally, Domingo is a National Taster in Honduras and a Certified SCENTONE AROMA MASTER Taster.\n\nHe is the developer of regional specialty coffee competitions, with international status in the department of Santa Bárbara, and president of the Cooperativa Cafetalera Diseñadores de Cafés Especiales, CODICAFE.\n\nAll the experience lived on the farm, the coffee tradition and the preparation in quality control on the farm, has led him to advise and support small coffee producers since 2014, in the maintenance of their farms, fertilization plans, pruning management and weaving, new plantations of exotic varieties, beneficiation processes and ideal varieties for each farm, control of fermentation, drying and storage of the grain.\n\nDomingo works especially with the new generations and children of farmers in quality control and process improvement. He has collaborated with more than 200 coffee producers in 6 departments of the country in 3 coffee regions of Honduras.",
    specialties: ["Cooperativa", "Alta puntuación SCA", "Café lavado"],
  },
  "san-marcos-dregalado": {
    name: "San Marcos - D'Regalado Consulting",
    country: "Honduras",
    flag: "🇭🇳",
    region: "Finca La Fortuna, Honduras",
    since: "2023",
    image: "/sanmarcos.jpg",
    description:
      "Empresa familiar bajo la dirección de Delmy Regalado cuenta con asesores dedicados al servicio de los agricultores y empresas que deseen crecer en los negocios sostenibles, con más de 20 años de experiencia en el rubro del café, las finanzas, el mercadeo y la exportación del mismo, trabajando de la mano con los agricultores y emprendedores que quieran llevar su negocio a un nivel sustentable. Todo esto se logra mediante capacitación en todos los temas relacionados a la producción, manejo y comercialización del café.\n\nCuenta con relaciones comerciales y financieras con varias asociaciones y personas individuales en los departamentos de Ocotepeque, Copán, La Paz, Intibucá y Lempira. Para la exportación se cuenta con alianza con Beneficio San Marcos, COCAFELOL y otras exportadoras del país.",
    descriptionEs:
      "Empresa familiar bajo la dirección de Delmy Regalado cuenta con asesores dedicados al servicio de los agricultores y empresas que deseen crecer en los negocios sostenibles, con más de 20 años de experiencia en el rubro del café, las finanzas, el mercadeo y la exportación del mismo, trabajando de la mano con los agricultores y emprendedores que quieran llevar su negocio a un nivel sustentable. Todo esto se logra mediante capacitación en todos los temas relacionados a la producción, manejo y comercialización del café.\n\nCuenta con relaciones comerciales y financieras con varias asociaciones y personas individuales en los departamentos de Ocotepeque, Copán, La Paz, Intibucá y Lempira. Para la exportación se cuenta con alianza con Beneficio San Marcos, COCAFELOL y otras exportadoras del país.",
    descriptionEn:
      "Family business under the direction of Delmy Regalado has advisors dedicated to serving farmers and companies that wish to grow in sustainable businesses, with more than 20 years of experience in the coffee industry, finance, marketing and export of it, working hand in hand with farmers and entrepreneurs who want to take their business to a sustainable level. All this is achieved through training in all issues related to the production, management and marketing of coffee.\n\nIt has commercial and financial relationships with various associations and individuals in the departments of Ocotepeque, Copán, La Paz, Intibucá and Lempira. For export, there is an alliance with Beneficio San Marcos, COCAFELOL and other exporters in the country.",
    specialties: [
      "Finca propia",
      "Exportación directa",
      "Café de especialidad",
    ],
  },
  "anepaan-odeput": {
    name: "Anepaan O'Depüt",
    country: "México",
    flag: "🇲🇽",
    region: "Chiapas",
    since: "2020",
    image: "/anepaan.jpg",
    description:
      "Anepaan O’Depüt es una organización que incluye a pequeños productores de 12 comunidades distribuidas en 4 localidades. Dichas comunidades son: Nueva Independencia, Madero, Pacayal, Salvador Urbina, Nuevo Milenio Toluca, Querétaro, San Rafael, Reforma, Las Brisas, San Nicolás, Las Flores y La Piedad. Todas ellas forman parte de la Zona de amortiguamiento de La Reserva de la Biosfera El Triunfo. La Reserva de la Biosfera El Triunfo protege a 10 tipos de vegetación, de los 19 con que cuenta Chiapas, de acuerdo a la clasificación de Breedlove (1981). Entre ellos destacan dos de los más amenazados en México: el bosque de niebla y el bosque lluvioso. El bosque de niebla de El Triunfo es reportado como uno de los de mayor diversidad de especies de árboles en Norte y Centro América, y uno de los remanentes más extensos en el país. En general la producción de café es una de las actividades económicas que menos impacto tienen sobre la conservación de la biodiversidad, particularmente cuando los cafetales mantienen la sombra nativa, es decir, los árboles de las selvas o bosques originales. El café de esta región es reconocido por su excelente calidad.",
    descriptionEs:
      "Anepaan O’Depüt es una organización que incluye a pequeños productores de 12 comunidades distribuidas en 4 localidades. Dichas comunidades son: Nueva Independencia, Madero, Pacayal, Salvador Urbina, Nuevo Milenio Toluca, Querétaro, San Rafael, Reforma, Las Brisas, San Nicolás, Las Flores y La Piedad. Todas ellas forman parte de la Zona de amortiguamiento de La Reserva de la Biosfera El Triunfo.\n\nLa Reserva de la Biosfera El Triunfo protege a 10 tipos de vegetación, de los 19 con que cuenta Chiapas, de acuerdo a la clasificación de Breedlove (1981). Entre ellos destacan dos de los más amenazados en México: el bosque de niebla y el bosque lluvioso. El bosque de niebla de El Triunfo es reportado como uno de los de mayor diversidad de especies de árboles en Norte y Centro América (Vázquez-García, 1993), y uno de los remanentes más extensos en el país.\n\nEn general la producción de café es una de las actividades económicas que menos impacto tienen sobre la conservación de la biodiversidad, particularmente cuando los cafetales mantienen la sombra nativa, es decir, los árboles de las selvas o bosques originales. El café de esta región es reconocido por su excelente calidad.",
    descriptionEn:
      "Anepaan O'Depüt is an organization that includes small producers from 12 communities, distributed in 4 locations. The communities are: Nueva Independencia, Madero, Pacayal, Salvador Urbina, Nuevo Milenio Toluca, Querétaro, San Rafael, Reforma, Las Brisas, San Nicolás, Las Flores and La Piedad. All of them are part of the buffer zone of the El Triunfo Biosphere Reserve.\n\nThe El Triunfo Biosphere Reserve protects 10 types of vegetation, of the 19 that Chiapas counts, according to Breedlove's (1981) classification. Two of the most threatened in Mexico stand out among them: the cloud forest and the rainforest. The cloud forest of El Triunfo is reported as one of the most diverse of tree species in North and Central America (Vázquez-García, 1993), and one of the largest remnants in the country.\n\nIn general, coffee production is one of the economic activities that has the least impact on the conservation of biodiversity, particularly when coffee plantations maintain native shade, that is, the trees of the original jungles or forests. The coffee from this region is recognized for its excellent quality.",
    specialties: ["Café indígena", "Producción tradicional", "Comercio justo"],
  },
  "cafe-fundadores": {
    name: "Café Fundadores",
    country: "México",
    flag: "🇲🇽",
    region: "Chiapas",
    since: "2021",
    image: "/fundadores.jpg",
    description:
      "Café Fundadores SPR de RL es una cooperativa comprometida con la producción de café de alta calidad en la hermosa región de la Sierra Madre de Chiapas, México. Café Fundadores reúne a más de 300 pequeños productores de café en más de 14 comunidades de los municipios de La Concordia, Ángel Albino Corzo y Capitán Luis A. Vidal. Sus parcelas están ubicadas dentro de la zona de amortiguamiento de la Reserva de la Biosfera El Triunfo, una de las áreas naturales protegidas más destacadas a nivel nacional e internacional.",
    descriptionEs:
      "Café Fundadores SPR de RL es una cooperativa comprometida con la producción de café de alta calidad en la hermosa región de la Sierra Madre de Chiapas, México. Café Fundadores reúne a más de 300 pequeños productores de café en más de 14 comunidades de los municipios de La Concordia, Ángel Albino Corzo y Capitán Luis A. Vidal. Sus parcelas están ubicadas dentro de la zona de amortiguamiento de la Reserva de la Biosfera El Triunfo, una de las áreas naturales protegidas más destacadas a nivel nacional e internacional.",
    descriptionEn:
      "Café Fundadores SPR de RL is a cooperative committed to producing high-quality coffee in the beautiful Sierra Madre region of Chiapas, Mexico. Café Fundadores brings together more than 300 small coffee farmers in over 14 communities in the municipalities of La Concordia, Ángel Albino Corzo, and Capitán Luis A. Vidal. Their plots are located within the buffer zone of the El Triunfo Biosphere Reserve, one of the most outstanding protected natural areas at the national and international levels.",
    specialties: ["Café de origen", "Trazabilidad", "Calidad premium"],
  },
  "cafe-sustentable": {
    name: "Café Sustentable",
    country: "México",
    flag: "🇲🇽",
    region: "Chiapas",
    since: "2022",
    image: "/sustenta.jpg",
    description:
      'La cuenca de "La Suiza" está formada por un río que emerge dentro de la Reserva de la Biosfera El Triunfo, que a su vez es parte de la cordillera conocida como la Sierra Madre de Chiapas. Nuestra cooperativa está formada por mujeres y hombres de siete comunidades diferentes que trabajan juntos para producir 2,900 sacos de café de altura, orgánico y amigable con el medio ambiente. Estamos comprometidos con ser socialmente y ambientalmente responsables con nuestras prácticas agrícolas.\n\nDentro de la cooperativa buscamos beneficiar a 142 familias dedicadas a la producción de maíz, frijol y café, siendo este último la principal fuente de ingreso. Existen parcelas promedio de 1.8 ha (1800 m2) en las cuales se cultiva café Arábica, bourbon y otras variedades bajo la sombra de árboles nativos altos y también árboles frutales como aguacate, limón, durazno y manzana sin el uso de pesticidas o fertilizantes químicos. Se promueve la conservación del suelo mediante la aplicación de barreras vivas y fertilizante orgánico.\n\nLos productores pertenecen a pequeños ranchos, pueblos y tierras comunales como Ranchería Palenque Viejo, Ranchería Palenque Nuevo, Ranchería Vista Alegre, Ejido Monte Virgen Candelaria, Barrio Río Negro, Ejido Toluca y Ejido Puerto Rico.',
    descriptionEs:
      'La cuenca de "La Suiza" está formada por un río que emerge dentro de la Reserva de la Biosfera El Triunfo, que a su vez es parte de la cordillera conocida como la Sierra Madre de Chiapas. Nuestra cooperativa está formada por mujeres y hombres de siete comunidades diferentes que trabajan juntos para producir 2,900 sacos de café de altura, orgánico y amigable con el medio ambiente. Estamos comprometidos con ser socialmente y ambientalmente responsables con nuestras prácticas agrícolas.\n\nDentro de la cooperativa buscamos beneficiar a 142 familias dedicadas a la producción de maíz, frijol y café, siendo este último la principal fuente de ingreso. Existen parcelas promedio de 1.8 ha (1800 m2) en las cuales se cultiva café Arábica, bourbon y otras variedades bajo la sombra de árboles nativos altos y también árboles frutales como aguacate, limón, durazno y manzana sin el uso de pesticidas o fertilizantes químicos. Se promueve la conservación del suelo mediante la aplicación de barreras vivas y fertilizante orgánico.\n\nLos productores pertenecen a pequeños ranchos, pueblos y tierras comunales como Ranchería Palenque Viejo, Ranchería Palenque Nuevo, Ranchería Vista Alegre, Ejido Monte Virgen Candelaria, Barrio Río Negro, Ejido Toluca y Ejido Puerto Rico.',
    descriptionEn:
      'The "La Suiza" Basin is formed by a river that emerges within the El Triunfo Biosphere Reserve, which in turn is part of the mountain range known as the Sierra Madre de Chiapas. Our cooperative is formed by women and men from seven different communities who work together to produce 2,900 bags of high altitude, organic and environmentally friendly coffee. We are committed to being socially and environmentally responsible with our agricultural practices.\n\nWithin the cooperative we seek to benefit 142 families dedicated to the production of corn, beans and coffee, where the latter is the main source of income. There are average plots of 1.8 ha (1800 m2) in which Arabica, bourbon, and other varietals of coffee are grown under the shade of tall native trees and also fruit trees such as avocado, lemon, peach, and apple without the use of pesticides or chemical fertilizers. Soil conservation is promoted through the application of live barriers and organic fertilizer.\n\nThe producers belong to small ranches, towns and common lands such as Ranchería Palenque Viejo, Ranchería Palenque Nuevo, Ranchería Vista Alegre, Ejido Monte Virgen Candelaria, Barrio Río Negro, Ejido Toluca and Ejido Puerto Rico.',
    specialties: [
      "Agricultura regenerativa",
      "Café orgánico",
      "Impacto ambiental",
    ],
  },
  "cosechando-riqueza": {
    name: "Cosechando Riqueza",
    country: "México",
    flag: "🇲🇽",
    region: "Chiapas",
    since: "2021",
    image: "/sierra.jpg",
    description:
      "Cosechando Riqueza (CoRi) es una sociedad de producción rural que nace en diciembre del 2020 por la necesidad de organizar a diferentes grupos de pequeños caficultores, inmersos en la montaña de la Sierra de Chiapas, con el principal objetivo de conectarlos a través de EthicHub a financiamiento más accesible y acompañarlos en todo el proceso de preparación y comercialización de su café, integrándose en su justa posición dentro de la cadena de valor de tan importante producto.",
    descriptionEs:
      "Cosechando Riqueza (CoRi) es una sociedad de producción rural que nace en diciembre del 2020 por la necesidad de organizar a diferentes grupos de pequeños caficultores, inmersos en la montaña de la Sierra de Chiapas, con el principal objetivo de conectarlos a través de EthicHub a financiamiento más accesible y acompañarlos en todo el proceso de preparación y comercialización de su café, integrándose en su justa posición dentro de la cadena de valor de tan importante producto.",
    descriptionEn:
      "Cosechando Riqueza (CoRi) is a rural production society that was born in December 2020 due to the need to organize different groups of small coffee growers, immersed in the mountains of the Sierra de Chiapas, with the main objective of connecting them through EthicHub to more accessible financing and accompany them throughout the process of preparing and marketing their coffee, integrating into their rightful position within the value chain of such an important product.",
    specialties: [
      "Comercio directo",
      "Desarrollo comunitario",
      "Café de altura",
    ],
  },
  "reserva-1920": {
    name: "Reserva 1920",
    country: "México",
    flag: "🇲🇽",
    region: "Chiapas",
    since: "2022",
    image: "/reserva.jpg",
    description:
      "Reserva 1920, Cafés Especiales SPR de RL, es una Sociedad de Producción Rural conformada por dedicados pequeños productores. Nuestra cooperativa está compuesta por 180 productores, de los cuales el 38% son mujeres, líderes y propietarias de sus unidades de producción.\n\nNuestros productores están distribuidos en nueve comunidades de los municipios de Ángel Albino Corzo, Capitán Luis A. Vidal, Honduras y Montecristo de Guerrero, en el Estado de Chiapas, México. Uno de los pilares fundamentales de nuestra cooperativa es el cuidado y respeto por la naturaleza. Nos enorgullece estar ubicados dentro de la zona de amortiguamiento de la Reserva Natural, la Reserva de la Biosfera El Triunfo, una de las Áreas Naturales Protegidas más importantes a nivel nacional e internacional, conocida por su inmensa riqueza en flora y fauna.",
    descriptionEs:
      "Reserva 1920, Cafés Especiales SPR de RL, es una Sociedad de Producción Rural conformada por dedicados pequeños productores. Nuestra cooperativa está compuesta por 180 productores, de los cuales el 38% son mujeres, líderes y propietarias de sus unidades de producción.\n\nNuestros productores están distribuidos en nueve comunidades de los municipios de Ángel Albino Corzo, Capitán Luis A. Vidal, Honduras y Montecristo de Guerrero, en el Estado de Chiapas, México. Uno de los pilares fundamentales de nuestra cooperativa es el cuidado y respeto por la naturaleza. Nos enorgullece estar ubicados dentro de la zona de amortiguamiento de la Reserva Natural, la Reserva de la Biosfera El Triunfo, una de las Áreas Naturales Protegidas más importantes a nivel nacional e internacional, conocida por su inmensa riqueza en flora y fauna.",
    descriptionEn:
      "Reserva 1920, Cafés Especiales SPR de RL, is a Rural Production Society made up of dedicated small producers. Our cooperative is composed of 180 producers, of whom 38% are women, leaders, and owners of their production units.\n\nOur producers are distributed in nine communities in the municipalities of Ángel Albino Corzo, Capitán Luis A. Vidal, Honduras, and Montecristo de Guerrero, in the state of Chiapas, Mexico. One of the fundamental pillars of our cooperative is the care and respect for nature. We are proud to be located within the buffer zone of the Natural Reserve, the El Triunfo Biosphere Reserve, one of the most important Protected Natural Areas at the national and international levels, known for its immense richness in flora and fauna.",
    specialties: ["Herencia cafetalera", "Microlotes", "Perfiles únicos"],
  },
  nortfruit: {
    name: "Nortfruit",
    country: "Ecuador",
    flag: "🇪🇨",
    region: "Ecuador",
    since: "2023",
    image: "/nortfruit.jpg",
    description:
      "NORTFRUIT S.A es una Empresa comercializadora de frutas tropicales y exóticas ubicada en la Ciudad de Esmeraldas al norte de la República de Ecuador, la cual cuenta con una amplia experiencia en el sector de la producción, comercialización, distribución y exportación agrícola.\n\nNuestra Empresa está gerenciada por la Señora Mary Ortíz Angulo, que es una mujer con gran experiencia en el mundo asociativo y empresarial. Las personas que conformamos FRUTAS DEL NORTE, somos profesionales y Asociaciones de Productores y campesinos, que tenemos como objetivo principal: cultivar, seleccionar y exportar nuestros mejores productos, a la vez que garantizamos nuestro compromiso con la Pacha Mama, el medio ambiente, el desarrollo socio-cultural y económico tanto en los países de origen como de destino.\n\nToda nuestra actividad la realizamos bajo los más altos estándares de calidad, cumpliendo con los requisitos y la normativa de comercio de los países con los que se realizan las operaciones de importación y exportación. Contamos con una amplia cartera de frutas Tropicales, Exóticas, además de Cacao en su variedad de formatos (en grano, en pasta al 100%, 55%, 65% y 75%, nibs de cacao, cacao en polvo y manteca de cacao).",
    descriptionEs:
      "NORTFRUIT S.A es una Empresa comercializadora de frutas tropicales y exóticas ubicada en la Ciudad de Esmeraldas al norte de la República de Ecuador, la cual cuenta con una amplia experiencia en el sector de la producción, comercialización, distribución y exportación agrícola.\n\nNuestra Empresa está gerenciada por la Señora Mary Ortíz Angulo, que es una mujer con gran experiencia en el mundo asociativo y empresarial. Las personas que conformamos FRUTAS DEL NORTE, somos profesionales y Asociaciones de Productores y campesinos, que tenemos como objetivo principal: cultivar, seleccionar y exportar nuestros mejores productos, a la vez que garantizamos nuestro compromiso con la Pacha Mama, el medio ambiente, el desarrollo socio-cultural y económico tanto en los países de origen como de destino.\n\nToda nuestra actividad la realizamos bajo los más altos estándares de calidad, cumpliendo con los requisitos y la normativa de comercio de los países con los que se realizan las operaciones de importación y exportación. Contamos con una amplia cartera de frutas Tropicales, Exóticas, además de Cacao en su variedad de formatos (en grano, en pasta al 100%, 55%, 65% y 75%, nibs de cacao, cacao en polvo y manteca de cacao).",
    descriptionEn:
      "NORTFRUIT S.A is a tropical and exotic fruit trading company located in the City of Esmeraldas in the north of the Republic of Ecuador, which has extensive experience in the agricultural production, marketing, distribution and export sector.\n\nOur Company is managed by Mrs. Mary Ortíz Angulo, who is a woman with extensive experience in the associative and business world. The people participating at FRUTAS DEL NORTE are professionals and Associations of Producers and farmers, whose main goal is to grow, select and export our best products, while guaranteeing our commitment to Pacha Mama, the environment and socio-cultural and economic development in both the countries of origin and destination.\n\nAll our activity is carried out under the highest quality standards, complying with the requirements and trade regulations of the countries with which import and export operations are carried out. We have a wide portfolio of Tropical and Exotic fruits, as well as Cocoa in its variety of formats (beans, 100%, 55%, 65% and 75% paste, cocoa nibs, cocoa powder and cocoa butter).",
    specialties: ["Café ecuatoriano", "Tierras altas", "Exportación"],
  },
  agros: {
    name: "Agros",
    country: "Perú",
    flag: "🇵🇪",
    region: "Perú",
    since: "2023",
    image: "/agros.jpg",
    description:
      "Somos una empresa fundada hace tres años (2020) por Robinson López y Hugo Piñarreta, nietos de pequeños agricultores de arroz en la zona norte de Perú, que tuvimos la oportunidad de estudiar, viajar y entender que la economía se digitalizó incluso antes de la pandemia COVID-19, y que desafortunadamente las zonas rurales, principalmente agrícolas, hoy viven en exclusión digital y, por tanto, económica y financiera.\n\nPor ello decidimos crear una billetera blockchain que fuera operada por voz, a través de una llamada telefónica (que cuenta con cobertura del 90% en zonas rurales en latinoamérica, en comparación al 15% de cobertura de la conectividad 3G) y hacerlo posible mediante tecnología IVR y biometría de voz. Esto nos ha permitido crear la primera identidad digital auto soberana en blockchain para zonas rurales y permitir digitalizar a más de 20 cooperativas agrícolas y más de 4 mil agricultores rurales, generando información vital y confiable para procesos de certificación, conexión con compradores y restaurantes, y esperamos que ahora además con oportunidades de financiamiento gracias a EthicHub.",
    descriptionEs:
      "Somos una empresa fundada hace tres años (2020) por Robinson López y Hugo Piñarreta, nietos de pequeños agricultores de arroz en la zona norte de Perú, que tuvimos la oportunidad de estudiar, viajar y entender que la economía se digitalizó incluso antes de la pandemia COVID-19, y que desafortunadamente las zonas rurales, principalmente agrícolas, hoy viven en exclusión digital y, por tanto, económica y financiera.\n\nPor ello decidimos crear una billetera blockchain que fuera operada por voz, a través de una llamada telefónica (que cuenta con cobertura del 90% en zonas rurales en latinoamérica, en comparación al 15% de cobertura de la conectividad 3G) y hacerlo posible mediante tecnología IVR y biometría de voz. Esto nos ha permitido crear la primera identidad digital auto soberana en blockchain para zonas rurales y permitir digitalizar a más de 20 cooperativas agrícolas y más de 4 mil agricultores rurales, generando información vital y confiable para procesos de certificación, conexión con compradores y restaurantes, y esperamos que ahora además con oportunidades de financiamiento gracias a EthicHub.",
    descriptionEn:
      "We are a company founded three years ago (2020) by Robinson López and Hugo Piñarreta, grandchildren of small rice farmers in the north of Peru, who had the opportunity to study, travel and understand that the economy was digitized even before the pandemic COVID-19, and that unfortunately rural areas, mainly agricultural, today live in digital and, therefore, economic and financial exclusion.\n\nFor this reason, we decided to create a blockchain wallet that was operated by voice, through a telephone call (which has 90% coverage in rural areas in Latin America, compared to 15% coverage of 3G connectivity) and make it possible through technology. IVR and voice biometrics. This has allowed us to create the first self-sovereign digital identity on blockchain for rural areas and allow more than 20 agricultural cooperatives and more than 4,000 rural farmers to digitize, generating vital and reliable information for certification processes, connection with buyers and restaurants, and We hope that now also with financing opportunities thanks to EthicHub.",
    specialties: ["Café andino", "Cooperativas", "Desarrollo rural"],
  },
  ceres: {
    name: "Ceres",
    country: "Colombia",
    flag: "🇨🇴",
    region: "Eje Cafetero, Colombia",
    since: "2025",
    image: "/ceres.jpg",
    description:
      "Ceres nace de la convicción de que el café colombiano de pequeños productores merece llegar al mundo con dignidad y a precio justo. Operamos en el corazón del Eje Cafetero, una de las regiones cafeteras más reconocidas del planeta, declarada Patrimonio de la Humanidad por la UNESCO.\n\nTrabajamos de la mano con más de 80 familias caficultoras distribuidas en los departamentos de Caldas, Quindío y Risaralda, acompañándolas en cada etapa del proceso: desde la asistencia técnica en finca hasta la preparación del café para exportación. Nuestro enfoque se centra en fortalecer las capacidades productivas de los agricultores, promover prácticas de cultivo sostenibles y garantizar la trazabilidad completa del grano.\n\nGracias a la alianza con EthicHub, hemos logrado ofrecer a nuestros productores acceso a financiamiento oportuno para las temporadas de cosecha, eliminando la dependencia de intermediarios que históricamente han capturado gran parte del valor generado por el trabajo de las familias campesinas. Creemos firmemente que la tecnología blockchain y las finanzas descentralizadas son herramientas poderosas para construir cadenas de valor más equitativas en el sector agrícola.",
    descriptionEs:
      "Ceres nace de la convicción de que el café colombiano de pequeños productores merece llegar al mundo con dignidad y a precio justo. Operamos en el corazón del Eje Cafetero, una de las regiones cafeteras más reconocidas del planeta, declarada Patrimonio de la Humanidad por la UNESCO.\n\nTrabajamos de la mano con más de 80 familias caficultoras distribuidas en los departamentos de Caldas, Quindío y Risaralda, acompañándolas en cada etapa del proceso: desde la asistencia técnica en finca hasta la preparación del café para exportación. Nuestro enfoque se centra en fortalecer las capacidades productivas de los agricultores, promover prácticas de cultivo sostenibles y garantizar la trazabilidad completa del grano.\n\nGracias a la alianza con EthicHub, hemos logrado ofrecer a nuestros productores acceso a financiamiento oportuno para las temporadas de cosecha, eliminando la dependencia de intermediarios que históricamente han capturado gran parte del valor generado por el trabajo de las familias campesinas. Creemos firmemente que la tecnología blockchain y las finanzas descentralizadas son herramientas poderosas para construir cadenas de valor más equitativas en el sector agrícola.",
    descriptionEn:
      "Ceres was born from the conviction that Colombian coffee from small producers deserves to reach the world with dignity and at a fair price. We operate in the heart of the Eje Cafetero (Coffee Axis), one of the most renowned coffee regions on the planet, declared a UNESCO World Heritage Site.\n\nWe work hand in hand with more than 80 coffee-growing families distributed across the departments of Caldas, Quindío, and Risaralda, accompanying them at every stage of the process: from on-farm technical assistance to preparing coffee for export. Our approach focuses on strengthening farmers' productive capacities, promoting sustainable farming practices, and ensuring complete traceability of the beans.\n\nThanks to our partnership with EthicHub, we have been able to offer our producers access to timely financing for harvest seasons, eliminating dependence on intermediaries who have historically captured much of the value generated by the work of farming families. We firmly believe that blockchain technology and decentralized finance are powerful tools for building more equitable value chains in the agricultural sector.",
    specialties: [
      "Café de origen",
      "Trazabilidad completa",
      "Agricultura sostenible",
    ],
  },
  "sierra-azul": {
    name: "Sierra Azul",
    country: "México",
    flag: "🇲🇽",
    region: "Oaxaca",
    since: "2025",
    image: "/sierra.jpg",
    description:
      "Sierra Azul es una organización originadora que trabaja con pequeños productores de café en las montañas de la Sierra Norte de Oaxaca, una de las regiones con mayor biodiversidad de México. Nuestra labor se centra en comunidades indígenas zapotecas y mixes que han cultivado café de sombra durante generaciones, preservando los bosques mesófilos de montaña que rodean sus parcelas.\n\nAcompañamos a más de 60 familias productoras en el mejoramiento de sus procesos de cosecha, beneficio húmedo y secado, buscando siempre elevar la calidad de taza sin comprometer las prácticas tradicionales que hacen único al café de esta región. Las parcelas se encuentran entre los 1,200 y 1,800 metros sobre el nivel del mar, donde las condiciones de altitud, humedad y suelos volcánicos producen un café con perfiles complejos de acidez brillante, notas frutales y cuerpo sedoso.\n\nA través de EthicHub, Sierra Azul facilita el acceso a crédito justo para los productores durante los meses previos a la cosecha, un periodo crítico en el que tradicionalmente se ven obligados a vender su café a precios muy por debajo del mercado. Nuestro compromiso es con la soberanía económica de las comunidades cafetaleras, el comercio transparente y la conservación del patrimonio biocultural de la Sierra Norte oaxaqueña.",
    descriptionEs:
      "Sierra Azul es una organización originadora que trabaja con pequeños productores de café en las montañas de la Sierra Norte de Oaxaca, una de las regiones con mayor biodiversidad de México. Nuestra labor se centra en comunidades indígenas zapotecas y mixes que han cultivado café de sombra durante generaciones, preservando los bosques mesófilos de montaña que rodean sus parcelas.\n\nAcompañamos a más de 60 familias productoras en el mejoramiento de sus procesos de cosecha, beneficio húmedo y secado, buscando siempre elevar la calidad de taza sin comprometer las prácticas tradicionales que hacen único al café de esta región. Las parcelas se encuentran entre los 1,200 y 1,800 metros sobre el nivel del mar, donde las condiciones de altitud, humedad y suelos volcánicos producen un café con perfiles complejos de acidez brillante, notas frutales y cuerpo sedoso.\n\nA través de EthicHub, Sierra Azul facilita el acceso a crédito justo para los productores durante los meses previos a la cosecha, un periodo crítico en el que tradicionalmente se ven obligados a vender su café a precios muy por debajo del mercado. Nuestro compromiso es con la soberanía económica de las comunidades cafetaleras, el comercio transparente y la conservación del patrimonio biocultural de la Sierra Norte oaxaqueña.",
    descriptionEn:
      "Sierra Azul is an originator organization that works with small coffee producers in the mountains of the Sierra Norte of Oaxaca, one of the most biodiverse regions in Mexico. Our work focuses on Zapotec and Mixe indigenous communities that have cultivated shade-grown coffee for generations, preserving the cloud forests that surround their plots.\n\nWe accompany more than 60 producer families in improving their harvesting, wet milling, and drying processes, always seeking to elevate cup quality without compromising the traditional practices that make this region's coffee unique. The plots are located between 1,200 and 1,800 meters above sea level, where conditions of altitude, humidity, and volcanic soils produce coffee with complex profiles of bright acidity, fruity notes, and a silky body.\n\nThrough EthicHub, Sierra Azul facilitates access to fair credit for producers during the months leading up to harvest, a critical period in which they have traditionally been forced to sell their coffee at prices far below market value. Our commitment is to the economic sovereignty of coffee-growing communities, transparent trade, and the conservation of the biocultural heritage of the Oaxacan Sierra Norte.",
    specialties: [
      "Café de sombra",
      "Comunidades indígenas",
      "Conservación ambiental",
    ],
  },
  "productos-agroalimentarios": {
    name: "Productos Agroalimentarios",
    country: "México",
    flag: "🇲🇽",
    region: "México",
    since: "2024",
    image: "/prodagroal.jpg",
    description:
      "Conforme se avanza y evoluciona en el proceso de desarrollo de las comunidades, los proyectos productivos alcanzan mayores niveles de factibilidad y la intención y demanda, por parte de la población, se acentúa. En este sentido, en el año 2013, en el Centro de Operación Sierra Zongolica, nos encontramos en la situación y posibilidad de impulsar el primer proyecto productivo de largo alcance, y, en este caso, el producto a trabajar fue el café.\n\nLa implementación de este proyecto permitió aprender y establecer los elementos que han de servir de base para la mayor parte de los elementos, que se deberán considerar en el impulso a actividades productivas en comunidades rurales bajo el paraguas del Programa de Desarrollo Comunitario Sostenible. Desde la operación de Fondo para la Paz IAP (FPP), actividades como levantamiento de información, generación de diagnósticos, capacitación, equipamiento, acompañamiento general y otras, están alineadas con el objeto social de la organización. Sin embargo, en temas de comercialización, si bien la ley permite que FPP obtenga recursos por acciones de comercialización, dichos recursos no pueden exceder el 10% de los ingresos totales.\n\nPara reforzar el conocimiento y determinación con respecto a este tema, durante doce meses se hizo una revisión con diferentes actores legales y, en general, coincidieron en recomendar que, en el marco de los proyectos productivos, FPP AIP tuviera una alternativa para llevar a cabo las actividades necesarias para impulsar proyectos productivos generadores de ingreso, para la mejora de condiciones de vida de las familias.\n\nLo anterior, aunado a la visión de que la operación y alcance de los proyectos productivos generadores de ingresos crecerían en el mediano y largo plazo, nos llevó a la determinación de generar una empresa social con la que FPP IAP que pudiera asegurar el acompañamiento a los diversos proyectos productivos que se impulsarán en las diferentes regiones de trabajo.\n\nEn la búsqueda de la figura más adecuada para la empresa social, se pudo verificar que, al menos para el momento de trabajo, en México no existía la figura de empresa social como existe en otros países. En función a lo anterior, se realizó el análisis correspondiente, contando con la asesoría de diferentes especialistas en los ámbitos legal, contable y fiscal y, de acuerdo a las recomendaciones, se constituyó la empresa social Productos Agroalimentarios FPP SAPI de CV.\n\nActualmente el 99,9% de las acciones de la empresa son propiedad de Fondo para la Paz IAP y solo 2 acciones de 250,000 están a cargo de la Presidencia y la Secretaría del Patronato de Fondo para la Paz.",
    descriptionEs:
      "Conforme se avanza y evoluciona en el proceso de desarrollo de las comunidades, los proyectos productivos alcanzan mayores niveles de factibilidad y la intención y demanda, por parte de la población, se acentúa. En este sentido, en el año 2013, en el Centro de Operación Sierra Zongolica, nos encontramos en la situación y posibilidad de impulsar el primer proyecto productivo de largo alcance, y, en este caso, el producto a trabajar fue el café.\n\nLa implementación de este proyecto permitió aprender y establecer los elementos que han de servir de base para la mayor parte de los elementos, que se deberán considerar en el impulso a actividades productivas en comunidades rurales bajo el paraguas del Programa de Desarrollo Comunitario Sostenible. Desde la operación de Fondo para la Paz IAP (FPP), actividades como levantamiento de información, generación de diagnósticos, capacitación, equipamiento, acompañamiento general y otras, están alineadas con el objeto social de la organización. Sin embargo, en temas de comercialización, si bien la ley permite que FPP obtenga recursos por acciones de comercialización, dichos recursos no pueden exceder el 10% de los ingresos totales.\n\nPara reforzar el conocimiento y determinación con respecto a este tema, durante doce meses se hizo una revisión con diferentes actores legales y, en general, coincidieron en recomendar que, en el marco de los proyectos productivos, FPP AIP tuviera una alternativa para llevar a cabo las actividades necesarias para impulsar proyectos productivos generadores de ingreso, para la mejora de condiciones de vida de las familias.\n\nLo anterior, aunado a la visión de que la operación y alcance de los proyectos productivos generadores de ingresos crecerían en el mediano y largo plazo, nos llevó a la determinación de generar una empresa social con la que FPP IAP que pudiera asegurar el acompañamiento a los diversos proyectos productivos que se impulsarán en las diferentes regiones de trabajo.\n\nEn la búsqueda de la figura más adecuada para la empresa social, se pudo verificar que, al menos para el momento de trabajo, en México no existía la figura de empresa social como existe en otros países. En función a lo anterior, se realizó el análisis correspondiente, contando con la asesoría de diferentes especialistas en los ámbitos legal, contable y fiscal y, de acuerdo a las recomendaciones, se constituyó la empresa social Productos Agroalimentarios FPP SAPI de CV.\n\nActualmente el 99,9% de las acciones de la empresa son propiedad de Fondo para la Paz IAP y solo 2 acciones de 250,000 están a cargo de la Presidencia y la Secretaría del Patronato de Fondo para la Paz.",
    descriptionEn:
      "Coffee from the Sierra Zongolica, in the state of Veracruz, Mexico, is recognized for its exceptional quality and distinctive flavor. This mountainous region, located more than 1,000 meters above sea level, offers an ideal microclimate for coffee cultivation, with cool temperatures and mineral-rich soils. Zongolica coffee is mostly organic, grown by indigenous communities using traditional and sustainable methods, without the use of pesticides or chemical fertilizers.\n\nZongolica coffee beans are characterized by their smooth and balanced flavor, with notes of chocolate, fruits and bright acidity, making it an appreciated option both locally and internationally. Furthermore, coffee production in this region has a significant socio-economic impact, providing a vital source of income for local families and promoting the conservation of the natural environment.\n\nDespite economic and social challenges, Zongolica farmers are committed to improving their living conditions and preserving their cultural traditions. Many of them participate in cooperatives and associations that promote fair trade and the direct sale of their products, which allows them to obtain better prices and market conditions.",
    specialties: ["Café mexicano", "Financiamiento agrícola", "Exportación"],
  },
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    Object.keys(originadores).map((slug) => ({ locale, slug })),
  );
}

interface FarmerPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: FarmerPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const originador = originadores[slug];

  if (!originador) {
    return {
      title: "Originator Not Found - EthicHub",
    };
  }

  const description =
    locale === "en"
      ? originador.descriptionEn ||
        originador.description ||
        originador.descriptionEs ||
        ""
      : originador.descriptionEs ||
        originador.description ||
        originador.descriptionEn ||
        "";

  // Truncate description for meta tag (150-160 chars ideal)
  const metaDescription = description.split("\n")[0].substring(0, 160);

  const canonicalUrl = `${siteUrl}/${locale}/farmers/${slug}`;

  return {
    title: `${originador.name} - EthicHub`,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: `${siteUrl}/es/farmers/${slug}`,
        en: `${siteUrl}/en/farmers/${slug}`,
      },
    },
    openGraph: {
      title: `${originador.name} - EthicHub`,
      description: metaDescription,
      url: canonicalUrl,
      siteName: "EthicHub",
      type: "profile",
      locale: locale === "es" ? "es_ES" : "en_US",
      images: [
        {
          url: `${siteUrl}${originador.image}`,
          width: 800,
          height: 600,
          alt: originador.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${originador.name} - EthicHub`,
      description: metaDescription,
      images: [`${siteUrl}${originador.image}`],
    },
  };
}

export default async function OriginadorPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("farmers");

  const originador = originadores[slug];

  if (!originador) {
    notFound();
  }

  const description =
    locale === "en"
      ? originador.descriptionEn ||
        originador.description ||
        originador.descriptionEs ||
        ""
      : originador.descriptionEs ||
        originador.description ||
        originador.descriptionEn ||
        "";

  return (
    <>
      <FarmerSchema
        name={originador.name}
        description={description}
        url={`${siteUrl}/${locale}/farmers/${slug}`}
        image={originador.image}
        country={originador.country}
        region={originador.region}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:py-24">
          <Link
            href={`/${locale}/farmers`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("detail.back")}
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={originador.image}
                alt={originador.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="text-2xl">{originador.flag}</span>
                <span className="text-white font-medium">
                  {originador.country}
                </span>
              </div>
            </div>

            {/* Content */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {originador.name}
              </h1>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-highlight" />
                  <span>{originador.region}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4 text-highlight" />
                  <span>
                    {t("detail.originatorSince")} {originador.since}
                  </span>
                </div>
              </div>

              <ReadMore
                text={
                  locale === "en"
                    ? originador.descriptionEn ||
                      originador.description ||
                      originador.descriptionEs ||
                      ""
                    : originador.descriptionEs ||
                      originador.description ||
                      originador.descriptionEn ||
                      ""
                }
                moreLabel={locale === "en" ? "Read more" : "Ver más"}
                lessLabel={locale === "en" ? "Read less" : "Ver menos"}
                className="mb-8"
              />

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                  {t("detail.specialties")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {originador.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-highlight/15 text-primary text-sm font-medium"
                    >
                      <Coffee className="h-3.5 w-3.5" />
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Button size="lg" className="gap-2 px-8" asChild>
                  <Link
                    href="https://app.ethichub.com/staking"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("detail.endorseOriginator")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
