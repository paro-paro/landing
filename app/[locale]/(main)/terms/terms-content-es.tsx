import Link from "next/link"

export function TermsContentEs({ locale }: { locale: string }) {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      {/* Glosario */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Glosario</h2>
        <p className="text-muted-foreground">
          Usuario: Persona física o jurídica que aporta fondos a la Plataforma EthicHub a cambio de la contraprestación detallada en estos términos y condiciones (&quot;Términos y Condiciones&quot;).
        </p>
      </section>

      {/* Alcance */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Alcance</h2>
        <p className="text-muted-foreground">
          Estos Términos y Condiciones establecen los términos que rigen el uso del sitio web: https://ethichub.com y sus subdominios (&quot;Plataforma EthicHub&quot; o &quot;Plataforma&quot;). Al utilizar la Plataforma EthicHub, usted indica su aceptación de estos Términos y Condiciones.
        </p>
      </section>

      {/* Restricción */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Restricción</h2>
        <p className="text-muted-foreground">
          Debido a las restricciones de cada país, la contratación de los servicios de la Plataforma está prohibida para ciudadanos, residentes y/o residentes fiscales y personas ubicadas en Canadá, China o Estados Unidos de América (&quot;EE. UU.&quot;), así como en Puerto Rico, las Islas Vírgenes de EE. UU. y cualquier otro territorio de EE. UU. o de cualquier otra jurisdicción donde la contratación de servicios mediante monedas virtuales sea ilegal. No podrán contratar servicios los representantes y personas físicas que actúen en nombre de personas jurídicas registradas en las jurisdicciones y territorios mencionados, o en cualquier otra jurisdicción donde esté prohibida la compra de monedas virtuales.
        </p>
      </section>

      {/* Riesgos */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Riesgos</h2>
        <p className="text-muted-foreground mb-4">
          Usted reconoce y acepta que la contratación de servicios de préstamos colaborativos a través de la tecnología blockchain introducida por la plataforma Ethereum utilizada por EthicHub conlleva riesgos financieros, regulatorios y reputacionales significativos, incluidos, entre otros, los establecidos en el Anexo Único de estos Términos y Condiciones.
        </p>
        <p className="text-muted-foreground">
          Al contratar el servicio en la Plataforma EthicHub y aceptar estos Términos y Condiciones, usted reconoce, acepta y asume expresamente los riesgos mencionados, así como los términos del préstamo.
        </p>
      </section>

      {/* Objeto y aceptación */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Objeto y aceptación de las condiciones generales</h2>
        <p className="text-muted-foreground mb-4">
          El objetivo de estos Términos y Condiciones es la contratación de un servicio de préstamo colaborativo que será accesible una vez adquirido el estatus de Usuario. Para adquirir el estatus de Usuario, es necesario ser mayor de edad, tener plena capacidad para contratar y aceptar estos Términos y Condiciones.
        </p>
        <p className="text-muted-foreground mb-4">
          Es necesario registrarse en el sitio web para convertirse en Usuario. La adquisición del estatus de Usuario implica la lectura previa y aceptación expresa de estos Términos y Condiciones, así como del Aviso Legal y la Política de Privacidad de la Plataforma EthicHub.
        </p>
        <p className="text-muted-foreground mb-4">
          El Usuario podrá acceder a los servicios ofrecidos en la Plataforma EthicHub:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
          <li>a) Utilizando un correo electrónico, en cuyo caso, tras aceptar los Términos y Condiciones, se enlazará de manera automática e inmediata una wallet mediante la tecnología de Magic.link, por lo que EthicHub nunca será custodio de las claves privadas.</li>
          <li>b) Conectando su wallet, que debe ser compatible con la red Ethereum.</li>
        </ul>
        <p className="text-muted-foreground mb-4">
          El Usuario será responsable del mantenimiento y confidencialidad de las claves privadas de su wallet y/o acceso a su correo electrónico en caso de utilizarlo como forma de registro. En consecuencia, EthicHub podrá presumir que el uso del servicio está siendo realizado por el propio Usuario registrado, quien se obliga a informar a nuestro equipo de soporte en caso de notar movimientos fraudulentos en su cuenta o tener conocimiento de que sus claves han sido comprometidas.
        </p>
        <p className="text-muted-foreground mb-4">
          EthicHub podrá bloquear el acceso a la Plataforma cuando lo considere necesario por motivos de seguridad, hasta que se confirme la total restauración del servicio.
        </p>
        <p className="text-muted-foreground">
          EthicHub adoptará las medidas organizativas y técnicas en sus equipos informáticos destinadas a asegurar el uso correcto del servicio por parte de los Usuarios y a prevenir el acceso no autorizado a la Plataforma.
        </p>
      </section>

      {/* Contenido de los servicios */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Contenido de los servicios</h2>
        <p className="text-muted-foreground mb-4">
          Los servicios ofrecidos por la Plataforma de EthicHub consisten en la conexión de prestamistas y prestatarios a través de contratos inteligentes utilizando la tecnología de la Plataforma Ethereum y Blockchains compatibles. Para ello EthicHub, a través de sus Auditores, seleccionará un Prestatario que cuente con un proyecto agrícola viable, capaz de devolver el préstamo realizado en la plataforma de EthicHub con el abono de intereses establecido.
        </p>
        <p className="text-muted-foreground mb-4">
          El prestatario, después de haber sido aprobado su proyecto en el foro de EthicHub, y tras la aprobación del auditor correspondiente, recibirá una línea de crédito con el plazo e intereses establecidos después de un proceso de aval o financiamiento del colateral colectivo del prestatario. Esto implica que el propio Prestatario, así como el Auditor, deben ser los primeros en depositar una cantidad de Ethix prefijada en el smart contract correspondiente, para que la comunidad de usuarios proceda a rellenar el aval hasta alcanzar el objetivo del mismo prestando sus Ethix, que quedarán expuestos a ser liquidados en caso de impago de la línea de crédito del Prestatario, a cambio de la participación en la distribución de un paquete de Ethix previamente aprobados por la comunidad cuando el Prestatario presentó su proyecto en el mismo. En caso de impago de la línea de crédito se perderán todos los Ethix.
        </p>
        <p className="text-muted-foreground mb-4">
          Los prestamistas, o aquellos usuarios interesados en el proyecto, podrán contratar el servicio de préstamo, aportando al contrato inteligente seleccionado, la cantidad de recursos en moneda virtual correspondiente que estimen conveniente con el límite prefijado por el contrato inteligente. No obstante lo anterior, las aportaciones realizadas con tarjeta de crédito o débito sí tienen como límite un importe máximo de mil euros (1.000 €). El inversionista elige el plazo y el interés de su inversión, y acepta que al final de la misma, en el supuesto de no haber liquidez a vencimiento en la bolsa de liquidez que alimenta las líneas de crédito, recibirá los Ethix que se le ofrecen como colateral del préstamo con un ratio prefijado y hasta que se agote la reserva de compensación.
        </p>
        <p className="text-muted-foreground mb-4">
          La opción de aval general supone una alternativa más diversificada y de menos riesgo que los avales colectivos ya que no se está expuesto a un prestatario en particular y los Ethix solo se liquidan en caso de que la reserva de compensación agote sus reservas.
        </p>
        <p className="text-muted-foreground mb-4">
          El funcionamiento de la plataforma está restringido al uso de Ethix para el aval, y una determinada moneda estable para el préstamo, por lo que los prestamistas deberán disponer previamente de los Ethix o las monedas estables correspondientes en su wallet o monedero vinculado a la cuenta de usuario de la plataforma EthicHub.
        </p>
        <p className="text-muted-foreground mb-4">
          Con objeto de facilitar el préstamo, en la plataforma EthicHub se puede participar con tarjeta de crédito/débito. En este caso, el usuario elegirá el importe, accederá a la pasarela de pago, aceptará la aportación del importe deseado y un script que recibe la confirmación de la pasarela de pago aportará al smart contract, a favor del wallet del usuario, la cantidad de monedas estables correspondientes al tipo de cambio en ese momento que marque la plataforma Coinmarketcap.
        </p>
        <p className="text-muted-foreground mb-4">
          La realización de transacciones en la red distribuida de Ethereum y similares requieren el pago de pequeñas cantidades de Ethers (denominadas &quot;gas&quot;), que permiten financiar el funcionamiento de dicha blockchain.
        </p>
        <p className="text-muted-foreground mb-4">
          Los usuarios aceptan que su aportación de monedas virtuales a cualquiera de los proyectos disponibles implica la aceptación de los términos y condiciones sobre los cuales se desarrollará el mismo.
        </p>
        <p className="text-muted-foreground mb-4">
          El usuario deberá tener registrado un email para comunicaciones y haber hecho el proceso de identificación en caso de prestar monedas estables.
        </p>
        <p className="text-muted-foreground mb-4">
          Una vez realizada la inversión, el prestamista recibirá un correo electrónico en la dirección de e-mail que haya aportado.
        </p>
        <p className="text-muted-foreground mb-4">
          El Auditor, en representación de todos los prestamistas o usuarios, verificará los términos y condiciones en los que se desarrollará el proyecto y el préstamo colaborativo, validando el periodo de tiempo establecido, la cantidad de monedas virtuales y su importe económico equivalente tanto en euros como en la moneda propia del país de origen del proyecto, y liberará los recursos económicos al Prestatario.
        </p>
        <p className="text-muted-foreground mb-4">
          El usuario acepta que el exceso de liquidez no requerido por líneas de crédito será invertido en protocolos DeFi de bajo riesgo como Aave, Uniswap, Curve, Ethena, etc., para que se pueda mantener la rentabilidad prometida de forma sostenible.
        </p>
        <p className="text-muted-foreground mb-4">
          El Prestatario reconoce que la aceptación de las aportaciones de los prestamistas constituye una obligación de pago a los mismos de principal e intereses, bajo los términos y condiciones publicados en la Plataforma de EthicHub.
        </p>
        <p className="text-muted-foreground mb-4">
          Transcurrido el periodo establecido en la línea de crédito, el Prestatario procederá a la devolución del importe del Préstamo colaborativo más los intereses, cuyo resultado será igual al número de monedas virtuales necesarias hasta alcanzar el importe económico fijado en contrato inteligente.
        </p>
        <p className="text-muted-foreground">
          El usuario entiende que EthicHub es el desarrollador de la plataforma y no el responsable del repago de los préstamos de los cuáles son responsables los prestatarios y los protocolos DeFi en función de la asignación de la liquidez hechas por EthicHub. No obstante, EthicHub puede adquirir la posición de prestatario en los casos en los que los prestatarios entregan café para ser vendido por EthicHub que amortizara las líneas de crédito tras la venta y cobro del café.
        </p>
      </section>

      {/* Requisitos para obtener la condición Usuario */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Requisitos para obtener la condición Usuario</h2>
        <p className="text-muted-foreground mb-4">
          El usuario deberá contar con un ordenador con conexión a Internet y un navegador de Internet. Así mismo, deberá disponer de un Monedero electrónico o wallet compatible con Ethereum. En caso de no tener aún ninguno, EthicHub le facilita la posibilidad de generar un Wallet con su email utilizando el protocolo de Magic.
        </p>
        <p className="text-muted-foreground mb-4">
          El usuario deberá ostentar la condición de usuario de la plataforma de EthicHub y deberá haber aceptado la Política de Privacidad y los presentes TyC.
        </p>
        <p className="text-muted-foreground">
          El uso del servicio de préstamo de monedas estables, para proveer liquidez a los Prestatarios, estará supeditado a completar el procedimiento Know Your Customer (&quot;KYC&quot;) y de Identificación Formal en materia de Anti-Blanqueo de Capitales. El usuario no podrá hacer aportaciones sin haber superado el KYC.
        </p>
      </section>

      {/* Requisitos y procedimiento */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Requisitos y procedimiento a seguir para la aportación de monedas virtuales al proyecto</h2>
        <p className="text-muted-foreground mb-4">
          Para la contratación del servicio es necesario ostentar la condición de usuario, por lo que será necesario haberse registrado e identificado previamente aportando los datos solicitados en la plataforma, una fotografía de un documento identificativo válido y una fotografía del usuario sosteniendo dicho documento, así como disponer de una wallet propia asociada a la Plataforma de EthicHub.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">El proyecto de aval colectivo para ser invertido en Ethix contendrá la siguiente información:</h3>
        <ol className="list-decimal pl-6 text-muted-foreground mb-4 space-y-1">
          <li>Moneda de inversión (Ethix).</li>
          <li>Dirección del contrato inteligente.</li>
          <li>Importe económico total expresado en Ethix.</li>
          <li>Intereses a la fecha de la inversión.</li>
          <li>Intereses que se generarán cuando se llene el contrato.</li>
          <li>Ethix de recompensas que se entregarán cada día a los inversionistas.</li>
          <li>Fecha de finalización de las recompensas.</li>
          <li>Fecha en la que se declarara impago y se liquidarán los Ethix si no ha habido repago por parte del prestatario.</li>
          <li>Información sobre los Ethix aportados por el prestatario y el auditor, cuantos se solicitan a la comunidad y cuantos están ya depositados.</li>
          <li>Además, en la web se mantendrá una página con información complementaria sobre los prestatarios y en el forum se discutirán los nuevos originadores y se informará sobre la situación en la que se encuentran los prestatarios.</li>
        </ol>

        <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">En los proyectos de aval general se ofrecerá la siguiente información:</h3>
        <ol className="list-decimal pl-6 text-muted-foreground mb-4 space-y-1">
          <li>Moneda de inversión (Ethix).</li>
          <li>Dirección del contrato inteligente.</li>
          <li>Rentabilidad actual que se está obteniendo.</li>
          <li>Ethix entregados diariamente a los inversionistas.</li>
          <li>Ethix totales depositados.</li>
          <li>Plazo de desbloqueo de la inversión.</li>
        </ol>

        <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">En los proyectos de préstamo de monedas estables se ofrecerá a los inversionistas la siguiente información:</h3>
        <ol className="list-decimal pl-6 text-muted-foreground mb-4 space-y-1">
          <li>Moneda estable en la que se realiza la inversión que el inversionista deberá elegir.</li>
          <li>Dirección del contrato inteligente en el que están invirtiendo.</li>
          <li>Préstamos totales realizados al contrato.</li>
          <li>Colateral en forma de Ethix que se asignan al inversionista.</li>
          <li>Plazo e Interés ofrecido por el contrato inteligente que el inversionista deberá seleccionar antes de realizar su inversión.</li>
        </ol>

        <p className="text-muted-foreground mb-4">
          Una vez realizada la inversión, los inversionistas podrán ver las mismas en la sección de &quot;mis inversiones&quot;, donde se desglosan por tipo de operación realizada, y donde también podrán ver los saldos habidos en sus carteras electrónicas.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Existen dos formas de aportar criptomonedas a los Proyectos:</h3>
        
        <h4 className="text-lg font-semibold text-foreground mb-2 mt-4">1. Aportación con Wallet propia:</h4>
        <p className="text-muted-foreground mb-4">
          El usuario deberá haber aportado previamente o cargado en su cuenta o wallet el saldo suficiente que le permita realizar la aportación. Para ello deberá vincular un Wallet compatible ya existente o, en su defecto, generar un wallet desde la plataforma vinculado a su correo electrónico, y cargar o enviar la criptomoneda correspondiente a este último, utilizando cualquier servicio de compraventa o casa de cambio de criptomonedas que trabaje con las monedas deseadas.
        </p>
        <p className="text-muted-foreground mb-4">
          Si el usuario está conforme, indicará la cantidad de moneda virtual a aportar y presionará el botón habilitado para iniciar la operación.
        </p>
        <p className="text-muted-foreground mb-4">
          A continuación, se pedirá al Usuario que valide el servicio aceptando, en tal caso, todas y cada una de las condiciones de contratación, y que realice la aportación a la dirección pública del contrato inteligente que la plataforma le muestre.
        </p>
        <p className="text-muted-foreground mb-4">
          En cuanto el Usuario haya validado definitivamente la aportación a realizar al proyecto, se procederá a generar una transferencia que debe ser firmada por la clave privada de la cartera ERC-20 del usuario, produciéndose el envío de la transferencia de monedas virtuales al contrato inteligente o Blockchain.
        </p>

        <h4 className="text-lg font-semibold text-foreground mb-2 mt-4">2. Aportación con Tarjeta de Crédito:</h4>
        <p className="text-muted-foreground mb-4">
          También se podrán llevar a cabo aportaciones a través de tarjeta de crédito o débito. Las aportaciones realizadas de este modo están limitadas a un importe máximo de mil euros (1000 €). En relación con este medio, se recuerda que EthicHub no es un servicio de compraventa o intercambio de monedas virtuales. Lo que permite esta característica de la plataforma es realizar una transferencia a una cuenta corriente de la que es titular EthicHub; una vez recibida la notificación del pago, la entidad/empresa adquirirá las criptomonedas en una cantidad equivalente a la transferida en dinero FIAT al precio del momento de la recepción del monto, y los deposita en el Smart Contract en nombre y por cuenta del usuario utilizando una wallet propia controlada por un script. Por lo tanto, EthicHub actuará como un mero intermediario sin hacerse nunca custodio del dinero ya que el script que deposita automáticamente las criptomonedas a favor del usuario, lo hace en el momento de recibir la notificación de la pasarela de pago, mucho antes de la recepción efectiva de los fondos. Este servicio no forma parte del modelo de negocio de EthicHub ya que no se cobra por él, es solo una forma de facilitar el uso.
        </p>
        <p className="text-muted-foreground mb-4">
          Al &quot;reclamar&quot; las monedas virtuales, ya sea al finalizar el proyecto, ya sea por la cancelación del mismo, se almacenarán en la dirección wallet asociada al usuario, y quedan disponibles tanto para su reinversión como para su posible uso en otros proyectos retirada bancaria.
        </p>
        <p className="text-muted-foreground">
          Una vez realizada la aportación con éxito en ambos casos, se remitirá al usuario un correo electrónico confirmando la fecha de vencimiento, si previamente se ha facilitado una dirección de correo electrónico. En él también encontrará un vínculo a la página del proyecto, en la que constarán todos los datos relevantes del mismo. En el caso de los proyectos de aval con Ethix que pueden hacerse conectando el wallet exclusivamente, el email se enviará a ese wallet utilizando el protocolo de Ethermail.
        </p>
      </section>

      {/* Devolución del préstamo */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Devolución del préstamo</h2>
        <p className="text-muted-foreground mb-4">
          En el caso de los proyectos de aval o colateral colectivo, los intereses se podrán reclamar en cualquier momento, pero el principal no podrá retirarse mientras el Prestatario no haya devuelto el o los proyectos asociados. En caso de impago del Prestatario a la fecha definida, los Ethix en el colateral colectivo del mismo serán liquidados hasta satisfacer el capital y los intereses de los préstamos de monedas estables, por lo que el Usuario tiene un alto riesgo de pérdida total de su inversión.
        </p>
        <p className="text-muted-foreground mb-4">
          En el caso de los préstamos de monedas estables, el prestamista podrá solicitar su inversión con sus correspondientes intereses en cualquier momento una vez concluido el plazo mínimo de inversión que él mismo eligió. Cuando solicite sus fondos hay un periodo de desinversión en el que se debe recobrar líneas de crédito o desinvertir posiciones en DeFi. Al final del plazo de desinversión, si no hubiera liquidez suficiente, el prestamista podrá recuperar los Ethix de colateral predefinidos en el momento de realizar la inversión. Al ser el colateral una criptomoneda volátil y cuya liquidez depende de la demanda de la misma, es posible que el valor de los Ethix recibidos supere o sea inferior al valor de las monedas estables que debería haber recibido el prestamista. El objetivo del sistema de colateral colectivo es minimizar el riesgo de impago, pero es imposible eliminarlo completamente. Toda rentabilidad lleva implícita unos riesgos que el usuario debe comprender y que se analizan en gran profundidad en el Anexo Único de riesgos.
        </p>
        <p className="text-muted-foreground mb-4">
          Con el objetivo de minimizar el riesgo de impago, se han desarrollado los proyectos de exportación en los que EthicHub directa o indirectamente se hace custodio del café de los agricultores y se responsabiliza de su venta. En estos casos, los proyectos los pagará EthicHub cuando haya vendido y cobrado el café correspondiente. En caso de impago de las líneas de crédito, los Ethix del colateral colectivo correspondiente se liquidarán a favor de la reserva de compensación, ya que es ésta la que nutre de colateral a los prestamistas de monedas estables y, por tanto, es la que pierde Ethix cuando éstos se quedan Ethix en lugar de monedas estables.
        </p>
        <p className="text-muted-foreground mb-4">
          En el caso de que el préstamo haya sido pagado, para retirar las cantidades que le correspondan como resultado de los préstamos, deberá haber realizado el procedimiento de identificación en materia de anti-blanqueo de capitales (KYC). De no estar identificado, EthicHub no podrá proceder a su devolución.
        </p>
        <p className="text-muted-foreground mb-4">
          Para poder retirar los fondos del Smart Contract el usuario deberá acceder a la página de &quot;mis inversiones&quot;, pulsar en el botón de retirada de fondos, firmar con su wallet y generar la transacción que ordena al Smart Contract la retirada de fondos al wallet del usuario. Transcurrido el periodo de desinversión podrá retirar los fondos cuando lo desee.
        </p>
        <p className="text-muted-foreground">
          El usuario recibirá un correo electrónico con el recibo de la transacción generada, o un aviso si hubo algún problema con la misma.
        </p>
      </section>

      {/* Intereses generados */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Intereses generados</h2>
        <p className="text-muted-foreground mb-4">
          En los préstamos de monedas estables el usuario decide el interés en función del plazo mínimo que comprometió sus fondos. Cuando se alcance dicho plazo mínimo, se seguirán generando intereses en las mismas condiciones hasta que el usuario decida desinvertir. Durante el proceso de desinversión, que dura 5 días, ni durante el plazo que tarde luego el usuario en retirar efectivamente sus fondos, no se devengan intereses.
        </p>
        <p className="text-muted-foreground">
          En los avales colectivos o en el aval general los intereses dependen de cuántos usuarios están participando, ya que hay un número predeterminado de Ethix para remunerar a todos los inversores.
        </p>
      </section>

      {/* Obligaciones */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Obligaciones</h2>
        
        <h3 className="text-xl font-semibold text-foreground mb-3">El Usuario está obligado a:</h3>
        <ol className="list-decimal pl-6 text-muted-foreground mb-6 space-y-2">
          <li>Comunicar a la Plataforma EthicHub todos los datos necesarios para el acceso y utilización de los servicios que exijan identificación previa, que deberán ser veraces, actuales y ajustados a la realidad.</li>
          <li>Adoptar las medidas de seguridad necesarias, tanto personales como materiales, para mantener la confidencialidad de las claves privadas de su wallet y contraseña de su email, así como notificar inmediatamente a EthicHub la pérdida, extravío, sustracción, robo o acceso ilegítimo de usuario, o como su conocimiento por terceras personas de las claves privadas.</li>
          <li>Hacer un uso adecuado de los Servicios incluidos en la Plataforma EthicHub, siempre de conformidad con el ordenamiento jurídico.</li>
          <li>Abstenerse de llevar a cabo actividad alguna que dificulte o interfiera en el funcionamiento de los Servicios, incluidos en la Plataforma EthicHub.</li>
          <li>Revisar detalladamente toda la información publicada en la Plataforma de EthicHub sobre los préstamos colaborativos disponibles.</li>
          <li>Aportar las monedas virtuales que haya decidido aportar al préstamo colaborativo a través de la Plataforma EthicHub.</li>
          <li>Cumplir con sus obligaciones fiscales en su país de origen por los incrementos de patrimonio generados por el préstamo.</li>
          <li>Cumplir con las obligaciones que le competan en materia de Prevención del Blanqueo de Capitales y, en especial, a no aportar información falsa o poco fiel a la realidad durante el proceso de KYC.</li>
        </ol>

        <h3 className="text-xl font-semibold text-foreground mb-3">El Usuario será responsable de los daños y perjuicios que hubiere podido ocasionar a terceros, por los datos aportados, con carácter enumerativo y no limitativo como consecuencia de las siguientes actuaciones:</h3>
        <ol className="list-decimal pl-6 text-muted-foreground mb-6 space-y-2">
          <li>Utilización de datos no actualizados, falsos o que no se corresponden con la realidad.</li>
          <li>Utilización por parte de terceros de las claves personales del Usuario.</li>
          <li>De la inclusión en la Plataforma EthicHub de comentarios o contenidos que pudieran resultar injuriosos, obscenos, xenófobo, que constituyan apología de la violencia, o que de cualquier forma atente contra la moral, el orden público, los derechos fundamentales o resulten contrarios al ordenamiento jurídico, vigente.</li>
        </ol>

        <h3 className="text-xl font-semibold text-foreground mb-3">EthicHub queda obligado a:</h3>
        <ol className="list-decimal pl-6 text-muted-foreground mb-6 space-y-2">
          <li>Suministrar el acceso al servicio, así como garantizar su confidencialidad e integridad.</li>
          <li>Atender con la mayor diligencia posible todas las consultas que pueda ordenar el Usuario derivadas de la utilización de los servicios incluidos en la Plataforma EthicHub.</li>
          <li>Manejar los datos de sus inversores con absoluta confidencialidad, comprometiéndose a no divulgar los datos de sus inversores ni compartirlos sin su consentimiento, salvo por requerimiento de organismos públicos competentes.</li>
          <li>Defender el cumplimiento de los Términos de los préstamos.</li>
        </ol>

        <h3 className="text-xl font-semibold text-foreground mb-3">Al aceptar los presentes TyC el prestamista y el prestatario expresamente aceptan y reconocen lo siguiente:</h3>
        <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
          <li>Que la aportación y aceptación (respectivamente) de monedas virtuales a través de la Plataforma de EthicHub constituye para ambas partes su aceptación voluntaria de los términos y condiciones, sobre los cuales se desarrollará el servicio de préstamos y que el mismo queda formalizado mediante el ofrecimiento y la aceptación a través de la plataforma.</li>
          <li>El prestatario se compromete a darle el uso descrito en el proyecto publicado en la plataforma de EthicHub al importe recibido en moneda virtual, absteniéndose incondicionalmente a destinar fondos del mismo a cualquier otro fin.</li>
          <li>El prestatario se compromete al pago del capital e intereses conforme a los términos y condiciones que se publiquen en la Plataforma de EthicHub, derivado de los convenios de préstamo que suscriban, a través de los medios dispuestos en la Plataforma.</li>
          <li>El incumplimiento por parte del prestatario dará lugar a la liquidación del colateral y traspaso de los derecho de deuda a la plataforma, que podrá exigir judicial o extrajudicialmente el pago de la obligación, sin perjuicio de la indemnización por daños y perjuicios, y abono de intereses que pudiera proceder, respondiendo el prestatario con todos sus bienes presentes y futuros, salvo que dicho incumplimiento o retraso se origine por causas de caso fortuito o fuerza mayor.</li>
        </ol>
      </section>

      {/* Limitación de responsabilidad */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Limitación de responsabilidad</h2>
        <p className="text-muted-foreground mb-4">
          EthicHub, nuestros empleados, directores, contratistas, consultores, o asesores no asumen responsabilidad alguna, presente o futura, derivada de los riesgos establecidos en el ANEXO ÚNICO y no ofrecen ninguna garantía con respecto a este TyC.
        </p>
        <p className="text-muted-foreground mb-4">
          Esta limitación no excluirá la responsabilidad por conductas dolosas o delictivas, en cuyo caso, el usuario podrá emprender las acciones legales que correspondan.
        </p>
        <p className="text-muted-foreground mb-4">
          En caso de no contar con los conocimientos necesarios para la utilización de los servicios y sistemas de Blockchain, siendo plenamente consciente de los riesgos establecidos en el ANEXO ÚNICO, asociados a la contratación de servicios de préstamos colaborativos y el uso de Blockchain, se recomienda no participar en el proceso de contratación del servicio.
        </p>
        <p className="text-muted-foreground mb-4">
          Si una disposición de estos TyC resulta ser nula, anulable, ilegal, no invocable o inaplicable en su totalidad o en parte, la validez, legalidad o aplicación de las demás disposiciones de los términos no será afectada o alterada de ninguna manera. Las otras estipulaciones de los TyC siguen vigentes y conservan su efecto completo.
        </p>
        <p className="text-muted-foreground mb-4">
          EthicHub no se hace responsable sobre las cargas fiscales impositivas que pudieran derivar del uso de los Servicios tanto para ninguno de los Usuarios.
        </p>
        <p className="text-muted-foreground">
          EthicHub tampoco se hace responsable de los posibles riesgos a los que se expongan los usuarios que interactúen con los Smart Contracts directamente desde fuera de la Plataforma; EthicHub ha sido diseñado para ofrecer las mayores garantías de seguridad posibles, pero no puede responder por hechos ocurridos fuera de su Plataforma.
        </p>
      </section>

      {/* Política de Privacidad */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Política de Privacidad</h2>
        <p className="text-muted-foreground">
          Para más información sobre nuestra política de protección de datos y privacidad consulta aquí la{" "}
          <Link href={`/${locale}/privacy`} className="text-primary hover:underline">
            Política de Privacidad
          </Link>.
        </p>
      </section>

      {/* Ley aplicable y jurisdicción */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Ley aplicable y jurisdicción competente</h2>
        <p className="text-muted-foreground mb-4">
          Estos TYC y cualesquiera relaciones resultantes de los mismos son reguladas por la legislación española.
        </p>
        <p className="text-muted-foreground">
          Las partes intentarán resolver de buena fe cualquier controversia o reclamación que surja de o en relación con estos TyC mediante negociaciones entre ellas, mediante un procedimiento de resolución alternativa de disputas acordado o falta de acuerdo la disputa deberá ser sometida exclusivamente a la jurisdicción de los juzgados y tribunales de Madrid (España).
        </p>
      </section>

      {/* ANEXO ÚNICO */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">ANEXO ÚNICO - FACTORES DE RIESGO</h2>
        <p className="text-muted-foreground mb-6 uppercase font-semibold">
          EL RIESGO MÁS CLARO AL USAR LA PLATAFORMA ETHICHUB ES EL RETORNO DE LOS FONDOS CON PERDIDAS, NO PUDIÉNDOSE HACER RESPONSABLE DE DICHA PÉRDIDA ETHICHUB NI NADIE VINCULADO CON ETHICHUB, YA QUE EL COSTE DE ASUMIR ESTE RIESGO EN SU TOTALIDAD HARÍA INVIABLE EL PROYECTO. MIEMBROS DEL EQUIPO DE ETHICHUB HAN DESARROLLADO EXPERIENCIA EN LA CONCESIÓN DE CRÉDITOS DE ESTAS CARACTERÍSTICAS, PERO NO ES POSIBLE ELIMINAR COMPLETAMENTE EL RIESGO DE IMPAGO QUE PUEDE TENER ORIGEN EN MÚLTIPLES CAUSAS QUE A CONTINUACIÓN DESCRIBIMOS CONJUNTAMENTE CON OTROS MUCHOS RIESGOS QUE AFECTAN A UNA PLATAFORMA CON LAS CARACTERÍSTICAS DE ETHICHUB.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Riesgo de deficiencias de software</h3>
            <p className="text-muted-foreground">
              El sistema de contratos inteligentes y la plataforma de EthicHub se basan en el protocolo de Ethereum, cualquier mal funcionamiento, interrupción o abandono del Protocolo de Ethereum puede tener un efecto adverso sobre el servicio, el sistema de contratos inteligentes o la plataforma de EthicHub. Además, los avances en criptografía, o avances técnicos como el desarrollo de la computación cuántica podrían presentar riesgos para el servicio, el sistema de contratos inteligentes o la plataforma del EthicHub, haciendo ineficaz el mecanismo criptográfico de consenso que sustenta el protocolo de Ethereum, Gnosis, Celo o la Blockchain en que operemos en ese momento. El concepto de sistema de contratos inteligentes, la subyacente aplicación y plataforma de software está todavía en una etapa temprana del desarrollo. No hay garantía de que la prestación del servicio de préstamo colaborativo será ininterrumpida o libre de errores porque hay un riesgo inherente de que el software pudiera contener defectos, debilidades, vulnerabilidades, virus o errores causando, entre otras cosas, la pérdida completa de las contribuciones realizadas para la prestación del servicio.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Riesgo regulatorio</h3>
            <p className="text-muted-foreground">
              La tecnología Blockchain permite nuevas formas de interacción y es posible que ciertas jurisdicciones apliquen la normativa existente o introduzcan nueva normativa sobre las aplicaciones basadas en tecnología Blockchain, que pueden ser contrarias a la configuración actual sistema de contratos inteligentes y que, entre otras cosas, pueden dar lugar a modificaciones sustanciales en el sistema de Smart Contracts y / o en la Plataforma EthicHub, incluida su terminación y la pérdida de las criptomonedas aportadas por los usuarios. Además, la regulación de las actividades propuestas por la plataforma del EthicHub es incierta actualmente. No se sabe a qué marco regulatorio estarán sujetas las plataformas como la de EthicHub y las actividades asociadas a la misma, la naturaleza y las obligaciones que se impondrán a EthicHub con el fin de cumplir con dicho marco regulatorio o cuando/si EthicHub incluso podrá solicitar ser regulada, u tener éxito en la obtención de las licencias necesarias para que pueda desempeñar con arreglo a ley las actividades propuestas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Riesgo asociado con regulaciones y acciones de cumplimiento inciertas</h3>
            <p className="text-muted-foreground">
              El estado regulatorio de las monedas virtuales y la tecnología DLT (de libro contable descentralizado, Distributed Ledger Technology por sus siglas en inglés) es interpretable y dinámica en muchas jurisdicciones, por lo que resulta imposible predecir con exactitud la forma en que las autoridades reguladoras pueden aplicar la normativa vigente con respecto a esta tecnología y sus aplicaciones, incluyendo a la plataforma de EthicHub. Asimismo, resulta imposible predecir si las autoridades implementarán cambios legislativos y regulatorios que afecten a la tecnología DLT y sus aplicaciones, y el sentido de dichos cambios, incluyendo a la plataforma EthicHub y/o la BlockChain sobre la que operemos en ese momento. Las medidas regulatorias podrían tener un impacto negativo en la Plataforma EthicHub, incluyendo, solo con fines ilustrativos, la determinación de que la moneda virtual utilizada para la prestación del servicio sea un instrumento financiero regulado que requiera registro o licencia. EthicHub puede dejar de operar en una jurisdicción en el caso de que acciones regulatorias, o cambios a la ley o regulación, hagan que sea ilegal operar en dicha jurisdicción, o comercialmente indeseable para obtener la(s) aprobación(es) regulatoria(s) necesaria(s) para operar en dicha jurisdicción.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Riesgo de perder acceso a tokens debido a la pérdida de claves, error de custodia u otros errores del usuario</h3>
            <p className="text-muted-foreground">
              Solo se puede acceder a la moneda virtual utilizada para la prestación del servicio usando una wallet de Ethereum con una combinación de la información de la cuenta del contribuyente (dirección) y clave privada o en su defecto abriendo un wallet vinculado con su correo electrónico utilizando la tecnología de Magic que está integrada en la plataforma. Usted reconoce, comprende y acepta que si pierde o le roban su clave privada o contraseña, o alguien tiene acceso a su correo electrónico, la cuantía económica del total de las monedas virtuales habidas en su wallet y las aportadas más los intereses que le serán devueltos por el contrato inteligente una vez finalizado el servicio, están asociados a su wallet de Ethereum y por tanto pueden ser irrecuperables y perderse de forma permanente. Además, cualquier tercero que obtenga acceso a su wallet, podrá apropiarse indebidamente de sus monedas virtuales. Cualquier error o mal funcionamiento causado por o relacionado con la wallet o billetera digital que elija para recibir y almacenar las monedas virtuales, incluida su propio fallo al mantener o utilizar adecuadamente dicho wallet o billetera digital, también puede ocasionar la pérdida de sus monedas virtuales.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Riesgo de robo</h3>
            <p className="text-muted-foreground">
              El concepto Smart Contract System, la aplicación de software subyacente y la plataforma de software (es decir, la cadena de bloques Ethereum) pueden estar expuestos a ataques de hackers u otras personas, incluidos, entre otros, ataques de malware, ataques de denegación de servicio, ataques basados en consenso, Sybil ataques, smurfing y spoofing. Cualquiera de estos ataques exitosos podría dar como resultado el robo o pérdida de las aportaciones al préstamo colaborativo, afectando adversamente al servicio de préstamos colaborativo desarrollado por la plataforma de EthicHub. Además, debido a que la Plataforma EthicHub se basa en software de código abierto, existe el riesgo de que un tercero o miembro del equipo de EthicHub pueda introducir debilidades intencionadas o no en la infraestructura central de la Plataforma EthicHub, que podría afectar negativamente a la Plataforma EthicHub y a las monedas virtuales aportadas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Riesgo de ataques al protocolo de consenso de la Blockchain usada</h3>
            <p className="text-muted-foreground">
              La cadena de bloques utilizada para el Smart Contract System es susceptible a ataques, incluidos, entre otros, ataques de doble gasto, ataques de potencia minera mayoritaria, ataques de minería egoísta y ataques de condición rara. Cualquier ataque exitoso presenta un riesgo para el Sistema de Contratos Inteligentes, la ejecución adecuada esperada y la secuencia de las transacciones de tokens, y la ejecución adecuada esperada y la secuencia de los cálculos del contrato. Usted comprende y acepta que la red de mineros finalmente controlará las aportaciones y entregas de las monedas virtuales a través del Sistema de Contratos Inteligentes, y que la mayoría de los mineros podría acordar en cualquier momento realizar cambios, actualizaciones, modificaciones o efectuar una eliminación. o la destrucción del Sistema de Contratos Inteligentes, y que tal escenario podría llevar a que las monedas virtuales pierdan valor y / o funcionalidad intrínseca.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Riesgo de servicio de billetera incompatible</h3>
            <p className="text-muted-foreground">
              El proveedor de servicios de wallet o cartera utilizado para aportar y recibir monedas virtuales debe cumplir con el estándar de token ERC20 para que sea técnicamente compatible con el servicio de EthicHub. El hecho de no garantizar dicha conformidad puede tener como resultado que no obtendrá acceso a sus monedas virtuales.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Riesgo de abandono/falta de éxito</h3>
            <p className="text-muted-foreground">
              El servicio de préstamos colaborativos a través de contratos inteligentes y el desarrollo de la plataforma del EthicHub pueden ser abandonados por una serie de razones, incluyendo entre otras la falta de interés del público, falta de éxito comercial o perspectivas (por ejemplo, causadas por proyectos de competencia), o una evolución muy negativa en los impagos que lleven al colapso del sistema de compensación y a la pérdida de inversores en masa. En caso de no poder seguir adelante con el proyecto, es muy probable que los impagos se incrementen sustancialmente ya que una de las motivaciones de pago de las cooperativas con las que trabajamos es que cada año pueden acceder a más financiación y el café que sirve para pagar los proyectos de exportación puede ser utilizado para otros fines en un contexto de liquidación.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Riesgo de disolución del EthicHub o de la red</h3>
            <p className="text-muted-foreground">
              Es posible, que por distintas razones, incluyendo pero no limitado a, una fluctuación desfavorable en el valor de las criptomonedas (u otras monedas criptográficas y fiduciarias), disminución de la utilidad de las monedas virtuales debido a mala adopción de la plataforma de EthicHub, falta de relaciones comerciales, desafíos de la propiedad intelectual, que la Plataforma EthicHub puede ya no puede ser viable para operar y que EthicHub puede disolverse y no ser capaz de continuar el desarrollo de su Plataforma.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Riesgo de pérdidas no aseguradas</h3>
            <p className="text-muted-foreground">
              A diferencia de cuentas bancarias o cuentas en otras instituciones financieras, las monedas virtuales utilizadas para la prestación del servicio no tienen seguro a menos que obtenga específicamente un seguro privado para asegurarlos. Por lo tanto, en caso de pérdida o pérdida del valor de utilidad, no existe una aseguradora pública o un seguro privado contratado por EthicHub para ofrecerle un remedio.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Riesgos derivados de los impuestos</h3>
            <p className="text-muted-foreground">
              La descripción fiscal de las monedas virtuales es incierta. Debe buscar su propia asesoría fiscal en relación con la adquisición, el almacenamiento, la transferencia y el uso de la moneda virtual, y las consecuencias fiscales que pueden conllevar, como impuestos sobre la transferencia, impuesto sobre el valor añadido, impuestos sobre la renta y similares, gravámenes, cargas y requisitos de información fiscal.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Riesgos derivados del mercado en el que opera la plataforma EthicHub</h3>
            <p className="text-muted-foreground">
              El mercado crowdfunding, por extensión, la Plataforma EthicHub, está sujeto a una variedad de leyes y regulaciones, competencia, KYC / AML y procedimientos de debida diligencia del cliente, privacidad y protección de datos, protección al consumidor, seguridad de datos y otros. Estas leyes y regulaciones, y la interpretación o aplicación de estas leyes y regulaciones, podrían cambiar. Además, podrían promulgarse nuevas leyes o reglamentaciones que afecten a la Plataforma EthicHub, lo que podría afectar la utilidad de las monedas virtuales utilizadas en el servicio ofrecido por la Plataforma EthicHub. Además, los usuarios de la Plataforma están sujetos o pueden verse afectados negativamente por las leyes y normas específicas de la industria o los requisitos de licencia. Si alguna de estas partes no cumple con alguno de estos requisitos de licencia u otras leyes o regulaciones aplicables, o si dichas leyes y regulaciones o requisitos de licencia se vuelven más estrictos o se expanden de otra manera, podría afectar negativamente a la Plataforma EthicHub y a las monedas virtuales utilizadas en el servicio, incluida su funcionalidad para obtener o proporcionar servicios dentro de la plataforma EthicHub.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Riesgos asociados con el desarrollo y el mantenimiento de la Plataforma EthicHub</h3>
            <p className="text-muted-foreground">
              La Plataforma EthicHub aún está en desarrollo y puede experimentar cambios significativos a lo largo del tiempo. Aunque tenemos la intención de que el servicio de préstamo colaborativo en su versión beta y la Plataforma funcionen como se describe en estos TyC y su Anexo, y tenemos la intención de adoptar medidas comercialmente razonables para lograrlo, es posible que tengamos que realizar cambios en las especificaciones del servicio o de la Plataforma EthicHub por diversas razones legítimas. Además, es posible que no podamos mantener un control total y efectivo sobre cómo otros participantes utilizarán la Plataforma, qué productos o servicios se ofrecerán a través de la misma por parte de terceros. Esto podría crear el riesgo de que el servicio o la plataforma, desarrollada y mantenida, pueda no cumplir con sus expectativas en el momento de la contratación del servicio. Además, a pesar de nuestros esfuerzos de buena fe para desarrollar y participar en la plataforma EthicHub, aún es posible que la misma experimente disfunciones o no se desarrolle o mantenga adecuadamente, lo que puede tener un impacto negativo en la Plataforma EthicHub y en el servicio contratado.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Riesgo de plataformas en competencia</h3>
            <p className="text-muted-foreground">
              Es posible que se establezcan plataformas alternativas que utilicen el mismo código fuente abierto y protocolo subyacente a la plataforma EthicHub e intenten facilitar servicios que sean materialmente similares a los servicios ofrecidos por o dentro de la plataforma EthicHub. La plataforma EthicHub puede competir con estas alternativas, lo que podría tener un impacto negativo en la Plataforma EthicHub y el servicio.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Riesgo de impago por parte de los prestatarios</h3>
            <p className="text-muted-foreground">
              Son muchos los factores que pueden llevar a provocar un impago, sobre todo una mala selección de prestatarios por parte del Auditor y los riesgos debidos a la actividad agrícola de los prestatarios como pueden ser el clima o las plagas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Riesgo de un prestatario malicioso</h3>
            <p className="text-muted-foreground">
              Por muy buenos filtros que aplique EthicHub o sus socios auditores para la selección de prestatario, es imposible garantizar que siempre van a actuar de buena fe. Una actuación de mala fe por parte de los prestatarios puede llevar a un impago total de los préstamos entre otros motivos porque el proyecto haya sido falsificado.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Riesgo de tipo de cambio</h3>
            <p className="text-muted-foreground">
              Al estar los préstamos denominados en una stablecoin vinculada al dólar, si esta se devaluara significativamente el inversor podría llegar a tener pérdidas aunque el prestatario pague en tiempo y en forma el principal y los intereses del préstamo.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Riesgos imprevistos</h3>
            <p className="text-muted-foreground">
              Los tokens criptográficos son una tecnología nueva y no probada. Además de los riesgos establecidos en este ANEXO ÚNICO de estos TyC, existen otros riesgos asociados con su adquisición, almacenamiento, transferencia y uso, incluidos aquellos que EthicHub puede no ser capaz de anticipar.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
