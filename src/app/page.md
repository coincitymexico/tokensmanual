---
title: Manual Tokens city
nextjs:
  metadata:
    title: Manual de operacion Tokens city
    description: Manual de operación de la máquina dispensadora de tokens.
---

La máquina dispensadora de tokens funciona para como su nombre indica; dispensar tokens a cambio de dinero. {% .lead %}

En este manual aprenderás como funciona y a como configurar algunos parámetros que pueden ser de utilidad en la
operación del día a día.

[//]: # ({% quick-links %})

[//]: # ()

[//]: # ({% quick-link title="Installation" icon="installation" href="/" description="Step-by-step guides to setting up your system and installing the library." /%})

[//]: # ()

[//]: # ({% quick-link title="Architecture guide" icon="presets" href="/" description="Learn how the internals work and contribute." /%})

[//]: # ()

[//]: # ({% quick-link title="Plugins" icon="plugins" href="/" description="Extend the library with third-party plugins or write your own." /%})

[//]: # ()

[//]: # ({% quick-link title="API reference" icon="theming" href="/" description="Learn to easily customize and modify your app's visual design to fit your brand." /%})

[//]: # ()

[//]: # ({% /quick-links %})

Esta máquina tambien llamado kiosko de tokens, es un dispositivo que permite a los usuarios obtener tokens de forma
autónoma, sin necesidad de la intervención de un operador.

---

## Operación de la máquina/ kiosko de tokens

La compra de tokens es tan simple como estar frente a la máquina e insertar dinero en los dispositivos de cobro.

{% callout title="Información" %}
Cuando se inicie el pago con efectivo, se inhabilitará el lector de tarjetas de crédito/débito. Y este volverá a
habilitarse una vez que se haya completado la transacción con efectivo.
{% /callout %}

En la máquina se cuenta con un display que muestra información al usuario, como el precio de los tokens, el monto que se
ha insertado, los tokens que desea comprar, etc.

{% imager src="/images/002.webp" alt="Pantalla principal" caption="Pantalla principal" /%}

### Dispositivos de cobro

El kiosko de tokens cuenta con dos dispositivos de cobro, uno para efectivo y otro para tarjetas de crédito/débito.

* Efectivo:
    * Aceptador de monedas
    * Aceptador de billetes
* Lector de tarjetas de crédito/débito (Nayax)

{% callout type="warning" title="Nota" %}
La máquina acepta efectivo o tarjetas de crédito/débito (a traves del Nayax).
Exceptuando el caso donde se configure la compra fija, en cuyo caso solo se aceptará efectivo.
{% /callout %}

## Intrucciones de uso

### Efectivo

1. Inserte el dinero en el dispositivo de cobro.
2. Seleccione la cantidad de tokens que desea comprar (automaticamente al detectar efectivo se pondrá la cantidad máxima de tokens que se pueden comprar con el dinero insertado).
3. Presione el botón de "Aceptar".
4. Espere a que la máquina dispense los tokens.
5. Si la máquina no dispensa o tiene cambio para devolver, la máquina comenza a devolverlo.

### Tarjeta de crédito/débito (Nayax)

1. Seleccione la cantidad de tokens que desea comprar utilizando los botones de aumentar o disminuir.
2. Inserte la tarjeta en el lector de tarjetas.
3. Cuando el cobro se realice retire la tarjeta del lector.
3. Espere a que la máquina dispense los tokens.
4. {% imager src="/images/015.webp" alt="Pantalla principal" caption="Pantalla principal" /%}
4. Si la máquina no dispensa, la máquina comenzará a devolver el dinero pagado con la tarjeta en efectivo.
5. {% imager src="/images/016.webp" alt="Pantalla principal" caption="Pantalla principal" /%}




{% callout title="Información" %}
En caso de que no se haya dispensado el cambio, la máquina guardará el cambio para la siguiente compra.
{% /callout %}

Created by [danidoble](https://github.com/danidoble)